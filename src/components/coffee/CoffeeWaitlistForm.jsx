import { useState } from 'react'

export default function CoffeeWaitlistForm({ dark = false, buttonLabel = 'Join the Waitlist →' }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: dark ? 'rgba(255,255,255,0.9)' : '#1a7a44', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: 6 }}>
        ✓ You are on the list! We'll be in touch soon.
      </div>
    )
  }

  return (
    <form className="input-row" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
      <input
        className={`email-input${dark ? ' email-input-dark' : ''}`}
        type="email"
        placeholder="Email address*"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit" className="btn btn-accent btn-lg">
        {buttonLabel}
      </button>
    </form>
  )
}
