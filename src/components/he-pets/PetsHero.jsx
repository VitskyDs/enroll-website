import { HeWaitlistForm } from '../he/HeHero'

export default function PetsHero() {
  return (
    <section className="hero-section" style={{ maxWidth: 1280, margin: '0 auto', padding: '208px 24px 128px' }}>
      <div className="hero-grid" style={{
        display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 48, alignItems: 'center',
      }}>
        {/* Right column (text) — appears on left in RTL */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', border: '1.5px solid #e0e9f0', borderRadius: 100,
            padding: '6px 16px', marginBottom: 24,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#811b32' }} />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, color: '#61001d', letterSpacing: '0.02em' }}>
              חנויות ומספרות לחיות מחמד · גישה מוקדמת
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 64,
            lineHeight: 1.2, letterSpacing: '-1.8px', margin: 0,
          }}>
            <span style={{ color: '#141d21' }}>תנו ללקוחות שלכם סיבה<br />לחזור דווקא אליכם —<br /></span>
            <span style={{ color: '#811b32' }}>ולא לרשת הגדולה.</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: '28px',
            color: '#576065', marginTop: 24, maxWidth: 576,
          }}>
            חנויות ומספרות חיות מחמד עצמאיות הן המקום שבו כל כלב וחתול בשכונה מוכר בשם.
            אנרול נותנת לכם מועדון לקוחות ומנויים ברמה של הרשתות הגדולות —
            בהתאמה אישית למותג שלכם, מוכנה תוך ימים.
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

        {/* Left column — Loyalty dashboard mockup (appears on right in RTL) */}
        <div className="hero-right" style={{ position: 'relative', width: '100%', minHeight: 480 }}>
          <div className="hero-dashboard" style={{
            position: 'relative', width: 400, maxWidth: '100%', margin: '0 auto',
            background: '#fff', borderRadius: 48,
            padding: 33, boxShadow: '0 0 8px rgba(0,0,0,0.25), 0 20px 40px rgba(39,24,9,0.06)',
            border: '1px solid rgba(224,191,191,0.1)',
          }}>
            {/* Points badge */}
            <div style={{
              position: 'absolute', left: 8, top: 8, width: 62, height: 62,
              background: '#811b32', borderRadius: '50%',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#fff', fontWeight: 900, fontSize: 26, fontFamily: 'var(--font-heading)' }}>🐾</span>
            </div>

            {/* User info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%', background: '#fbddc4',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
              }}>🐶</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#271809', fontFamily: 'var(--font-body)' }}>התקדמות הלקוח דני ורקסי</div>
                <div style={{ fontWeight: 700, fontSize: 12, color: '#594141', letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>חבר מועדון</div>
              </div>
            </div>

            {/* Stamp progress */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 12, color: '#ac3400', fontFamily: 'var(--font-body)' }}>עוד 3 ביקורים לטיפוח חינם!</span>
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

            {/* Pet birthday reward */}
            <div style={{
              background: 'rgba(45,92,40,0.1)', border: '1px solid rgba(45,92,40,0.2)',
              borderRadius: 16, padding: 17, display: 'flex', alignItems: 'center', gap: 12,
              marginBottom: 24,
            }}>
              <span style={{ fontSize: 20 }}>🎂</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#154413', fontFamily: 'var(--font-body)' }}>מתנת יום הולדת לרקסי — פעילה</div>
                <div style={{ fontSize: 12, color: 'rgba(21,68,19,0.7)', fontFamily: 'var(--font-body)' }}>בתוקף עד 24 באוקטובר</div>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ border: '1px solid #f2f2f2', borderRadius: 16, padding: 12, textAlign: 'center' }}>
                <div style={{ fontWeight: 900, fontSize: 10, color: '#594141', textTransform: 'uppercase', letterSpacing: '-0.5px', fontFamily: 'var(--font-body)' }}>סה״כ ביקורים</div>
                <div style={{ fontWeight: 900, fontSize: 24, color: '#7b001f', fontFamily: 'var(--font-body)', marginTop: 4 }}>28</div>
              </div>
              <div style={{ border: '1px solid #f2f2f2', borderRadius: 16, padding: '12px 12px 16px', textAlign: 'center' }}>
                <div style={{ fontWeight: 900, fontSize: 10, color: '#594141', textTransform: 'uppercase', letterSpacing: '-0.5px', fontFamily: 'var(--font-body)' }}>דרגה</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4 }}>
                  <span style={{ fontSize: 18, marginLeft: 2 }}>🐾</span>
                  <span style={{ fontWeight: 900, fontSize: 18, color: '#271809', fontFamily: 'var(--font-body)' }}>זהב</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-dashboard {
          animation: heroCardFade 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
        }
        @keyframes heroCardFade {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: none; }
        }
        @media (max-width: 900px) {
          section.hero-section { padding: 120px 24px 64px !important; }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-grid h1 {
            font-size: 40px !important;
            letter-spacing: -1px !important;
          }
        }
        @media (max-width: 640px) {
          section.hero-section { padding: 100px 20px 48px !important; }
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
