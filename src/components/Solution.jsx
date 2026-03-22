const TILES = [
  { emoji: '🤖', title: 'AI-First Personalization', body: 'Built around your business, not a template.' },
  { emoji: '💳', title: 'Loyalty + Subscriptions',  body: 'Recurring revenue and retention in one place.' },
  { emoji: '🏪', title: 'Built for Service',         body: 'Salons, spas, restaurants, and beyond.' },
  { emoji: '🏆', title: 'Enterprise Playbook, SMB Price', body: 'The Starbucks strategy without the enterprise bill.' },
]

const STATS = [
  { value: '34%', label: 'more repeat visits on average' },
  { value: '3×', label: 'faster setup vs. enterprise tools' },
  { value: '400+', label: 'businesses on early access' },
]

export default function Solution() {
  return (
    <section id="why-enroll" style={{ background: 'var(--cream)', padding: '88px 1.5rem' }}>
      <div className="container">
        <div style={{ maxWidth: 560, marginBottom: '3.5rem' }}>
          <span className="eyebrow">The solution</span>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--dark)', margin: '0.625rem 0 1rem' }}>
            Your brand. Your program.<br />Powered by AI.
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--muted)' }}>
            Enroll combines loyalty rewards and subscription billing into one intelligent platform — designed specifically for service businesses. It learns your brand and builds programs that actually retain customers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="solution-grid">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }} className="value-tiles">
            {TILES.map((t, i) => (
              <div key={i} style={{
                background: '#fff', border: '1px solid var(--border)', borderRadius: 10,
                padding: '1.35rem 1.25rem', transition: 'box-shadow 0.18s, transform 0.18s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = '' }}
              >
                <span style={{ fontSize: '1.6rem', marginBottom: '0.625rem', display: 'block' }}>{t.emoji}</span>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.3rem' }}>{t.title}</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t.body}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                background: '#fff', border: '1px solid var(--border)', borderRadius: 12,
                padding: '1.75rem 2rem', display: 'flex', alignItems: 'center', gap: '1.25rem',
              }}>
                <span style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--dark)', lineHeight: 1, flexShrink: 0 }}>
                  {s.value}
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.5 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.solution-grid{grid-template-columns:1fr !important; gap:2.5rem !important}}
        @media(max-width:480px){.value-tiles{grid-template-columns:1fr !important}}
      `}</style>
    </section>
  )
}
