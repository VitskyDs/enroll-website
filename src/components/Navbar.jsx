import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      transition: 'border-color 0.3s',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--orange)', letterSpacing: '-0.04em' }}>
          enroll
        </a>

        <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none' }} className="nav-links-desktop">
          {[['#how-it-works','How It Works'],['#why-enroll','Why Enroll'],['#pricing','Pricing']].map(([href, label]) => (
            <li key={href}>
              <a href={href} style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--mid)', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--dark)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--mid)'}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#waitlist" className="btn btn-orange" style={{ fontSize: '0.875rem', padding: '0.6rem 1.35rem' }}>
          Join the Waitlist
        </a>
      </div>
      <style>{`@media (max-width: 768px) { .nav-links-desktop { display: none !important; } }`}</style>
    </nav>
  )
}
