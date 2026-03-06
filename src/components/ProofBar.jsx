const ITEMS = [
  'No dev team needed',
  'No-code setup in days',
  'AI-powered personalization',
  'Loyalty + subscriptions unified',
  'Built for service businesses',
]

export default function ProofBar() {
  return (
    <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '1rem 1.5rem' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '2.5rem', flexWrap: 'wrap',
      }}>
        {ITEMS.map(item => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--mid)' }}>
            <span style={{ color: 'var(--orange)', fontWeight: 700 }}>✓</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
