import Image from "next/image";
import styles from "@/styles/Internal.module.css";

export default function Involved() {
  const needs = [
    "Payment of Temporary office Rents.",
    "Office furnitures, laptops, and ICT equipments.",
    "Mobility resources to support field work.",
    "Operating finances for routine organizational overhead.",
    "Agricultural tools, high-quality fertilizers, and initial startup capital for the Interfaith Farming Project."
  ];

  return (
    <div>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1>Help Us Out</h1>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Work with us to support our daily efforts to keep our town peaceful.</p>
        </div>
      </header>

      <main className="container section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          {/* Bank Details Card */}
          <div>
            <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '3rem', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }}>
              <h3 style={{ color: 'white', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>
                Send Money to Help
              </h3>
              <p style={{ opacity: 0.8, marginBottom: '2rem', fontSize: '0.9rem' }}>
                Every little bit helps us do our work. Here is our real bank info:
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', color: 'var(--color-gold)', fontWeight: 700, letterSpacing: '1px' }}>Bank Name</label>
                <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>First Bank Nigeria PLC</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', color: 'var(--color-gold)', fontWeight: 700, letterSpacing: '1px' }}>Account Number</label>
                <p style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '1px' }}>204657086</p>
              </div>

              <div>
                <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', color: 'var(--color-gold)', fontWeight: 700, letterSpacing: '1px' }}>Account Holder</label>
                <p style={{ fontSize: '1rem' }}>Interfaith Mediation Development Initiative</p>
              </div>
            </div>
          </div>

          {/* Needs List */}
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Items We Need Now</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-muted)' }}>To run a strong office, we currently need help getting these simple tools:</p>
            
            <ul style={{ listStyle: 'none' }}>
              {needs.map((need, idx) => (
                <li key={idx} style={{ padding: '1rem', borderBottom: '1px solid #eee', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-secondary)', fontSize: '1.2rem' }}>❖</span>
                  <span>{need}</span>
                </li>
              ))}
            </ul>
            
            <div style={{ marginTop: '2rem', backgroundColor: '#f4f6f1', padding: '2rem', borderRadius: '12px' }}>
              <h4>Physical In-Kind Donation?</h4>
              <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 1.5rem' }}>For shipping logistical tools or donating office gear, please contact us directly to coordinate delivery to Jos HQ.</p>
              <a href="/contact" className="btn btn-secondary">Contact Logistic Team</a>
            </div>
          </div>

        </div>
        
        {/* EXTRA Strategic Content Added */}
        <section className={`${styles.gridSplit21} ${styles.paddedBox}`} style={{ marginTop: '6rem', backgroundColor: 'white', boxShadow: 'var(--shadow-sm)' }}>
           <div>
              <span style={{ color: 'var(--color-secondary)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Honest Handling</span>
              <h2 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>Where Your Help Goes</h2>
              <p style={{ color: 'var(--color-muted)', marginBottom: '2rem' }}>
                 We follow every single government law. Every kobo sent to us goes straight to solving problems on the ground. We don&apos;t waste it.
              </p>
              <div className={styles.statStrip}>
                 <div>
                    <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: 0 }}>100%</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', fontWeight: 700 }}>Honest Following of Rules</p>
                 </div>
                 <div style={{ borderLeft: '1px solid #eee', paddingLeft: '2rem' }}>
                    <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: 0 }}>0%</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', fontWeight: 700 }}>Hidden Costs or Fees</p>
                 </div>
              </div>

              <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                 <a href="/documents/cac.pdf" download className="btn" style={{ backgroundColor: 'var(--color-secondary)', color: 'white', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    ⬇ CAC CERTIFICATE.PDF
                 </a>
                 <a href="/documents/scuml.pdf" download className="btn btn-outline" style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    ⬇ SCUML COMPLIANCE.PDF
                 </a>
              </div>
           </div>
           <div style={{ position: 'relative', height: '350px', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <Image src="/images/p1.png" alt="Accountability Asset" fill sizes="(max-width: 992px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
           </div>
        </section>
      </main>
    </div>
  );
}
