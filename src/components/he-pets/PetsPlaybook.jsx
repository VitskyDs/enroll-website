const TIERS = [
  {
    icon: '🐾',
    name: 'חבר מועדון',
    label: 'התחלה',
    qualify: 'הרשמה אוטומטית',
    earnRate: 'נקודה אחת לכל ₪1',
    petBirthday: 'הטבה בחודש יום ההולדת',
    perk: 'כרטיס חבר דיגיטלי',
    accentColor: '#2d6a4f',
    borderColor: '#52b788',
  },
  {
    icon: '🥇',
    name: 'לקוח VIP',
    label: 'נאמן',
    qualify: 'לפי צבירה שנתית',
    earnRate: 'נקודה וחצי לכל ₪1',
    petBirthday: 'שבוע שלם לממש הטבה',
    perk: 'הטבות בלעדיות + גישה מוקדמת',
    accentColor: '#b5830a',
    borderColor: '#d4a017',
  },
  {
    icon: '💎',
    name: 'לקוח עלית',
    label: 'הדרגה הגבוהה',
    qualify: 'צבירה גבוהה או מנוי חודשי',
    earnRate: 'נקודתיים לכל ₪1',
    petBirthday: 'חודש שלם לממש הטבה',
    perk: 'טיפוח מותאם אישית לחיית המחמד',
    accentColor: '#9f1b32',
    borderColor: '#9f1b32',
    highlight: true,
  },
]

const HOOKS = [
  {
    icon: '⭐',
    title: 'תגמול משתנה',
    body: 'מבצע מפתיע פה ושם, יום כפל נקודות שם — אף אחד לא יודע מתי ההטבה הבאה תגיע. חוסר הוודאות הזה הוא בדיוק מה שגורם ללקוחות לבדוק שוב ושוב אם "יש משהו חדש".',
  },
  {
    icon: '⏰',
    title: 'דחיפות ופקיעת תוקף',
    body: 'נקודות שפוקעות אחרי כמה חודשים יוצרות דחיפות אמיתית — הלקוח חוזר רק כדי לא לאבד את מה שכבר צבר. חשש מהפסד הוא כלי שיווקי חזק.',
  },
  {
    icon: '🎂',
    title: 'אפקט יום ההולדת — של חיית המחמד',
    body: 'הטבה ליום ההולדת של הכלב או החתול מרגישה אישית ומיוחדת בהרבה מהטבה ללקוח האנושי. זה יוצר קשר רגשי אמיתי עם המותג שלכם.',
  },
  {
    icon: '📊',
    title: 'פס ההתקדמות',
    body: 'כל רכישה מזיזה את המחוג. 7 מתוך 10 חותמות לטיפוח חינם — הפער הקטן הזה הוא מניע קנייה חזק. הצורך "לסיים את הכרטיסייה" הוא מהכוחות החזקים ביותר בפסיכולוגיה של הצרכן.',
  },
  {
    icon: '👑',
    title: 'סטטוס וזהות',
    body: 'דרגת VIP או עלית היא לא רק תג — היא זהות. גישה מוקדמת למוצרים חדשים והטבות בלעדיות גורמות ללקוחות לרצות "להשתייך" למועדון.',
  },
  {
    icon: '🔁',
    title: 'מנוי מראש',
    body: 'מנוי חודשי למזון או לטיפוח קבוע מכניס הכנסה חוזרת עוד לפני שהשירות ניתן בפועל — ומבטיח שהלקוח יחזור כל חודש, בלי צורך לשכנע אותו מחדש.',
  },
]

export default function PetsPlaybook() {
  return (
    <section style={{ background: '#fff', padding: '88px 24px 0' }}>
      <style>{`
        .pets-playbook-header {
          margin-bottom: 3rem;
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
        }
        .pets-playbook-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #61001d;
          margin-bottom: 0.75rem;
        }
        .pets-playbook-h2 {
          font-family: var(--font-heading);
          font-size: clamp(1.85rem, 3.2vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.15;
          color: #141d21;
          margin-bottom: 1rem;
          max-width: 620px;
        }
        .pets-playbook-sub {
          font-family: var(--font-body);
          font-size: 1rem;
          color: #576065;
          line-height: 1.65;
          max-width: 560px;
        }
        .pets-tiers-wrap {
          max-width: 1280px;
          margin: 0 auto 3.5rem;
          background: #f4faff;
          border-radius: 16px;
          padding: 2.5rem 2rem;
        }
        .pets-tiers-label, .pets-hooks-label {
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9a8470;
          margin-bottom: 1.5rem;
        }
        .pets-tiers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .pets-tier-card {
          background: #fff;
          border-radius: 12px;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border: 1.5px solid #e8d9c0;
          position: relative;
          overflow: hidden;
        }
        .pets-tier-card-top-bar {
          position: absolute;
          top: 0; right: 0; left: 0;
          height: 3px;
        }
        .pets-tier-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pets-tier-icon { font-size: 1.5rem; line-height: 1; }
        .pets-tier-label {
          font-family: var(--font-body);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          border-radius: 100px;
          padding: 0.2rem 0.6rem;
        }
        .pets-tier-name {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #141d21;
        }
        .pets-tier-earn {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .pets-tier-rows {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid #e8d9c0;
        }
        .pets-tier-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: 0.78rem;
          line-height: 1.4;
        }
        .pets-tier-row-key { color: #9a8470; font-weight: 500; flex-shrink: 0; }
        .pets-tier-row-val { color: #141d21; font-weight: 600; text-align: left; }
        .pets-hooks-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .pets-hook-card {
          background: #f4faff;
          border: 1.5px solid #e8d9c0;
          border-radius: 14px;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .pets-hook-icon-wrap {
          width: 40px; height: 40px; border-radius: 10px;
          background: #e0e9f0;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem;
        }
        .pets-hook-title {
          font-family: var(--font-heading);
          font-size: 0.95rem; font-weight: 700; color: #141d21;
          letter-spacing: -0.015em; line-height: 1.3;
        }
        .pets-hook-body {
          font-family: var(--font-body);
          font-size: 0.85rem; color: #576065; line-height: 1.65;
        }
        .pets-playbook-callout {
          margin-top: 3.5rem;
          background: #141d21;
          padding: 3rem 2.5rem;
          text-align: center;
        }
        .pets-playbook-callout-quote {
          font-family: var(--font-body);
          font-size: clamp(1.1rem, 2vw, 1.45rem);
          font-weight: 600;
          color: #fff;
          line-height: 1.5;
          letter-spacing: -0.01em;
          max-width: 720px;
          margin: 0 auto;
        }
        .pets-playbook-callout-quote em {
          color: #e07a5f;
          font-style: normal;
        }
        @media (max-width: 900px) {
          .pets-tiers-grid, .pets-hooks-grid { grid-template-columns: 1fr !important; }
          section { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>

      <div className="pets-playbook-header">
        <div className="pets-playbook-eyebrow">השיטה של הרשתות הגדולות</div>
        <h2 className="pets-playbook-h2">איך רשתות ענק שומרות על בעלי חיות חוזרים שוב ושוב</h2>
        <p className="pets-playbook-sub">
          זו לא תחרות על איכות הטיפוח או המזון. הרשתות הגדולות מנצחות כי בנו מערכת מועדון לקוחות מדויקת —
          הנה איך היא בנויה, ולמה עד היום היא הייתה שמורה רק להן.
        </p>
      </div>

      <div className="pets-tiers-wrap">
        <div className="pets-tiers-label">מודל לדוגמה — שלוש דרגות שנועלות לקוחות פנימה</div>
        <div className="pets-tiers-grid">
          {TIERS.map((tier, i) => (
            <div key={i} className="pets-tier-card" style={{ borderColor: tier.highlight ? '#9f1b32' : '#e8d9c0' }}>
              <div className="pets-tier-card-top-bar" style={{ background: tier.borderColor }} />
              <div className="pets-tier-card-head">
                <span className="pets-tier-icon">{tier.icon}</span>
                <span className="pets-tier-label" style={{ background: tier.accentColor + '18', color: tier.accentColor }}>{tier.label}</span>
              </div>
              <div>
                <div className="pets-tier-name">{tier.name}</div>
                <div className="pets-tier-earn" style={{ color: tier.accentColor, marginTop: 6 }}>{tier.earnRate}</div>
              </div>
              <div className="pets-tier-rows">
                <div className="pets-tier-row">
                  <span className="pets-tier-row-key">תנאי הצטרפות</span>
                  <span className="pets-tier-row-val">{tier.qualify}</span>
                </div>
                <div className="pets-tier-row">
                  <span className="pets-tier-row-key">הטבת יום הולדת</span>
                  <span className="pets-tier-row-val">{tier.petBirthday}</span>
                </div>
                <div className="pets-tier-row">
                  <span className="pets-tier-row-key">הטבת סטטוס</span>
                  <span className="pets-tier-row-val">{tier.perk}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pets-hooks-label" style={{ maxWidth: 1280, margin: '0 auto 1.5rem', paddingInline: '0' }}>6 המנגנונים הפסיכולוגיים שגורמים לזה לעבוד</div>
      <div className="pets-hooks-grid">
        {HOOKS.map((h, i) => (
          <div key={i} className="pets-hook-card">
            <div className="pets-hook-icon-wrap">{h.icon}</div>
            <div className="pets-hook-title">{h.title}</div>
            <div className="pets-hook-body">{h.body}</div>
          </div>
        ))}
      </div>

      <div className="pets-playbook-callout">
        <p className="pets-playbook-callout-quote">
          "זה לא עוד מועדון לקוחות. זה <em>מנוע שימור מדויק</em>. ועד היום, הוא היה שמור רק לרשתות הענק."
        </p>
      </div>
    </section>
  )
}
