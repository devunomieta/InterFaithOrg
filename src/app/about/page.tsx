import Image from "next/image";
import styles from "@/styles/Internal.module.css";

const trustees = [
  { name: "Evang. Dr. Ringsum Joshua John JP", role: "Chairman", img: "/images/t1.png" },
  { name: "Alh. Othman Ibrahim", role: "Secretary", img: "/images/t2.png" },
  { name: "Mark Teller Kasuwa Babuje", role: "Treasurer / Procurement", img: "/images/t3.png" },
  { name: "Sheik Idris Sani Auwal", role: "Religious Education", img: "/images/t4.png" },
  { name: "Whycliff Daniel Cishak", role: "Administration Secretary", img: "/images/t6.png" },
  { name: "Haj. Aisha Yakubu Adam", role: "Welfare Secretary", img: "/images/t5.png" },
  { name: "Alh. Ado Ismaila Shisi", role: "Research & Development", img: "/images/t2.png" },
  { name: "Danlami Kumbet", role: "Finance / Security", img: "/images/t3.png" },
  { name: "Late. Rev. Dr. Philip Mulbish Dafes", role: "Trustee Emeritus", img: "/images/t1.png" }
];

export default function About() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1>Who We Are</h1>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Learn simple details about where we came from and what we plan to do.</p>
        </div>
      </header>

      <main className="container">
        {/* Historical Narrative Split */}
        <section className={styles.gridSplit11} style={{ padding: '6rem 0' }}>
          <div className={styles.imageWrapper}>
             <Image src="/images/hero.png" alt="History" fill sizes="(max-width: 992px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <span style={{ color: 'var(--color-secondary)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Our Story</span>
            <h2 style={{ fontSize: '2.8rem', margin: '1rem 0 2rem' }}>How It Began</h2>
            <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--color-muted)', marginBottom: '1.5rem' }}>
              Back in 2010, when there was heavy fighting in Jos, our small group of locals came together with help from the Interfaith Center in Kaduna.
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--color-muted)' }}>
              We grew from being just young ambassadors into a fully organized body. Finally in 2024, we completed our long wait and became a legally registered group with the government.
            </p>
          </div>
        </section>

        {/* Vision/Mission Cards Strip */}
        <section className={`${styles.gridSplit11} ${styles.paddedBox}`} style={{ backgroundColor: 'var(--color-primary)', color: 'white', marginBottom: '4rem' }}>
          <div>
             <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>👁</div>
             <h3 style={{ color: 'white', fontSize: '2rem' }}>Our Dream</h3>
             <p style={{ opacity: 0.8, fontSize: '1.1rem', marginTop: '1rem' }}>
               To see a calm world where fighting stops and everyone has simple opportunities to earn a decent living.
             </p>
          </div>
          <div>
             <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
             <h3 style={{ color: 'white', fontSize: '2rem' }}>Our Goal</h3>
             <p style={{ opacity: 0.8, fontSize: '1.1rem', marginTop: '1rem' }}>
               We unite directly with religious leaders and groups around the state to help the needy and end poverty together.
             </p>
          </div>
        </section>

        {/* Trustees Row */}
        <section className="section-padding">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: 'var(--color-secondary)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>The Board</span>
            <h2 style={{ fontSize: '2.5rem' }}>Organizational Trustees</h2>
          </div>
          
          <div className={styles.trusteeGrid}>
            {trustees.map((t, i) => (
              <div key={i} className={styles.trusteeCard}>
                <div className={styles.trusteeImage}>
                  <Image src={t.img} alt={t.name} fill sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover', objectPosition: 'center 20%' }} />
                </div>
                <div className={styles.trusteeOverlay}>
                   <div className={styles.trusteeName}>{t.name}</div>
                   <div className={styles.trusteeRole}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expansion of Partner Logic */}
        <section style={{ borderTop: '1px solid #eee', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
             <span style={{ color: 'var(--color-secondary)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Stronger Together</span>
             <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Our Partners</h2>
             <p style={{ color: 'var(--color-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>Groups that are joining hands with us to make life better.</p>
          </div>
          
          <div className={styles.partnerList}>
             <div className={styles.partnerItem}>
                <div className={styles.partnerLogoFaux}>C</div>
                <strong style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>CECEAN Network</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.8rem', color: 'var(--color-muted)' }}>Cooperative body representing 25+ dynamic interfaith peace actors.</p>
             </div>
             <div className={styles.partnerItem}>
                <div className={styles.partnerLogoFaux}>L</div>
                <strong style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>League of CSO</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.8rem', color: 'var(--color-muted)' }}>Unified state supporting grid representing 100+ active bodies.</p>
             </div>
             <div className={styles.partnerItem}>
                <div className={styles.partnerLogoFaux}>J</div>
                <strong style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>Joint Alliances</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.8rem', color: 'var(--color-muted)' }}>Theological frameworks CAN & JNI for critical on-ground safety.</p>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
