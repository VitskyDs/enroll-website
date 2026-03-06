export default function Testimonial() {
  return (
    <section style={{ background: '#fff', padding: '88px 1.5rem' }}>
      <div className="container">
        <div style={{ maxWidth: 820, margin: '0 auto', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '3rem', alignItems: 'center' }} className="testimonial-grid">
          <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'var(--cream)', border: '3px solid var(--cream-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', flexShrink: 0 }}>
            💇
          </div>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#edfaf3', border: '1px solid #82e0a9', borderRadius: 100, padding: '0.3rem 0.75rem', fontSize: '0.78rem', fontWeight: 600, color: '#1a7a44', marginBottom: '1rem' }}>
              ↑ 34% more repeat visits in 60 days
            </div>
            <blockquote style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 600, lineHeight: 1.45, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              "With Enroll, I finally have a loyalty program that feels like mine. My regulars love it — and I'm seeing more of them, more often."
            </blockquote>
            <cite style={{ fontStyle: 'normal', fontSize: '0.875rem', color: 'var(--muted)', fontWeight: 500 }}>
              Maria G. &nbsp;·&nbsp; Owner, Luxe Salon &amp; Spa &nbsp;·&nbsp; Early Access Member
            </cite>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.testimonial-grid{grid-template-columns:1fr !important; gap:1.5rem !important}}`}</style>
    </section>
  )
}
