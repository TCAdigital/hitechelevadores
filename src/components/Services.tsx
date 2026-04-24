import ScrollReveal from "./ScrollReveal";
import { FaCogs, FaPuzzlePiece, FaTools, FaWrench, FaUserTie, FaSyncAlt } from "react-icons/fa";
import styles from "./Services.module.css";

const SERVICES = [
  { icon: <FaCogs />, title: "Elevadores de Alta Qualidade", text: "Equipamentos modernos com tecnologia de ponta e acabamento premium." },
  { icon: <FaPuzzlePiece />, title: "Soluções Personalizadas", text: "Projetos adaptados às necessidades específicas de cada cliente e espaço." },
  { icon: <FaTools />, title: "Instalação Profissional", text: "Equipe técnica especializada para instalação segura e eficiente." },
  { icon: <FaWrench />, title: "Manutenção Preventiva", text: "Planos de manutenção que garantem o funcionamento contínuo do equipamento." },
  { icon: <FaUserTie />, title: "Assistência Técnica", text: "Suporte técnico especializado com atendimento ágil e eficaz." },
  { icon: <FaSyncAlt />, title: "Modernização", text: "Atualização de equipamentos existentes com tecnologia atual e normas vigentes." },
];

export default function Services() {
  return (
    <section className={`section ${styles.services}`}>
      <div className="container">
        <ScrollReveal>
          <p className="section-label section-label--center">Serviços</p>
          <h2 className="section-title section-title--center">O que oferecemos para você</h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <div className={styles.card}>
                <div className={styles.icon}>{s.icon}</div>
                <div>
                  <h3 className={styles.title}>{s.title}</h3>
                  <p className={styles.text}>{s.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={300}>
          <p className={styles.cta}>
            Tem alguma dúvida? Entre em contato conosco pelo WhatsApp{" "}
            <a href="https://wa.me/5517997230928" target="_blank" rel="noopener noreferrer" className={styles.phone}>(17) 99723-0928</a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
