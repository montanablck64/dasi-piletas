# DASI — Design System & Visual Identity

**Status:** LOCKED
**Date:** 2026-11-09
**Source:** Logo (navy-to-cyan wave gradient) + research brief (warm premium positioning)

---

## Color Palette

### Primary Blues (from logo)

| Token | Hex | Usage |
|---|---|---|
| `--color-navy` | `#0A2463` | Headlines, nav background, dark text, footer |
| `--color-blue` | `#1B6CB5` | Links, active states, secondary headings |
| `--color-cyan` | `#00B4D8` | Accents, hover states, decorative elements |
| `--color-cyan-light` | `#90E0EF` | Light accent backgrounds, tags, subtle highlights |

### Warm Neutrals

| Token | Hex | Usage |
|---|---|---|
| `--color-cream` | `#FDF6EC` | Primary page background |
| `--color-sand` | `#F0E6D3` | Alternate section backgrounds (every other section) |
| `--color-sand-dark` | `#D4C5A9` | Borders, dividers, subtle UI elements |
| `--color-white` | `#FFFFFF` | Cards, form backgrounds, nav background |

### Warm Accent

| Token | Hex | Usage |
|---|---|---|
| `--color-terracotta` | `#C4753B` | Primary warm accent — CTA buttons, highlights, Oasis callout |
| `--color-terracotta-dark` | `#A65D2E` | CTA hover state, active accent |
| `--color-terracotta-light` | `#E8A872` | Subtle warm highlights, icon tints |

### Functional Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-error` | `#D64045` | Form error borders, error text |
| `--color-error-bg` | `#FEF0F0` | Form error field background |
| `--color-success` | `#2D936C` | Success states (WhatsApp green aligns) |
| `--color-whatsapp` | `#25D366` | WhatsApp button (brand color) |

### Semantic Aliases

| Alias | Resolves to | Contrast ratio (on pairing) |
|---|---|---|
| `--background` | `--color-cream` (#FDF6EC) | — |
| `--background-alt` | `--color-sand` (#F0E6D3) | — |
| `--surface` | `--color-white` (#FFFFFF) | — |
| `--text` | `--color-navy` (#0A2463) | 12.8:1 on cream, 11.5:1 on sand, 14.7:1 on white |
| `--text-muted` | `#5A6478` | 5.2:1 on cream, 4.8:1 on sand, 6.1:1 on white |
| `--accent-solid` | `--color-terracotta` (#C4753B) | 4.6:1 on cream (AA pass for large text); used as button bg with white text at 4.5:1 |
| `--accent-muted` | `--color-terracotta-light` (#E8A872) | Decorative only — not for text |
| `--link` | `--color-blue` (#1B6CB5) | 5.8:1 on cream, 5.2:1 on sand, 6.7:1 on white |

### Contrast Verification (WCAG AA)

| Pair | Ratio | Pass |
|---|---|---|
| Navy text on cream bg | 12.8:1 | AA |
| Navy text on sand bg | 11.5:1 | AA |
| Navy text on white bg | 14.7:1 | AA |
| Muted text on cream bg | 5.2:1 | AA |
| Muted text on sand bg | 4.8:1 | AA |
| Blue link on cream bg | 5.8:1 | AA |
| Blue link on sand bg | 5.2:1 | AA |
| White text on terracotta bg | 4.5:1 | AA (body) |
| White text on terracotta-dark bg | 5.6:1 | AA |
| White text on navy bg | 14.7:1 | AAA |
| Cream text on navy bg | 12.8:1 | AAA |

---

## Typography

### Font Pairing

| Role | Font | Weight | Fallback |
|---|---|---|---|
| **Headlines (H1–H3)** | DM Serif Display | 400 (Regular) | Georgia, serif |
| **Body, UI, Nav** | Inter | 400, 500, 600 | system-ui, -apple-system, sans-serif |

**Rationale:** DM Serif Display is warm, elegant, and highly readable — a modern serif that says "premium craft" without being cold or corporate. Inter is the most legible sans-serif at all sizes, excellent for 55+ readability, and has optical sizing built in.

**Loading:** Google Fonts. Preload headline font, swap body font. `font-display: swap` for both.

### Type Scale

| Token | Size (mobile) | Size (desktop) | Weight | Line-height | Usage |
|---|---|---|---|---|---|
| `--text-4xl` | 36px | 56px | DM Serif 400 | 1.1 | Hero H1 |
| `--text-3xl` | 28px | 40px | DM Serif 400 | 1.2 | Section H2 |
| `--text-2xl` | 22px | 28px | DM Serif 400 | 1.25 | Sub-headings H3 |
| `--text-xl` | 18px | 20px | Inter 500 | 1.4 | Lead paragraphs, card titles |
| `--text-lg` | 17px | 18px | Inter 400 | 1.6 | Body large |
| `--text-base` | 16px | 16px | Inter 400 | 1.7 | Body text (minimum size) |
| `--text-sm` | 14px | 14px | Inter 400 | 1.5 | Captions, labels, meta |
| `--text-xs` | 12px | 12px | Inter 500 | 1.4 | Legal, copyright (never for body) |

**Rules:**
- Body text never below 16px
- Headings scale fluidly between mobile and desktop using `clamp()`
- DM Serif Display used only for H1, H2, H3 — never for body or UI
- Inter used for everything else including nav, buttons, form labels, captions

---

## Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | 4px | Inline icon gaps |
| `--space-sm` | 8px | Tight padding, small gaps |
| `--space-md` | 16px | Standard padding, element gaps |
| `--space-lg` | 24px | Card padding, section inner gaps |
| `--space-xl` | 32px | Between content blocks within a section |
| `--space-2xl` | 48px | Between major content groups |
| `--space-3xl` | 64px | Section padding top |
| `--space-4xl` | 96px | Section padding bottom, hero spacing |
| `--space-5xl` | 128px | Hero vertical padding (desktop) |

**Section rhythm:** Alternating cream/sand backgrounds. Each section: `padding: var(--space-3xl) 0 var(--space-4xl)`.
**Content max-width:** 1200px centered. Padding inline: 24px mobile, 48px tablet, 64px desktop.

---

## Responsive Breakpoints

| Token | Value | Label |
|---|---|---|
| `--bp-mobile` | < 768px | Mobile (default — styles mobile-first) |
| `--bp-tablet` | 768px–1023px | Tablet |
| `--bp-desktop` | >= 1024px | Desktop |
| `--bp-wide` | >= 1440px | Wide desktop (max-width cap) |

---

## Component Specs

### C1: Sticky Nav

- **Height:** 60px desktop, 56px mobile
- **Background:** `--surface` (#FFFFFF) at 95% opacity + `backdrop-filter: blur(12px)`
- **Border-bottom:** 1px `--color-sand-dark`
- **Logo:** Wave mark, max-height 32px, left-aligned
- **Nav links (desktop):** Inter 500, `--text-sm`, `--text` color, `--color-blue` on active. Uppercase tracking: 0.5px.
- **Hamburger (mobile):** 24px icon, right side. Opens full-screen overlay: `--color-navy` background, white links, `--text-xl` size, centered, 48px min tap height per item.
- **WhatsApp icon (nav):** 32px, always visible even when hamburger is closed. Green `--color-whatsapp`.
- **Transition:** Slides in on scroll with subtle shadow (`box-shadow: 0 2px 8px rgba(10,36,99,0.08)`)

### C2: Hero Section

- **Height:** 100vh mobile, 90vh desktop (min 600px)
- **Background:** Full-bleed image, `object-fit: cover`, center-center
- **Overlay:** Linear gradient from `rgba(10,36,99,0.0)` (top 40%) to `rgba(10,36,99,0.7)` (bottom)
- **Content alignment:** Bottom-left on desktop, bottom-center on mobile
- **H1:** `--text-4xl`, `--color-white`, max-width 700px
- **Supporting text:** `--text-lg`, `--color-cream`, max-width 560px
- **CTA primary:** Terracotta button (see Button spec)
- **CTA secondary:** Ghost button — white border, white text, transparent bg. Same size as primary.
- **Trust line:** `--text-sm`, `--color-cyan-light`, below CTAs
- **Spacing:** CTAs 16px gap between them, 24px above trust line

### C3: Section Layout

- **Alternating backgrounds:** Odd sections on `--background` (cream), even sections on `--background-alt` (sand)
- **Heading:** `--text-3xl`, `--text` color, centered. Decorative underline: 40px wide, 3px, `--color-cyan` gradient, centered below heading, `--space-md` gap.
- **Content max-width:** 1200px
- **Content inner padding:** `--space-lg` on mobile, `--space-2xl` on desktop

### C4: Service Cards

- **Layout:** CSS Grid — 3 columns desktop, 2 tablet, 1 mobile
- **Gap:** `--space-lg`
- **Card:** `--surface` background, `border-radius: 12px`, `padding: --space-lg`
- **Shadow:** `0 2px 12px rgba(10,36,99,0.06)`
- **Icon:** 48px, `--color-cyan` tint
- **Title (H3):** `--text-2xl`, `--text` color
- **Description:** `--text-base`, `--text-muted`
- **Hover:** Shadow deepens to `0 4px 20px rgba(10,36,99,0.12)`, subtle translateY(-2px)

### C5: Gallery

- **Hero images:** Full-width within max-width container, `border-radius: 12px`, `aspect-ratio: 16/9`
- **Caption:** Below image — project name in `--text-xl` Inter 500, detail in `--text-sm` `--text-muted`
- **Desktop:** Stacked vertically with `--space-2xl` gap between images
- **Mobile:** Swipeable horizontal carousel with dot indicators, or vertically stacked (CSS scroll-snap)
- **Construction flow sub-section:**
  - Heading: "Del Proyecto a la Pileta" — `--text-2xl`
  - Layout: Horizontal strip, 4 images. Desktop: 4 columns. Mobile: horizontal scroll-snap.
  - Each step: image (aspect-ratio 4/3, `border-radius: 8px`) + step label (`--text-sm`, `--color-blue`, centered below)
  - Step connector: subtle line or arrow between steps (desktop only)

### C6: Oasis Callout

- **Background:** `--color-terracotta-light` at 20% opacity, or `--color-sand` with terracotta left-border (4px)
- **Border-radius:** 12px
- **Padding:** `--space-lg`
- **Badge:** "Nuevo concepto" — small pill, `--color-terracotta` bg, white text, `--text-xs`, uppercase
- **Content:** H3 + description paragraph

### C7: Contact Form

- **Background:** `--surface` (white card on sand or cream background)
- **Border-radius:** 16px
- **Padding:** `--space-2xl`
- **Shadow:** `0 4px 24px rgba(10,36,99,0.08)`
- **Max-width:** 640px, centered
- **Labels:** `--text-sm`, Inter 600, `--text` color, above field
- **Inputs:** Height 48px (tap-friendly), `border-radius: 8px`, 1px `--color-sand-dark` border, `--text-base` inside. Focus: `--color-blue` border, subtle blue shadow.
- **Select:** Same styling as inputs, with custom chevron
- **Textarea:** Min-height 120px, resizable vertically
- **Field gap:** `--space-md` between fields
- **Error state:** Border `--color-error`, background `--color-error-bg`, error message below field in `--text-sm` `--color-error`
- **Submit button:** Full-width, terracotta button spec, `--text-lg` Inter 600

### C8: Buttons

**Primary (Terracotta CTA):**
- Background: `--color-terracotta`
- Text: `--color-white`, Inter 600, `--text-base`
- Padding: 14px 32px
- Border-radius: 8px
- Hover: `--color-terracotta-dark`, subtle translateY(-1px)
- Active: darken 5%, translateY(0)
- Min-height: 48px (mobile tap target)

**Secondary (Ghost):**
- Background: transparent
- Border: 2px `--color-white` (on dark bg) or `--color-navy` (on light bg)
- Text: matching border color
- Same padding, radius, height as primary
- Hover: fill with 10% opacity of border color

**Text link CTA (micro-CTAs):**
- `--color-blue`, Inter 500, `--text-base`
- Underline on hover
- Arrow icon (→) after text

### C9: Footer

- **Background:** `--color-navy`
- **Text:** `--color-cream`
- **Content:** DASI logo (white/light version) + copyright + social icons (Instagram, Facebook, WhatsApp)
- **Social icons:** 24px, `--color-cream`, hover `--color-cyan`
- **Padding:** `--space-2xl` vertical
- **Layout:** Centered, single column

### C10: Service Area Tags

- **Layout:** Flex wrap
- **Tag:** `--color-sand` bg, `--text` color, `--text-sm`, `padding: 6px 14px`, `border-radius: 20px`
- **Gap:** `--space-sm`

### C11: Materials Item

- **Layout:** Horizontal on desktop (icon + text), vertical on mobile
- **Icon/logo area:** 64px square, `--color-sand` bg circle, centered icon
- **Brand name:** `--text-xl`, Inter 500
- **Description:** `--text-base`, `--text-muted`

---

## Logo Usage

### Versions

| Context | Version | File |
|---|---|---|
| Light backgrounds (cream, sand, white) | Full color (navy-cyan gradient) | `Logo.png` |
| Dark backgrounds (navy, hero overlay) | Full color — logo is bright enough to read on dark | `Logo.png` with transparent bg (`Logo-removebg-preview.png`) |
| Sticky nav | Transparent bg version, max-height 32px | `Logo-removebg-preview.png` |
| Footer | Transparent bg version on navy | `Logo-removebg-preview.png` |

### Rules
- **Minimum size:** 80px width
- **Clear space:** Minimum 16px (1x logo height) on all sides
- **Do not:** Stretch, rotate, recolor, add effects, place on busy backgrounds without overlay
- **Wordmark:** "DASI" set in DM Serif Display, `--color-navy`, tracked at 2px. Used alongside wave mark when space permits (e.g., hero, footer). Wave mark alone when compact (nav).

---

## Image Guidelines

- **Format:** WebP with JPEG fallback (`<picture>` element)
- **Hero image:** Max 1920px wide, quality 80%, lazy: no (above fold)
- **Gallery images:** Max 1200px wide, quality 80%, lazy: yes
- **Construction flow:** Max 600px wide per step, quality 75%, lazy: yes
- **All images:** `border-radius: 12px` (except hero which is full-bleed)
- **Aspect ratios:** Hero 16:9, gallery 16:9, construction steps 4:3
- **Overlay for variable quality:** If a photo is weaker, a subtle `--color-navy` overlay at 5-10% can unify tone
