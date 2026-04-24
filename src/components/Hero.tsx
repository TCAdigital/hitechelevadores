import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <Image
        src="/images/hero-bg.png"
        alt="Elevador moderno Hi-Tech"
        fill
        priority
        className={styles.bg}
        sizes="100vw"
      />
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <p className={styles.label}>Hi-Tech Elevadores e Plataformas</p>
        <h1 className={styles.title}>
          Elevando o Futuro<br />
          <span>com Tecnologia e Segurança</span>
        </h1>
        <p className={styles.subtitle}>
          Soluções completas em elevadores e plataformas de alto padrão para
          residências, comércios e indústrias.
        </p>
        <div className={styles.actions}>
          <a href="#contato" className="btn btn-primary">Solicitar Cotação</a>
          <a href="#solucoes" className="btn btn-outline">Conheça Nossas Soluções</a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </div>
    </section>
  );
}
