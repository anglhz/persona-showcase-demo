

## Plan: Ta bort NorrElektro & förbättra scroll-animationer

### 1. Ta bort NorrElektro-projektet
**Fil:** `src/components/Projects.tsx`
- Ta bort hela objektet för "NorrElektro" (rad 33-40) i `projects`-arrayen.
- Resultat: Övriga projekt-rutnätet visar nu 2 kort (Intuitive-Gaming + Hakuna Potata) istället för 3.

### 2. Mer levande scroll-animationer

Idag triggas en CSS `animate-slide-up` direkt vid sidladdning på korten. `IntersectionObserver` i `Index.tsx` lägger bara till `animate-slide-up` på `<section>`-nivå, vilket inte gör mycket eftersom korten redan animerats. Jag förbättrar detta så att element animeras *när de kommer in i viewporten* under scroll.

**Fil:** `src/index.css`
- Lägg till nya keyframes:
  - `fade-in-up` (mjukare, längre, 0.7s med ease-out)
  - `fade-in-left` / `fade-in-right` (kort glider in från sidan)
  - `scale-in` (skalar från 0.9 → 1)
- Lägg till en `.reveal` utility-klass: startar med `opacity: 0` + `translateY(40px)`, och en `.reveal.is-visible` som triggar animationen.
- Stagger-stöd via `data-delay` attribut eller inline `transition-delay`.

**Fil:** `src/pages/Index.tsx`
- Ersätt nuvarande observer med en bättre version som:
  - Observerar alla element med klass `.reveal` (inte bara sektioner).
  - Lägger till `.is-visible` när elementet syns (tröskel ~0.15).
  - "Once-only" — slutar observera efter att ha triggat.
  - Använder `rootMargin: '0px 0px -80px 0px'` för naturligare timing.

**Filer:** `Projects.tsx`, `Process.tsx`, `Testimonials.tsx`, `About.tsx`, `Contact.tsx`
- Byt ut nuvarande `animate-slide-up` (som triggas direkt) mot `reveal` på korten och rubriker.
- Behåll `animationDelay` via inline `style={{transitionDelay: ...}}` för att stagger:a kort i grid.
- Hero behåller sin nuvarande entry-animation (laddas direkt vid sidstart).

### Resultat
- NorrElektro försvinner från projektsektionen.
- Sektionsrubriker, kort, tjänster, testimonials och kontaktformulär tonar in mjukt under scrollning, ett efter ett — istället för att alla redan vara synliga vid sidladdning.

