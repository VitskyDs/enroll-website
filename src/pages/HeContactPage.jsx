import { useState } from 'react'
import HeNavbar from '../components/he/HeNavbar'
import HeFooter from '../components/he/HeFooter'

const FORMSPREE_URL = 'https://formspree.io/f/xpqygpva'

export default function HeContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')

  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistStatus, setWaitlistStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  async function handleWaitlistSubmit(e) {
    e.preventDefault()
    setWaitlistStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: waitlistEmail, _subject: 'Waitlist signup (Hebrew)' }),
      })
      setWaitlistStatus(res.ok ? 'success' : 'error')
    } catch {
      setWaitlistStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    fontFamily: 'var(--font-body)', fontSize: 16, color: '#141d21',
    background: '#fff', border: '1.5px solid #e0e9f0', borderRadius: 12,
    padding: '14px 16px', outline: 'none', transition: 'border-color 0.15s',
    textAlign: 'right',
  }

  const labelStyle = {
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
    color: '#141d21', marginBottom: 6, display: 'block',
  }

  return (
    <div dir="rtl" className="he-page" style={{ background: '#f4faff', minHeight: '100vh' }}>
      <HeNavbar />

      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ padding: '72px 24px 56px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(129,27,50,0.08)', borderRadius: 24,
              padding: '6px 16px', marginBottom: 24,
            }}>
              <span style={{
                fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13,
                color: '#811b32', letterSpacing: '0.4px',
              }}>צור קשר</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 56,
              color: '#141d21', lineHeight: '64px', letterSpacing: '-1px',
              margin: '0 0 20px', maxWidth: 600,
            }}>נשמח לשמוע ממך</h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 20, color: '#576065',
              lineHeight: '32px', maxWidth: 520, margin: 0,
            }}>
              יש לך שאלה או רוצה לדעת עוד על אנרול? אנחנו כאן בשבילך.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section style={{ padding: '0 24px 96px' }}>
          <div className="contact-grid-he" style={{
            maxWidth: 1280, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '380px 1fr', gap: 48, alignItems: 'start',
          }}>
            {/* Info sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }} className="contact-info-he">
              <div style={{
                background: '#fff', borderRadius: 24, padding: '32px',
                border: '1px solid #e6eff6',
                boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(129,27,50,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#811b32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16,
                  color: '#141d21', marginBottom: 6,
                }}>שלחו לנו מייל</div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: 14, color: '#576065',
                  marginBottom: 12, lineHeight: '22px',
                }}>
                  אנחנו מגיבים תוך יום עסקים אחד.
                </div>
                <a
                  href="mailto:hi@joinenroll.app"
                  style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15,
                    color: '#811b32', textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={e => e.target.style.textDecoration = 'none'}
                >
                  hi@joinenroll.app
                </a>
              </div>

              <div style={{
                background: 'linear-gradient(163deg, #61001d 0%, #811b32 100%)',
                borderRadius: 24, padding: '32px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18,
                  color: '#fff', marginBottom: 10,
                }}>מוכן להתחיל?</div>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.75)',
                  lineHeight: '22px', margin: '0 0 16px',
                }}>
                  הצטרף לרשימת ההמתנה וקבל 3 חודשים ראשונים חינם.
                </p>
                {waitlistStatus === 'success' ? (
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
                    color: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    !נרשמת בהצלחה
                  </div>
                ) : (
                  <form onSubmit={handleWaitlistSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <input
                      type="email"
                      placeholder="האימייל שלך"
                      required
                      value={waitlistEmail}
                      onChange={e => setWaitlistEmail(e.target.value)}
                      style={{
                        width: '100%', boxSizing: 'border-box',
                        fontFamily: 'var(--font-body)', fontSize: 14,
                        background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.25)',
                        borderRadius: 12, padding: '10px 14px', outline: 'none',
                        color: '#fff', textAlign: 'right',
                      }}
                    />
                    <button
                      type="submit"
                      disabled={waitlistStatus === 'submitting'}
                      style={{
                        background: '#fff', color: '#811b32', border: 'none',
                        fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14,
                        padding: '10px 20px', borderRadius: 24, cursor: 'pointer',
                        transition: 'opacity 0.15s', width: '100%',
                      }}
                      onMouseEnter={e => e.target.style.opacity = '0.9'}
                      onMouseLeave={e => e.target.style.opacity = '1'}
                    >
                      {waitlistStatus === 'submitting' ? '…מצטרף' : 'הצטרפות לרשימת המתנה'}
                    </button>
                    {waitlistStatus === 'error' && (
                      <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 12,
                        color: 'rgba(255,255,255,0.75)', margin: 0,
                      }}>משהו השתבש. נסה שוב.</p>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* Form card */}
            <div style={{
              background: '#fff', borderRadius: 32, padding: '48px',
              border: '1px solid #e6eff6',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
            }} className="contact-card-he">
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'rgba(129,27,50,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#811b32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24,
                    color: '#141d21', margin: '0 0 12px',
                  }}>!ההודעה נשלחה</h2>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065', margin: 0,
                  }}>
                    תודה שפנית אלינו. נחזור אליך בקרוב לכתובת {email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div>
                    <label style={labelStyle} htmlFor="he-contact-name">שם</label>
                    <input
                      id="he-contact-name"
                      type="text"
                      placeholder="השם שלך"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#811b32'}
                      onBlur={e => e.target.style.borderColor = '#e0e9f0'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="he-contact-email">אימייל</label>
                    <input
                      id="he-contact-email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      style={{ ...inputStyle, direction: 'ltr', textAlign: 'right' }}
                      onFocus={e => e.target.style.borderColor = '#811b32'}
                      onBlur={e => e.target.style.borderColor = '#e0e9f0'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="he-contact-message">הודעה</label>
                    <textarea
                      id="he-contact-message"
                      placeholder="כיצד נוכל לעזור?"
                      required
                      rows={5}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      onFocus={e => e.target.style.borderColor = '#811b32'}
                      onBlur={e => e.target.style.borderColor = '#e0e9f0'}
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: 14, color: '#b91c1c',
                      margin: 0, padding: '10px 14px', background: '#fef2f2',
                      borderRadius: 8, border: '1px solid #fecaca',
                    }}>
                      משהו השתבש. נסה שוב או שלח מייל ישירות לכתובת hi@joinenroll.app.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    style={{
                      background: status === 'submitting' ? '#a05070' : '#811b32',
                      color: '#fff', border: 'none',
                      fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16,
                      padding: '14px 32px', borderRadius: 24, cursor: status === 'submitting' ? 'default' : 'pointer',
                      transition: 'background 0.15s', alignSelf: 'flex-end',
                    }}
                    onMouseEnter={e => { if (status !== 'submitting') e.target.style.background = '#6b1529' }}
                    onMouseLeave={e => { if (status !== 'submitting') e.target.style.background = '#811b32' }}
                  >
                    {status === 'submitting' ? '…שולח' : 'שלח הודעה'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <HeFooter />

      <style>{`
        @media (max-width: 900px) {
          .contact-grid-he {
            grid-template-columns: 1fr !important;
          }
          .contact-info-he {
            flex-direction: row !important;
          }
        }
        @media (max-width: 640px) {
          .contact-card-he {
            padding: 32px 24px !important;
          }
          .contact-info-he {
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  )
}
