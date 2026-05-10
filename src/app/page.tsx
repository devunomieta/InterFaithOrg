import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      {/* Rich Hero Section (100vh) */}
      <section className={styles.hero}>
        <Image
          src="/images/hero.png"
          alt="Diverse community leaders shaking hands"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
          style={{ objectPosition: 'center 25%' }}
        />
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={`${styles.heroContent} fade-up`}>
            <div className={styles.heroBadge}>
              <span></span>
              IMDI: Peacefully United
            </div>
            <h1>Building Peace, <br /> Expanding <span style={{ color: 'var(--color-gold)' }}>Possibilities.</span></h1>
            <p>
              We work with people of all faiths to help keep communities safe, provide jobs, and build a peaceful future for everyone.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/involved" className="btn btn-secondary" style={{ padding: '1.2rem 2.5rem' }}>Help Us Out</Link>
              <Link href="/work" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)', padding: '1.2rem 2.5rem', backdropFilter: 'blur(10px)' }}>
                What We Do
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Premium Mission Split overlay */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>🕊️</div>
              <h3>Lasting Peace</h3>
              <p>We work directly with locals to stop fighting and create a calm home for all families.</p>
            </div>
            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>🤝</div>
              <h3>People United</h3>
              <p>We bring people from every faith side-by-side to talk and solve issues as one community.</p>
            </div>
            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>🌍</div>
              <h3>Good Living</h3>
              <p>We create farming and business chances so families can afford simple basic life necessities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Counter strip */}
      <section style={{ background: 'var(--grad-dark)', padding: '6rem 0', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', textAlign: 'center', gap: '3rem' }}>
            <div>
              <h2 style={{ color: 'white', fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>14+</h2>
              <p style={{ color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>Years of Advocacy</p>
            </div>
            <div>
              <h2 style={{ color: 'white', fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>100+</h2>
              <p style={{ color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>Civil Society Partners</p>
            </div>
            <div>
              <h2 style={{ color: 'white', fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>5+</h2>
              <p style={{ color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>Thematic Areas</p>
            </div>
            <div>
              <h2 style={{ color: 'white', fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>8140662</h2>
              <p style={{ color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>CAC Reg. Number</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pillars */}
      <section className="section-padding" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span>Areas of Help</span>
            <h2>What We Do Every Day</h2>
          </div>

          <div className={styles.pillarsGrid}>
            {[
              { id: "01", title: "Fighting Poverty", desc: "Helping families start their own small business to provide food and basic home needs.", img: "/images/p1.png" },
              { id: "02", title: "Clean Water & Health", desc: "Fixing community taps and wells so families stay healthy and have enough water.", img: "/images/p2.png" },
              { id: "03", title: "Protecting Homes", desc: "Speaking out to stop fighting at home and making sure women and kids are protected.", img: "/images/p3.png" },
              { id: "04", title: "Helping the Homeless", desc: "Supporting brothers and sisters who were forced to leave their homes due to hard times.", img: "/images/p4.png" },
              { id: "05", title: "Fair Human Rights", desc: "Standing up for what is right so everyone gets a fair chance, no matter who they are.", img: "/images/p5.png" },
              { id: "06", title: "Community Dialogue", desc: "Organizing simple peace talks between people of all backgrounds and faith traditions.", img: "/images/hero.png" }
            ].map((item, idx) => (
              <div className={styles.pillarCard} key={idx}>
                <div className={styles.pillarBg}>
                  <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.pillarOverlay}></div>
                <span className={styles.pillarNumber}>{item.id}</span>
                <div className={styles.pillarContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standardized Historical Timeline */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span>Historical Evolution</span>
            <h2>The Journey of Peace</h2>
            <p style={{ color: 'var(--color-muted)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto' }}>Tracing strategic development milestones since our initial incept point.</p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <span className={styles.timelineYear}>2010</span>
              <div className={styles.timelineContent}>
                <h4 style={{ fontSize: '1.3rem' }}>How We Started</h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-muted)', marginTop: '0.5rem', lineHeight: 1.8 }}>
                  We started as young people who just wanted to help stop the fighting in our communities. We brought groups together to sit down and start talking in peace.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <span className={styles.timelineYear}>2019</span>
              <div className={styles.timelineContent}>
                <h4 style={{ fontSize: '1.3rem' }}>Growing Stronger</h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-muted)', marginTop: '0.5rem', lineHeight: 1.8 }}>
                  We created local farming groups that united youths from different religions, giving them honest work so they wouldn&apos;t turn back to fighting.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <span className={styles.timelineYear}>2024</span>
              <div className={styles.timelineContent}>
                <h4 style={{ fontSize: '1.3rem' }}>Officially Registered - BN: 8140662</h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-muted)', marginTop: '0.5rem', lineHeight: 1.8 }}>
                  We passed all government requirements and became a legally registered NGO in Nigeria so we could expand and help even more people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Geographic Anchor (New Separate Section) */}
      <section className="section-padding" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className={styles.flexHeader}>
            <div>
              <span style={{ color: 'var(--color-secondary)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Operational Base</span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '0.5rem' }}>Our Base</h2>
            </div>
            <p style={{ color: 'var(--color-muted)', maxWidth: '450px', fontSize: '0.95rem' }}>Our central office is located in Jos, Plateau State, Nigeria, from where we coordinate all our activities.</p>
          </div>

          <div className={styles.standaloneMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251724.6891736355!2d8.73201062718514!3d9.869348282953675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105373b945d3b3ef%3A0xe693ed5583c02795!2sJos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.1) contrast(1.05)' }}
              allowFullScreen
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>

      {/* Standalone Matrix CTA (New Separate Section) */}
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className={styles.actionStrip}>
            <div className={styles.actionCard} style={{ background: 'white' }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤝</div>
                <h3 style={{ fontSize: '1.5rem' }}>Strategic Partnership</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', marginTop: '0.5rem' }}>Join us in achieving lasting peace and stability.</p>
              </div>
              <Link href="/involved" className="btn btn-outline" style={{ width: 'fit-content', padding: '0.8rem 1.8rem', fontSize: '0.8rem', marginTop: '1.5rem' }}>Partner With Us</Link>
            </div>

            <div className={styles.actionCard} style={{ background: 'var(--color-primary)', color: 'white' }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💸</div>
                <h3 style={{ fontSize: '1.5rem', color: 'white' }}>Support Us</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>Help us provide essential aid and promote peace in communities.</p>
              </div>
              <Link href="/involved" className="btn btn-secondary" style={{ width: 'fit-content', padding: '0.8rem 1.8rem', fontSize: '0.8rem', marginTop: '1.5rem' }}>Support Us</Link>
            </div>

            <div className={styles.actionCard} style={{ background: 'white', border: '1px solid #eee' }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏢</div>
                <h3 style={{ fontSize: '1.5rem' }}>Get In Touch</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', marginTop: '0.5rem' }}>We’d love to hear from you. Reach out through any of our channels.</p>
              </div>
              <Link href="/contact" className="btn btn-outline" style={{ width: 'fit-content', padding: '0.8rem 1.8rem', fontSize: '0.8rem', marginTop: '1.5rem' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overhauled Feature: Farming Project */}
      <section className="section-padding" style={{ background: '#FDFCF6' }}>
        <div className="container">
          <div className={styles.farmingSection}>
            <div className={styles.farmingImg}>
              <Image
                src="/images/farming.png"
                alt="Interfaith Farming Project"
                fill
                sizes="(max-width: 992px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.farmingContent}>
              <span style={{ color: 'var(--color-secondary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', marginBottom: '1rem', display: 'block' }}>Highlighted Initiative</span>
              <h2 style={{ fontSize: '2.8rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>Peaceful Farming Work</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--color-muted)' }}>
                Helping to end violence by bringing youths from different religions to work on farms together and feed their families.
              </p>
              <ul className={styles.farmingList} style={{ listStyle: 'none', padding: 0 }}>
                <li>
                  <span style={{ color: '#27ae60', fontSize: '1.2rem' }}>✔</span>
                  Provides Sustainable Income for the youths
                </li>
                <li>
                  <span style={{ color: '#27ae60', fontSize: '1.2rem' }}>✔</span>
                  Reduces Violence Among Youths
                </li>
                <li>
                  <span style={{ color: '#27ae60', fontSize: '1.2rem' }}>✔</span>
                  Establishes Long-Term Food Resilience
                </li>
              </ul>
              <Link href="/involved" className="btn btn-secondary" style={{ alignSelf: 'flex-start', marginTop: '1.5rem', padding: '1rem 2rem' }}>
                Support this Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trustee Spotlight Row */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span>Our Leaders</span>
            <h2>Board of Trustees</h2>
          </div>

          <div className={styles.trusteeRow}>
            {[
              { name: "Evang. Dr. Joshua John JP", role: "Chairman", img: "/images/t1.png" },
              { name: "Alh. Othman Ibrahim", role: "Secretary", img: "/images/t2.png" },
              { name: "Mark Teller K. Babuje", role: "Treasurer", img: "/images/t3.png" },
              { name: "Sheik Idris Sani Auwal", role: "Religious Ed", img: "/images/t4.png" }
            ].map((tr, idx) => (
              <div className={styles.trusteeCard} key={idx}>
                <div className={styles.trusteeImageLayer}>
                  <Image src={tr.img} alt={tr.name} fill sizes="(max-width: 768px) 100vw, 25vw" style={{ objectFit: 'cover', objectPosition: 'center 20%' }} />
                </div>
                <div className={styles.trusteeOverlay}>
                  <h4>{tr.name}</h4>
                  <p>{tr.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/about" className="btn btn-outline" style={{ padding: '1rem 3rem' }}>View Our Leadership</Link>
          </div>
        </div>
      </section>

      {/* Brand New Visual Dispatch / Masonry Gallery */}
      <section className="section-padding" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="container">
          <div className={styles.flexHeader}>
            <div>
              <span style={{ color: 'var(--color-secondary)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Our Projects</span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '0.5rem' }}>Real Actions</h2>
            </div>
            <Link href="/work" style={{ fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>View Projects →</Link>
          </div>

          <div className={styles.galleryGrid}>
            <div className={`${styles.galleryItem} ${styles.galleryItem1}`}>
              <Image src="/images/outreach.png" alt="Outreach" fill sizes="(max-width: 992px) 100vw, 60vw" style={{ objectFit: 'cover' }} />
              <div className={styles.galleryCaption}>
                <h4 style={{ color: 'white' }}>IDP Cluster Engagement</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Direct aid dispatch during quarterly visit in Plateau state.</p>
              </div>
            </div>
            <div className={`${styles.galleryItem} ${styles.galleryItem2}`}>
              <Image src="/images/hero.png" alt="Conference" fill sizes="(max-width: 992px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
              <div className={styles.galleryCaption}>
                <h4 style={{ color: 'white' }}>Interfaith Leadership</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Cross-denominational strategic planning summit.</p>
              </div>
            </div>
            <div className={`${styles.galleryItem} ${styles.galleryItem3}`}>
              <Image src="/images/farming.png" alt="Farm" fill sizes="(max-width: 992px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
              <div className={styles.galleryCaption}>
                <h4 style={{ color: 'white' }}>IFP Site Activation</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Ground-breaking for self-sustaining pilot farm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section style={{
        background: 'var(--grad-dark)',
        padding: '8rem 0',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ color: 'white', fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-1px' }}>Help Build Peace Today</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', opacity: 0.85, fontSize: '1.2rem' }}>
            Your help directly supports simple safety work and meals for the needy. Let us walk this long, good road together.
          </p>
          <div className={styles.buttonRow}>
            <Link href="/involved" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1.2rem 2.5rem' }}>
              Donate Resources
            </Link>
            <Link href="/contact" className="btn" style={{ backgroundColor: 'var(--color-secondary)', color: 'white', padding: '1.2rem 2.5rem' }}>
              Join our Peace Network
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
