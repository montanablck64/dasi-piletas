# DASI — Journey + Page Specs

**Surface:** Single-page website (smooth-scroll, 8 sections)
**Primary audience:** Homeowners in western Buenos Aires suburbs (mobile, 55+)
**Secondary audience:** Commercial prospects — hotels, gated communities (may be desktop)
**Job:** Give visitors enough confidence in DASI's quality to send that first WhatsApp message with project details.

---

## Job Story

**When** a homeowner is thinking about building, repairing, or renovating a pool,
**and** they find DASI through Instagram, WhatsApp, or word-of-mouth,
**they want** to quickly see real work, understand what DASI offers, and feel confident in Leonardo's professionalism,
**so they can** reach out via WhatsApp with enough details for Leonardo to respond meaningfully.

---

## Information Architecture

Single-page, vertical scroll. Sticky nav anchors to each section. Two persistent elements overlay the page.

```
[Sticky Nav]                          ← persistent, top
[1. Hero]                             ← above the fold
[2. Nosotros (About)]                 ← trust / story
[3. Servicios (Services)]             ← what we do
[4. Diseños Personalizados (Custom)]  ← customization pitch
[5. Proyectos (Gallery)]              ← proof
[6. Materiales (Materials)]           ← quality signal
[7. Zona de Cobertura (Service Area)] ← geographic fit
[8. Contacto (Contact)]               ← conversion
[Footer]
[Floating WhatsApp Button]            ← persistent, bottom-right
```

**Flow logic:** Every section ends with a micro-CTA (text link or button) pointing either to the Contact section or directly to WhatsApp. The visitor should never be more than one tap from contact.

---

## Persistent Elements

### P1: Sticky Navigation

**Behavior:**
- Fixed to top on scroll (appears after hero section passes out of viewport)
- Contains: DASI logo (small, left) + section anchor links (center/right) + WhatsApp icon button (right)
- **Desktop (>= 1024px):** All 8 anchor labels visible as horizontal text links
- **Tablet (768–1023px):** Condensed labels (e.g., "Servicios" not "Nuestros Servicios") — all visible
- **Mobile (< 768px):** Hamburger menu icon. Tap opens full-screen overlay with all 8 anchor links, large tap targets (min 48px height). WhatsApp icon button remains visible outside hamburger.
- Active section highlighted in nav as user scrolls
- Background: semi-transparent with subtle blur (glassmorphism-light — not heavy)
- Height: compact (~60px desktop, ~56px mobile) to preserve viewport for content

### P2: Floating WhatsApp Button

**Behavior:**
- Fixed position, bottom-right corner (24px from edges)
- Always visible on all viewports
- Green WhatsApp brand icon, circular, with subtle shadow
- Size: 56px diameter mobile, 60px desktop
- Tap opens `wa.me` link with generic pre-filled message:

```
wa.me/5491140986098?text=Hola%2C%20quiero%20hacer%20una%20consulta%20sobre%20los%20servicios%20de%20DASI.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F
```

**Pre-filled message (decoded):**
"Hola, quiero hacer una consulta sobre los servicios de DASI. ¿Podrían brindarme más información?"

- Z-index above all content but below hamburger overlay
- Does not overlap the contact form submit button (offset if needed on mobile)

---

## Page Specs

### Section 1: Hero

**Goal:** Instant clarity — what DASI does + aspirational visual impact + immediate WhatsApp CTA.

**Content hierarchy:**
1. **Background:** Full-width hero image (best available pool photo, edge-to-edge). Dark gradient overlay from bottom to ensure text legibility.
2. **DASI logo** (centered or top-left, prominent)
3. **Headline (H1):** "Piletas de Material a Medida, Diseñadas para Tu Espacio."
4. **Supporting text:** "Construcción, reparación y renovación de piletas — pensadas para tu espacio y la forma en que querés disfrutarlo."
5. **Primary CTA button:** "Contactanos por WhatsApp" → opens `wa.me` link (same generic message as floating button)
6. **Secondary CTA:** "Ver Nuestros Proyectos" → scrolls to Gallery section
7. **Trust line (optional):** "+8 años de experiencia en piletas de material"

**Mobile behavior:** Image crops to center. Headline stacks. Both CTAs stack vertically, full-width. Logo smaller.

**Micro-CTA at section end:** The primary CTA itself serves this role.

---

### Section 2: Nosotros (About DASI)

**Goal:** Build personal trust — Leonardo's story, hands-on approach, family name origin.

**Content hierarchy:**
1. **Section heading (H2):** "Sobre DASI"
2. **Lead paragraph:** DASI = David + Simón (Leonardo's children). A personal business built on quality and direct attention.
3. **Key points (icon + short text, 3–4 items):**
   - +8 años de experiencia en construcción de piletas
   - Atención personalizada — Leonardo visita cada obra
   - Materiales de primera calidad
   - Cada proyecto diseñado a medida
4. **Optional:** Photo of Leonardo at work or on-site (if available and quality permits)

**Mobile behavior:** Key points stack vertically. Icon-text pairs left-aligned.

**Micro-CTA:** "¿Querés conocer nuestros servicios?" → scrolls to Services.

---

### Section 3: Servicios (Services)

**Goal:** Clearly communicate the full range of what DASI offers.

**Content hierarchy:**
1. **Section heading (H2):** "Nuestros Servicios"
2. **Service cards (grid: 3 columns desktop, 2 tablet, 1 mobile):**
   - **Construcción de Piletas de Material** — Piletas construidas en obra, diseñadas según tu espacio y tus necesidades.
   - **Reparación de Piletas** — Reparamos piletas de material con problemas estructurales, de filtración o funcionamiento.
   - **Renovación de Piletas** — Renovamos y mejoramos piletas existentes: técnica y estéticamente.
   - **Jacuzzis de Material** — Construcción y reparación de jacuzzis de hormigón.
   - **Cascadas y Fuentes Decorativas** — Elementos de agua que transforman tu espacio.
   - **Diseños Personalizados** — Borde infinito, borde finlandés, dimensiones a medida y más.
3. Each card: icon/illustration + service name (H3) + 1-2 sentence description

**Mobile behavior:** Cards stack single-column, full-width.

**Micro-CTA:** "Pedí tu presupuesto sin cargo" → scrolls to Contact.

---

### Section 4: Diseños Personalizados (Custom Pool Designs)

**Goal:** Show that every pool is unique — no molds, no prefab. Introduce the Oasis concept.

**Content hierarchy:**
1. **Section heading (H2):** "Diseños a Tu Medida"
2. **Intro text:** "No usamos moldes ni modelos prefabricados. Cada pileta se diseña según tus preferencias y las características de tu terreno."
3. **Design options (visual list or icon grid):**
   - Formas rectangulares o cuadradas
   - Diferentes profundidades y dimensiones
   - Con o sin escaleras
   - Playa húmeda (shallow beach area)
   - Borde infinito
   - Borde finlandés
   - Medida estándar común: aprox. 7 × 3 m (personalizable)
4. **Oasis Pool concept (highlighted card or callout):**
   - Heading: "Concepto Pileta Oasis"
   - Description: "Un nuevo concepto que estamos desarrollando: pileta poco profunda (hasta 1,50 m), cascadas decorativas entre rocas y una zona de arena. Consultanos para más detalles."
   - **Important framing:** Clearly labeled as "Nuevo concepto" — not a completed project.

**Mobile behavior:** Option list stacks. Oasis callout full-width with distinct background color.

**Micro-CTA:** "¿Tenés una idea para tu pileta? Hablemos." → WhatsApp or Contact.

---

### Section 5: Proyectos (Gallery)

**Goal:** Prove DASI's quality with real project imagery. Build trust through evidence.

**Content hierarchy:**
1. **Section heading (H2):** "Nuestros Proyectos"
2. **Hero gallery:** 3–5 best pool photos, displayed large (one at a time with navigation, or stacked full-width). Each with a short caption:
   - Project name or type
   - Brief detail (e.g., "Pileta 5×3m en espacio reducido — La Reja")
3. **Construction progress sequence:** A dedicated sub-section showing one project's build process:
   - Heading: "Del Proyecto a la Pileta"
   - 3–4 images in sequence (excavation → structure → finishing → result)
   - Short label under each step (e.g., "Excavación", "Estructura", "Terminación", "Resultado final")
   - Horizontal scroll on mobile or vertical stacked steps
4. **Note:** Only real DASI projects. If a photo includes "Valentina" branding, use only with confirmed permission.

**Mobile behavior:** Hero photos full-width, swipeable carousel or vertically stacked. Construction flow as horizontal scroll strip or vertical timeline.

**Micro-CTA:** "¿Querés una pileta así? Escribinos." → WhatsApp.

---

### Section 6: Materiales y Calidad (Materials & Quality)

**Goal:** Signal quality through materials and brands — without overclaiming.

**Content hierarchy:**
1. **Section heading (H2):** "Materiales de Primera Calidad"
2. **Intro text:** "Trabajamos con materiales y marcas de confianza para garantizar durabilidad y buen funcionamiento."
3. **Brand/material items (3 items, icon or logo + text):**
   - **Vulcano** — Equipos de filtración
   - **Tigre** — Cañerías y válvulas de presión
   - **Baldosas atérmicas** — Proveedor local de General Rodríguez
4. **Supporting statement:** "Cada obra se realiza con materiales de primera línea, seleccionados para durar."

**Mobile behavior:** Items stack vertically. Keep it short — this section is a quality signal, not a catalog.

**Micro-CTA:** "Conocé cómo trabajamos — consultanos." → Contact.

---

### Section 7: Zona de Cobertura (Service Area)

**Goal:** Show geographic reach without hard limits. Encourage inquiries from outside the core area.

**Content hierarchy:**
1. **Section heading (H2):** "Zona de Trabajo"
2. **Lead text:** "Con base en La Reja, Moreno, trabajamos en Moreno y alrededores. Proyectos en otras zonas también pueden evaluarse — contactanos para consultar disponibilidad."
3. **Area list (tag-style or comma list):** La Reja, Moreno, General Rodríguez, Francisco Álvarez, Paso del Rey, Merlo, Ituzaingó, Morón, Castelar, Ramos Mejía, Hurlingham, San Miguel, José C. Paz, zonas de CABA, Ezeiza
4. **Optional:** Simple map illustration or embedded static map showing approximate coverage area (not interactive Google Maps — keep page weight lean)
5. **Flexibility note:** "¿Estás en otra zona? Consultanos igual — evaluamos cada proyecto de forma individual."

**Mobile behavior:** Area tags wrap naturally. Map (if used) full-width, aspect-ratio preserved.

**Micro-CTA:** "Consultá si llegamos a tu zona" → Contact or WhatsApp.

---

### Section 8: Contacto (Contact)

**Goal:** Convert visitor into a structured WhatsApp inquiry with key project details.

**Content hierarchy:**
1. **Section heading (H2):** "Contactanos"
2. **Intro text:** "Presupuestos y visitas sin cargo. Completá el formulario y te respondemos por WhatsApp."
3. **Contact form** (see Form Spec below)
4. **Direct contact info:**
   - WhatsApp: +54 9 11 4098-6098
   - Email: levivile@hotmail.com
   - Instagram: link
   - Facebook: link
5. **Footer area:** DASI logo + "© DASI 2026" + social icons + link to top

**Mobile behavior:** Form fields span full content width. Submit button full-width, prominent. Contact info stacked below form.

---

## Contact Form Spec

**Fields:**

| Field | Label | Type | Required | Notes |
|---|---|---|---|---|
| name | Nombre completo | text | Yes | — |
| phone | Teléfono | tel | Yes | — |
| location | Zona / Barrio | text | Yes | Critical for Leonardo — determines if he can service the area |
| project_type | Tipo de proyecto | select | Yes | Options: "Pileta nueva", "Reparación", "Renovación", "Jacuzzi", "Otro" |
| dimensions | Medidas aproximadas | text | No | Placeholder: "Ej: 7x3 metros" |
| machinery_access | ¿Hay acceso para maquinaria de excavación? | select | Yes | Options: "Sí", "No", "No estoy seguro/a". Critical — affects cost and timeline significantly |
| details | Detalles adicionales | textarea | No | Placeholder: "Contanos más sobre tu proyecto..." |

**Error-state guidance:**
- Required fields left empty on submit: highlight field border in error color, show inline message "Este campo es obligatorio"
- Phone format invalid: "Ingresá un número de teléfono válido"
- All errors shown inline, near the field — not in a summary banner

**Submit behavior:**
- Button label: "Enviar Consulta por WhatsApp"
- On submit, opens `wa.me` link with structured message containing all form answers:

**Form-generated WhatsApp message template:**

```
wa.me/5491140986098?text=Hola%2C%20quiero%20consultar%20por%20un%20proyecto%20de%20pileta.%0A%0ANombre%3A%20{name}%0ATel%C3%A9fono%3A%20{phone}%0AZona%3A%20{location}%0AProyecto%3A%20{project_type}%0AMedidas%3A%20{dimensions}%0AAcceso%20maquinaria%3A%20{machinery_access}%0ADetalles%3A%20{details}%0A%0A%C2%BFPodr%C3%ADan%20asesorarme%3F
```

**Decoded message:**
```
Hola, quiero consultar por un proyecto de pileta.

Nombre: {name}
Teléfono: {phone}
Zona: {location}
Proyecto: {project_type}
Medidas: {dimensions}
Acceso maquinaria: {machinery_access}
Detalles: {details}

¿Podrían asesorarme?
```

**Important:** This message is distinct from the floating WhatsApp button's generic message. The form passes structured data; the button is for quick general inquiries.

---

## SEO Direction

- **Title tag:** "DASI — Construcción de Piletas de Material a Medida | Moreno, Buenos Aires"
- **Meta description:** "Piletas de material a medida, reparación y renovación. +8 años de experiencia. La Reja, Moreno y alrededores. Presupuesto sin cargo."
- **H1:** One per page (hero headline)
- **H2:** One per section
- **Image alt text:** Descriptive, in Spanish, including location keywords where natural
- **Target terms:** construcción de piletas de material, piletas en Moreno, reparación de piletas, remodelación de piletas Zona Oeste, jacuzzis de material, piletas a medida La Reja
- **Structured data:** LocalBusiness schema (JSON-LD) with name, address, phone, service area
