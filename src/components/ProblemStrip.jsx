const CARDS = [
  {
    emoji: '🔁',
    title: 'Customers come once and disappear',
    body: "Without a loyalty program, there's nothing pulling them back. Every visit feels like a one-time transaction.",
  },
  {
    emoji: '💸',
    title: 'Loyalty tools are built for big retail',
    body: "Enterprise platforms aren't designed for service businesses — they're expensive, complex, and don't fit how you work.",
  },
  {
    emoji: '🤯',
    title: "Punch cards don't build real relationships",
    body: "Your customers expect personalized experiences — the kind big brands deliver. A stamp card won't cut it.",
  },
]

export default function ProblemStrip() {
  return (
    <section style={{ background: '#fff', padding: '88px 1.5rem' }}>
      <div className="container">
        <div style={{ maxWidth: 560 }}>
          <span className="eyebrow">Sound familiar?</span>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--dark)', margin: '0.625rem 0 0.75rem' }}>
            Why small businesses keep losing customers
          </h2>
          <p style={{ lineHeight: 1.7, color: 'var(--muted)' }}>
            You work hard to earn each customer — but without the right tools, there is nothing keeping them from walking out and never coming back.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginTop: '3rem' }} className="problem-grid">
          {CARDS.map((c, i) => (
            <div key={i} style={{
              background: 'var(--cream)', border: '1px solid var(--cream-2)',
              borderRadius: 12, padding: '2rem 1.75rem',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = '' }}
            >
              <span style={{ fontSize: '2rem', marginBottom: '0.875rem', display: 'block' }}>{c.emoji}</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.35, color: 'var(--dark)', marginBottom: '0.5rem' }}>{c.title}</h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--muted)' }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.problem-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}
