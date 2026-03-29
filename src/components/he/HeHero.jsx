import { useState } from 'react'

const FORMSPREE_ID = 'xpqygpva'

function HeWaitlistForm({ dark = false }) {
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
        !אתה ברשימה. ניצור איתך קשר בקרוב
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
          placeholder='כתובת המייל שלך'
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
            textAlign: 'right',
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
          {status === 'submitting' ? 'שולח...' : 'הצטרפות לרשימת המתנה'}
        </button>
      </form>
      {status === 'error' && (
        <p style={{ color: dark ? '#fca5a5' : '#dc2626', fontSize: 14, marginTop: 8, fontFamily: 'var(--font-body)' }}>
          משהו השתבש. אנא נסה שוב.
        </p>
      )}
    </>
  )
}

export { HeWaitlistForm }

export default function HeHero() {
  return (
    <section className="hero-section" style={{ maxWidth: 1280, margin: '0 auto', padding: '208px 24px 128px' }}>
      <div className="hero-grid" style={{
        display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 48, alignItems: 'center',
      }}>
        {/* Right column (text) — appears on left in RTL */}
        <div>
          <h1 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 64,
            lineHeight: 1.2, letterSpacing: '-1.8px', margin: 0,
          }}>
            <span style={{ color: '#141d21' }}>הלקוחות הקבועים שלך<br />ראויים לנאמנות<br /></span>
            <span style={{ color: '#811b32' }}>ברמה של הרשתות הגדולות.</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: '28px',
            color: '#576065', marginTop: 24, maxWidth: 576,
          }}>
            בתי קפה עצמאיים הם הלב של השכונה.
            אנחנו נותנים לך כלים מתקדמים כדי לתגמל
            את הקהילה שלך — בלי עלויות כבדות.
          </p>

          <div style={{ marginTop: 32, paddingTop: 16 }}>
            <HeWaitlistForm />
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, marginTop: 20,
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="6" fill="#811b32"/>
              <path d="M3.5 6l2 2 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#564143' }}>
              ללא כרטיס אשראי • ללא ציוד נוסף • 100% דיגיטלי
            </span>
          </div>
        </div>

        {/* Left column — Dashboard mockup (appears on right in RTL) */}
        <div className="hero-right" style={{ position: 'relative', width: '100%', minHeight: 550 }}>
          <img
            src="/hero-coffee-he.png"
            alt="Coffee shop"
            style={{
              width: 319, borderRadius: 32, position: 'absolute', right: 0, top: 0,
            }}
          />

          {/* Loyalty Dashboard Card */}
          <div className="hero-dashboard" style={{
            position: 'absolute', left: 0, top: 0,
            width: 400, background: '#fff', borderRadius: 48,
            padding: 33, boxShadow: '0 0 8px rgba(0,0,0,0.25), 0 20px 40px rgba(39,24,9,0.06)',
            border: '1px solid rgba(224,191,191,0.1)',
          }}>
            {/* Points badge */}
            <div style={{
              position: 'absolute', left: 8, top: 8, width: 62, height: 62,
              background: '#811b32', borderRadius: '50%',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#fff', fontWeight: 900, fontSize: 20, fontFamily: 'var(--font-heading)' }}>45</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" style={{ marginTop: 2 }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>

            {/* User info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%', background: '#fbddc4',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: '#7b001f',
              }}>מי</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#271809', fontFamily: 'var(--font-body)' }}>התקדמות הלקוחה מיכל</div>
                <div style={{ fontWeight: 700, fontSize: 12, color: '#594141', letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>חברת מועדון</div>
              </div>
            </div>

            {/* Stamp progress */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 12, color: '#ac3400', fontFamily: 'var(--font-body)' }}>עוד 3 ביקורים!</span>
                <span style={{ fontWeight: 700, fontSize: 14, color: '#271809', fontFamily: 'var(--font-body)' }}>7/10 חותמות</span>
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
                <div style={{ fontWeight: 700, fontSize: 14, color: '#154413', fontFamily: 'var(--font-body)' }}>מתנת יום הולדת פעילה</div>
                <div style={{ fontSize: 12, color: 'rgba(21,68,19,0.7)', fontFamily: 'var(--font-body)' }}>בתוקף עד 24 באוקטובר</div>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ border: '1px solid #f2f2f2', borderRadius: 16, padding: 12, textAlign: 'center' }}>
                <div style={{ fontWeight: 900, fontSize: 10, color: '#594141', textTransform: 'uppercase', letterSpacing: '-0.5px', fontFamily: 'var(--font-body)' }}>סה״כ ביקורים</div>
                <div style={{ fontWeight: 900, fontSize: 24, color: '#7b001f', fontFamily: 'var(--font-body)', marginTop: 4 }}>42</div>
              </div>
              <div style={{ border: '1px solid #f2f2f2', borderRadius: 16, padding: '12px 12px 16px', textAlign: 'center' }}>
                <div style={{ fontWeight: 900, fontSize: 10, color: '#594141', textTransform: 'uppercase', letterSpacing: '-0.5px', fontFamily: 'var(--font-body)' }}>דרגה</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4 }}>
                  <span style={{ fontSize: 18, marginLeft: 2 }}>👑</span>
                  <span style={{ fontWeight: 900, fontSize: 18, color: '#271809', fontFamily: 'var(--font-body)' }}>זהב</span>
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
        .hero-dashboard {
          animation: heroCardSlide 1s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both;
        }
        @keyframes heroCardSlide {
          from { opacity: 0; transform: translateY(280px); }
          to   { opacity: 1; transform: translateY(180px); }
        }
        @media (max-width: 900px) {
          section.hero-section { padding: 120px 24px 64px !important; }
        }
        @media (max-width: 640px) {
          section.hero-section { padding: 100px 20px 48px !important; }
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
