const STATS = [
  { value: '54M', label: 'active loyalty members' },
  { value: '40%', label: 'of revenue from loyalty customers' },
  { value: '$3.6B', label: 'pre-loaded onto Starbucks cards annually' },
]

export default function PretStatsStrip() {
  return (
    <section style={{ background: '#D94F1C', padding: '72px 0' }}>
      <style>{`
        .pret-stats-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .pret-stats-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 3rem;
          text-align: center;
        }
        .pret-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        .pret-stat {
          text-align: center;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
        }
        .pret-stat:not(:last-child) {
          border-right: 1px solid rgba(255,255,255,0.2);
        }
        .pret-stat-value {
          font-size: clamp(2.8rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          color: #ffffff;
          line-height: 1;
        }
        .pret-stat-label {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.4;
          max-width: 160px;
          font-weight: 500;
        }
        .pret-stats-footer {
          margin-top: 3.5rem;
          text-align: center;
          font-size: 1.05rem;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          letter-spacing: -0.01em;
          font-style: italic;
        }
        @media (max-width: 640px) {
          .pret-stats-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .pret-stat {
            border-right: none !important;
          }
        }
      `}</style>
      <div className="pret-stats-inner">
        <p className="pret-stats-label">What loyalty does for Starbucks</p>
        <div className="pret-stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="pret-stat">
              <div className="pret-stat-value">{s.value}</div>
              <div className="pret-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="pret-stats-footer">"Your regulars want to be loyal. They just need a reason."</p>
      </div>
    </section>
  )
}
