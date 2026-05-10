import Image from "next/image";
import styles from "@/styles/Internal.module.css";

export default function Work() {
  const activities = [
    "Peace talks between youths of different faiths at Tekan Headquarters to ensure safe elections.",
    "Bringing food and basic needs to families forced out of their homes in Jos South.",
    "Joining special community work on World Peace Day 2025.",
    "Meeting all government rules to keep our organization clean and honest.",
    "Setting up safe and clear banking methods to handle money properly."
  ];

  return (
    <div>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1>Our Real Actions</h1>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Real things we do to make communities safer every single day.</p>
        </div>
      </header>

      <main className="container section-padding">
        
        {/* Recent Activities Split */}
        <div className={styles.gridSplit21} style={{ marginBottom: '6rem' }}>
          <div>
            <span style={{ color: 'var(--color-secondary)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Recent Works</span>
            <h2 style={{ fontSize: '2.8rem', margin: '1rem 0 2rem' }}>What We Did Lately</h2>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--color-muted)' }}>
              Since becoming registered, we have spent our time doing these simple, useful jobs for the people.
            </p>
            <ul style={{ listStyle: 'none' }}>
              {activities.map((act, i) => (
                <li key={i} style={{ marginBottom: '1.2rem', display: 'flex', gap: '1.2rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', border: '1px solid #f3f4f6' }}>
                  <span style={{ color: 'var(--color-secondary)', fontWeight: 900, fontSize: '1.2rem' }}>✓</span>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>{act}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{ position: 'relative', height: '600px', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
             <Image 
               src="/images/outreach.png" 
               alt="IMDI IDP Support Engagement" 
               fill 
               priority
               sizes="(max-width: 992px) 100vw, 50vw"
               style={{ objectFit: 'cover' }}
             />
             <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(10, 38, 71, 0.95), transparent)', color: 'white', padding: '3rem 2rem' }}>
               <h4 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Field Deployment</h4>
               <p style={{ fontSize: '0.95rem', opacity: 0.9, marginBottom: 0 }}>Direct interaction and relief mechanics executed by active officers.</p>
             </div>
          </div>
        </div>

        {/* Rich 3-Grid Impact Deep-dive */}
        <div className={styles.paddedBox} style={{ backgroundColor: '#fff', boxShadow: 'var(--shadow-sm)', border: '1px solid #f0f0f0', marginBottom: '5rem' }}>
           <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2>Ways We Help People</h2>
           </div>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
              <div style={{ padding: '2rem', background: '#F9FAFB', borderRadius: '16px' }}>
                 <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
                 <h4>Help for Homeless</h4>
                 <p style={{ color: 'var(--color-muted)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Taking important aid items straight to camps where people had to flee their homes.</p>
              </div>
              <div style={{ padding: '2rem', background: '#F9FAFB', borderRadius: '16px' }}>
                 <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚖️</div>
                 <h4>Talking Things Out</h4>
                 <p style={{ color: 'var(--color-muted)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Creating safe spaces for angry groups to stop and talk instead of using force.</p>
              </div>
              <div style={{ padding: '2rem', background: '#F9FAFB', borderRadius: '16px' }}>
                 <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💧</div>
                 <h4>Clean Water</h4>
                 <p style={{ color: 'var(--color-muted)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Building simple wells and handwash setups to keep our neighbors from getting sick.</p>
              </div>
           </div>
        </div>

        {/* BRAND NEW Content Block */}
        <div className={styles.gridSplit12}>
           <div className={styles.imageWrapper}>
              <Image src="/images/p2.png" alt="Clean Water Delivery" fill sizes="(max-width: 992px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
           </div>
           <div>
              <span style={{ color: 'var(--color-secondary)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Solid Support</span>
              <h2 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>How We Reach People</h2>
              <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem' }}>
                 Getting help to far places can be tricky. We use local elders to make sure it reaches the right hands safely.
              </p>
              <div className={styles.subGrid2}>
                 <div>
                    <h5 style={{ marginBottom: '0.5rem' }}>1. Checking</h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>Local wise elders double-check which families really need help the most.</p>
                 </div>
                 <div>
                    <h5 style={{ marginBottom: '0.5rem' }}>2. Moving Safe</h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>We secure safe paths using village connections to deliver items safely.</p>
                 </div>
              </div>
           </div>
        </div>

      </main>
    </div>
  );
}
