const STEPS = [
  {
    num: '01',
    title: 'Tell us about your business',
    body: "Answer a few questions about your brand, customers, and goals. Enroll's AI handles everything from there — no technical knowledge needed.",
    icon: '🧠',
  },
  {
    num: '02',
    title: 'Launch your custom program',
    body: 'Loyalty tiers, rewards, and subscriptions go live — no code. Your branded program is up in days, not months.',
    icon: '🚀',
  },
  {
    num: '03',
    title: 'Watch retention grow',
    body: 'AI continuously optimizes your program as data comes in. See which rewards drive repeat visits and let Enroll tune it automatically.',
    icon: '📈',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: 'var(--cream)', padding: '88px 1.5rem' }}>
      <div className="container">
        <span className="eyebrow">Simple by design</span>
        <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--dark)', margin: '0.625rem 0 0' }}>
          Up and running in three steps
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3.5rem' }} className="hiw-grid">
          {STEPS.map((step, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid var(--border)', borderRadius: 14,
              padding: '2rem 1.75rem',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
            }}>
              <p style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--cream-2)', letterSpacing: '-0.05em', lineHeight: 1, margin: 0 }}>
                {step.num}
              </p>
              <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{step.icon}</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em', margin: 0 }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.72, fontSize: '0.9rem', margin: 0 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.hiw-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}
