---
name: Technical Portfolio Design System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#44474d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#006b54'
  on-secondary: '#ffffff'
  secondary-container: '#5afcce'
  on-secondary-container: '#007259'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001a41'
  on-tertiary-container: '#2180ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#5afcce'
  secondary-fixed-dim: '#31dfb3'
  on-secondary-fixed: '#002118'
  on-secondary-fixed-variant: '#00513f'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc7ff'
  on-tertiary-fixed: '#001a41'
  on-tertiary-fixed-variant: '#004493'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  h1:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  code:
    fontFamily: Space Grotesk
    fontSize: 0.9rem
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is engineered to project technical proficiency, reliability, and modern engineering standards. It targets recruiters and potential collaborators who value precision and clarity. 

The style merges **Minimalism** with **Corporate Modern** aesthetics. It utilizes a high-clarity **Light Mode** environment to emphasize readability and a clean, professional "whitepaper" feel. The visual language is disciplined, favoring structural integrity and information density over decorative flourishes. The interface should feel like a high-end documentation site or a modern technical dashboard—efficient, organized, and powerful.

## Colors
The color palette is rooted in a "Navy on White" foundation, providing a professional and academic backdrop for technical content. 

- **Primary:** Deep navy blue (#0A192F) used for high-priority headers, navigation anchors, and primary text.
- **Secondary (Accent):** A high-vibrancy "Mint-Teal" (#19d4a9) used for interactive highlights and syntax-like accents.
- **Tertiary:** A functional blue (#007BFF) used for standard links and secondary actions.
- **Neutral:** Pure white (#FFFFFF) for the main background to ensure maximum contrast and clarity.

Surface tiers are created using very light grays or subtle navy tints to distinguish cards and sections from the white main canvas.

## Typography
The system uses **Inter** for its exceptional legibility and neutral, professional tone. To lean into the technical nature of the portfolio, **Space Grotesk** is introduced for labels, badges, and small technical metadata to provide a geometric, futuristic edge.

Headers are kept tight and impactful, appearing in the Primary Navy to ground the layout. Body text is optimized for readability against the light background, using increased line height and a deep navy-gray to maintain high contrast without the eye strain of pure black.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop, centering content within a 1200px container to ensure readability. A 12-column grid is utilized for project galleries and experience timelines.

Spacing is based on a 4px baseline grid. Large vertical margins (80px+) are used between major sections (About, Experience, Projects) to create clear mental breaks. Content blocks should prioritize vertical flow, mimicking the structure of well-organized technical documentation.

## Elevation & Depth
This design system avoids heavy drop shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**. 

Depth is communicated through subtle value shifts. The base background is white, while cards and floating elements use very light gray surfaces or 1px solid borders in a muted version of the primary navy. To add a "tech" feel, use 1px solid borders (#E2E8F0) instead of traditional shadows. When shadows are necessary for high-level modals, use a sharp, low-blur shadow with a slight offset to maintain the "technical" feel.

## Shapes
The shape language is primarily **Soft** but disciplined. A subtle rounding (4px) is applied to cards and input fields to prevent the UI from feeling aggressive while remaining architectural and rigid.

The only exception to this rule is for **Pill-shaped badges**, which provide a visual counterpoint to the rectangular grid and signify "tags" or "skills" clearly.

## Components

### Buttons
- **Primary CTA:** Solid background using the primary navy (#0A192F) or accent color (#19d4a9). High contrast text is essential.
- **Secondary CTA:** Outlined button with the navy border and text. Fill background on hover.

### Badges (Skills)
- Full pill-shape (border-radius: 999px).
- Background: A very light tint of the navy or accent color (#19d4a915).
- Font: Space Grotesk, 0.75rem, uppercase.

### Experience Timeline
- A vertical 2px line in a muted gray or navy. 
- Timeline nodes are small squares rather than circles to maintain the sharp aesthetic.
- Current roles should use the secondary accent color to draw the eye.

### Cards (Project/Experience)
- Background: `#FFFFFF`.
- Border: 1px solid `#E2E8F0`.
- On hover, the border color shifts to the accent color (#19d4a9) or deepens to the primary navy to provide immediate feedback.

### Input Fields
- White background, 1px full border.
- Focus state: Border color changes to the primary navy with no outer glow.