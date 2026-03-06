export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.75rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--orange)', letterSpacing: '-0.04em' }}>enroll</div>
        <div style={{ display: 'flex', gap: '1.75rem' }}>
          {['Privacy','Terms','Contact'].map(l => (
            <a key={l} href="#" style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.4)', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>{l}</a>
          ))}
        </div>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.22)' }}>© 2025 Enroll. All rights reserved.</p>
      </div>
    </footer>
  )
}
