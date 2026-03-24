const stats = [
  {
    number: '54M',
    label: 'Active Members',
    description: 'Starbucks Rewards is the most successful retail loyalty program in history.',
  },
  {
    number: '40%',
    label: 'Revenue Attribution',
    description: 'Nearly half of all transactions are driven directly by loyalty incentives.',
  },
  {
    number: '$3.6B',
    label: 'Pre-loaded Cards',
    description: 'Customers treat their apps like bank accounts, ensuring repeat visits.',
  },
]

export default function StatsStrip() {
  return (
    <section id="why-enroll" style={{ background: '#f4faff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="stats-header" style={{ marginBottom: 64 }}>
          <div style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
            textTransform: 'uppercase', letterSpacing: '1.2px', color: '#61001d',
            marginBottom: 8,
          }}>The Benchmark</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 36,
            color: '#141d21', lineHeight: '40px', margin: 0,
          }}>Why loyalty matters</h2>
        </div>

        <div className="stats-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 24, padding: 40,
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 48,
                color: '#61001d', lineHeight: '48px',
              }}>{s.number}</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16,
                color: '#564143', marginTop: 8, lineHeight: '24px',
              }}>{s.label}</div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 14, color: '#576065',
                lineHeight: '22.75px', marginTop: 10,
              }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          #why-enroll { padding: 64px 20px !important; }
          #why-enroll .stats-header { margin-bottom: 40px !important; }
        }
      `}</style>
    </section>
  )
}
