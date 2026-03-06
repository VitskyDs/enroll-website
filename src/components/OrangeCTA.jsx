import WaitlistForm from './WaitlistForm'

export default function OrangeCTA() {
  return (
    <section style={{ background: 'var(--orange)', padding: '88px 1.5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.025em', color: '#fff', marginBottom: '0.75rem' }}>
          Stop losing customers.<br />Start building loyalty.
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.82)', marginBottom: '2rem' }}>
          Founding members get priority access, early pricing, and a direct line to what we build next.
        </p>

        <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 14, padding: '2rem' }}>
          <WaitlistForm dark buttonLabel="Reserve My Spot →" buttonClass="btn-blue" />
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex' }}>
            {['💇','🧘','🍽️','🐾'].map((e,i) => (
              <div key={i} style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '2px solid var(--orange)', marginLeft: i > 0 ? -8 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>{e}</div>
            ))}
          </div>
          <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
            Join <strong style={{ color: '#fff' }}>400+ businesses</strong> already on the list
          </p>
        </div>
      </div>
    </section>
  )
}
