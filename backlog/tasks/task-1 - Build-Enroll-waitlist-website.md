---
id: TASK-1
title: Build Enroll waitlist website
status: To Do
assignee: []
created_date: '2026-03-06 12:42'
labels: []
dependencies: []
priority: high
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Build the full Enroll waitlist/landing page so it can be previewed in-browser and iterated on with design feedback. Images and visuals should use placeholder elements with descriptive labels instead of real assets.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 All 9 sections from website-content.md are implemented
- [ ] #2 Industry chip selector appears before email input (single-select, emoji labels)
- [ ] #3 Waitlist form captures industry selection + email
- [ ] #4 Placeholder blocks used for all visuals with descriptive captions
- [ ] #5 Site is previewable locally via dev server
- [ ] #6 Responsive layout works on mobile and desktop
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Design references saved in repo. Key direction:

**Inspiration:** Toast (toasttab.com) — bold hero, high-contrast dark/light section alternation, sticky CTA in nav
**Supporting refs:** GlossGenius (beauty tone), Boulevard (premium typography), Owner.com (AI-first, dark bg), Ramp (comparison table pattern)

**Color palette:**
- Background: #faf7f2 (warm cream)
- Primary accent: Deep ember/burnt orange
- Dark sections: #1a1612

**Fonts:**
- Headlines: High-contrast serif (Playfair Display or Canela)
- Body: Humanist sans (DM Sans or Söhne)

**Industry chips (before email field):**
💇 Salons & Barbershops · 🧘 Wellness & Spa · 🍽️ Restaurant & Café · 🐾 Pet Care & Grooming · 💅 Nail & Beauty Studio · 🚗 Auto Detailing · 🧹 Home Services · ✨ Other
- Single-select
- Selected state: filled ember background, white label
- Unselected: outlined pill, subtle hover
- Label: \"What type of business are you?\"

**Content source:** website-content.md
**Design reference source:** design-references.md (to be saved)
<!-- SECTION:NOTES:END -->
