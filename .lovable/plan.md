

## Shimmer/Shine Effect on "Fertekz IT" Logo & "Tommy"

Add a moving shine/sweep effect that travels across the gradient text from left to right, repeating on a loop.

### Approach

Use a CSS animation that moves a bright highlight across the text using `background-position`. Since both elements already use `gradient-text` (a linear-gradient clipped to text), I'll create a new `shine-text` utility that layers a bright shimmer band over the existing gradient and animates it.

### Changes

**1. `src/index.css`** — Add shimmer keyframes + utility class:

```css
@keyframes shine {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.shine-text {
  background: linear-gradient(
    90deg,
    hsl(213 94% 68%) 0%,
    hsl(200 100% 70%) 30%,
    hsl(0 0% 100%) 50%,
    hsl(200 100% 70%) 70%,
    hsl(213 94% 68%) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shine 3s linear infinite;
}
```

This replaces the gradient on the targeted elements while preserving the brand colors, with a white highlight band sweeping across every 3 seconds.

**2. `src/components/Navigation.tsx`** — Logo button: change `gradient-text` → `shine-text` (line ~57).

**3. `src/components/Hero.tsx`** — "Tommy" span: change `gradient-text animate-glow` → `shine-text animate-glow` (line ~25). Glow animation kept for added depth.

### Result

- "Fertekz IT" logo in the navbar gets a continuous shine sweeping from left to right.
- "Tommy" in the hero heading gets the same shine, layered with the existing glow pulse.
- Other `gradient-text` usage on the site (section badges, etc.) is untouched.

