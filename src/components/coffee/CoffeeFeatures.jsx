const FEATURES = [
  {
    icon: '☕',
    title: 'Digital Stamp Cards',
    body: 'Replace paper punch cards with a digital version customers actually keep. Ten stamps, free drink. Auto-tracked, zero friction.',
    tag: 'Most popular',
  },
  {
    icon: '🎂',
    title: 'Birthday Drink Rewards',
    body: "Automatically send a free drink offer on a customer's birthday. One of the highest-converting loyalty perks — and it runs itself.",
    tag: null,
  },
  {
    icon: '🔁',
    title: 'Daily Regulars Subscription',
    body: 'Let your most loyal customers pay a flat monthly fee for their daily coffee. Predictable revenue for you, a reason to return every day for them.',
    tag: 'New',
  },
  {
    icon: '📣',
    title: 'Slow-Day Push Notifications',
    body: 'Tuesday at 2pm looking quiet? Send a targeted offer to nearby regulars. Fill seats without discounting to the whole world.',
    tag: null,
  },
]

export default function CoffeeFeatures() {
  return (
    <section style={{ background: 'var(--white)', padding: '88px 0' }}>
      <style>{`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-top: 3rem;
        }
        .feature-card {
          background: var(--cream);
          border: 1.5px solid var(--border);
          border-radius: 14px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: box-shadow 0.18s, transform 0.18s;
        }
        .feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0,0,0,0.07);
        }
        .feature-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .feature-card-icon {
          font-size: 1.75rem;
          line-height: 1;
        }
        .feature-tag {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          background: var(--accent);
          color: var(--white);
          border-radius: 100px;
          padding: 0.25rem 0.7rem;
          white-space: nowrap;
          align-self: flex-start;
        }
        .feature-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--dark);
          letter-spacing: -0.02em;
          line-height: 1.3;
        }
        .feature-card-body {
          font-size: 0.875rem;
          color: var(--mid);
          line-height: 1.65;
        }
        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="container">
        <p className="eyebrow">Built for coffee shops</p>
        <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: 'var(--dark)', margin: '0.6rem 0 0', maxWidth: 540 }}>
          Features your regulars will actually use
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--mid)', lineHeight: 1.65, marginTop: '1rem', maxWidth: 500 }}>
          Not generic loyalty points. Tools designed for how coffee shops actually work.
        </p>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-card-top">
                <div className="feature-card-icon">{f.icon}</div>
                {f.tag && <span className="feature-tag">{f.tag}</span>}
              </div>
              <div className="feature-card-title">{f.title}</div>
              <div className="feature-card-body">{f.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
