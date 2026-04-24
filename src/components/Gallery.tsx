"use client";
import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import styles from "./Gallery.module.css";

const PHOTOS = [
  { src: "/images/gallery-1.jpg", alt: "Elevador Hi-Tech 1" },
  { src: "/images/gallery-2.jpg", alt: "Elevador Hi-Tech 2" },
  { src: "/images/gallery-3.jpg", alt: "Elevador Hi-Tech 3" },
  { src: "/images/gallery-4.jpg", alt: "Elevador Hi-Tech 4" },
  { src: "/images/gallery-5.jpg", alt: "Elevador Hi-Tech 5" },
  { src: "/images/gallery-6.jpg", alt: "Elevador Hi-Tech 6" },
  { src: "/images/gallery-7.jpg", alt: "Elevador Hi-Tech 7" },
  { src: "/images/gallery-8.jpg", alt: "Elevador Hi-Tech 8" },
  { src: "/images/gallery-9.jpg", alt: "Elevador Hi-Tech 9" },
  { src: "/images/gallery-10.jpg", alt: "Elevador Hi-Tech 10" },
  { src: "/images/gallery-11.jpg", alt: "Elevador Hi-Tech 11" },
  { src: "/images/gallery-12.jpg", alt: "Elevador Hi-Tech 12" },
];

// Componente de Galeria em Mosaico Técnico (Bento Grid)
export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galeria" className={`section ${styles.gallery}`}>
      <div className="container">
        <ScrollReveal>
          <p className="section-label section-label--center">Portfólio</p>
          <h2 className="section-title section-title--center">Projetos em Destaque</h2>
        </ScrollReveal>
      </div>

      <div className={styles.grid}>
        {PHOTOS.map((photo, i) => (
          <ScrollReveal 
            key={i} 
            delay={i * 50} 
            className={styles.item}
          >
            <div className={styles.itemInner} onClick={() => setLightbox(i)}>
              <Image src={photo.src} alt={photo.alt} width={600} height={450} className={styles.img} />
              <div className={styles.overlay}>
                <span className={styles.icon}>+</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {lightbox !== null && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.close} onClick={() => setLightbox(null)} aria-label="Fechar">✕</button>
          <Image src={PHOTOS[lightbox].src} alt={PHOTOS[lightbox].alt} width={1200} height={800} className={styles.lightboxImg} />
        </div>
      )}
    </section>
  );
}
