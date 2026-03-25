---
id: doc-2
title: Enroll — Brand & Design Brief
type: other
created_date: '2026-03-22 14:38'
updated_date: '2026-03-22 14:46'
---
# Enroll — Brand & Design Brief

A brand and design brief for agencies and collaborators working on Enroll.

---

## What is Enroll?

Enroll is an AI-powered loyalty and subscription platform built for independent service businesses. It lets owners launch a fully branded loyalty program — stamp cards, tier rewards, birthday perks, subscription memberships — without a developer, without an enterprise budget, and in days rather than months.

The core insight: Starbucks built a 54-million-member empire on a precision retention system (stars, tiers, birthday drinks, progress bars, pre-loaded wallets). Independent businesses have never had access to anything like it. Enroll changes that.

**Current stage:** Pre-launch. The website's sole job is to collect waitlist sign-ups from business owners.

**Primary conversion action:** Email capture via a waitlist form.

---

## Target Audience

**Who they are:** Independent service business owners. Primarily coffee shop operators, but also salons, barbershops, spas, restaurants, nail studios, pet groomers, and home service providers. Typically owner-operated, 1–3 locations, no in-house tech team.

**What they feel:**
- Proud of their craft and their regulars
- Frustrated that chains dominate on loyalty infrastructure, not quality
- Skeptical that any loyalty tool could actually work for them — or be affordable
- Stretched thin — they don't have time to set up complex software

**What they want:**
- A loyalty program that feels like theirs, not a generic template
- To stop losing repeat customers to Starbucks (or whichever chain has the better app)
- Predictable recurring revenue from their most loyal customers
- Something that runs itself once it's set up

**Mindset on arrival:** "I know I should have a loyalty program. I just don't think one exists that's right for a business like mine."

---

## Brand Personality

Enroll sits at the intersection of **enterprise capability** and **human warmth**. Think: the smartness of Stripe, the approachability of Pret a Manger, the ambition of Starbucks — built for the independent owner who pours their heart into their business.

**Personality traits:**
- **Confident, not arrogant.** We know the product works. We don't need to shout about it.
- **Empathetic to the underdog.** We acknowledge that chains win on systems, not quality. We're here to level the playing field.
- **Specific and concrete.** We don't say "innovative platform." We say "ten stamps, free drink, auto-tracked." Numbers and specificity are credibility.
- **Warm but not cutesy.** Editorial warmth — like a well-designed independent café — not saccharine or playful.

**Voice examples:**
- ✅ "Give your regulars a reason to choose you over Starbucks. Every time."
- ✅ "It's not the coffee. It's the system."
- ✅ "Stamp cards, birthday drinks, and subscriptions — live under your brand in days."
- ❌ "Our innovative AI-powered loyalty solution transforms your customer engagement journey."

---

## Brand Colors

### Primary Palette
| Name | Hex | Usage |
|---|---|---|
| Espresso | `#1A1109` | Headings, primary text, dark backgrounds |
| Burgundy / Wine | `#9F1B32` | Primary accent — buttons, highlights, badges |
| Burgundy Dark | `#7A1426` | Hover state for burgundy |
| Cream | `#FDF6EC` | Section backgrounds, cards |
| Parchment | `#F2E8D4` | Alt backgrounds, tier card wrappers |
| Warm Paper | `#FDFAF4` | Lightest background, primary surface |
| Border | `#E8D9C0` | Card borders, dividers |

### Secondary / Semantic Colors
| Name | Hex | Usage |
|---|---|---|
| Rust / Orange | `#D94F1C` | Warm CTA variant, highlights |
| Sage Green | `#2D5C28` | Trust signals, confirmation, calm CTA |
| Gold | `#B5830A` | Mid-tier indicators |
| Mid text | `#7A6450` | Body copy |
| Muted text | `#9A8470` | Captions, labels, secondary info |

### Color Philosophy
The palette is warm and rooted — espresso browns, cream papers, rust and sage. It evokes the feeling of a well-loved independent café. Avoid cool grays, clinical whites, or anything that feels like SaaS-generic. The burgundy accent (`#9F1B32`) is the brand's strong, confident hand — use it to draw the eye to the most important action on the screen.

---

## Typography

**Typeface:** Inter (Google Fonts), weights 400–800.

**Heading style:**
- Tight letter-spacing: `-0.03em` to `-0.04em`
- Bold to extra-bold (700–800)
- Responsive sizing via `clamp()` — no fixed px at large sizes
- Line height: 1.05–1.15 for display headings

**Body style:**
- Weight 400–500
- Line height: 1.65–1.75
- Color: `#7A6450` (mid) or `#9A8470` (muted) — never pure black on warm backgrounds

**Accent text in headings:** Key emotional phrases can be set in the rust or burgundy accent color within an otherwise dark heading — e.g., *"Built for your **business**."* or *"loyalty **as good as** Starbucks."*

---

## Shape & Layout Language

- **Cards:** Rounded corners, 14–20px radius. Warm cream or white fill. 1.5px warm border (`#E8D9C0`). Subtle hover lift (`translateY(-2px)` + soft shadow).
- **Buttons:** Pill-shaped (`border-radius: 100px`) for warmth. Never sharp rectangles.
- **Sections:** Alternating warm backgrounds (paper → parchment → white → rust/sage). Create rhythm without requiring images.
- **Kicker / eyebrow labels:** Small, uppercase, letter-spaced, in muted brown. Used to orient the reader before a headline.
- **No imagery rule:** The brand relies on icons (emoji), inline SVGs, and HTML/CSS mockups rather than photography. This keeps the aesthetic consistent and avoids stock photo genericness.

---

## Page Structure & Conversion Flow

Every page follows this funnel:

1. **Hook** — A provocative H1 that names the exact problem or desire the visitor already has
2. **Proof** — Stats, specificity, and social proof that make the claim credible
3. **Education** — Show how it works; for coffee audiences, this includes breaking down *how* Starbucks Rewards works psychologically, so the visitor viscerally understands the gap they need to close
4. **Features** — Concrete, named product capabilities (no vague "solutions")
5. **CTA** — Email capture with low-friction framing: free to join, no card required, founding-member pricing

The call to action is never pushy. The tone is: *you'd be crazy not to get in early on this.*

---

## Key Sections (Reference)

### Hero
Opens with an eyebrow badge (small, pill-shaped), then a bold H1 that speaks directly to the owner's desire or frustration. Subhead explains what Enroll does in one sentence. Form immediately below. Trust line below the form ("Free to join — no card required").

### Stats Strip
Full-bleed section with 3 high-impact numbers. Used to anchor the Starbucks loyalty story before explaining the product. Numbers are large, bold, and in accent color against a dark or rust background.

### The Starbucks Playbook
An education section unique to the coffee audience. Breaks down the 3 Starbucks Rewards tiers (Green/Gold/Reserve) and the 6 psychological mechanisms Starbucks uses to drive repeat visits (variable rewards, star expiration, birthday effect, progress bar, status/identity, pre-loaded wallets). Closes with a callout: *"This isn't loyalty. It's a precision retention engine. And until now, it was only available to billion-dollar chains."* This section exists to create urgency — the owner needs to feel the size of the gap before they'll want to close it.

### Features
2×2 grid of named features specific to the target audience. Each card: icon, title, one-sentence description. Tags ("Most popular", "New") in accent color.

### Waitlist CTA
Dark or deep-colored full-bleed section. Centered layout. Headline + body + form inside a frosted/outlined container. Three trust signals below the form.

---

## What Enroll Is Not

- Not a POS system or payments tool
- Not a generic "points" platform — everything is named and branded to the business
- Not enterprise software — no sales calls, no months of onboarding, no dev required
- Not a Mailchimp — loyalty is the product, not email marketing that happens to have a rewards feature
