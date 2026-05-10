import Link from "next/link";
import styles from "./Layout.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <h2>IMDI</h2>
            <p>Peacefully United. Cultivating universal peace and prosperity from Jos to the world.</p>
            
            <div className={styles.footerNewsletter}>
              <h4>Subscribe for Impact Updates</h4>
              <div className={styles.newsletterInput}>
                <input type="email" placeholder="Enter your email" />
                <button type="button" className={styles.newsletterBtn}>Join</button>
              </div>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h3>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/work">Thematic Areas</Link></li>
              <li><Link href="/involved">Get Involved</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h3>Legal</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li>Registration: CAC 2024</li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h3>Visit Us</h3>
            <div className={styles.contactInfo}>
              <p>No. 5 Nord Avenue,</p>
              <p>Tekan Hqters. Jos, Plateau State, Nigeria.</p>
              <p style={{ marginTop: '1rem' }}><strong>Email:</strong> interfaithmedevini@gmail.com</p>
              <p><strong>Phone:</strong> +234 803 445 9034</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Interfaith Mediation Development Initiative. All rights reserved.</p>
          <p>Developed for Global Peace.</p>
        </div>
      </div>
    </footer>
  );
}
