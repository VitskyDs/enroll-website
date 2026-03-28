import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FORMSPREE_URL = 'https://formspree.io/f/xpqygpva'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistStatus, setWaitlistStatus] = useState('idle') // idle | submitting | success | error

  async function handleWaitlistSubmit(e) {
    e.preventDefault()
    setWaitlistStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: waitlistEmail, _subject: 'Waitlist signup' }),
      })
      setWaitlistStatus(res.ok ? 'success' : 'error')
    } catch {
      setWaitlistStatus('error')
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    fontFamily: 'var(--font-body)', fontSize: 16, color: '#141d21',
    background: '#fff', border: '1.5px solid #e0e9f0', borderRadius: 12,
    padding: '14px 16px', outline: 'none', transition: 'border-color 0.15s',
  }

  const labelStyle = {
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
    color: '#141d21', marginBottom: 6, display: 'block',
  }

  return (
    <div style={{ background: '#f4faff', minHeight: '100vh' }}>
      <Navbar />

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
                color: '#811b32', letterSpacing: '0.4px', textTransform: 'uppercase',
              }}>Contact Us</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 56,
              color: '#141d21', lineHeight: '60px', letterSpacing: '-1.5px',
              margin: '0 0 20px', maxWidth: 600,
            }}>Get in Touch</h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 20, color: '#576065',
              lineHeight: '30px', maxWidth: 520, margin: 0,
            }}>
              Have a question or want to learn more about Enroll? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section style={{ padding: '0 24px 96px' }}>
          <div className="contact-grid" style={{
            maxWidth: 1280, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48, alignItems: 'start',
          }}>
            {/* Form card */}
            <div style={{
              background: '#fff', borderRadius: 32, padding: '48px',
              border: '1px solid #e6eff6',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
            }} className="contact-card">
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
                  }}>Message sent!</h2>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065', margin: 0,
                  }}>
                    Thanks for reaching out. We'll get back to you at {email} shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div>
                    <label style={labelStyle} htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#811b32'}
                      onBlur={e => e.target.style.borderColor = '#e0e9f0'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#811b32'}
                      onBlur={e => e.target.style.borderColor = '#e0e9f0'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      placeholder="How can we help?"
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
                      Something went wrong. Please try again or email us directly at hi@joinenroll.app.
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
                      transition: 'background 0.15s', alignSelf: 'flex-start',
                    }}
                    onMouseEnter={e => { if (status !== 'submitting') e.target.style.background = '#6b1529' }}
                    onMouseLeave={e => { if (status !== 'submitting') e.target.style.background = '#811b32' }}
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }} className="contact-info">
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
                }}>Email us</div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: 14, color: '#576065',
                  marginBottom: 12, lineHeight: '20px',
                }}>
                  We typically respond within one business day.
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
                }}>Ready to get started?</div>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.75)',
                  lineHeight: '20px', margin: '0 0 16px',
                }}>
                  Join the waitlist and get your first 3 months free.
                </p>
                {waitlistStatus === 'success' ? (
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
                    color: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    You're on the list!
                  </div>
                ) : (
                  <form onSubmit={handleWaitlistSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={waitlistEmail}
                      onChange={e => setWaitlistEmail(e.target.value)}
                      style={{
                        width: '100%', boxSizing: 'border-box',
                        fontFamily: 'var(--font-body)', fontSize: 14, color: '#141d21',
                        background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.25)',
                        borderRadius: 12, padding: '10px 14px', outline: 'none',
                        color: '#fff',
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
                      {waitlistStatus === 'submitting' ? 'Joining…' : 'Join the Waitlist →'}
                    </button>
                    {waitlistStatus === 'error' && (
                      <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 12,
                        color: 'rgba(255,255,255,0.75)', margin: 0,
                      }}>Something went wrong. Try again.</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-info {
            flex-direction: row !important;
          }
        }
        @media (max-width: 640px) {
          .contact-card {
            padding: 32px 24px !important;
          }
          .contact-info {
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  )
}
