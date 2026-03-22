import { useState } from 'react'

const INDUSTRIES = [
  {
    label: '💇 Salons & Barbershops',
    headline: 'Keep your chair full.',
    body: 'Turn one-time clients into regulars with loyalty tiers, visit-based rewards, and prepaid membership packages — all branded to your salon.',
    perks: ['Visit rewards', 'Monthly memberships', 'Referral bonuses'],
    imgDesc: 'Warm editorial photo of a bustling salon — stylist and happy client, loyalty card visible on phone.',
  },
  {
    label: '🧘 Wellness & Spa',
    headline: 'Build a loyal wellness community.',
    body: 'Reward clients for every massage, facial, and class. Subscription memberships keep revenue predictable and clients coming back consistently.',
    perks: ['Service subscriptions', 'Package deals', 'Milestone rewards'],
    imgDesc: 'Serene spa environment, loyalty app open, customer smiling. Soft, editorial.',
  },
  {
    label: '🍽️ Restaurants & Cafés',
    headline: 'Make every table a regular.',
    body: 'Points-based programs, punch card replacements, and VIP tiers that work alongside your POS — no extra hardware needed.',
    perks: ['Visit-based points', 'Birthday rewards', 'VIP tiers'],
    imgDesc: 'Warm restaurant scene, owner at the counter, loyalty program visible on a tablet POS.',
  },
  {
    label: '🐾 Pet Care & Grooming',
    headline: 'Pets come back. So should their owners.',
    body: 'Build loyalty for both pets and their people. Reward grooms, boarding stays, and checkups with a program that feels personal.',
    perks: ['Groom punch cards', 'Boarding packages', 'Pet birthday perks'],
    imgDesc: 'Groomer with a happy dog, loyalty membership card shown on phone.',
  },
  {
    label: '💅 Nail & Beauty Studios',
    headline: 'Reward the repeat.',
    body: 'Clients who find their studio stick around for years. Loyalty tiers and prepaid packages make it easy to keep them engaged and pre-sold.',
    perks: ['Prepaid packages', 'Loyalty tiers', 'Referral rewards'],
    imgDesc: 'Nail studio, client checking loyalty points on phone. Warm, editorial lighting.',
  },
  {
    label: '🚗 Auto Detailing',
    headline: 'Keep cars — and clients — coming back.',
    body: 'Subscription wash plans, visit milestones, and VIP tier upgrades that reward your most loyal customers automatically.',
    perks: ['Wash subscriptions', 'Milestone upgrades', 'Seasonal promos'],
    imgDesc: 'Clean auto shop, owner using Enroll dashboard on tablet. Confident, professional.',
  },
  {
    label: '🧹 Home Services',
    headline: 'The best client is a returning client.',
    body: 'Prepaid service bundles and loyalty rewards that incentivize repeat bookings and referrals — without lifting a finger to manage them.',
    perks: ['Prepaid bundles', 'Referral programs', 'Loyalty discounts'],
    imgDesc: 'Home cleaning professional, customer loyalty app open on phone. Bright and trustworthy.',
  },
]

export default function WhoItsFor() {
  const [active, setActive] = useState(0)
  const ind = INDUSTRIES[active]

  return (
    <section style={{ background: '#fff', padding: '88px 1.5rem' }}>
      <div className="container">
        <span className="eyebrow">Who it's for</span>
        <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--dark)', margin: '0.625rem 0 0.5rem' }}>
          Built for businesses that run on relationships
        </h2>
        <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7 }}>
          If your customers keep coming back because of you — your team, your craft, your space — Enroll makes that loyalty last.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem', marginTop: '3rem', alignItems: 'start' }} className="wif-grid">

          {/* Vertical nav */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {INDUSTRIES.map((item, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                padding: '0.85rem 1.25rem',
                borderRadius: '0 8px 8px 0',
                fontSize: '0.9rem', fontWeight: active === i ? 600 : 400,
                color: active === i ? 'var(--dark)' : 'var(--muted)',
                cursor: 'pointer',
                background: active === i ? 'var(--orange-bg)' : 'transparent',
                border: 'none',
                borderLeft: active === i ? '3px solid var(--dark)' : '3px solid transparent',
                fontFamily: 'inherit', textAlign: 'left', width: '100%',
                transition: 'all 0.15s',
              }}>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right panel */}
          <div style={{ border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden', background: 'var(--cream)' }}>
            <div style={{ padding: '2rem 2.25rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>
                {ind.headline}
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: 460 }}>
                {ind.body}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {ind.perks.map((perk, i) => (
                  <span key={i} style={{
                    padding: '0.35rem 0.85rem', borderRadius: 100,
                    background: '#fff', border: '1px solid var(--border)',
                    fontSize: '0.8rem', fontWeight: 500, color: 'var(--mid)',
                  }}>
                    ✓ {perk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.wif-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}
