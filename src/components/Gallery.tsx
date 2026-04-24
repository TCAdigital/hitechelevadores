"use client";
import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import styles from "./Gallery.module.css";

const PHOTOS = [
  { src: "/images/hero-bg.png", alt: "Elevador moderno" },
  { src: "/images/elevator-residential.png", alt: "Elevador residencial" },
  { src: "/images/elevator-commercial.png", alt: "Elevador comercial" },
  { src: "/images/elevator-industrial.png", alt: "Elevador industrial" },
  { src: "/images/gallery-1.png", alt: "Elevador panorâmico" },
  { src: "/images/gallery-2.png", alt: "Plataforma de acessibilidade" },
  { src: "/images/gallery-3.png", alt: "Painel de controle" },
  { src: "/images/about.png", alt: "Instalação profissional" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galeria" className={`section ${styles.gallery}`}>
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Portfólio</p>
          <h2 className="section-title section-title--center">Galeria de Projetos</h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {PHOTOS.map((photo, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className={styles.item} onClick={() => setLightbox(i)}>
                <Image src={photo.src} alt={photo.alt} width={400} height={300} className={styles.img} />
                <div className={styles.overlay}>
                  <span className={styles.icon}>+</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.close} onClick={() => setLightbox(null)} aria-label="Fechar">✕</button>
          <button className={styles.prev} onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + PHOTOS.length) % PHOTOS.length); }} aria-label="Anterior">‹</button>
          <Image src={PHOTOS[lightbox].src} alt={PHOTOS[lightbox].alt} width={900} height={600} className={styles.lightboxImg} onClick={(e) => e.stopPropagation()} />
          <button className={styles.next} onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % PHOTOS.length); }} aria-label="Próximo">›</button>
        </div>
      )}
    </section>
  );
}
