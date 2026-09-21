# Andreas Alex Portfolio Design Direction

## Source

- Visual reference: `C:/Users/andre/Downloads/porto-ref.webp`
- Use the reference for mood, contrast, pacing, and composition principles.
- Do not reproduce its brand, logo, copy, diagrams, or exact section layouts.
- The result must remain recognizably Andreas Alex's developer portfolio.

## Design Read

Reading this as: a personal fullstack developer portfolio for recruiters, collaborators, and prospective clients, using a dark editorial digital-studio language with restrained orange energy, dial ENERGY 2 / RHYTHM 3 / MOTION 2.

## Identity

- Identity statement: a developer who connects thoughtful interfaces with reliable backend systems.
- Personality: precise, confident, technical, composed, and approachable.
- First impression: professional capability before decoration.
- Primary evidence: Andreas's portrait, real ClinicApp screenshots, actual technology stack, projects, and education.
- Signature motif: directional corner marks and thin routed lines that suggest navigation from interface to database.

## Visual Principles

1. Create strong contrast between near-black technical sections and warm off-white evidence sections.
2. Give every viewport one clear focal point, usually the name, a project screenshot, or a section statement.
3. Use orange only for focus, active states, short phrases, and key wayfinding marks.
4. Prefer large unframed compositions, ruled lists, diagrams, and screenshots over repeated cards.
5. Let section rhythm change according to content while preserving one spacing and type system.
6. Keep surfaces matte. Texture, glow, and shadow must remain subtle and purposeful.

## Color System

### Core

- `Ink`: `#11110F` for dark section backgrounds and primary text on light surfaces.
- `Paper`: `#F0F0EC` for light section backgrounds.
- `White`: `#FFFFFF` for high-contrast text and clean content surfaces.
- `Graphite`: `#2A2A27` for secondary dark surfaces and dividers.

### Accent

- `Signal Orange`: `#F04A1D` for the primary CTA, selected words, active controls, and the identity motif.
- `Soft Orange`: `#F6A27E` only for low-intensity accents on dark backgrounds.

### Supporting Neutrals

- `Muted on dark`: `#B8B8B1`.
- `Muted on light`: `#5E605A`.
- `Border on dark`: `#363632`.
- `Border on light`: `#D3D4CE`.

### Color Rules

- Dark sections should occupy most of the page, with light sections acting as deliberate visual breaks.
- Orange should normally cover less than 10 percent of a viewport.
- Avoid blue-purple gradients, rainbow accents, decorative blobs, and color used without hierarchy.
- Any orange glow may appear once near the hero or a major CTA to guide attention. It must not sit behind body text.
- Verify normal text at 4.5:1 contrast and large text or controls at 3:1 minimum.

## Typography

- Primary family: `Manrope`, with `Arial` and `sans-serif` fallbacks.
- Reason: Manrope has a clean geometric structure that feels technical while remaining warm enough for a personal portfolio.
- Use one family across headings and body copy. Hierarchy comes from scale, weight, and spacing.
- Heading weight: 600 to 700.
- Body weight: 400.
- Interface labels: 500 to 600.
- Do not use negative letter spacing.
- Avoid extreme uppercase tracking. Eyebrows may use normal case or compact uppercase with modest spacing.
- Keep body measure between 45 and 70 characters per line.

### Type Scale

- Hero name: `clamp(3rem, 7vw, 6.75rem)` with compact line height.
- Section statement: `clamp(2rem, 4vw, 4.25rem)`.
- Section heading: `clamp(1.75rem, 3vw, 3rem)`.
- Card or row title: `1rem` to `1.25rem`.
- Body: `0.9375rem` to `1.0625rem`.
- Labels and metadata: `0.75rem` to `0.8125rem`.

## Layout System

- Global content width: `min(100% - 48px, 1280px)` on desktop.
- Desktop side padding: 72 to 104px where the viewport allows it.
- Tablet side padding: 40px.
- Mobile side padding: 20 to 24px.
- Mobile section padding: 56 to 72px.
- Desktop section padding: 96 to 128px, adjusted by content density.
- Use full-width section backgrounds. Padding belongs to an inner content container.
- Main content should never add padding around the navbar or footer.
- Radius system: 0 to 8px. Reserve 12 to 18px for a major light section panel when it creates a clear chapter break.
- Borders should establish structure. Shadows are reserved for overlays and dialogs.

## Section Composition

### Navbar

- Compact sticky bar on a dark background.
- Wordmark on the left, essential navigation in the center or right, and one contact action.
- Mobile menu opens as an overlay below the navbar and must not change document flow.
- All targets are at least 44 by 44px and have visible keyboard focus.

### Hero

- Near-black full-width background with a restrained orange atmospheric light used as one focal accent.
- Andreas Alex is the dominant first-viewport signal.
- Place `Fullstack Web Developer` above the name.
- Flow directly from the name into the short junior fullstack introduction.
- Use the real portrait as supporting evidence, integrated into the composition rather than placed in a decorative card.
- Keep My Projects as the primary action and GitHub as the quieter adjacent action.
- A hint of the following section must remain visible on common desktop and mobile viewports.

### Skills

- Present skills as a structured capability map rather than three equal marketing cards.
- Group frontend, backend, and database around the real development flow.
- Use thin routes, nodes, or directional marks to connect the groups.
- Technology names are supporting labels, not decorative badges.
- Skill imagery must be real screenshots or current project assets.

### Projects And Education

- Use a ruled editorial timeline or indexed list.
- On desktop, project or institution information and its detail stay in one horizontal row.
- On mobile, each row stacks into a clear reading order.
- Keep content under the section heading, never as an unrelated sidebar.

### Selected Project

- ClinicApp is the visual centerpiece and should use the largest real screenshot on the page.
- Pair the screenshot with concise project context, stack, role, and implemented workflows.
- Gallery controls are explicit, keyboard accessible, and large enough for touch.
- Do not crop product screenshots where inspection matters.

### Professional Highlights

- Use four concise evidence-based statements in a two-column ruled layout.
- Do not use stars, ratings, invented metrics, or testimonial styling.
- Vary emphasis based on relevance to the target role.

### Contact And Footer

- Use a light chapter panel before or within the dark footer to create a decisive final transition.
- Make the email action the focal point.
- Keep the existing moving technology banner as an identity device.
- Include a visible pause control and respect reduced-motion preferences.
- Footer content remains compact: wordmark, role, location, GitHub, email, and back-to-top.

## Motion

- Motion purpose: guide reading order and show state changes.
- Hero: one composed entrance for copy and portrait, with a short stagger.
- Sections: subtle reveal as content enters the viewport.
- Gallery: brief directional transition that matches previous or next navigation.
- Mobile menu: quick fade and vertical reveal without moving page content.
- Buttons and links: small translation or icon movement on hover; restrained scale feedback on press.
- Duration range: 160 to 500ms.
- Use one easing family consistently.
- Avoid perpetual floating, bouncing, pulsing, and animation on every child.
- Disable nonessential motion when `prefers-reduced-motion: reduce` is active.

## Imagery And Graphics

- Use Andreas's real portrait and actual project screenshots.
- Do not generate replacement profile images, logos, customer marks, testimonials, or statistics.
- Graphs and flow diagrams may only describe real ClinicApp architecture or workflow.
- The directional motif can appear as cropped corner marks, routed lines, or arrow-shaped geometry, but no more than once per major section.

## Components

- Buttons: compact rectangular controls with 4 to 6px radius.
- Cards: use only for genuine grouped objects or interactive previews.
- Tags: simple text labels or lightly tinted rectangles, never glossy capsules.
- Dividers: 1px neutral rules for hierarchy and pacing.
- Modal: solid surface, clear title, visible close control, backdrop, Escape support, and restored focus.
- Icons: use only where they clarify an action or content category.

## Responsive Behavior

- Mobile is a distinct stacked composition, not a scaled desktop view.
- Break layouts where content becomes cramped, not at arbitrary device names.
- Hero text precedes the portrait on mobile.
- Multi-column rows collapse to one column with source order matching visual order.
- No horizontal page overflow at 320px width.
- Screenshots use fluid widths and preserve their full aspect ratio.
- Long email addresses and technology names must wrap safely.
- Sticky navigation must not obscure anchored section headings.

## Content Rules

- Keep all claims factual and supported by the current portfolio or repositories.
- Use direct copy that names the technology, workflow, or result.
- Avoid inflated terms such as revolutionary, seamless, cutting-edge, and world-class.
- CTA labels should describe the destination: `View ClinicApp`, `Open GitHub`, `Email Andreas`.
- Keep the portfolio language in English unless the owner requests a full language change.

## Decision Reasons

- Dark-led theme: creates the technical, premium mood present in the reference and gives real screenshots strong contrast.
- Warm light sections: separate dense evidence from expressive dark sections and improve long-page readability.
- Orange accent: preserves the portfolio's existing identity while providing one unmistakable signal color.
- Manrope typography: supports a modern technical voice without becoming a terminal-style stereotype.
- Varied section rhythm: reflects different content types and avoids a repeated heading-plus-card template.
- Routed-line motif: connects the portfolio identity to fullstack flow from interface to database.
- Real screenshots: demonstrate actual work and make project claims inspectable.
- Restrained motion: improves orientation and feedback while keeping the experience professional.

## Delivery Checklist For The Redesign

- The page follows ENERGY 2 / RHYTHM 3 / MOTION 2.
- Every section has one clear focal point.
- All navigation and controls have real behavior.
- Mobile navigation overlays content without changing page height.
- The page has no horizontal overflow at 320, 390, 768, 1024, 1440, and 1920px.
- All normal text meets WCAG AA contrast.
- Keyboard focus is visible and the modal closes with Escape.
- Reduced-motion mode removes nonessential animation.
- Real images load without unintended cropping.
- Build and lint pass before deployment.
