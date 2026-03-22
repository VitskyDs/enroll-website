export default function Footer() {
  return (
    <footer style={{
      background: '#f4faff', borderTop: '1px solid #f1f5f9',
      padding: '49px 24px 48px',
    }}>
      <div className="footer-inner" style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20,
            color: '#61001d', marginBottom: 16, lineHeight: '28px',
          }}>Enroll</div>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: 14, color: '#64748b', lineHeight: '20px',
          }}>© 2026 Enroll. All rights reserved.</div>
        </div>

        <div className="footer-links" style={{ display: 'flex', gap: 32 }}>
          <a href="#" style={{
            fontFamily: 'var(--font-body)', fontSize: 14, color: '#64748b', lineHeight: '20px',
          }}>Privacy Policy</a>
          <a href="#" style={{
            fontFamily: 'var(--font-body)', fontSize: 14, color: '#64748b', lineHeight: '20px',
          }}>Terms of Service</a>
          <a href="#" style={{
            fontFamily: 'var(--font-body)', fontSize: 14, color: '#64748b', lineHeight: '20px',
          }}>Contact Us</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px !important;
          }
          .footer-links {
            flex-direction: column !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </footer>
  )
}
