import { useState } from 'react'

const FORMSPREE_ID = 'xpqygpva'

function WaitlistForm({ dark = false }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        padding: '16px 24px', background: dark ? 'rgba(255,255,255,0.15)' : '#ecfdf5',
        borderRadius: 24, display: 'flex', alignItems: 'center', gap: 10,
        color: dark ? '#fff' : '#065f46', fontWeight: 600, fontFamily: 'var(--font-body)',
      }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="10" fill="#10b981"/>
          <path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        You're on the list! We'll be in touch soon.
      </div>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="waitlist-form" style={{
        display: 'flex', gap: dark ? 16 : 12, maxWidth: dark ? 504 : 512,
      }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your cafe email"
          required
          style={{
            flex: 1, height: 56, padding: '0 24px',
            borderRadius: 24,
            border: '1px solid #aaa0a1',
            fontFamily: 'var(--font-body)', fontSize: 16,
            outline: 'none',
            background: '#fff',
            color: '#564143',
            minWidth: 0,
          }}
        />
        <button type="submit" disabled={status === 'submitting'} style={{
          height: 56, padding: '0 32px', borderRadius: 24,
          background: dark ? '#fff' : '#811b32',
          color: dark ? '#61001d' : '#fff',
          border: 'none',
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16,
          cursor: 'pointer', whiteSpace: 'nowrap',
          boxShadow: dark ? 'none' : '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
          transition: 'opacity 0.15s',
          opacity: status === 'submitting' ? 0.7 : 1,
        }}>
          {status === 'submitting' ? 'Joining...' : 'Join the Waitlist'}
        </button>
      </form>
      {status === 'error' && (
        <p style={{ color: dark ? '#fca5a5' : '#dc2626', fontSize: 14, marginTop: 8, fontFamily: 'var(--font-body)' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </>
  )
}

export { WaitlistForm }

export default function Hero() {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '208px 24px 128px' }}>
      <div className="hero-grid" style={{
        display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 48, alignItems: 'center',
      }}>
        {/* Left column */}
        <div>
          <h1 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 64,
            lineHeight: 1.2, letterSpacing: '-1.8px', margin: 0,
          }}>
            <span style={{ color: '#141d21' }}>Your regulars<br />deserve loyalty as<br /></span>
            <span style={{ color: '#811b32' }}>good as Starbucks.</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: '28px',
            color: '#576065', marginTop: 24, maxWidth: 576,
          }}>
            Independent coffee shops are the soul of the neighborhood.
            We give you the enterprise-grade tech to reward your
            community without the corporate overhead.
          </p>

          <div style={{ marginTop: 32, paddingTop: 16 }}>
            <WaitlistForm />
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, marginTop: 20,
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="6" fill="#811b32"/>
              <path d="M3.5 6l2 2 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#564143' }}>
              No credit card. No hardware required. 100% Digital.
            </span>
          </div>
        </div>

        {/* Right column — Dashboard mockup */}
        <div className="hero-right" style={{ position: 'relative', width: '100%', minHeight: 550 }}>
          <img
            src="/hero-coffee.jpg"
            alt="Coffee shop"
            style={{
              width: 319, borderRadius: 32, position: 'absolute', left: 0, top: 0,
            }}
          />

          {/* Loyalty Dashboard Card */}
          <div className="hero-dashboard" style={{
            position: 'absolute', right: 0, top: 73,
            width: 400, background: '#fff', borderRadius: 48,
            padding: 33, boxShadow: '0 0 8px rgba(0,0,0,0.25), 0 20px 40px rgba(39,24,9,0.06)',
            border: '1px solid rgba(224,191,191,0.1)',
          }}>
            {/* Points badge */}
            <div style={{
              position: 'absolute', right: 8, top: 8, width: 62, height: 62,
              background: '#811b32', borderRadius: '50%',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#fff', fontWeight: 900, fontSize: 20, fontFamily: 'var(--font-heading)' }}>45</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 8, fontWeight: 600 }}>★</span>
            </div>

            {/* User info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%', background: '#fbddc4',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: '#7b001f',
              }}>SB</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#271809', fontFamily: 'var(--font-body)' }}>Sarah's progress</div>
                <div style={{ fontWeight: 700, fontSize: 12, color: '#594141', letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>Loyalty Member</div>
              </div>
            </div>

            {/* Stamp progress */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: '#271809', fontFamily: 'var(--font-body)' }}>7/10 stamps earned</span>
                <span style={{ fontWeight: 700, fontSize: 12, color: '#ac3400', fontFamily: 'var(--font-body)' }}>3 to go!</span>
              </div>
              <div style={{
                display: 'flex', gap: 6, background: '#fff1e7', borderRadius: 9999, padding: 2, height: 12,
              }}>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} style={{
                    flex: 1, borderRadius: 9999,
                    background: i < 7 ? '#7b001f' : 'rgba(251,221,196,0.5)',
                  }} />
                ))}
              </div>
            </div>

            {/* Birthday reward */}
            <div style={{
              background: 'rgba(45,92,40,0.1)', border: '1px solid rgba(45,92,40,0.2)',
              borderRadius: 16, padding: 17, display: 'flex', alignItems: 'center', gap: 12,
              marginBottom: 24,
            }}>
              <svg width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="#154413" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
              </svg>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#154413', fontFamily: 'var(--font-body)' }}>Birthday reward active</div>
                <div style={{ fontSize: 12, color: 'rgba(21,68,19,0.7)', fontFamily: 'var(--font-body)' }}>Valid until Oct 24th</div>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ border: '1px solid #f2f2f2', borderRadius: 16, padding: 12, textAlign: 'center' }}>
                <div style={{ fontWeight: 900, fontSize: 10, color: '#594141', textTransform: 'uppercase', letterSpacing: '-0.5px', fontFamily: 'var(--font-body)' }}>Total Visits</div>
                <div style={{ fontWeight: 900, fontSize: 24, color: '#7b001f', fontFamily: 'var(--font-body)', marginTop: 4 }}>42</div>
              </div>
              <div style={{ border: '1px solid #f2f2f2', borderRadius: 16, padding: '12px 12px 16px', textAlign: 'center' }}>
                <div style={{ fontWeight: 900, fontSize: 10, color: '#594141', textTransform: 'uppercase', letterSpacing: '-0.5px', fontFamily: 'var(--font-body)' }}>Tiers</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4 }}>
                  <span style={{ fontSize: 18, marginRight: 2 }}>👑</span>
                  <span style={{ fontWeight: 900, fontSize: 18, color: '#271809', fontFamily: 'var(--font-body)' }}>Gold</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .hero-dashboard { width: 340px !important; padding: 24px !important; border-radius: 32px !important; }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
          .hero-grid h1 {
            font-size: 40px !important;
            letter-spacing: -1px !important;
          }
          .hero-right {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .hero-grid h1 {
            font-size: 32px !important;
          }
          .waitlist-form {
            flex-direction: column !important;
          }
          .waitlist-form input,
          .waitlist-form button {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
