export default function HeTestimonial() {
  return (
    <section style={{ width: '100%' }}>
      <div style={{
        background: '#ecf5fc', borderRadius: 48, padding: '96px',
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }} className="testimonial-card">
        {/* Avatar */}
        <div style={{ marginBottom: 40 }}>
          <img
            src="/testimonial-avatar.jpg"
            alt="מרקוס צ׳ן"
            style={{
              width: 80, height: 80, borderRadius: '50%', objectFit: 'cover',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
            }}
          />
        </div>

        {/* Quote */}
        <blockquote style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 36,
          lineHeight: '40px', color: '#141d21', textAlign: 'center',
          maxWidth: 768, margin: 0,
        }} className="testimonial-quote">
          "לפני Enroll, התחרינו על המחיר. עכשיו, אנחנו מתחרים על הקהילה.
          קצב הביקורים היומי שלנו עלה ב-30%, ולבסוף
          אנחנו יודעים מי הלקוחות הקבועים שלנו באמת."
        </blockquote>

        {/* Attribution */}
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20,
            color: '#61001d', lineHeight: '28px',
          }}>מרקוס צ׳ן</div>
          <div style={{
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16,
            color: '#564143', lineHeight: '24px',
          }}>מייסד, The Coffee Lab</div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-card {
            padding: 48px 32px !important;
            border-radius: 32px !important;
          }
          .testimonial-quote {
            font-size: 24px !important;
            line-height: 32px !important;
          }
        }
        @media (max-width: 640px) {
          .testimonial-quote {
            font-size: 20px !important;
            line-height: 28px !important;
          }
          .testimonial-card {
            padding: 40px 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
