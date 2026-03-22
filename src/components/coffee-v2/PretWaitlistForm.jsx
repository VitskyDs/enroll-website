import { useState } from 'react'

export default function PretWaitlistForm({ buttonLabel = 'Join the Waitlist →', variant = 'rust' }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const btnBg = variant === 'sage' ? '#2D5C28' : variant === 'white' ? '#ffffff' : '#D94F1C'
  const btnColor = variant === 'white' ? '#1A1109' : '#ffffff'
  const btnHover = variant === 'sage' ? '#214520' : variant === 'white' ? '#F2E8D4' : '#B8410F'
  const inputBg = variant === 'sage' ? 'rgba(255,255,255,0.15)' : '#ffffff'
  const inputColor = variant === 'sage' ? '#ffffff' : '#1A1109'
  const inputBorder = variant === 'sage' ? 'rgba(255,255,255,0.25)' : '#E8D9C0'
  const placeholder = variant === 'sage' ? 'rgba(255,255,255,0.55)' : '#9A8470'

  if (submitted) {
    return (
      <div style={{
        fontSize: '0.95rem', fontWeight: 700,
        color: variant === 'sage' ? 'rgba(255,255,255,0.9)' : '#2D5C28',
        display: 'flex', alignItems: 'center', gap: 8, padding: '0.5rem 0'
      }}>
        ✓ You're on the list! We'll be in touch soon.
      </div>
    )
  }

  return (
    <form
      style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}
      onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
    >
      <style>{`
        .pret-email-${variant}::placeholder { color: ${placeholder}; }
        .pret-email-${variant} { color: ${inputColor}; }
      `}</style>
      <input
        className={`pret-email-${variant}`}
        type="email"
        placeholder="Your email address"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{
          flex: 1, minWidth: 220, padding: '0.85rem 1.25rem',
          borderRadius: 100, border: `1.5px solid ${inputBorder}`,
          background: inputBg, fontSize: '0.9rem',
          fontFamily: 'inherit', outline: 'none',
          backdropFilter: variant === 'sage' ? 'blur(4px)' : 'none',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '0.85rem 1.75rem', borderRadius: 100,
          background: btnBg, color: btnColor,
          border: 'none', fontSize: '0.9rem', fontWeight: 700,
          fontFamily: 'inherit', cursor: 'pointer',
          whiteSpace: 'nowrap', transition: 'background 0.15s, transform 0.15s',
        }}
        onMouseEnter={e => { e.target.style.background = btnHover; e.target.style.transform = 'translateY(-1px)' }}
        onMouseLeave={e => { e.target.style.background = btnBg; e.target.style.transform = '' }}
      >
        {buttonLabel}
      </button>
    </form>
  )
}
