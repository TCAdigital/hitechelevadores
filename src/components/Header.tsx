"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logo}>
          <Image 
            src="/logo-hitech-elevadores.png" 
            alt="Hi-Tech Elevadores" 
            width={180} 
            height={50} 
            className={styles.logoImg}
            priority
          />
        </a>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contato" className={`${styles.btnHeaderBlack} ${styles.navCta}`} onClick={() => setMenuOpen(false)}>
            Solicitar Cotação
          </a>
        </nav>
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
