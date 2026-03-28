import { Link } from 'react-router-dom'

export default function HeFooter() {
  return (
    <footer style={{
      background: '#f4faff', borderTop: '1px solid #f1f5f9',
      padding: '49px 24px 48px',
    }}>
      <div className="footer-inner" style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 48, direction: 'rtl',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20,
            color: '#61001d', marginBottom: 16, lineHeight: '28px',
          }}>אנרול</div>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: 14, color: '#64748b', lineHeight: '20px',
          }}>© 2026 אנרול. כל הזכויות שמורות.</div>
        </div>

        <div className="footer-links" style={{ display: 'flex', gap: 32 }}>
          <Link to="/he/legal#privacy-policy" style={{
            fontFamily: 'var(--font-body)', fontSize: 14, color: '#64748b', lineHeight: '20px', textDecoration: 'none',
          }}>מדיניות פרטיות</Link>
          <Link to="/he/legal#terms-of-service" style={{
            fontFamily: 'var(--font-body)', fontSize: 14, color: '#64748b', lineHeight: '20px', textDecoration: 'none',
          }}>תנאי שימוש</Link>
          <Link to="/he/contact" style={{
            fontFamily: 'var(--font-body)', fontSize: 14, color: '#64748b', lineHeight: '20px', textDecoration: 'none',
          }}>צור קשר</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-inner {
            flex-direction: column !important;
            align-items: flex-end !important;
            gap: 24px !important;
          }
          .footer-links {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: flex-end !important;
          }
        }
      `}</style>
    </footer>
  )
}
