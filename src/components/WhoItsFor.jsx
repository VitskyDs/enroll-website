import { useState } from 'react'

const INDUSTRIES = [
  { label: '💇 Salons & Barbershops',  icon: '💇', visual: 'Warm editorial photo of a bustling salon — stylist and happy client, loyalty card visible on phone.' },
  { label: '🧘 Wellness & Spa',         icon: '🧘', visual: 'Serene spa environment, loyalty app open, customer smiling. Soft, editorial.' },
  { label: '🍽️ Restaurants & Cafes',   icon: '🍽️', visual: 'Warm restaurant scene, owner at the counter, loyalty program visible on a tablet POS.' },
  { label: '🐾 Pet Care & Grooming',    icon: '🐾', visual: 'Groomer with a happy dog, loyalty membership card shown on phone.' },
  { label: '💅 Nail & Beauty Studios',  icon: '💅', visual: 'Nail studio, client checking loyalty points on phone. Warm, editorial lighting.' },
  { label: '🚗 Auto Detailing',         icon: '🚗', visual: 'Clean auto shop, owner using Enroll dashboard on tablet. Confident, professional.' },
  { label: '🧹 Home Services',          icon: '🧹', visual: 'Home cleaning professional, customer loyalty app open on phone. Bright and trustworthy.' },
]

export default function WhoItsFor() {
  const [active, setActive] = useState(0)

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

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '3rem', marginTop: '3rem', alignItems: 'start' }} className="wif-grid">
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {INDUSTRIES.map((ind, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                padding: '0.9rem 1rem', borderRadius: 8,
                fontSize: '0.95rem', fontWeight: active === i ? 600 : 500,
                color: active === i ? 'var(--orange)' : 'var(--mid)',
                cursor: 'pointer', background: active === i ? 'var(--orange-bg)' : 'none',
                borderLeft: active === i ? '3px solid var(--orange)' : '3px solid transparent',
                paddingLeft: 'calc(1rem - 0px)',
                border: 'none', borderLeft: active === i ? '3px solid var(--orange)' : '3px solid transparent',
                fontFamily: 'inherit', textAlign: 'left', width: '100%',
                transition: 'all 0.15s',
              }}>
                {ind.label}
              </button>
            ))}
          </nav>

          <div className="placeholder-box" style={{ minHeight: 320 }}>
            <span className="p-icon">{INDUSTRIES[active].icon}</span>
            <strong>{INDUSTRIES[active].label} Visual</strong>
            <span>{INDUSTRIES[active].visual}</span>
          </div>
        </div>

        <p style={{ marginTop: '2.5rem', fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--muted)', textAlign: 'center' }}>
          "If your business runs on relationships, Enroll is for you."
        </p>
      </div>
      <style>{`@media(max-width:768px){.wif-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}
