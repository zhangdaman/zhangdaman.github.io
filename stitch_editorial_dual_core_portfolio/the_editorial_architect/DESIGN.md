---
name: The Editorial Architect
colors:
  surface: '#faf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#faf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e8'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#9d422f'
  on-secondary: '#ffffff'
  secondary-container: '#fc8c74'
  on-secondary-container: '#742414'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1b1a'
  on-tertiary-container: '#868381'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdad3'
  secondary-fixed-dim: '#ffb4a4'
  on-secondary-fixed: '#3e0500'
  on-secondary-fixed-variant: '#7e2b1b'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1d1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#faf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Serif 4
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.6'
  kicker:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.2em
  mono-ui:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
spacing:
  section-v-rhyme: 140px
  gutter: 24px
  margin-edge: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is built for a Senior AI Product Manager, balancing the intellectual gravity of a high-end publication with the technical precision of an engineer. The personality is authoritative yet approachable—a "builder-scholar" aesthetic that prioritizes clarity and thoughtful pacing.

The visual style is **Minimalist Editorial with a Technical Motif**. It relies on high-contrast serif pairings to drive the narrative, while using monospaced elements to signal the "under the hood" geek culture. The UI avoids all modern decorative trends like shadows, blurs, or gradients, opting instead for a flat, structured layout that feels printed rather than rendered. The "builder" motif is expressed through terminal panels and precise hairline rules, grounding the abstract nature of AI into tangible, structured craft.

## Colors
The palette is centered on a warm, paper-like foundation to reduce eye strain and evoke a physical editorial quality.

- **Background (#FAFAF7):** A soft off-white that provides a sophisticated base for high-contrast typography.
- **Foreground (#111111):** A near-black for maximum legibility and authority.
- **Accent (#C05D48):** A desaturated terracotta used sparingly for call-to-actions, active states, and specific "builder" highlights.
- **Muted (#888888):** Reserved for metadata and secondary descriptions to maintain visual hierarchy.
- **Rules (#E5E5E2):** Low-contrast hairlines that define the grid without cluttering the composition.
- **Terminal Palette:** A dedicated dark mode sub-palette (#1A1A1A / #F0F0F0) for code snippets and technical panels to signal the transition from theory to execution.

## Typography
Typography is the structural core of this design system. It intentionally excludes all sans-serif typefaces to reinforce the editorial tone.

- **Serif Pairing:** `Playfair Display` provides dramatic, high-contrast weight for headlines, while `Source Serif 4` ensures high legibility for long-form prose with its sturdy, professional character.
- **Monospace Accents:** `JetBrains Mono` is used strictly for metadata, section markers, and code. It should never be used for body text.
- **Editorial Details:** 
    - **Section Kickers:** Use the `kicker` role for section headers (e.g., § 01 — RESEARCH). These must be tracked out and uppercase.
    - **Drop Caps:** The first character of a major article should span 3 lines of body text, set in the primary foreground color.
    - **Text Blocks:** Maximize readability by limiting body copy containers to 680px width.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy that mimics a printed broadsheet or architectural drawing.

- **Vertical Rhythm:** A generous 120px to 160px gap between major sections (default 140px) to allow the "cerebral" content to breathe.
- **Grid Structure:** A 12-column grid on desktop with 24px gutters. Content should be centered with wide margins to create a focused reading experience.
- **Hairline Dividers:** Sections are separated by 1px horizontal rules in `#E5E5E2`. These rules should span the full width of the container.
- **Mobile Adaptation:** On mobile, vertical rhythm reduces to 80px, and margins shrink to 20px. The 12-column grid collapses to a single-column stack.

## Elevation & Depth
This design system rejects shadows and physical depth metaphors. Hierarchy is achieved through **Tonal Layering and Linework**.

- **Flat Surface:** All elements sit on the same Z-index. Depth is implied by the terminal panel using a contrasting dark background (#1A1A1A) against the off-white page.
- **Low-Contrast Outlines:** Instead of shadows, use 1px hairlines for cards or panels.
- **Interactive States:** Buttons and links do not lift; they change color or display a subtle underline.

## Shapes
The shape language is primarily **Sharp**. 

- **Global:** 0px border radius is the standard for buttons, cards, and input fields to maintain a rigorous, architectural feel.
- **Technical Exception:** Terminal panels and code blocks utilize a **6px (0.375rem)** radius to differentiate "software" elements from the "editorial" page content.

## Components
Consistent execution of components maintains the "builder-scholar" motif.

- **Buttons:** Sharp corners. Primary buttons use a solid `#111111` background with `#FAFAF7` text. Secondary buttons use a 1px rule with no background.
- **Terminal Panels:** Dark background (#1A1A1A) with light mono text. Include a "header bar" with three small dots (no color) to mimic a code editor.
- **Input Fields:** Bottom-border only (1px `#111111`). No box enclosure. Label set in Mono Kicker style above the line.
- **Chips/Tags:** Monospace font, 1px rule, 0px radius. Use for technical tags (e.g., `LLM`, `STRATEGY`).
- **Cards:** Defined by 1px hairlines. Use generous internal padding (32px or 40px) to prevent text from feeling cramped.
- **Lists:** Unordered lists use a small terracotta square (2px x 2px) as a bullet point rather than a circle.