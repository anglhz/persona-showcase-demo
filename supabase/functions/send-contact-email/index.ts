import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Secure CORS headers - restricted for security
const corsHeaders = {
  "Access-Control-Allow-Origin": "https://your-domain.com", // Update this to your actual domain
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "86400", // 24 hours
};

// Security headers to enhance protection
const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Content-Security-Policy": "default-src 'none'; frame-ancestors 'none';",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// HTML escape function to prevent injection attacks
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Input validation function
function validateInput(data: ContactEmailRequest): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long");
  }
  if (data.name && data.name.length > 100) {
    errors.push("Name must be less than 100 characters");
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push("Valid email address is required");
  }
  if (data.email && data.email.length > 254) {
    errors.push("Email address is too long");
  }
  
  // Subject validation
  if (!data.subject || data.subject.trim().length < 3) {
    errors.push("Subject must be at least 3 characters long");
  }
  if (data.subject && data.subject.length > 200) {
    errors.push("Subject must be less than 200 characters");
  }
  
  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long");
  }
  if (data.message && data.message.length > 5000) {
    errors.push("Message must be less than 5000 characters");
  }
  
  // Content filtering for suspicious patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i
  ];
  
  const fullContent = `${data.name} ${data.subject} ${data.message}`;
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(fullContent)) {
      errors.push("Content contains potentially malicious code");
      break;
    }
  }
  
  return { isValid: errors.length === 0, errors };
}

// Simple rate limiting storage (in production, use Redis or database)
const rateLimits = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimits.get(ip);
  
  if (!limit || now > limit.resetTime) {
    // Reset or create new limit (5 requests per 15 minutes)
    rateLimits.set(ip, { count: 1, resetTime: now + 15 * 60 * 1000 });
    return true;
  }
  
  if (limit.count >= 5) {
    return false;
  }
  
  limit.count++;
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: { ...corsHeaders, ...securityHeaders } });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for") || 
                     req.headers.get("x-real-ip") || 
                     "unknown";

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      console.warn(`Security Event - Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders, ...securityHeaders },
        }
      );
    }

    const requestData: ContactEmailRequest = await req.json();

    // Validate input
    const validation = validateInput(requestData);
    if (!validation.isValid) {
      console.warn(`Security Event - Validation failed for IP: ${clientIp}`, validation.errors);
      return new Response(
        JSON.stringify({ error: "Invalid input", details: validation.errors }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders, ...securityHeaders },
        }
      );
    }

    const { name, email, subject, message } = requestData;

    // Secure logging - don't log full content, just metadata
    console.log("Processing contact form submission:", { 
      hasName: !!name, 
      hasEmail: !!email, 
      hasSubject: !!subject,
      messageLength: message.length,
      clientIp: clientIp.substring(0, 8) + "..." // Partial IP for privacy
    });

    // Escape HTML content to prevent injection
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Send email to tommy@fertekz.com with escaped content
    const emailResponse = await resend.emails.send({
      from: "Fertekz IT <onboarding@resend.dev>",
      to: ["tommy@fertekz.com"],
      subject: `Nytt meddelande från ${safeName}: ${safeSubject}`,
      html: `
        <h2>Nytt meddelande från kontaktformuläret</h2>
        <p><strong>Namn:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Ämne:</strong> ${safeSubject}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${safeMessage}</p>
        <hr>
        <p><em>Detta meddelande skickades från Fertekz IT kontaktformulär</em></p>
      `,
    });

    console.log("Security Event - Email sent successfully to tommy@fertekz.com");

    // Don't return sensitive email response data
    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
        ...securityHeaders,
      },
    });
  } catch (error: any) {
    console.error("Security Event - Error in send-contact-email function:", error.message);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders, ...securityHeaders },
      }
    );
  }
};

serve(handler);