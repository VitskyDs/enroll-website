const STATS = [
  { value: '54M', label: 'active Starbucks Rewards members' },
  { value: '40%', label: 'of all Starbucks revenue comes from loyalty customers' },
  { value: '$3.6B', label: 'loaded onto Starbucks cards by customers annually' },
]

export default function StarbucksStatsStrip() {
  return (
    <section style={{ background: 'var(--dark)', padding: '72px 0' }}>
      <style>{`
        .sbucks-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .sbucks-eyebrow {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 2.5rem;
        }
        .sbucks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          width: 100%;
          max-width: 860px;
        }
        .sbucks-stat {
          padding: 0 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
        }
        .sbucks-stat:not(:last-child) {
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .sbucks-value {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--accent);
          line-height: 1;
        }
        .sbucks-label {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.5;
          max-width: 180px;
        }
        .sbucks-closing {
          margin-top: 2.75rem;
          font-size: 1rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          font-style: italic;
          letter-spacing: -0.01em;
        }
        @media (max-width: 640px) {
          .sbucks-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .sbucks-stat {
            padding: 0;
            border-right: none !important;
          }
        }
      `}</style>
      <div className="container">
        <div className="sbucks-inner">
          <p className="sbucks-eyebrow">What loyalty does for Starbucks</p>
          <div className="sbucks-grid">
            {STATS.map((s, i) => (
              <div key={i} className="sbucks-stat">
                <div className="sbucks-value">{s.value}</div>
                <div className="sbucks-label">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="sbucks-closing">"Your regulars want to be loyal. They just need a reason."</p>
        </div>
      </div>
    </section>
  )
}
