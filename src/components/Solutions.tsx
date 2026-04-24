import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import styles from "./Solutions.module.css";

const SOLUTIONS = [
  {
    image: "/images/solution-res.jpg",
    title: "Elevadores Residenciais",
    text: "Conforto e acessibilidade para sua casa com design sofisticado.",
  },
  {
    image: "/images/solution-com.jpg",
    title: "Elevadores Comerciais",
    text: "Alta performance e fluxo otimizado para edifícios de escritórios e shoppings.",
  },
  {
    image: "/images/solution-ind.jpg",
    title: "Elevadores Industriais",
    text: "Soluções robustas para transporte de cargas e plataformas de alta resistência.",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className={`section ${styles.solutions}`}>
      <div className="container">
        <ScrollReveal>
          <p className="section-label section-label--center">Soluções</p>
          <h2 className="section-title section-title--center">Soluções sob medida para cada necessidade</h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {SOLUTIONS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 150}>
              <div className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image src={item.image} alt={item.title} width={400} height={300} className={styles.img} />
                  <div className={styles.cardOverlay} />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                  <a href="#contato" className="btn btn-outline-dark" style={{ fontSize: "0.875rem", padding: "10px 24px" }}>
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
