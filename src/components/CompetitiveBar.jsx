const ROWS = [
  ['AI personalization',           '❌ Generic templates',    '✅ Brand-tailored AI'],
  ['Loyalty + Subscriptions',      '❌ One or the other',     '✅ Both, unified'],
  ['Built for service businesses', '❌ Retail-focused',       '✅ Service-first'],
  ['Setup complexity',             '❌ Dev resources needed', '✅ No-code, up in days'],
  ['Pricing',                      '❌ Enterprise budgets',   '✅ Founding-member pricing'],
]

const th = { padding: '0.875rem 1.5rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid var(--border)' }
const td = base => ({ padding: '1.05rem 1.5rem', fontSize: '0.875rem', ...base })

export default function CompetitiveBar() {
  return (
    <section id="pricing" style={{ background: 'var(--cream)', padding: '88px 1.5rem' }}>
      <div className="container">
        <span className="eyebrow">Why Enroll wins</span>
        <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--dark)', margin: '0.625rem 0 0.75rem' }}>
          The smarter choice for service businesses
        </h2>
        <p style={{ color: 'var(--muted)', maxWidth: 480, lineHeight: 1.7 }}>
          Other platforms were built for big retail. Enroll was built for businesses that run on real relationships.
        </p>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden', marginTop: '3rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ ...th, textAlign: 'left', color: 'var(--muted)', width: '40%' }}>Feature</th>
                <th style={{ ...th, textAlign: 'center', color: 'var(--muted)', width: '30%' }}>Others</th>
                <th style={{ ...th, textAlign: 'center', color: 'var(--dark)', background: 'var(--orange-bg)', width: '30%' }}>Enroll ✦</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([feature, others, enroll], i) => (
                <tr key={i} style={{ borderBottom: i < ROWS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <td style={td({ color: 'var(--dark)', fontWeight: 600 })}>{feature}</td>
                  <td style={td({ textAlign: 'center', color: 'var(--muted)' })}>{others}</td>
                  <td style={td({ textAlign: 'center', background: 'var(--orange-bg)', color: 'var(--dark)', fontWeight: 500 })}>{enroll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
