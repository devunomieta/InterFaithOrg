"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Layout.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <div style={{ position: 'relative', width: '50px', height: '50px', background: 'white', borderRadius: '50%', padding: '4px', border: '1px solid rgba(0,0,0,0.08)', boxShadow: 'var(--shadow-sm)' }}>
             <Image src="/images/logo.png" alt="IMDI Logo" fill style={{ objectFit: 'contain' }} />
          </div>
        </Link>

        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : '' }}></span>
          <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : '' }}></span>
        </button>

        <nav className={`${styles.navList} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <Link href="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
          <Link href="/about" className={styles.navLink} onClick={closeMenu}>About Us</Link>
          <Link href="/work" className={styles.navLink} onClick={closeMenu}>Our Work</Link>
          <Link href="/involved" className={styles.navLink} onClick={closeMenu}>Get Involved</Link>
          <Link href="/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
          
          <Link href="/involved" onClick={closeMenu} className={`btn btn-secondary ${styles.donateBtn}`}>
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
