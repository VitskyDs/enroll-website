const STEPS = [
  {
    num: '01',
    icon: '🧠',
    title: 'ספרו לנו על העסק שלכם',
    body: 'שתפו את המותג שלכם, סוגי השירותים והמוצרים, ואת קהל הלקוחות — האנושי והפרוותי. אנרול בונה מועדון לקוחות מותאם בדיוק לעסק שלכם.',
  },
  {
    num: '02',
    icon: '🚀',
    title: 'השיקו תוכנית במותג שלכם',
    body: 'כרטיסיות דיגיטליות, הטבות ליום ההולדת של חיית המחמד, מנוי חודשי — הכול חי תחת המותג שלכם. בלי קוד, בלי מפתחים, מוכן תוך ימים.',
  },
  {
    num: '03',
    icon: '📈',
    title: 'תראו את הלקוחות חוזרים יותר',
    body: 'אנרול עוקבת אחרי אילו הטבות מביאות ביקורים חוזרים ומכווננת את התוכנית אוטומטית. אתם רואים את הנתונים. הבינה המלאכותית עושה את האופטימיזציה.',
  },
]

export default function PetsHowItWorks() {
  return (
    <section style={{ background: '#f4faff', padding: '88px 24px' }}>
      <style>{`
        .pets-hiw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-top: 3rem;
        }
        .pets-hiw-card {
          background: #fff;
          border: 1.5px solid #e8d9c0;
          border-radius: 14px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .pets-hiw-num {
          font-family: var(--font-heading);
          font-size: 2.75rem; font-weight: 800; letter-spacing: -0.05em;
          color: #e0e9f0; line-height: 1;
        }
        .pets-hiw-icon { font-size: 1.5rem; line-height: 1; margin-top: 0.25rem; }
        .pets-hiw-title {
          font-family: var(--font-heading);
          font-size: 1rem; font-weight: 700; color: #141d21;
          letter-spacing: -0.015em; line-height: 1.3;
        }
        .pets-hiw-body {
          font-family: var(--font-body);
          font-size: 0.875rem; color: #576065; line-height: 1.65;
        }
        @media (max-width: 900px) {
          .pets-hiw-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
          textTransform: 'uppercase', letterSpacing: '1.2px', color: '#61001d',
        }}>פשוט בעיצוב</p>
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 700,
          letterSpacing: '-0.03em', lineHeight: 1.15, color: '#141d21', margin: '0.6rem 0 0', maxWidth: 560,
        }}>
          מועדון הלקוחות שלכם, מוכן בשלושה צעדים
        </h2>
        <div className="pets-hiw-grid">
          {STEPS.map((s, i) => (
            <div key={i} className="pets-hiw-card">
              <div className="pets-hiw-num">{s.num}</div>
              <div className="pets-hiw-icon">{s.icon}</div>
              <div className="pets-hiw-title">{s.title}</div>
              <div className="pets-hiw-body">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
