import styles from "@/styles/Internal.module.css";

export default function Contact() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1>Connect with Us</h1>
          <p style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>Have questions, need mediation, or wish to volunteer? Reach out.</p>
        </div>
      </header>

      <main className="container section-padding">
        <div className={styles.gridSplit11}>
          
          {/* Form Section */}
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ marginBottom: '2rem' }}>Send an Inquiry</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Full Name</label>
                <input type="text" placeholder="Your name" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'var(--font-body)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Email Address</label>
                <input type="email" placeholder="name@domain.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'var(--font-body)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Message</label>
                <textarea rows={5} placeholder="How can we assist you?" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'var(--font-body)', resize: 'none' }}></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Submit Message</button>
            </form>
          </div>

          {/* Contact Grid Details */}
          <div>
            <h3 style={{ marginBottom: '2rem' }}>Headquarters Info</h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ color: 'var(--color-secondary)', fontWeight: 700, marginBottom: '0.25rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>Mailing Address</p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>No. 5 Nord Avenue, Tekan Hqters.<br />Jos, Plateau State, Nigeria.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <p style={{ color: 'var(--color-secondary)', fontWeight: 700, marginBottom: '0.25rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>Digital Reach</p>
              <p style={{ fontSize: '1.1rem' }}><strong>Email:</strong> interfaithmedevini@gmail.com</p>
              <p style={{ fontSize: '1.1rem' }}><strong>Phone:</strong> +234 803 445 9034</p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '2rem 0' }} />

            <h4 style={{ marginBottom: '1rem' }}>Quick Connect</h4>
            <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>Start a conversation with us directly via WhatsApp for immediate inquiries.</p>
            
            {/* User provided WhatsApp: +2348127482603 */}
            <a 
              href="https://wa.me/2348127482603" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ backgroundColor: '#25D366', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Chat via WhatsApp
            </a>
          </div>

        </div>

        {/* Interactive Headquarters Map added to Contact Bottom */}
        <div style={{ marginTop: '6rem' }}>
           <h3 style={{ marginBottom: '1.5rem' }}>HQ Geographic Location</h3>
           <div style={{ height: '450px', width: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid #eee' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251724.6891736355!2d8.73201062718514!3d9.869348282953675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105373b945d3b3ef%3A0xe693ed5583c02795!2sJos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border:0, filter: 'grayscale(0.2) contrast(1.05)' }} 
                allowFullScreen 
                loading="lazy">
              </iframe>
           </div>
        </div>
      </main>
    </div>
  );
}
