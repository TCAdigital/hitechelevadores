import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { FaShieldAlt, FaHeadset, FaCertificate } from "react-icons/fa";
import styles from "./About.module.css";

const HIGHLIGHTS = [
  { icon: <FaShieldAlt />, title: "Qualidade Superior", text: "Equipamentos de alto padrão com garantia e durabilidade comprovada." },
  { icon: <FaHeadset />, title: "Atendimento Personalizado", text: "Do primeiro contato à instalação, acompanhamos cada etapa do seu projeto." },
  { icon: <FaCertificate />, title: "Segurança Certificada", text: "Todos os equipamentos seguem normas técnicas e regulamentações vigentes." },
];

export default function About() {
  return (
    <section id="quem-somos" className={`section ${styles.about}`}>
      <div className={`container ${styles.grid}`}>
        <ScrollReveal direction="left">
          <div className={styles.textBlock}>
            <p className="section-label">Quem Somos</p>
            <h2 className="section-title">Excelência em soluções de elevação</h2>
            <p className={styles.text}>
              A Hi-Tech Elevadores e Plataformas oferece soluções completas e personalizadas
              que se integram perfeitamente ao seu espaço e necessidades. Nosso compromisso
              com a qualidade superior reflete-se em cada equipamento que fornecemos,
              garantindo durabilidade, inovação e segurança.
            </p>
            <p className={styles.text}>
              Acreditamos que a jornada do cliente vai além da compra. Sua satisfação é
              nossa prioridade, e estamos aqui para garantir que cada projeto seja executado
              com excelência, do planejamento à entrega final.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={200}>
          <div className={styles.imageBlock}>
            <Image 
              src="/images/about-final.jpg" 
              alt="Instalação profissional Hi-Tech" 
              width={600} 
              height={500} 
              className={styles.mainImg}
            />
            <div className={styles.accent} />
          </div>
        </ScrollReveal>
      </div>
      <div className={`container ${styles.cards}`}>
        {HIGHLIGHTS.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 150}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
