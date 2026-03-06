const STEPS = [
  {
    num: '01', flip: false,
    title: "Tell us about your business",
    body: "Enroll's AI learns your brand, customers, and goals. Answer a few questions — it handles the rest. No technical knowledge needed.",
    icon: '🧠', vLabel: 'Onboarding Screen',
    vDesc: 'Friendly AI onboarding asking warm, simple questions — brand name, customer vibe, goals. Clean, approachable UI.',
  },
  {
    num: '02', flip: true,
    title: 'Launch your custom program',
    body: "Loyalty tiers, rewards, and subscriptions go live — no code. Your branded program is up in days, not months.",
    icon: '🚀', vLabel: 'Program Builder',
    vDesc: 'Tier names, reward values, a live preview of the customer-facing loyalty card populating in real time. Warm, instant feel.',
  },
  {
    num: '03', flip: false,
    title: 'Watch retention grow',
    body: "AI continuously optimizes your program as data comes in — see which rewards drive repeat visits and let Enroll tune it automatically.",
    icon: '📈', vLabel: 'Analytics Dashboard',
    vDesc: 'Retention curve trending up-right, visit frequency bar chart, top returning customers list. Clean, confident, warm tones.',
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

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '3.5rem' }}>
          {STEPS.map((step, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: step.flip ? '1fr 1fr' : '1fr 1fr',
              gap: '4rem', alignItems: 'center',
              padding: i === 0 ? '0 0 3.5rem' : '3.5rem 0',
              borderTop: i > 0 ? '1px solid var(--cream-2)' : 'none',
              direction: step.flip ? 'rtl' : 'ltr',
            }} className="hiw-row">
              <div style={{ direction: 'ltr' }}>
                <p style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--cream-2)', letterSpacing: '-0.05em', lineHeight: 1, marginBottom: '0.25rem' }}>{step.num}</p>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em', margin: '0.25rem 0 0.75rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.72, maxWidth: 380 }}>{step.body}</p>
                <button className="btn-text" style={{ marginTop: '1.25rem' }}>Learn more →</button>
              </div>
              <div className="placeholder-box" style={{ minHeight: 280, direction: 'ltr' }}>
                <span className="p-icon">{step.icon}</span>
                <strong>{step.vLabel}</strong>
                <span>{step.vDesc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.hiw-row{grid-template-columns:1fr !important; direction:ltr !important; gap:1.75rem !important}}`}</style>
    </section>
  )
}
