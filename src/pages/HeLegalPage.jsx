import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeNavbar from '../components/he/HeNavbar'
import HeFooter from '../components/he/HeFooter'

const LAST_UPDATED = '28 במרץ 2026'

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ paddingTop: 80, marginTop: -80 }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 36,
        color: '#141d21', letterSpacing: '-0.5px', margin: '0 0 8px',
      }}>{title}</h2>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: 14, color: '#94a3b8',
        margin: '0 0 40px',
      }}>עודכן לאחרונה: {LAST_UPDATED}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {children}
      </div>
    </section>
  )
}

function Block({ heading, children }) {
  return (
    <div>
      {heading && (
        <h3 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18,
          color: '#141d21', margin: '0 0 10px',
        }}>{heading}</h3>
      )}
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065',
        lineHeight: '28px',
      }}>{children}</div>
    </div>
  )
}

export default function HeLegalPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  const divider = (
    <hr style={{ border: 'none', borderTop: '1px solid #e6eff6', margin: '16px 0' }} />
  )

  return (
    <div dir="rtl" className="he-page" style={{ background: '#f4faff', minHeight: '100vh' }}>
      <HeNavbar />

      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ padding: '72px 24px 56px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(129,27,50,0.08)', borderRadius: 24,
              padding: '6px 16px', marginBottom: 24,
            }}>
              <span style={{
                fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13,
                color: '#811b32', letterSpacing: '0.4px',
              }}>משפטי</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 56,
              color: '#141d21', lineHeight: '64px', letterSpacing: '-1px',
              margin: '0 0 20px',
            }}>פרטיות ותנאים</h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 18, color: '#576065',
              lineHeight: '30px', maxWidth: 520, margin: '0 0 40px',
            }}>
              אנחנו מאמינים בשקיפות. כך אנו מטפלים בנתונים שלך ומה אתה מסכים לו בעת השימוש באנרול.
            </p>

            {/* Jump links */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {[
                { href: '#privacy-policy', label: 'מדיניות פרטיות' },
                { href: '#terms-of-service', label: 'תנאי שימוש' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14,
                    color: '#811b32', textDecoration: 'none',
                    background: '#fff', border: '1.5px solid #e6eff6',
                    borderRadius: 24, padding: '8px 20px',
                    transition: 'border-color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#811b32'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#e6eff6'}
                >
                  ↓ {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '0 24px 96px' }}>
          <div style={{
            maxWidth: 760, margin: '0 auto',
            display: 'flex', flexDirection: 'column', gap: 80,
          }}>
            {/* Privacy Policy */}
            <Section id="privacy-policy" title="מדיניות פרטיות">
              <Block>
                אנרול לויאלטי בע"מ ("אנרול", "אנחנו", "שלנו") מפעילה את פלטפורמת נאמנות הלקוחות של אנרול. מדיניות פרטיות זו מסבירה אילו מידע אנו אוספים, כיצד אנו משתמשים בו, ואילו אפשרויות עומדות בפניך.
              </Block>

              <Block heading="המידע שאנו אוספים">
                <p style={{ margin: '0 0 10px' }}>אנו אוספים מידע שאתה מוסר לנו ישירות, כולל:</p>
                <ul style={{ margin: 0, paddingRight: 20, paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li><strong>פרטי חשבון:</strong> שמך, כתובת האימייל ופרטי העסק שלך בעת ההרשמה או הצטרפות לרשימת ההמתנה.</li>
                  <li><strong>תקשורת:</strong> הודעות שאתה שולח לנו דרך טפסי יצירת קשר או אימייל.</li>
                  <li><strong>נתוני שימוש:</strong> מידע על אופן האינטראקציה שלך עם הפלטפורמה, כגון דפים שביקרת, פיצ'רים שהשתמשת בהם וזמן השהייה.</li>
                  <li><strong>נתוני מכשיר:</strong> כתובת IP, סוג דפדפן ומערכת הפעלה, הנאספים באופן אוטומטי.</li>
                </ul>
              </Block>

              <Block heading="כיצד אנו משתמשים במידע שלך">
                <ul style={{ margin: 0, paddingRight: 20, paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li>לספק, להפעיל ולשפר את פלטפורמת אנרול.</li>
                  <li>לתקשר איתך בנוגע לחשבונך, עדכונים וחדשות המוצר.</li>
                  <li>לענות לשאלותיך ובקשות התמיכה שלך.</li>
                  <li>לנתח דפוסי שימוש ולשפר את השירות שלנו.</li>
                  <li>לציית לחובות משפטיות.</li>
                </ul>
              </Block>

              <Block heading="שיתוף המידע שלך">
                אנחנו לא מוכרים את המידע האישי שלך. אנו עשויים לשתף את המידע שלך עם:
                <ul style={{ margin: '10px 0 0', paddingRight: 20, paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li><strong>ספקי שירות</strong> המסייעים לנו להפעיל את הפלטפורמה (כגון אחסון, ניתוח נתונים, משלוח מיילים), המחויבים לחובות סודיות.</li>
                  <li><strong>רשויות משפטיות</strong> כנדרש על פי חוק או להגנת זכויותינו.</li>
                  <li><strong>ממשיכים</strong> במקרה של מיזוג, רכישה או מכירת נכסים.</li>
                </ul>
              </Block>

              <Block heading="עוגיות (Cookies)">
                אנו משתמשים בעוגיות וטכנולוגיות מעקב דומות להפעלת האתר ולהבנת השימוש בו. באפשרותך לשלוט בעוגיות דרך הגדרות הדפדפן שלך. השבתת עוגיות עשויה להשפיע על חלק מהפונקציונליות.
              </Block>

              <Block heading="שמירת נתונים">
                אנו שומרים את המידע שלך כל עוד חשבונך פעיל או לפי הצורך לספק שירותים. תוכל לבקש מחיקת הנתונים שלך בכל עת על ידי פנייה אלינו בכתובת <a href="mailto:hi@joinenroll.app" style={{ color: '#811b32' }}>hi@joinenroll.app</a>.
              </Block>

              <Block heading="הזכויות שלך">
                בהתאם למיקומך, ייתכן שיש לך זכות לגשת, לתקן או למחוק את המידע האישי שלך, או להתנגד לעיבודו. לממש זכויות אלו, פנה אלינו בכתובת <a href="mailto:hi@joinenroll.app" style={{ color: '#811b32' }}>hi@joinenroll.app</a>.
              </Block>

              <Block heading="שינויים במדיניות זו">
                אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. נודיע לך על שינויים מהותיים על ידי פרסום המדיניות החדשה בדף זה עם תאריך מעודכן.
              </Block>

              <Block heading="יצירת קשר">
                שאלות בנוגע למדיניות פרטיות זו? שלח לנו מייל לכתובת <a href="mailto:hi@joinenroll.app" style={{ color: '#811b32' }}>hi@joinenroll.app</a>.
              </Block>
            </Section>

            {divider}

            {/* Terms of Service */}
            <Section id="terms-of-service" title="תנאי שימוש">
              <Block>
                תנאי שימוש אלה ("תנאים") מסדירים את הגישה שלך לפלטפורמת ואתר אנרול (ביחד, "השירות") המופעל על ידי אנרול לויאלטי בע"מ. בגישה לשירות או שימוש בו, אתה מסכים להיות כפוף לתנאים אלה.
              </Block>

              <Block heading="שימוש בשירות">
                עליך להיות בן 18 לפחות ומוסמך להתקשר בחוזה מחייב על מנת להשתמש באנרול. אתה מסכים להשתמש בשירות רק למטרות חוקיות ובהתאם לתנאים אלה. אתה אחראי לשמירה על סודיות פרטי הכניסה לחשבונך.
              </Block>

              <Block heading="שימוש מותר">
                אתה מסכים שלא:
                <ul style={{ margin: '10px 0 0', paddingRight: 20, paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li>להשתמש בשירות לכל מטרה בלתי חוקית או לא מורשית.</li>
                  <li>להעביר תוכן מזיק, פוגעני או מפריע.</li>
                  <li>לנסות לקבל גישה בלתי מורשית לכל חלק מהשירות או למערכות הקשורות.</li>
                  <li>לבצע הנדסה לאחור, פירוק או ניסיון לחלץ את קוד המקור של השירות.</li>
                  <li>להשתמש באמצעים אוטומטיים לגישה לשירות ללא אישור בכתב מאיתנו.</li>
                </ul>
              </Block>

              <Block heading="קניין רוחני">
                השירות ותוכנו המקורי, תכונותיו ופונקציונליותו הם ויישארו רכושה הבלעדי של אנרול לויאלטי בע"מ. סימני המסחר ועיצוב המסחר שלנו אינם ניתנים לשימוש בקשר עם כל מוצר או שירות ללא הסכמתנו המוקדמת בכתב.
              </Block>

              <Block heading="רשימת המתנה וגישה מוקדמת">
                הצטרפות לרשימת ההמתנה שלנו אינה מהווה הסכם מחייב לרכישת מוצר או שירות כלשהו. אנו שומרים לעצמנו את הזכות לשנות, לעכב או להפסיק את השירות בכל עת ללא אחריות.
              </Block>

              <Block heading="הכחשת אחריות">
                השירות מסופק "כפי שהוא" ו"כפי שזמין" ללא כל אחריות מכל סוג שהוא, בין מפורשת ובין משתמעת, כולל אחריות משתמעת לסחירות, התאמה למטרה מסוימת, או אי-הפרה.
              </Block>

              <Block heading="הגבלת אחריות">
                במידה המרבית המותרת על פי הדין החל, אנרול לויאלטי בע"מ לא תהיה אחראית לנזקים עקיפים, מקריים, מיוחדים, תוצאתיים או עונשיים הנובעים מהשימוש שלך בשירות.
              </Block>

              <Block heading="סיום">
                אנו עשויים להשעות או לסיים את גישתך לשירות בכל עת, עם סיבה או בלעדיה, עם הודעה או בלעדיה. עם הסיום, זכותך להשתמש בשירות תפסיק מיידית.
              </Block>

              <Block heading="דין החל">
                תנאים אלה נשלטים ומפורשים בהתאם לחוקי מדינת דלוור, ארצות הברית, ללא התחשבות בהוראות ניגוד החוקים שלה.
              </Block>

              <Block heading="שינויים בתנאים אלה">
                אנו שומרים לעצמנו את הזכות לשנות תנאים אלה בכל עת. נודיע לך על שינויים מהותיים על ידי פרסום התנאים המעודכנים בדף זה. המשך השימוש שלך בשירות לאחר כל שינוי מהווה קבלתך את התנאים החדשים.
              </Block>

              <Block heading="יצירת קשר">
                שאלות בנוגע לתנאים אלה? שלח לנו מייל לכתובת <a href="mailto:hi@joinenroll.app" style={{ color: '#811b32' }}>hi@joinenroll.app</a>.
              </Block>
            </Section>
          </div>
        </section>
      </main>

      <HeFooter />
    </div>
  )
}
