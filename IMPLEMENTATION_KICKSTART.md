# LUMINA SOLAR - Implementation Kickstart

## Project Overview

**Client:** Lumina Solar (Serbian firm)
**Type:** High-conversion single-page landing page + Contact page
**Language:** Serbian (sr)
**Framework:** Next.js 16 (App Router), Tailwind CSS, shadcn/ui
**Stage:** Prototype (placeholder content, replaceable later)

---

## 1. Design Token System - "Nature-Premium" Palette

### Color Palette (5 Colors Max)

| Token Role       | Color Name        | Hex       | HSL (approx)          | Usage                                              |
| ---------------- | ----------------- | --------- | --------------------- | -------------------------------------------------- |
| **Primary**      | Deep Forest Green | `#1B3022` | `144 27% 15%`         | Backgrounds, headers, footer, nav, dark sections    |
| **Accent/CTA**   | Solar Gold        | `#F9B115` | `42 95% 53%`          | All CTA buttons, highlights, active states, badges  |
| **Neutral Light**| Crisp White       | `#FAFAFA` | `0 0% 98%`            | Body background, card backgrounds, readability      |
| **Neutral Mid**  | Slate Grey        | `#64748B` | `215 16% 47%`         | Body text, secondary text, borders, muted content   |
| **Neutral Dark** | Charcoal          | `#1E293B` | `217 33% 17%`         | Headings, strong text on light backgrounds          |

### CSS Custom Properties (globals.css)

```
:root {
  --background: 0 0% 98%;           /* Crisp White (#FAFAFA) */
  --foreground: 217 33% 17%;        /* Charcoal (#1E293B) */
  --card: 0 0% 100%;                /* Pure White cards */
  --card-foreground: 217 33% 17%;   /* Charcoal text on cards */
  --popover: 0 0% 100%;
  --popover-foreground: 217 33% 17%;
  --primary: 144 27% 15%;           /* Deep Forest Green (#1B3022) */
  --primary-foreground: 0 0% 98%;   /* White text on green */
  --secondary: 215 16% 47%;         /* Slate Grey (#64748B) */
  --secondary-foreground: 0 0% 98%; /* White text on slate */
  --muted: 210 20% 95%;             /* Light grey muted bg */
  --muted-foreground: 215 16% 47%;  /* Slate Grey for muted text */
  --accent: 42 95% 53%;             /* Solar Gold (#F9B115) */
  --accent-foreground: 217 33% 17%; /* Dark text on gold */
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 214 20% 88%;            /* Soft grey borders */
  --input: 214 20% 88%;
  --ring: 42 95% 53%;               /* Gold focus rings */
  --radius: 0.75rem;
}
```

### Tailwind Config Extensions

```
colors: {
  forest: '#1B3022',
  gold: '#F9B115',
  slate-custom: '#64748B',
  charcoal: '#1E293B',
}
```

### Glass Effect Tokens

```css
.glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.glass-dark {
  background: rgba(27, 48, 34, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(249, 177, 21, 0.15);
}
```

---

## 2. Typography

### Font Stack (Geist only - already installed)

| Role      | Font       | Weights    | Tailwind Class |
| --------- | ---------- | ---------- | -------------- |
| Headings  | Geist Sans | 600, 700   | `font-sans`    |
| Body      | Geist Sans | 400, 500   | `font-sans`    |
| Monospace | Geist Mono | 400        | `font-mono`    |

### Type Scale

| Element     | Mobile          | Desktop          |
| ----------- | --------------- | ---------------- |
| Hero H1     | text-3xl (30px) | text-6xl (60px)  |
| Section H2  | text-2xl (24px) | text-4xl (36px)  |
| Card H3     | text-lg (18px)  | text-xl (20px)   |
| Body        | text-base (16px)| text-base (16px) |
| Small/Label | text-sm (14px)  | text-sm (14px)   |

---

## 3. Animations Strategy

### Approach: Intersection Observer + CSS Keyframes (Lightweight)

No additional dependencies required. Using `tailwindcss-animate` (already installed) + custom CSS.

| Animation        | Trigger          | Implementation                                        |
| ---------------- | ---------------- | ----------------------------------------------------- |
| Fade-in-up       | Scroll into view | Custom hook `useScrollAnimation` + CSS `@keyframes`   |
| Pulse CTA        | Always active    | Tailwind `animate-pulse` on gold ring shadow           |
| Smooth scroll    | CTA/nav click    | `scroll-behavior: smooth` + `scrollIntoView()`        |
| Back to top      | Button click     | `window.scrollTo({ top: 0, behavior: 'smooth' })`     |
| Slider value     | User interaction | CSS transition on value display                        |
| Accordion open   | Click            | Already built into shadcn accordion                    |
| Modal entrance   | CTA click        | Already built into shadcn dialog (zoom + fade)         |
| Navbar shrink    | Scroll > 50px    | CSS transition on padding/bg opacity                   |
| Glass card hover | Mouse enter      | `transition-all` + `scale` + shadow change             |

### Custom Hook: `useScrollAnimation`

```typescript
// hooks/use-scroll-animation.ts
// Uses IntersectionObserver to add .animate-in class when elements
// enter viewport. Threshold: 0.1, rootMargin: "0px 0px -50px 0px"
// Returns a ref to attach to the animated container.
```

### CSS Keyframes to Add

```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse-gold {
  0%, 100% { box-shadow: 0 0 0 0 rgba(249, 177, 21, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(249, 177, 21, 0); }
}
```

---

## 4. Dependency Changes

### To Add to package.json

**None.** All required functionality can be achieved with existing dependencies:
- `tailwindcss-animate` for animation utilities
- `@radix-ui/react-dialog` for CTA modal
- `@radix-ui/react-accordion` for FAQ
- `@radix-ui/react-slider` for savings calculator
- `lucide-react` for all icons

### No Framer Motion Needed

Using Intersection Observer + CSS animations provides:
- Zero additional bundle size
- Equivalent visual quality for fade-in-up patterns
- Better performance on mobile devices
- Full compatibility with Next.js 16 SSR

---

## 5. File Architecture

### Target Structure (max ~600 lines per file)

```
app/
  layout.tsx                          # Root layout (lang="sr", fonts, metadata)
  page.tsx                            # Landing page (composition of sections)
  globals.css                         # Design tokens, glass effects, animations
  kontakt/
    page.tsx                          # Contact page for Marcus Thorne

components/
  landing/
    navbar.tsx                        # Sticky nav with mobile hamburger menu
    hero-section.tsx                  # Hero with H1, sub-headline, CTA modal trigger
    savings-calculator.tsx            # Interactive slider card with glass effect
    comparison-table.tsx              # Utility vs Lumina table
    social-proof.tsx                  # Customer testimonial + trust logos
    faq-section.tsx                   # Accordion FAQ
    footer.tsx                        # Full-width footer with CTA, links, license
    cta-modal.tsx                     # Shared CTA modal (Calculate Your Savings)
    back-to-top.tsx                   # Floating back-to-top button
    section-wrapper.tsx               # Reusable scroll-animation wrapper

  ui/
    accordion.tsx                     # (existing)
    button.tsx                        # (existing)
    card.tsx                          # (existing)
    dialog.tsx                        # (existing)
    slider.tsx                        # (existing)
    badge.tsx                         # (existing)
    table.tsx                         # (existing)
    separator.tsx                     # (existing)
    sheet.tsx                         # (existing - for mobile nav drawer)

hooks/
  use-scroll-animation.ts            # IntersectionObserver hook for fade-in-up

lib/
  utils.ts                           # (existing - cn utility)
```

### Component Responsibilities

| Component              | Lines (est) | Key Features                                          |
| ---------------------- | ----------- | ----------------------------------------------------- |
| `navbar.tsx`           | ~150        | Sticky, glass effect, mobile Sheet drawer, logo, CTA  |
| `hero-section.tsx`     | ~120        | H1, subtext, CTA button (triggers modal), hero image  |
| `savings-calculator.tsx`| ~180       | Slider, dynamic calculation, glass card, badge, CTA   |
| `comparison-table.tsx` | ~130        | 4-row comparison, icons, responsive layout             |
| `social-proof.tsx`     | ~150        | Testimonial card, star rating, trust logos             |
| `faq-section.tsx`      | ~120        | 3 FAQ items in accordion, CTA at bottom                |
| `footer.tsx`           | ~120        | Full-width, CTA, links, license, Serbian text          |
| `cta-modal.tsx`        | ~100        | Shared Dialog component, placeholder form              |
| `back-to-top.tsx`      | ~60         | Floating button, show on scroll, smooth scroll up     |
| `section-wrapper.tsx`  | ~40         | Reusable fade-in-up animation container                |
| `page.tsx`             | ~80         | Section composition, section IDs for scroll targets    |
| `kontakt/page.tsx`     | ~200        | Contact form, Marcus info, glass card                  |

---

## 6. CTA Strategy - Placement Plan

The primary CTA ("Izracunajte ustedu" / Calculate Your Savings) opens a modal dialog.

| Location                | CTA Type           | Placement                                      |
| ----------------------- | ------------------ | ---------------------------------------------- |
| **1. Navbar**           | Compact button     | Right side of nav, always visible               |
| **2. Hero Section**     | Large pulsing      | Below sub-headline, prominent Solar Gold        |
| **3. Savings Calculator**| Inline button     | Below the 25-year projection result             |
| **4. After Comparison** | Full-width banner  | Between comparison and social proof sections    |
| **5. After FAQ**        | Medium button      | Below FAQ section, before footer                |
| **6. Footer**           | Small link-style   | In footer links area                            |

All CTAs trigger the same shared `<CTAModal />` dialog component.

---

## 7. Page Sections - Scroll Order

```
[Navbar - sticky, glass]
[Hero Section - forest green bg, white text, gold CTA]
[Savings Calculator - light bg, glass card]
[CTA Banner #1 - forest green strip]
[Comparison Table - light bg, clean table]
[Social Proof - light bg, testimonial + logos]
[CTA Banner #2 - gold accent strip]
[FAQ Accordion - light bg]
[CTA Section - forest green, final push]
[Footer - forest green, full-width]
[Back-to-top - floating button]
```

---

## 8. SEO Strategy

### Metadata (layout.tsx / page.tsx)

```typescript
export const metadata: Metadata = {
  title: 'Lumina Solar | Solarna Energija za Vas Dom - Izracunajte Ustedu',
  description: 'Lumina Solar - Prestanite da iznajmljujete energiju. Saznajte koliko mozete da ustedite sa solarnim panelima. Besplatna procena, 0 dinara unapred, 25 godina garancije.',
  keywords: ['solarna energija', 'solarni paneli', 'Srbija', 'usteda', 'Lumina Solar'],
  openGraph: {
    title: 'Lumina Solar | Izracunajte Vasu Ustedu',
    description: 'Prestanite da placate skupe racune za struju. Lumina Solar nudi solarna resenja sa 0 dinara unapred.',
    type: 'website',
    locale: 'sr_RS',
  },
  robots: { index: true, follow: true },
}
```

### Viewport

```typescript
export const viewport: Viewport = {
  themeColor: '#1B3022',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}
```

### Semantic HTML Plan

- `<header>` for navbar
- `<main>` wrapping all sections
- `<section>` with descriptive `aria-label` for each content block
- `<article>` for testimonial
- `<footer>` for footer
- Proper heading hierarchy: single H1 in hero, H2 per section, H3 for sub-items
- All images get descriptive `alt` text in Serbian
- `lang="sr"` on `<html>` element

---

## 9. Responsive Breakpoints

| Breakpoint | Tailwind | Target           | Key Adjustments                         |
| ---------- | -------- | ---------------- | --------------------------------------- |
| Default    | (none)   | Mobile (320px+)  | Single column, stacked, large tap targets|
| `sm`       | `sm:`    | 640px+           | Minor spacing adjustments                |
| `md`       | `md:`    | 768px+ (Tablet)  | 2-column where appropriate, nav expands  |
| `lg`       | `lg:`    | 1024px+ (Desktop)| Full layout, side-by-side hero, max-width|
| `xl`       | `xl:`    | 1280px+          | Content max-width container              |

### Mobile-Specific Considerations

- Navbar: Hamburger menu icon (Menu/X from Lucide), opens Sheet drawer
- Hero: Stacked layout, image below text
- Calculator: Full-width slider, large thumb for touch
- Table: Horizontal scroll or card-based layout on mobile
- CTAs: Full-width buttons, min-height 48px for thumb tapping
- Footer: Stacked single column
- Back-to-top: Fixed bottom-right, 48x48px touch target

---

## 10. Images to Generate

| Image               | Purpose                  | Dimensions  | Description                                       |
| -------------------- | ----------------------- | ----------- | ------------------------------------------------- |
| `hero-solar.jpg`     | Hero background/visual  | 1200x800    | Modern house with solar panels, green landscape    |
| `marcus-thorne.jpg`  | Testimonial avatar      | 400x400     | Professional man portrait, project manager look    |
| `solar-panel-roof.jpg`| Section decoration     | 800x600     | Close-up of sleek solar panels on residential roof |

---

## 11. Serbian Content - Key Translations

| English                        | Serbian (Latin)                              |
| ------------------------------ | -------------------------------------------- |
| Calculate Your Savings         | Izracunajte Vasu Ustedu                      |
| Stop Renting Your Energy       | Prestanite da Iznajmljujete Energiju         |
| Your Average Monthly Bill      | Vas Prosecni Mesecni Racun                   |
| 25-Year Projected Savings      | Projektovana Usteda za 25 Godina             |
| Zero-Down                      | Bez Unapred Placanja                         |
| Utility vs. Lumina             | Distributer vs. Lumina                       |
| Annual Rate Hikes              | Godisnje Poskupljenje                        |
| Ownership                      | Vlasnistvo                                   |
| Tax Benefits                   | Poreske Olaksice                             |
| Home Value                     | Vrednost Nekretnine                          |
| Customer Success               | Uspesne Price Klijenata                      |
| Verified Install               | Verifikovana Instalacija                     |
| Will my roof leak?             | Da li ce mi krov da prokisnjavati?           |
| What if I move?                | Sta ako se preselim?                         |
| How do I pay for it?           | Kako da platim?                              |
| Privacy                        | Privatnost                                   |
| Terms                          | Uslovi Koriscenja                            |
| Contact                        | Kontakt                                      |
| Back to top                    | Nazad na vrh                                 |
| FAQ                            | Cesta Pitanja                                |

---

## 12. Contact Page (`/kontakt`)

### Purpose
Dedicated page for contacting Marcus Thorne / Lumina Solar team.

### Content
- Header with back navigation to landing page
- Contact form (placeholder - Name, Email, Phone, Message)
- Company info card (glass effect)
- Marcus Thorne contact details (placeholder)
- Office location/map placeholder
- Same navbar and footer as landing page

---

## 13. Implementation Order (Task Sequence)

### Task 1: Foundation Setup
- Update `globals.css` with Nature-Premium design tokens + glass effects + animations
- Update `tailwind.config.ts` with custom colors + animation keyframes
- Update `layout.tsx` with Serbian lang, SEO metadata, viewport config
- Create `hooks/use-scroll-animation.ts`

### Task 2: Shared Components
- Create `components/landing/section-wrapper.tsx` (animation wrapper)
- Create `components/landing/cta-modal.tsx` (shared CTA dialog)
- Create `components/landing/back-to-top.tsx` (floating button)
- Create `components/landing/navbar.tsx` (sticky nav with mobile menu)

### Task 3: Landing Page Sections
- Create `components/landing/hero-section.tsx`
- Create `components/landing/savings-calculator.tsx`
- Create `components/landing/comparison-table.tsx`
- Create `components/landing/social-proof.tsx`
- Create `components/landing/faq-section.tsx`
- Create `components/landing/footer.tsx`

### Task 4: Page Composition + Images
- Update `app/page.tsx` (compose all sections)
- Generate placeholder images (hero, Marcus, solar panels)

### Task 5: Contact Page
- Create `app/kontakt/page.tsx`

---

## 14. Quality Checklist

- [ ] All text in Serbian
- [ ] 3+ CTA placements trigger shared modal
- [ ] Glass effects on cards (savings calculator, testimonial, navbar)
- [ ] Fade-in-up animations on all sections via IntersectionObserver
- [ ] Pulsing gold ring on primary CTA buttons
- [ ] Smooth scroll for all anchor navigation
- [ ] Back-to-top button with smooth scroll
- [ ] Mobile hamburger menu (Sheet component)
- [ ] Responsive at all breakpoints (320px to 1440px+)
- [ ] Semantic HTML with proper ARIA labels
- [ ] SEO metadata in Serbian with Open Graph tags
- [ ] Footer full-width with license info
- [ ] No localStorage or client-side storage
- [ ] All components under ~600 lines
- [ ] Contact page at /kontakt
- [ ] Color contrast tested (green bg + white text, gold bg + dark text)
- [ ] Geist font applied consistently via font-sans
- [ ] Generated images for hero, avatar, and decorative use

---

## 15. Risks and Notes

| Risk                                   | Mitigation                                              |
| -------------------------------------- | ------------------------------------------------------- |
| Forest green + white contrast ratio    | Test with devtools; fallback to lighter green if needed  |
| Solar Gold + white readability         | Always use dark text on gold backgrounds                 |
| Glass effect browser support           | webkit prefix included; graceful fallback to solid bg    |
| Serbian character encoding             | UTF-8 guaranteed by Next.js; no special handling needed  |
| Prototype content accuracy             | All content marked as placeholder; easily replaceable    |
| Mobile touch targets                   | Minimum 48px height on all interactive elements          |

---

*Document created: 2026-02-09*
*Status: Ready for implementation*
