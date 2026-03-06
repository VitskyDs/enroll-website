import WaitlistForm from './WaitlistForm'

export default function WaitlistCTA() {
  return (
    <section id="waitlist" style={{ background: '#fff', padding: '88px 1.5rem' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <span className="eyebrow">Early access</span>
        <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--dark)', margin: '0.625rem 0 1rem' }}>
          Be the First to Launch
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '2rem' }}>
          Early access members get priority onboarding, founding-member pricing, and direct input into what we build.
        </p>
        <div style={{ background: 'var(--cream)', border: '1px solid var(--cream-2)', borderRadius: 14, padding: '2rem' }}>
          <WaitlistForm buttonLabel="Reserve My Spot →" />
        </div>
      </div>
    </section>
  )
}
