const STEPS = [
  {
    num: '01',
    icon: '🧠',
    title: 'Tell us about your café',
    body: "Share your brand, your regulars, and what keeps people coming back. Enroll's AI builds a loyalty program around your specific menu, vibe, and customer base.",
  },
  {
    num: '02',
    icon: '🚀',
    title: 'Launch your branded program',
    body: 'Stamp cards, birthday drinks, daily regulars subscriptions — all live under your brand. No code, no developer, no months of setup. Ready in days.',
  },
  {
    num: '03',
    icon: '📈',
    title: 'Watch regulars come back more often',
    body: 'Enroll tracks which rewards drive repeat visits and automatically tunes your program. You see the data. The AI does the optimization.',
  },
]

export default function CoffeeHowItWorks() {
  return (
    <section style={{ background: 'var(--cream)', padding: '88px 0' }}>
      <style>{`
        .coffee-hiw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-top: 3rem;
        }
        .coffee-hiw-card {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 14px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .coffee-hiw-num {
          font-size: 2.75rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          color: var(--cream-2);
          line-height: 1;
        }
        .coffee-hiw-icon {
          font-size: 1.5rem;
          line-height: 1;
          margin-top: 0.25rem;
        }
        .coffee-hiw-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--dark);
          letter-spacing: -0.015em;
          line-height: 1.3;
        }
        .coffee-hiw-body {
          font-size: 0.875rem;
          color: var(--mid);
          line-height: 1.65;
        }
        @media (max-width: 768px) {
          .coffee-hiw-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="container">
        <p className="eyebrow">Simple by design</p>
        <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: 'var(--dark)', margin: '0.6rem 0 0', maxWidth: 520 }}>
          Your loyalty program, up in three steps
        </h2>
        <div className="coffee-hiw-grid">
          {STEPS.map((s, i) => (
            <div key={i} className="coffee-hiw-card">
              <div className="coffee-hiw-num">{s.num}</div>
              <div className="coffee-hiw-icon">{s.icon}</div>
              <div className="coffee-hiw-title">{s.title}</div>
              <div className="coffee-hiw-body">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
