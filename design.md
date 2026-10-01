Design System

1. Design Philosophy

⚬ Overall Visual Personality: Creative-Minimalist SaaS & Design-Studio Utility. The aesthetic is tailored specifically for visually literate creatives (designers, video editors, creative directors, brand agencies). It feels like a high-end digital gallery crossed with a modern operating system: uncluttered, structured, utilitarian, yet refined and airy.
⚬ Design Principles:
  1. Canvas Neutrality: The interface acts as a quiet, unobtrusive gallery canvas. The UI steps back so that visual media (imagery, assets, mockups, interactive demos) takes center stage.
  2. Border-First Structure: Structural hierarchy is achieved via razor-thin 1px border rules and soft tonal backgrounds rather than heavy drop shadows.
  3. Typographic Contrast & Tight Tracking: Extreme contrast between massive, tight-tracked display headlines and restrained, highly legible body copy.
  4. Tactile & Pill-Rounded Affordances: Interactive controls (buttons, filters, category badges, tags) use pill geometries (rounded-full) or smooth 12px–16px radiuses, creating an inviting, tactile touch feel.
  5. Modular Bento & Card Logic: Complex workflows and features are parsed into modular, readable cards with distinct visual hierarchy, preview viewports, and metadata strips.
⚬ Emotional Impression: Confident, effortless, modern, creative, trustworthy, and technologically advanced (especially with modern AI/MCP agent integrations). It avoids both cold corporate stiffness and playful consumer kitsch.
⚬ How Whitespace is Used: Whitespace is expansive and rhythmic. Desktop section vertical margins range between 120px and 160px. This generous breathing room prevents visual fatigue when viewing dense media collections and gives each product pillar significant weight.
⚬ How Visual Hierarchy is Established:
  ⚬ Eyebrow / Kicker: 12px–14px uppercase or title-case pill/subtle text setting the immediate feature domain.
  ⚬ Hero Headline: 56px–72px display typography anchoring the eye.
  ⚬ Supporting Body: Max-width constrained (580px–680px) to preserve optimal reading line lengths (50–70 characters).
  ⚬ Interactive Actions: High-contrast solid primary CTA paired with a subtle ghost/outline secondary button.
  ⚬ Media Canvas: Full-bleed or large-radius rounded frames showcasing realistic UI or workflow simulations below the copy.
⚬ What Makes the Design Distinctive:
  ⚬ Tabbed workflow showcases that let visitors preview different creative disciplines (Agencies, E-commerce, Game Studios, Social Media) without reloading.
  ⚬ Interactive conversational MCP/AI terminal mockups demonstrating real workflow prompts and responses.
  ⚬ Generous 16px corner radiuses on all media items and cards (border-radius: 16px).
  ⚬ Strict absence of gaudy multi-color gradients; gradients are kept to subtle neutral scrims, monochrome glows, or soft ambient lighting behind cards.

2. Color System

Palette Analysis

The color scheme is predominantly light and monochromatic (stark whites, soft alabasters, muted slate grays, and deep carbon blacks), accentuated with a signature muted teal/cyan accent (#5DA4A6 / #0EA5E9), deep navy secondary accents (#00327B), and subtle semantic functional colors for badges and statuses.

Color Tokens Table

Token	Approx HEX	Role / Usage	Source / Status
--color-bg-primary	#FFFFFF	Core page background, primary canvas	Observed
--color-bg-secondary	#F9F9FB	Alternating section backgrounds, card surfaces	Observed
--color-bg-tertiary	#F1F3F5	Neutral pill tags, hover states, muted panels	Observed
--color-surface	#FFFFFF	Card backgrounds, dropdown menus, modal sheets	Observed
--color-surface-hover	#FAFAFA	Interactive card and list-item hover fill	Observed
--color-surface-dark	#0B0F17	Dark inverted sections, terminal / MCP demo surfaces	Observed
--color-text-primary	#0F172A	Primary headings, display text, strong elements	Observed
--color-text-secondary	#475569	Body copy, section descriptions, active labels	Observed
--color-text-muted	#94A3B8	Subtitles, disabled items, metadata, footnotes	Observed
--color-text-inverse	#FFFFFF	Text on dark buttons, dark surfaces, badges	Observed
--color-border-subtle	#F1F5F9	Inner dividers, delicate grid borders	Inferred
--color-border	#E2E8F0	Standard card borders, container outlines, inputs	Observed
--color-border-strong	#CBD5E1	Interactive borders on hover, active borders	Inferred
--color-brand-primary	#0F172A	Primary button fill, high-contrast branding	Observed
--color-brand-accent	#5DA4A6	Brand teal/cyan, links, feature tags, highlights	Observed (Brandfetch)
--color-brand-accent-hover	#4A8B8D	Brand accent hover state	Inferred
--color-brand-navy	#00327B	Deep enterprise navy, secondary brand tone	Observed (Brandfetch)
--color-badge-bg	#E0F2FE	Informational / "New" badge background fill	Observed
--color-badge-text	#0284C7	Informational badge text color	Observed
--color-success	#10B981	Positive checks, approval statuses, live indicators	Observed
--color-warning	#F59E0B	In-progress flags, warning indicators	Inferred
--color-danger	#EF4444	Negative items, rejection crosses, destructive acts	Observed

Semantic CSS Color Variables

:root {
  /* Canvas & Surfaces */
  --color-background: #ffffff;
  --color-background-subtle: #f9f9fb;
  --color-background-muted: #f1f3f5;
  --color-surface: #ffffff;
  --color-surface-hover: #f8fafc;
  --color-surface-inverse: #0b0f17;

  /* Text & Content */
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #94a3b8;
  --color-text-inverse: #ffffff;
  --color-text-accent: #5da4a6;

  /* Borders & Dividers */
  --color-border-subtle: #f1f5f9;
  --color-border: #e2e8f0;
  --color-border-hover: #cbd5e1;
  --color-border-dark: #1e293b;

  /* Actions & Brand */
  --color-accent: #5da4a6;
  --color-accent-subtle: #e6f3f3;
  --color-button-primary-bg: #0f172a;
  --color-button-primary-text: #ffffff;
  --color-button-primary-hover: #1e293b;

  --color-button-secondary-bg: #ffffff;
  --color-button-secondary-text: #0f172a;
  --color-button-secondary-border: #e2e8f0;
  --color-button-secondary-hover: #f8fafc;

  --color-button-ghost-text: #475569;
  --color-button-ghost-hover: #f1f5f9;

  /* Feedback & Indicators */
  --color-status-success: #10b981;
  --color-status-danger: #ef4444;
  --color-status-warning: #f59e0b;
}


3. Typography System

Font Family & Architecture

⚬ Primary Typeface: Modern grotesque sans-serif with geometric undertones.
  ⚬ Observed standard fallback stack: Inter, "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif.
  ⚬ Display Headline Feel: Tight aperture, clean neo-grotesque geometry, high x-height, and negative tracking.
  ⚬ Body Feel: Open apertures, clean horizontal terminals, neutral and transparent to reading.
⚬ Monospace Stack (used for code, MCP connector URLs, API parameters): "SF Mono", "Fira Code", Menlo, Monaco, Consolas, monospace.

Reusable Type Scale

Level	Font Size (Desktop)	Font Size (Mobile)	Weight	Line Height	Letter Spacing	Case / Style
Display	68px (4.25rem)	40px (2.5rem)	700 (Bold)	1.08	-0.035em	Normal
H1	52px (3.25rem)	34px (2.125rem)	700 (Bold)	1.12	-0.03em	Normal
H2	40px (2.5rem)	28px (1.75rem)	600 (SemiBold)	1.2	-0.025em	Normal
H3	28px (1.75rem)	22px (1.375rem)	600 (SemiBold)	1.25	-0.02em	Normal
H4	20px (1.25rem)	18px (1.125rem)	600 (SemiBold)	1.35	-0.015em	Normal
Body Large	18px (1.125rem)	16px (1rem)	400 / 500	1.6	-0.01em	Normal
Body	16px (1rem)	15px (0.9375rem)	400 (Regular)	1.55	-0.005em	Normal
Body Small	14px (0.875rem)	13px (0.8125rem)	400 / 500	1.5	0	Normal
Caption	12px (0.75rem)	12px (0.75rem)	500 (Medium)	1.4	+0.01em	Normal
Kicker / Eyebrow	13px (0.8125rem)	12px (0.75rem)	600 (SemiBold)	1.3	+0.04em	Title or Upper
Button	14px–15px	14px	600 (SemiBold)	1.0	-0.01em	Normal
Navigation	14px (0.875rem)	16px	500 (Medium)	1.2	-0.01em	Normal

Responsive Typography Changes

⚬ Display and H1 headlines dynamically scale down using fluid clamp rules:
  font-size: clamp(2.5rem, 5vw + 1rem, 4.25rem);
⚬ H2 headlines scale smoothly from 28px on mobile to 40px on desktop.
⚬ Body text remains stable between 15px and 16px to maintain comfortable readability.
⚬ Letter spacing is tightened on large titles (-0.035em) to prevent disjointed word flow, but neutralizes (-0.005em to 0) on body copy and expands (+0.04em) on tiny uppercase eyebrow kickers.

4. Layout System

Page Dimensions & Constraints

⚬ Max Content Width: 1280px (max-w-7xl in utility terms) for standard site sections.
⚬ Narrow Content Width: 840px–960px for high-focus editorial copy, pricing headers, or centered FAQs.
⚬ Full-Width Bleed Sections: 100vw with internal constrained containers (used for infinite brand marquees, background tints, and edge-to-edge media demos).
⚬ Page Gutters / Margins:
  ⚬ Desktop (≥1024px): 32px to 48px horizontal padding (px-8 to px-12).
  ⚬ Tablet (768px–1023px): 24px horizontal padding (px-6).
  ⚬ Mobile (≤767px): 16px to 20px horizontal padding (px-4 to px-5).

Grid Specifications

⚬ Standard Grid: 12-column responsive CSS Grid / Flexbox layout.
⚬ Column Gaps:
  ⚬ Desktop: 32px (gap-8) or 24px (gap-6) inside cards.
  ⚬ Tablet: 24px (gap-6).
  ⚬ Mobile: 16px (gap-4) with column collapse to single stack.
⚬ Section Layout Structure:
  ⚬ Center-aligned container wrapper: margin: 0 auto; max-width: var(--container-width);.
  ⚬ Outer section wrapper takes width: 100%; and manages vertical spacing and background fills.

Layout CSS Variables

:root {
  --container-max-width: 1280px;
  --container-narrow-width: 896px;
  --container-text-width: 640px;

  --gutter-desktop: 48px;
  --gutter-tablet: 24px;
  --gutter-mobile: 16px;

  --grid-gap-lg: 32px;
  --grid-gap-md: 24px;
  --grid-gap-sm: 16px;
}


5. Spacing System

Spacing Scale

The layout follows a mathematical 4px/8px progressive spacing scale.

Spacing Token	Pixels	Rem	Typical Usage
--space-1	4px	0.25rem	Micro badges, icon-to-label gaps, tag paddings
--space-2	8px	0.5rem	Chip padding, list item vertical gaps, pill margins
--space-3	12px	0.75rem	Button vertical padding, compact card gaps
--space-4	16px	1.0rem	Form control padding, mobile grid gaps
--space-5	20px	1.25rem	Small card padding, dialog internal margins
--space-6	24px	1.5rem	Standard card padding, column gutters
--space-8	32px	2.0rem	Feature card interior padding, desktop column gutters
--space-10	40px	2.5rem	Heading-to-media block spacing
--space-12	48px	3.0rem	Heading group to feature card grid spacing
--space-16	64px	4.0rem	Medium section vertical padding (mobile/tablet)
--space-20	80px	5.0rem	Sub-section vertical padding
--space-24	96px	6.0rem	Standard section top/bottom padding
--space-32	128px	8.0rem	Large section vertical padding (Desktop)
--space-40	160px	10.0rem	Hero top padding, major transition gaps

Component-Specific Spacing Rules

⚬ Section Vertical Padding:
  ⚬ Desktop: 96px to 128px (py-24 to py-32).
  ⚬ Mobile: 56px to 64px (py-14 to py-16).
⚬ Heading Group Spacing:
  ⚬ Eyebrow kicker to H2 title: 12px to 16px.
  ⚬ H2 title to supporting description: 16px to 20px.
  ⚬ Supporting description to CTA group: 24px to 32px.
  ⚬ Entire header block to visual/grid content: 48px to 64px.
⚬ Card Internal Padding:
  ⚬ Standard cards: 28px to 32px desktop, 20px mobile.
  ⚬ Compact bento cards: 24px all around.
  ⚬ Action pills & filter chips: 8px 16px or 10px 20px.
⚬ Navbar Spacing:
  ⚬ Navbar height: 64px to 72px.
  ⚬ Gaps between nav links: 24px to 32px.
  ⚬ Logo to nav start: 40px.

6. Border Radius & Shape Language

Radius Classification

⚬ Shape Profile: Mixed, leaning rounded. Interactive elements (pills, badges, buttons) are hyper-rounded (9999px), while structure containers (cards, showcases, modal frames) utilize soft, modern squircle-like radiuses (16px to 24px).
⚬ Dev documentation confirms standard asset/card radius: .pb-masonry-item img { border-radius: 16px !important; }.

Reusable Radius Tokens

Radius Token	Value	Target UI Elements
--radius-sm	6px	Micro tags, tooltips, code inline snippets
--radius-md	10px	Input fields, sub-menu items, small preview tiles
--radius-lg	14px	Secondary buttons, dropdown flyouts, mini-app cards
--radius-xl	16px	Masonry media items, standard feature cards, preview boxes
--radius-2xl	24px	Large hero media containers, bento cards, pricing cards
--radius-3xl	32px	Large spotlight containers, modal dialogs, full-width cards
--radius-pill	9999px	Buttons, filter tabs, status badges, search chips, avatar rings
--radius-circle	50%	Round icon buttons, play triggers, user avatars

7. Borders & Shadows

Border Philosophy

Playbook prioritizes borders over shadows. Dense drop shadows are deliberately avoided to maintain a crisp, vector-like, lightweight interface. Where shadows exist, they are ambient, low-opacity, and expansive, avoiding harsh edges.

Border Specifications

⚬ Standard Border Thickness: 1px solid.
⚬ Divider Thickness: 1px solid (#E2E8F0).
⚬ Focus Ring: 2px solid #0F172A with 2px offset.
⚬ Card Outlines: 1px solid var(--color-border) (#E2E8F0 or rgba(0,0,0,0.08)).
⚬ Dark Surface Outlines: 1px solid rgba(255, 255, 255, 0.1).

Shadow Specifications

:root {
  /* Border tokens */
  --border-width-default: 1px;
  --border-default: 1px solid var(--color-border);
  --border-subtle: 1px solid var(--color-border-subtle);
  --border-dark: 1px solid rgba(255, 255, 255, 0.1);

  /* Shadow tokens */
  /* Subtle elevation for popovers and hover states */
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04);
  --shadow-lg: 0 12px 28px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 24px 48px -12px rgba(0, 0, 0, 0.14);

  /* Hover Lift Shadow */
  --shadow-card-hover: 0 16px 32px -8px rgba(0, 0, 0, 0.08);
}


8. Navigation / Header

Architectural Breakdown

⚬ Positioning: Sticky / Fixed at page top (position: sticky; top: 0; z-index: 50;).
⚬ Height: Desktop 72px, Mobile 60px–64px.
⚬ Background & Material:
  ⚬ Glassmorphic translucent blur: background: rgba(255, 255, 255, 0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);.
  ⚬ Border bottom: 1px solid rgba(226, 232, 240, 0.8).
⚬ Layout Distribution: 3-Zone Flexbox (justify-content: space-between; align-items: center;).
  1. Zone Left: Brand logo + wordmark (SVG, ~120px width).
  2. Zone Center: Navigation links horizontal menu (display: flex; gap: 28px;).
    ⚬ Nav item links with chevron indicator for dropdowns ("Solutions", "Resources").
    ⚬ Badged links: "MCP" accompanied by a tiny badge (e.g., "New" in teal/cyan).
  3. Zone Right: Language switcher dropdown + Secondary Action ("Schedule a demo") + Primary Pill CTA ("Get started").

Interaction & Dropdown Behavior

⚬ Dropdown menus activate on hover or click.
⚬ Flyout panels appear with a fade-in and subtle translateY(4px) animation.
⚬ Flyouts use a 2-column mega-menu format:
  ⚬ Column 1: Feature category list with subtitle hints (e.g., Enterprise Marketing, Media & Entertainment).
  ⚬ Column 2: Visual card highlight (e.g., "Browse template gallery" with thumbnail preview).
⚬ Dropdown styling: border-radius: 16px; border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); background: #ffffff; padding: 24px;.

Mobile Navigation Behavior

⚬ On screens < 1024px, center navigation and secondary buttons collapse.
⚬ Hamburger icon button (24px icon inside a 40px touch target) on the right.
⚬ Slide-down or full-screen overlay panel displaying all links stacked vertically with accordion dropdowns, followed by full-width CTAs at the bottom.

9. Buttons

Button Architecture & Specifications

Every major button variant follows consistent geometry, typography (font-weight: 600), and smooth transition timings (150ms-200ms ease-out).

                    ┌────────────────────────────┐
                    │       Primary Button       │
                    │  [Icon]  Get started   →   │
                    └────────────────────────────┘
                         border-radius: 9999px


Button Specifications Table

Variant	Background	Text Color	Border	Padding (H/V)	Radius	Hover State
Primary	#0F172A	#FFFFFF	None	24px / 12px	9999px (Pill)	#1E293B, slight scale(1.01)
Secondary	#FFFFFF	#0F172A	1px solid #E2E8F0	22px / 11px	9999px (Pill)	#F8FAFC, border #CBD5E1
Ghost	transparent	#475569	None	16px / 10px	9999px	#F1F5F9, text #0F172A
Accent Pill	#5DA4A6	#FFFFFF	None	22px / 11px	9999px	#4A8B8D
Dark Invert	#FFFFFF	#0B0F17	None	24px / 12px	9999px	#F1F5F9
Icon Button	transparent	#475569	1px solid #E2E8F0	10px / 10px	50% or 12px	#F8FAFC, text #0F172A

CSS Specifications

/* Base Button Structure */
.button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.01em;
  white-space: nowrap;
  cursor: pointer;
  transition: all 180ms cubic-bezier(0.16, 1, 0.3, 1);
  outline: none;
  text-decoration: none;
}

/* Primary Button */
.button-primary {
  composes: button-base;
  background-color: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
  padding: 12px 24px;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
}
.button-primary:hover {
  background-color: var(--color-button-primary-hover);
  transform: translateY(-1px);
}
.button-primary:active {
  transform: translateY(0);
}

/* Secondary Button */
.button-secondary {
  composes: button-base;
  background-color: var(--color-button-secondary-bg);
  color: var(--color-button-secondary-text);
  padding: 11px 22px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-button-secondary-border);
}
.button-secondary:hover {
  background-color: var(--color-button-secondary-hover);
  border-color: var(--color-border-hover);
}

/* Ghost Button */
.button-ghost {
  composes: button-base;
  background-color: transparent;
  color: var(--color-button-ghost-text);
  padding: 10px 18px;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
}
.button-ghost:hover {
  background-color: var(--color-button-ghost-hover);
  color: var(--color-text-primary);
}

/* Filter / Tab Pill */
.tab-pill {
  padding: 8px 18px;
  border-radius: var(--radius-pill);
  font-size: 13px;
  font-weight: 500;
  background: transparent;
  color: var(--color-text-secondary);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 150ms ease;
}
.tab-pill.active {
  background: #0f172a;
  color: #ffffff;
}
.tab-pill:not(.active):hover {
  background: var(--color-background-muted);
  color: var(--color-text-primary);
}


10. Cards

Card Design Language

Cards in this system serve as self-contained feature displays, pricing columns, or asset showcases. They are strictly structured with crisp outlines and generous radiuses.

⚬ Background: Solid white (#FFFFFF) or tinted neutral (#F9F9FB).
⚬ Borders: Continuous 1px solid var(--color-border) (#E2E8F0).
⚬ Radius: 16px for standard feature units; 24px for prominent pricing or bento cards.
⚬ Padding:
  ⚬ Compact cards: 20px to 24px.
  ⚬ Feature cards: 32px.
  ⚬ Hero preview boxes: 40px.
⚬ Card Proportions:
  ⚬ 3-Column cards: ~1:1 or 4:5 vertical portrait orientation.
  ⚬ 2-Column split cards: 16:10 landscape orientation.
⚬ Hover Behavior: Subtle border brightening (#CBD5E1), slight elevation shadow (var(--shadow-card-hover)), and mild image zoom (scale(1.02)) on embedded thumbnails.

Card Usage Matrix

⚬ When to Use:
  ⚬ For parallel information groups (Pricing tiers, Customer stories, Feature pillars).
  ⚬ To simulate UI containers (Asset inspectors, Chat threads, MCP setup walkthroughs).
⚬ When NOT to Use:
  ⚬ For pure sequential narrative text; use whitespace-separated sections instead.
  ⚬ Overstacking cards inside other cards (prevents visual nesting fatigue).

11. Image & Media Treatment

Media Rules & Specifications

1. Corner Radius:
  ⚬ Every media element (image, video player, screenshot preview) must have an explicit border-radius: 16px or match its parent card radius.
2. Borders on Media:
  ⚬ Screenshots and UI mockups require a delicate 1px solid rgba(0, 0, 0, 0.08) outline to separate light screenshots from the white canvas.
3. Aspect Ratios:
  ⚬ Asset Grid Items: Masonry dynamic height or standardized 4:3 and 1:1.
  ⚬ Video / Interactive Demos: 16:9 or 16:10.
  ⚬ Feature Previews: 3:2 landscape crop.
4. Object-Fit Behavior: object-fit: cover; for photography and thumbnails; object-fit: contain; for partner brand logos and vector artwork.
5. Simulated UI Containers:
  ⚬ Product screenshots are embedded inside realistic browser or app shells complete with simulated titlebars, subtle dot controls, or tab bars.
6. Partner Brand Logos:
  ⚬ Rendered in uniform flat grayscale (filter: grayscale(100%); opacity: 0.55;).
  ⚬ On hover: opacity: 0.9; filter: grayscale(0%); transition: opacity 200ms ease;.

12. Hero Section

Architecture & Composition

The hero section is a centered or high-impact asymmetric stack prioritizing immediate clarity and visual authority.

┌───────────────────────────────────────────────────────────┐
│                     [Eyebrow Pill]                        │
│                   From upload to final                    │
│                                                           │
│          One library for your entire creative ops.        │
│                                                           │
│     Built for teams working with more assets than anyone   │
│     can keep track of, with an API and MCP server...      │
│                                                           │
│           [ Start Free (Pill) ]  [ Book a demo ]          │
│                                                           │
│   ┌───────────────────────────────────────────────────┐   │
│   │                                                   │   │
│   │           [ Large Visual Media Showcase ]         │   │
│   │            (Masonry Asset Canvas Preview)         │   │
│   │                                                   │   │
│   └───────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────────┘


⚬ Vertical Spacing:
  ⚬ Top padding: 80px to 110px below navbar.
  ⚬ Bottom padding: 96px to 120px before logo strip.
⚬ Content Max-Width:
  ⚬ Headline block: 860px centered.
  ⚬ Subtitle body: 620px centered.
⚬ Headline Sizing: 52px–68px desktop, 36px–42px mobile; line-height: 1.08; letter-spacing: -0.035em.
⚬ CTA Arrangement:
  ⚬ Horizontal inline button row (display: flex; gap: 12px; justify-content: center;).
  ⚬ Stacks vertically on mobile (flex-direction: column; width: 100%;).
⚬ Hero Visual Preview:
  ⚬ Positioned directly below CTA cluster (margin-top: 48px; to 64px;).
  ⚬ Rendered as an expansive, rich canvas displaying asset cards, media tags, floating metadata badges, and frame annotations.
  ⚬ Outer border radius: 24px with subtle border and ambient shadow.

13. Section Patterns

Pattern A — Text + Media (Split 2-Column)

⚬ Purpose: Explain core feature pillars with contextual visual proof.
⚬ Structure: 50/50 desktop split; text column left (or right) and live demo/screenshot opposite.
⚬ Layout:
  ⚬ Desktop: 2-column flex or grid (grid-template-columns: 1fr 1.15fr; gap: 64px; align-items: center;).
  ⚬ Mobile: Column reverse or standard stack (text first, media second).
⚬ Spacing: py-24 (96px).
⚬ When to Use: Core feature introductions ("Upload & organize", "Review & approvals").

Pattern B — Feature Grid (3-Column Bento)

⚬ Purpose: Group secondary capabilities under a unified theme.
⚬ Structure: 3 distinct cards placed side by side.
⚬ Layout: grid-template-columns: repeat(3, 1fr); gap: 24px;.
  ⚬ Mobile: Single column stack.
⚬ Card Contents: Icon/Badge top, bold H4 heading, descriptive paragraph, graphic asset or micro-UI preview at card bottom.
⚬ When to Use: Feature sets such as "Conversational Search", "AI Actions", "AI Organize".

Pattern C — Logo / Trust Strip (Marquee / Ticker)

⚬ Purpose: Build immediate brand credibility through social proof.
⚬ Structure: Centered kicker ("Over two million creatives, and world-class brands") followed by a multi-logo continuous marquee or 2-row wrapped grid.
⚬ Styling: Monochrome logos, height: 28px–36px, opacity: 0.55, evenly distributed with gap: 48px.
⚬ When to Use: Immediately following the hero section.

Pattern D — Interactive Workflow / Tabbed Showcase

⚬ Purpose: Allow visitors to self-identify their role/use-case without navigating away.
⚬ Structure:
  1. Section header (Kicker, title, subtext).
  2. Horizontal scrollable pill-tab bar ("Agencies", "E-commerce", "Game Studio", etc.).
  3. Dynamic display canvas updating assets based on selected tab.
⚬ When to Use: Demonstrating versatility across multiple verticals or file formats.

Pattern E — Interactive Chat / Protocol Simulation (MCP Demo)

⚬ Purpose: Demystify developer or AI integrations.
⚬ Structure:
  ⚬ Left column: 3-step numbered setup list with copyable URL inputs.
  ⚬ Right column: Simulated conversational chat UI displaying user requests and automated system actions.
⚬ Styling: Inverted dark surface (#0B0F17) or ultra-clean card with terminal font accents.
⚬ When to Use: Technical feature explanations, AI capabilities, API integrations.

Pattern F — Enterprise Contrast Comparison Matrix

⚬ Purpose: Highlight advantages by contrasting positive capabilities against legacy DAM frustrations.
⚬ Structure: 2 parallel comparison cards:
  ⚬ Column 1 ("Everything you'd expect"): Clean checklist with green checkmark icons.
  ⚬ Column 2 ("None of what you don't"): Struck-through list with subtle red/muted cross icons.
⚬ When to Use: B2B enterprise differentiation sections.

Pattern G — Testimonial / Customer Story Grid

⚬ Purpose: Humanize product outcomes with authentic social proof.
⚬ Structure: Grid of card stories with customer logo, brief headline summary, author attribution, and pull-quote callout.
⚬ Spacing: gap: 24px, card radius 16px.
⚬ When to Use: Near the lower third of the page preceding pricing.

Pattern H — 4-Tier Pricing Grid

⚬ Purpose: Transparent conversion path with clear tier differentiation.
⚬ Structure:
  ⚬ Billing toggle pill (Monthly / Yearly — Save 20–45%).
  ⚬ 4-column cards: Free, Pro, Team, Business.
  ⚬ Highlighted card (Pro or Team) with distinctive border or badge.
  ⚬ Feature list with checkmark icons.
  ⚬ Bottom trust strip: Security guarantee text (SOC2, encryption, malware scan).
⚬ When to Use: Pricing page and bottom homepage conversion section.

Pattern I — Global Pre-Footer CTA

⚬ Purpose: Final frictionless conversion prompt.
⚬ Structure: High-contrast card or centered section with huge headline ("Start with one folder..."), dual CTA buttons, and secondary QR-code mobile app companion pill.
⚬ When to Use: Immediately preceding the global directory footer.

Pattern J — Multi-Column Directory Footer

⚬ Purpose: SEO navigation and comprehensive index.
⚬ Structure: 5 to 6 vertical link columns categorized under uppercase headers, plus bottom legal/copyright baseline.
⚬ Background: Soft off-white (#F9F9FB) with subtle top border.

14. Grid & Feature Layouts

Layout Archetypes

1. 2-Column Split Layout

⚬ CSS Grid: grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 48px;
⚬ Vertical Alignment: align-items: center;
⚬ Responsive Rule: At max-width: 900px, collapses to grid-template-columns: 1fr; gap: 32px;.

2. 3-Column Equal Card Grid

⚬ CSS Grid: grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px;
⚬ Responsive Rule: At 1024px, drops to 2 columns; at 640px, drops to 1 column.

3. 4-Column Pricing & Metric Grid

⚬ CSS Grid: grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px;
⚬ Responsive Rule: At 1100px, collapses to 2x2 grid; at 640px, collapses to single stacked column.

4. Asymmetric Bento Layout

⚬ Rule: Mix 2-span and 1-span cards inside a 3-column or 4-column matrix.
  ⚬ Card A: grid-column: span 2; (Primary hero feature with rich preview).
  ⚬ Card B: grid-column: span 1; (Stat or single quick action).
  ⚬ Card C: grid-column: span 1;
  ⚬ Card D: grid-column: span 2;

15. Responsive Design

Breakpoint Matrix

Breakpoint Name	Media Query Width	Container Width	Margin / Gutter	Grid Stacking Behavior
Large Desktop	≥ 1440px	1280px	48px	Full multi-column grids, horizontal layouts
Desktop	1024px – 1439px	1000px – 1200px	32px	3 and 4-column grids scale proportionately
Tablet	768px – 1023px	100% (max-w-3xl)	24px	4-col → 2-col; 3-col → 2-col; Nav menu collapses
Mobile	≤ 767px	100%	16px	All multi-col grids collapse to 1-col; full-width buttons

Responsive Behavior Rules

1. Typography Scaling:
  ⚬ Headings downscale smoothly by ~30% to 40% on mobile devices to prevent excessive line wrapping.
  ⚬ Subtitle line lengths adapt via width: 100%.
2. Button Groups:
  ⚬ Desktop: Inline flex rows (flex-direction: row; gap: 12px;).
  ⚬ Mobile: Vertical stacks (flex-direction: column; width: 100%;), each button expanding to width: 100%.
3. Tab Bars / Filter Pills:
  ⚬ Desktop: Centered inline row.
  ⚬ Mobile: Horizontally scrollable overflow container (overflow-x: auto; flex-wrap: nowrap; -webkit-overflow-scrolling: touch; scrollbar-width: none;).
4. Header Navigation:
  ⚬ Desktop: Complete links + CTA row visible.
  ⚬ Mobile: Hamburger trigger opens full-screen slide-down drawer.

Media Query Definitions

/* Responsive Breakpoint Mixins / Queries */
@media (max-width: 1024px) {
  .nav-desktop { display: none; }
  .nav-mobile-toggle { display: flex; }
  .grid-3-col { grid-template-columns: repeat(2, 1fr); }
  .grid-4-col { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  :root {
    --gutter-desktop: 16px;
  }
  .grid-2-col,
  .grid-3-col,
  .grid-4-col {
    grid-template-columns: 1fr;
  }
  .hero-cta-group {
    flex-direction: column;
    width: 100%;
  }
  .hero-cta-group .button-primary,
  .hero-cta-group .button-secondary {
    width: 100%;
  }
}


16. Interaction & Motion

Motion Principles

Motion is snappy, subtle, and utilitarian. Animations exist strictly to reinforce direct manipulation, hierarchy transitions, and state changes. No bouncy or distractive visual effects.

Interaction Specifications

⚬ Button Hover:
  ⚬ transform: translateY(-1px);
  ⚬ Duration: 180ms.
  ⚬ Easing: cubic-bezier(0.16, 1, 0.3, 1).
⚬ Card Hover:
  ⚬ Border transitions from #E2E8F0 to #CBD5E1.
  ⚬ Shadow transitions from --shadow-xs to --shadow-card-hover.
  ⚬ Duration: 200ms ease.
⚬ Dropdown Menu Reveal:
  ⚬ Opacity from 0 to 1; translateY from -6px to 0px.
  ⚬ Duration: 150ms ease-out.
⚬ Accordion FAQ Toggle:
  ⚬ Content container uses transition: height 250ms ease, opacity 200ms ease.
⚬ Infinite Logo Marquee:
  ⚬ CSS keyframe animation translateX(0) to translateX(-50%) running infinitely over 35s to 50s with linear pacing. Pauses on hover (animation-play-state: paused).

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}
.animate-marquee:hover {
  animation-play-state: paused;
}


17. Iconography

Icon Attributes

⚬ Visual Style: Clean, geometric, uniform line-art (stroke-based).
⚬ Stroke Width: 1.5px (regular) to 1.75px (semi-bold) on a 24x24 viewbox.
⚬ Standard Sizes:
  ⚬ Micro / Inline with text: 14px–16px.
  ⚬ Standard action / list icon: 18px–20px.
  ⚬ Feature card badge icon: 24px (inside a 44px circular or squircle container).
⚬ Coloration:
  ⚬ Active / Primary: Matches text color (var(--color-text-primary)).
  ⚬ Secondary: Muted slate (var(--color-text-muted)).
  ⚬ Verification: Green (#10B981) for approvals/checks; red/muted for exclusions.
⚬ Recommended Library: lucide-react, phosphor-icons, or feather-icons.

18. Reusable Component Inventory

1. Navbar

⚬ Purpose: Global persistent navigation and branding.
⚬ Props: links: Array<{ label, href, badge?, dropdown? }>, cta: { label, href }.
⚬ Responsive: Switches to mobile hamburger drawer at < 1024px.

2. Hero

⚬ Purpose: First viewport communication of value proposition.
⚬ Props: eyebrowBadge: string, title: string, subtitle: string, primaryAction: ButtonProps, secondaryAction: ButtonProps, previewSlot: ReactNode.

3. LogoCloud

⚬ Purpose: Third-party trust building.
⚬ Props: title: string, logos: Array<{ name, logoUrl }>, variant: "marquee" | "static-grid".

4. TabbedShowcase

⚬ Purpose: Interactive feature exploration by persona or format.
⚬ Props: tabs: Array<{ id, label, content: { title, desc, mediaUrl } }>.
⚬ Internal State: Active tab index.

5. FeatureCard

⚬ Purpose: Modular presentation of feature capabilities.
⚬ Variants: "standard" (vertical), "horizontal" (split), "bento-large" (2-span).
⚬ Props: kicker?: string, title: string, description: string, mediaSlot?: ReactNode, badge?: string.

6. ChatSimulation

⚬ Purpose: Concrete demonstration of AI / MCP workflows.
⚬ Props: messages: Array<{ sender: "user" | "bot" | "system", content: string, status?: string, attachment?: ReactNode }>.

7. ComparisonTable

⚬ Purpose: Enterprise value vs legacy complexity contrast.
⚬ Props: positiveTitle: string, positiveItems: string[], negativeTitle: string, negativeItems: string[].

8. PricingCard

⚬ Purpose: Subscription tier breakdown.
⚬ Props: tierName: string, price: string, billingInterval: string, savingsBadge?: string, description: string, features: string[], isFeatured?: boolean, cta: ButtonProps.

9. Accordion / FAQItem

⚬ Purpose: Resolving user objections and edge-case questions.
⚬ Props: items: Array<{ question: string, answer: string }>.

10. PreFooterCTA

⚬ Purpose: Final bottom conversion anchor.
⚬ Props: title: string, primaryAction: ButtonProps, secondaryAction?: ButtonProps, companionBadge?: ReactNode.

11. Footer

⚬ Purpose: Directory navigation and legal baseline.
⚬ Props: columns: Array<{ header: string, links: Array<{ label, href }> }>, copyright: string.

19. Complete Design Tokens (CSS Variables)

:root {
  /* -------------------------------------------------------------
     1. COLOR TOKENS
     ------------------------------------------------------------- */
  /* Canvas Backgrounds */
  --color-bg: #ffffff;
  --color-bg-alt: #f9f9fb;
  --color-bg-muted: #f1f3f5;
  --color-bg-dark: #0b0f17;

  /* Surfaces & Cards */
  --color-surface: #ffffff;
  --color-surface-hover: #f8fafc;
  --color-surface-tint: #f8fafc;
  --color-surface-dark: #111827;

  /* Typography */
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #94a3b8;
  --color-text-inverse: #ffffff;

  /* Borders */
  --color-border: #e2e8f0;
  --color-border-subtle: #f1f5f9;
  --color-border-hover: #cbd5e1;
  --color-border-dark: rgba(255, 255, 255, 0.12);

  /* Accents & Brand */
  --color-brand-accent: #5da4a6;
  --color-brand-accent-hover: #4a8b8d;
  --color-brand-navy: #00327b;
  --color-accent-subtle: #e6f3f3;

  /* Buttons */
  --color-btn-primary-bg: #0f172a;
  --color-btn-primary-text: #ffffff;
  --color-btn-primary-hover: #1e293b;

  --color-btn-secondary-bg: #ffffff;
  --color-btn-secondary-text: #0f172a;
  --color-btn-secondary-border: #e2e8f0;
  --color-btn-secondary-hover: #f8fafc;

  /* Status */
  --color-success: #10b981;
  --color-danger: #ef4444;
  --color-warning: #f59e0b;
  --color-badge-bg: #e0f2fe;
  --color-badge-text: #0284c7;

  /* -------------------------------------------------------------
     2. TYPOGRAPHY TOKENS
     ------------------------------------------------------------- */
  --font-family-sans: "Inter", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-family-mono: "SF Mono", Menlo, Monaco, Consolas, "Fira Code", monospace;

  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Letter Spacing */
  --tracking-tighter: -0.035em;
  --tracking-tight: -0.025em;
  --tracking-normal: -0.005em;
  --tracking-wide: 0.04em;

  /* -------------------------------------------------------------
     3. SPACING SCALE
     ------------------------------------------------------------- */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  --space-40: 160px;

  /* Section Spacing Aliases */
  --section-padding-y: var(--space-24);
  --section-padding-y-lg: var(--space-32);
  --section-padding-y-mobile: var(--space-16);

  /* -------------------------------------------------------------
     4. BORDER RADIUS TOKENS
     ------------------------------------------------------------- */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 24px;
  --radius-3xl: 32px;
  --radius-pill: 9999px;
  --radius-circle: 50%;

  /* -------------------------------------------------------------
     5. SHADOW ELEVATIONS
     ------------------------------------------------------------- */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04);
  --shadow-lg: 0 12px 28px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.04);
  --shadow-xl: 0 24px 48px -12px rgba(0, 0, 0, 0.14);
  --shadow-card-hover: 0 16px 32px -8px rgba(0, 0, 0, 0.08);

  /* -------------------------------------------------------------
     6. CONTAINERS & BREAKPOINTS
     ------------------------------------------------------------- */
  --container-max: 1280px;
  --container-narrow: 896px;
  --container-text: 640px;

  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1440px;

  /* -------------------------------------------------------------
     7. TRANSITIONS & TIMING
     ------------------------------------------------------------- */
  --transition-fast: 150ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-normal: 200ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 350ms cubic-bezier(0.16, 1, 0.3, 1);

  /* -------------------------------------------------------------
     8. Z-INDEX SYSTEM
     ------------------------------------------------------------- */
  --z-base: 1;
  --z-dropdown: 20;
  --z-sticky-nav: 50;
  --z-modal-backdrop: 90;
  --z-modal: 100;
  --z-toast: 110;
}


20. Recommended CSS Architecture

To maintain scalability without styling bleed, structure code into modular layers:

src/styles/
├── variables.css      /* CSS custom properties (Tokens defined above) */
├── reset.css          /* Modern CSS reset with box-sizing: border-box */
├── typography.css     /* Type scale classes (.display, .h1, .h2, .body, etc.) */
├── layout.css         /* Container, grid, and flexbox utilities */
├── components/        /* Independent component rules */
│   ├── buttons.css    /* .btn-primary, .btn-secondary, .btn-ghost */
│   ├── navbar.css     /* Header, mobile menu, dropdown panels */
│   ├── cards.css      /* .card, .card-bento, .card-pricing */
│   ├── tabs.css       /* .tab-pill, .tab-group */
│   ├── badges.css     /* .badge, .badge-new, .badge-pill */
│   └── footer.css     /* Footer columns and legal strip */
└── sections/          /* Specific section-level wrappers */
    ├── hero.css       /* Hero layout, visual container */
    ├── marquee.css    /* Logo cloud infinite scroll */
    ├── showcase.css   /* Tabbed workflow canvas */
    └── pricing.css    /* Pricing grid and feature list */


21. Reusable Page Architecture Skeleton

An implementation inspired by this design system should generally be assembled in the following sequence:

<div class="site-wrapper">
  <!-- Sticky Translucent Header -->
  <header class="site-header">
    <nav class="nav-container">
      <div class="nav-logo"><!-- Logo SVG --></div>
      <div class="nav-links"><!-- Links & Dropdowns --></div>
      <div class="nav-actions">
        <a class="btn-ghost">Schedule a demo</a>
        <a class="btn-primary">Get started</a>
      </div>
    </nav>
  </header>

  <main>
    <!-- 1. Hero Section -->
    <section class="section-hero">
      <div class="container-text-center">
        <span class="badge-pill">Workflow Intelligence</span>
        <h1 class="display-title">One workspace for your entire media operations.</h1>
        <p class="body-large">Built for creative teams managing high-volume production assets.</p>
        <div class="hero-cta-group">
          <button class="btn-primary">Start free trial</button>
          <button class="btn-secondary">Explore features</button>
        </div>
      </div>
      <div class="hero-media-container">
        <!-- Interactive Canvas / Asset Grid Preview -->
      </div>
    </section>

    <!-- 2. Brand Trust Strip -->
    <section class="section-trust-ticker">
      <p class="kicker-label">Trusted by high-velocity teams</p>
      <div class="marquee-track">
        <!-- Logo SVG instances -->
      </div>
    </section>

    <!-- 3. Primary Feature Pillar (Tabbed Showcase) -->
    <section class="section-tabbed-showcase">
      <div class="section-header-center">
        <span class="eyebrow">Organize & Discover</span>
        <h2>Every asset cataloged and instantly searchable.</h2>
      </div>
      <div class="tab-pill-group">
        <!-- Pill Tabs: Video, Design, 3D, Photography -->
      </div>
      <div class="showcase-viewport">
        <!-- Masonry asset cards with tag chips -->
      </div>
    </section>

    <!-- 4. Feature Bento Grid (3-Column) -->
    <section class="section-bento">
      <div class="grid-3-col">
        <div class="card-bento"><!-- Feature A --></div>
        <div class="card-bento"><!-- Feature B --></div>
        <div class="card-bento"><!-- Feature C --></div>
      </div>
    </section>

    <!-- 5. Technical / Protocol Simulation (MCP / API) -->
    <section class="section-protocol-demo">
      <div class="grid-2-col-split">
        <div class="protocol-steps"><!-- 1-2-3 numbered walkthrough --></div>
        <div class="protocol-chat-box"><!-- Interactive terminal / chat simulation --></div>
      </div>
    </section>

    <!-- 6. Enterprise Contrast Matrix -->
    <section class="section-comparison">
      <div class="grid-2-col-contrast">
        <div class="card-expect"><!-- Checklist with green ticks --></div>
        <div class="card-avoid"><!-- Struck-through items --></div>
      </div>
    </section>

    <!-- 7. Customer Stories / Testimonials -->
    <section class="section-testimonials">
      <div class="testimonial-grid">
        <!-- Story cards with metric highlights -->
      </div>
    </section>

    <!-- 8. Pricing Tiers -->
    <section class="section-pricing">
      <div class="section-header-center">
        <h2>Transparent plans that scale with you.</h2>
        <div class="billing-toggle"><!-- Monthly / Yearly --></div>
      </div>
      <div class="grid-4-col-pricing">
        <!-- Free, Pro, Team, Business -->
      </div>
    </section>

    <!-- 9. Final Pre-Footer Callout -->
    <section class="section-final-cta">
      <div class="cta-card-box">
        <h2>Start organizing your creative library today.</h2>
        <div class="cta-actions">
          <button class="btn-primary">Sign up free</button>
          <button class="btn-secondary">Talk to sales</button>
        </div>
      </div>
    </section>
  </main>

  <!-- 10. Global Directory Footer -->
  <footer class="site-footer">
    <div class="footer-columns">
      <!-- 5-6 Link columns -->
    </div>
    <div class="footer-legal-bar">
      <!-- Copyright, status indicator, policy links -->
    </div>
  </footer>
</div>


22. Design Rules for AI Coding Agents

When implementing interfaces adhering to this design specification, strictly follow these 20 rules:

1. Maintain Crisp, Thin Outlines: Always prefer 1px solid var(--color-border) over drop shadows to delineate cards, containers, and inputs.
2. Commit to Pill Geometry for Controls: All standalone buttons, search chips, category filters, and status tags must use border-radius: 9999px (rounded-full).
3. Never Round Media Sharply: All image thumbnails, video viewports, and simulated mockups must use border-radius: 16px (var(--radius-lg)).
4. Enforce Negative Tracking on Large Headlines: Headings ≥32px must carry negative letter spacing (-0.025em to -0.035em). Never leave large display headings at default browser tracking.
5. Constrain Reading Lengths: Cap body paragraph containers to max-width: 640px (max-w-2xl). Never allow descriptive text to span full-width across large viewports.
6. Limit Color Invasions: Keep canvases predominantly white (#FFFFFF) or off-white (#F9F9FB). Restrict brand teal/cyan (#5DA4A6) to accents, badges, active tabs, and primary highlights.
7. Use Subtle Gray for Secondary Text: Do not render secondary copy in black. Use #475569 (slate-600) for body descriptions and #94A3B8 (slate-400) for metadata.
8. Provide Generous Desktop Vertical Spacing: Section paddings must never drop below 96px on desktop viewports. Give sections breathing room.
9. Eliminate Gaudy Skeuomorphism & Neon Glows: Avoid heavy radial gradients, neon borders, multi-colored drop shadows, or glossy glass skeuomorphism.
10. Include Eyebrow Kickers: Every major section title must be preceded by an eyebrow kicker (12px–14px semi-bold, uppercase or title-case pill).
11. Use Inverted Dark Surfaces Only for Technical / Terminal Sections: Reserve dark background cards (#0B0F17) specifically for code snippets, API demos, or MCP chat simulations.
12. Ensure Fluid Responsive Stacking: All 3-column and 4-column grids must convert to single-column or 2-column layouts at ≤768px.
13. Keep Buttons High-Contrast: Primary buttons must be solid dark carbon (#0F172A) with pure white text (#FFFFFF) on light surfaces.
14. Desaturate Partner Logos: All client/partner logos in social proof strips must be rendered in grayscale with ~50% opacity, transitioning to 90% opacity on hover.
15. Support Touch-Friendly Horizontal Scroll on Mobile: Mobile pill lists and filter bars must scroll horizontally with -webkit-overflow-scrolling: touch and hidden scrollbars.
16. Keep Borders on Light Screenshots: When placing a white or light-themed product mockup on a white background, always add an inner or outer border (1px solid rgba(0,0,0,0.08)).
17. Always Align Headings to the Left in Feature Sections: Center-align hero titles and pricing titles, but left-align split 2-column feature blocks.
18. Avoid Text Widows: Use text-wrap: balance; on all primary headlines to ensure clean line endings.
19. Preserve Fast, Subtle Motion Timings: Never set hover transitions slower than 200ms. Use snappy timing functions (cubic-bezier(0.16, 1, 0.3, 1)).
20. Avoid Generic Rounded Rectangles for CTAs: Do not use standard 4px or 6px radiuses on buttons; use the signature pill radius (9999px).

23. Do / Don't Guide

Do	Don't
Use pill-shaped (9999px) buttons and interactive filter tabs	Don't use boxy 4px or sharp 0px corners on buttons
Use 16px corner radius on media, screenshots, and asset cards	Don't mix mismatched radiuses (e.g. 8px on one card, 24px on another)
Rely on 1px borders (#E2E8F0) to structure cards and modules	Don't rely on dark, blurry drop shadows for card separation
Use negative tracking (-0.03em) on large display titles	Don't use loose or wide letter spacing on massive headlines
Give sections generous breathing room (96px–128px padding)	Don't crowd sections with cramped 32px vertical margins
Use subtle monochrome logo marquees with lowered opacity	Don't display full-color distracting client logos in trust strips
Embed product visuals in realistic, clean UI containers	Don't float raw, unpadded, borderless screenshots on white canvases
Keep the color palette neutral, letting media provide the color	Don't introduce arbitrary rainbow background gradients
Provide clear visual contrast (dark primary CTA + light secondary)	Don't use multiple competing primary-colored buttons side by side
Use clear checkmarks and struck-out indicators for feature tables	Don't write dense, wall-of-text feature lists

24. Ready-to-Use CSS Tokens Block

/* ==========================================================================
   DESIGN SYSTEM TOKENS (Design.md)
   Ready-to-use stylesheet variable definition
   ========================================================================== */

:root {
  /* Colors - Base Canvas & Surfaces */
  --color-bg: #ffffff;
  --color-bg-subtle: #f9f9fb;
  --color-bg-muted: #f1f3f5;
  --color-bg-dark: #0b0f17;
  --color-surface: #ffffff;
  --color-surface-hover: #f8fafc;
  --color-surface-dark: #111827;

  /* Colors - Content & Typography */
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #94a3b8;
  --color-text-inverse: #ffffff;

  /* Colors - Borders */
  --color-border: #e2e8f0;
  --color-border-subtle: #f1f5f9;
  --color-border-hover: #cbd5e1;
  --color-border-dark: rgba(255, 255, 255, 0.12);

  /* Colors - Brand & Accents */
  --color-accent: #5da4a6;
  --color-accent-hover: #4a8b8d;
  --color-accent-subtle: #e6f3f3;
  --color-brand-navy: #00327b;

  /* Colors - Functional & Actions */
  --color-btn-primary-bg: #0f172a;
  --color-btn-primary-text: #ffffff;
  --color-btn-primary-hover: #1e293b;
  --color-btn-secondary-bg: #ffffff;
  --color-btn-secondary-text: #0f172a;
  --color-btn-secondary-border: #e2e8f0;
  --color-btn-secondary-hover: #f8fafc;
  --color-status-success: #10b981;
  --color-status-danger: #ef4444;
  --color-badge-bg: #e0f2fe;
  --color-badge-text: #0284c7;

  /* Typography Scale */
  --font-family-sans: "Inter", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-family-mono: "SF Mono", Menlo, Monaco, Consolas, "Fira Code", monospace;

  --font-size-display: clamp(2.5rem, 5vw + 1rem, 4.25rem); /* 40px - 68px */
  --font-size-h1: clamp(2.125rem, 4vw + 0.5rem, 3.25rem);    /* 34px - 52px */
  --font-size-h2: clamp(1.75rem, 3vw + 0.5rem, 2.5rem);      /* 28px - 40px */
  --font-size-h3: clamp(1.375rem, 2vw + 0.5rem, 1.75rem);    /* 22px - 28px */
  --font-size-h4: 1.25rem;                                    /* 20px */
  --font-size-body-lg: 1.125rem;                              /* 18px */
  --font-size-body: 1rem;                                     /* 16px */
  --font-size-body-sm: 0.875rem;                              /* 14px */
  --font-size-caption: 0.75rem;                               /* 12px */

  --line-height-tight: 1.1;
  --line-height-heading: 1.2;
  --line-height-body: 1.55;

  --tracking-display: -0.035em;
  --tracking-heading: -0.025em;
  --tracking-body: -0.005em;
  --tracking-kicker: 0.04em;

  /* Spacing Scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  --space-40: 160px;

  /* Radiuses */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 24px;
  --radius-pill: 9999px;
  --radius-circle: 50%;

  /* Borders & Shadows */
  --border-default: 1px solid var(--color-border);
  --border-subtle: 1px solid var(--color-border-subtle);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 12px -2px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 12px 28px -4px rgba(0, 0, 0, 0.1);
  --shadow-card-hover: 0 16px 32px -8px rgba(0, 0, 0, 0.08);

  /* Layout Containers */
  --container-max: 1280px;
  --container-narrow: 896px;
  --container-text: 640px;

  /* Transitions */
  --transition-base: 180ms cubic-bezier(0.16, 1, 0.3, 1);
}


AI Implementation Brief

When generating code or UI components using this design system, treat Design.md as the definitive visual contract:

System Prompt for AI Coding Agent:

"You are building the UI for a new web project. You MUST adopt the exact visual language, component patterns, token scale, and aesthetic principles defined in Design.md.

1. Theme: A light, pristine canvas with high-contrast dark typography (#0F172A), restrained borders (1px solid #E2E8F0), and surgical teal/cyan accent accents (#5DA4A6).
2. Controls: All buttons, tags, chips, and pills MUST use border-radius: 9999px. Never generate blocky, sharp buttons.
3. Cards & Media: All preview cards, media viewports, and bento cards MUST use border-radius: 16px or 24px with continuous 1px borders.
4. Typography: Display titles must use heavy weights (700), tight line heights (1.1), and negative letter spacing (-0.035em). Paragraphs must never exceed 640px in line width.
5. Whitespace: Preserve generous section margins (96px–128px desktop padding). Do not crowd components.
6. Elevations: Do not use heavy drop shadows. Rely on subtle outlines and soft ambient hovers.

Adhere strictly to the Do/Don't matrix and CSS tokens specified in Design.md."