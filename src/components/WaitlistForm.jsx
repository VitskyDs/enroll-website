import { useState } from 'react'

const CHIPS = [
  { id: 'salon',      label: '💇 Salons' },
  { id: 'wellness',   label: '🧘 Wellness & Spa' },
  { id: 'restaurant', label: '🍽️ Restaurant & Café' },
  { id: 'petcare',    label: '🐾 Pet Care' },
  { id: 'nail',       label: '💅 Nail & Beauty' },
  { id: 'auto',       label: '🚗 Auto Detailing' },
  { id: 'home',       label: '🧹 Home Services' },
  { id: 'other',      label: '✨ Other' },
]

export default function WaitlistForm({ dark = false, buttonLabel = 'Get Started →', buttonClass = 'btn-orange' }) {
  const [selected, setSelected] = useState(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: dark ? 'rgba(255,255,255,0.9)' : '#1a7a44', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: 6 }}>
        ✓ You are on the list! We will be in touch soon.
      </div>
    )
  }

  return (
    <div>
      <span className={`form-label${dark ? ' form-label-dark' : ''}`}>What type of business are you?</span>
      <div className="chip-row">
        {CHIPS.map(c => (
          <button
            key={c.id}
            type="button"
            onClick={() => setSelected(c.id)}
            className={`chip${dark ? ' chip-dark' : ''}${selected === c.id ? ' active' : ''}`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <form className="input-row" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
        <input
          className={`email-input${dark ? ' email-input-dark' : ''}`}
          type="email"
          placeholder="Email address*"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit" className={`btn ${buttonClass} btn-lg`}>
          {buttonLabel}
        </button>
      </form>
    </div>
  )
}
