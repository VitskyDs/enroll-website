import { useState, useEffect } from 'react'

export default function HeNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '0 48px',
    background: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
    boxShadow: scrolled ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
    transition: 'box-shadow 0.2s',
  }

  const innerStyle = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    maxWidth: 1280, width: '100%', flex: 1,
  }

  const logoStyle = {
    display: 'flex', alignItems: 'center', gap: 8,
    fontFamily: 'var(--font-heading)', fontWeight: 700,
    fontSize: 24, color: '#61001d', letterSpacing: '-1.2px',
  }

  const linkStyle = (active) => ({
    fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16,
    color: active ? '#811b32' : '#475569', letterSpacing: '-0.4px',
    marginRight: 32, cursor: 'pointer',
    borderBottom: active ? '2px solid #811b32' : '2px solid transparent',
    paddingBottom: 6,
  })

  const ctaBtnStyle = {
    background: '#811b32', color: '#fff', border: 'none',
    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14,
    padding: '10px 24px', borderRadius: 24, cursor: 'pointer',
    transition: 'background 0.15s',
  }

  const mobileMenuStyle = {
    position: 'fixed', top: 80, left: 0, right: 0, bottom: 0,
    background: 'rgba(255,255,255,0.98)',
    backdropFilter: 'blur(12px)',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'flex-start',
    paddingTop: 48, gap: 32, zIndex: 99,
  }

  const mobileLinkStyle = {
    fontFamily: 'var(--font-heading)', fontWeight: 600,
    fontSize: 20, color: '#475569', cursor: 'pointer',
  }

  return (
    <>
      <nav style={navStyle}>
        <div style={innerStyle}>
          <a href="/he" style={logoStyle}>
            <img src="/logo-mark.svg" alt="Enroll" style={{ width: 32, height: 32 }} />
            אנרול
          </a>

          <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/he#how-it-works" style={linkStyle(false)}>איך זה עובד</a>
            <a href="/he#why-enroll" style={linkStyle(false)}>למה אנרול</a>
          </div>

          <button
            className="nav-cta-desktop"
            style={ctaBtnStyle}
            onClick={() => { window.location.href = '/he#final-cta' }}
            onMouseEnter={e => e.target.style.background = '#6b1529'}
            onMouseLeave={e => e.target.style.background = '#811b32'}
          >
            הצטרפות לרשימת המתנה
          </button>

          <button
            className="nav-hamburger"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141d21" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={mobileMenuStyle} onClick={() => setMenuOpen(false)}>
          <a href="/he#how-it-works" style={mobileLinkStyle}>איך זה עובד</a>
          <a href="/he#why-enroll" style={mobileLinkStyle}>למה אנרול</a>
          <button
            style={{ ...ctaBtnStyle, fontSize: 16, padding: '14px 32px' }}
            onClick={() => {
              setMenuOpen(false)
              window.location.href = '/he#final-cta'
            }}
          >
            הצטרפות לרשימת המתנה
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}
