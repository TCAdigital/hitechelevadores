import ScrollReveal from "./ScrollReveal";
import { FaBullseye, FaEye, FaGem } from "react-icons/fa";
import styles from "./MissionVisionValues.module.css";

const ITEMS = [
  {
    icon: <FaBullseye />,
    title: "Missão",
    text: "Levar ao cliente o mais valioso atendimento, da venda à instalação do equipamento, proporcionando os mais completos serviços e respaldos durante o processo de sua obra, antes, durante e depois de sua conclusão.",
  },
  {
    icon: <FaEye />,
    title: "Visão",
    text: "Alcançar o patamar de melhor empresa de comércio e instalação de equipamentos de elevação de pessoas com excelência nas regiões em que atuamos.",
  },
  {
    icon: <FaGem />,
    title: "Valores",
    text: "Capacitar, investir, treinar e atualizar cada vez mais a organização em mão de obra qualificada e responsável, a fim de levar o melhor produto e serviços aos nossos clientes.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className={`section ${styles.mvv}`}>
      <div className={styles.diagonal} />
      <div className="container">
        <ScrollReveal>
          <p className="section-label" style={{ color: "rgba(255,255,255,0.6)" }}>Nossos Pilares</p>
          <h2 className={`section-title section-title--center ${styles.title}`}>O que nos guia</h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {ITEMS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 200}>
              <div className={styles.card}>
                <div className={styles.icon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
