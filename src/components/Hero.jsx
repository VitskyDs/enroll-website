import WaitlistForm from './WaitlistForm'

export default function Hero() {
  return (
    <section style={{ background: 'var(--cream)', padding: '120px 1.5rem 88px' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '3.5rem', alignItems: 'center',
      }} className="hero-grid">

        {/* Left */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'var(--orange-bg)', border: '1px solid rgba(232,73,15,0.2)',
            borderRadius: 100, padding: '0.3rem 0.85rem', marginBottom: '1.25rem',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--orange)', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--orange)' }}>
              400+ businesses on the early access list
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', fontWeight: 800,
            lineHeight: 1.06, letterSpacing: '-0.03em', color: 'var(--dark)',
            marginBottom: '1.1rem',
          }}>
            Loyalty like Starbucks.<br />
            <span style={{ color: 'var(--orange)' }}>Built for your<br />small business.</span>
          </h1>

          <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'var(--mid)', marginBottom: '2rem', maxWidth: 440 }}>
            Enroll gives service businesses an AI-powered loyalty and subscription program tailored to their brand — no dev team, no enterprise budget.
          </p>

          <WaitlistForm />

          <p style={{ marginTop: '0.875rem', fontSize: '0.78rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 5 }}>
            🔒 Limited early access spots — be the first to launch.
          </p>
        </div>

        {/* Right: mockup */}
        <div className="hero-visual-wrap">
          <div style={{
            borderRadius: 14, border: '3px solid var(--orange)', overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(232,73,15,0.15)',
          }}>
            <div className="placeholder-box" style={{ minHeight: 360 }}>
              <span className="p-icon">📱</span>
              <strong>Hero Product Mockup</strong>
              <span>Branded loyalty dashboard: custom tier names, reward progress bars, customer profiles. Warm, editorial light — real business owner vibe similar to Toast's device mockup.</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual-wrap { display: none; }
        }
      `}</style>
    </section>
  )
}
