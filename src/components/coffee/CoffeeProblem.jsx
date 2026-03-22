const PROBLEMS = [
  {
    icon: '☕',
    title: 'You compete on quality. They compete on habits.',
    body: "Starbucks doesn't win on taste — they win on loyalty points, mobile ordering, and streak rewards. Without that system, you're fighting with one hand tied behind your back.",
  },
  {
    icon: '📱',
    title: 'Your regulars have no reason to come back specifically.',
    body: "They like you. But when they're in a rush, they default to the app they already have rewards on. You're losing visits not because of your coffee — but because you don't have a system.",
  },
  {
    icon: '💸',
    title: 'Loyalty platforms are priced for chains, not cafés.',
    body: 'Enterprise loyalty tools cost thousands per month and need a dev team to set up. Independent shops get left with a punch card app that does nothing for retention.',
  },
]

export default function CoffeeProblem() {
  return (
    <section style={{ background: 'var(--white)', padding: '88px 0' }}>
      <style>{`
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .problem-card {
          background: var(--cream);
          border: 1.5px solid var(--border);
          border-radius: 14px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .problem-card-icon {
          font-size: 1.75rem;
          line-height: 1;
        }
        .problem-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--dark);
          letter-spacing: -0.015em;
          line-height: 1.35;
        }
        .problem-card-body {
          font-size: 0.88rem;
          color: var(--mid);
          line-height: 1.65;
        }
        @media (max-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="container">
        <p className="eyebrow">Sound familiar?</p>
        <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: 'var(--dark)', margin: '0.6rem 0 0', maxWidth: 560 }}>
          Great coffee isn't enough to keep them coming back
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--mid)', lineHeight: 1.65, marginTop: '1rem', maxWidth: 520 }}>
          You pour your heart into every cup. But without a system to reward regulars, Starbucks wins on habit — not quality.
        </p>
        <div className="problem-grid">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="problem-card">
              <div className="problem-card-icon">{p.icon}</div>
              <div className="problem-card-title">{p.title}</div>
              <div className="problem-card-body">{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
