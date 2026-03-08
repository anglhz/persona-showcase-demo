

## Replace Hero Profile Image

Copy the uploaded image to `src/assets/` and update the Hero component to use it.

### Changes

1. **Copy file:** `user-uploads://Gemini_Generated_Image_npo8rcnpo8rcnpo8.png` to `src/assets/new-hero-profile.png` (replacing existing)
2. **Update `src/components/Hero.tsx`:** Change the import from `.webp` to `.png`:
   ```ts
   import heroProfile from "@/assets/new-hero-profile.png";
   ```
3. **Update `index.html`:** Update the preload link from `.webp` to `.png`:
   ```html
   <link rel="preload" as="image" href="/src/assets/new-hero-profile.png" fetchpriority="high">
   ```

