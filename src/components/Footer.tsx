import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.col}>
          <h3 className={styles.logo}>
            <span className={styles.hi}>Hi-</span>Tech
          </h3>
          <p className={styles.desc}>Elevadores e Plataformas de alto padrão. Qualidade, segurança e tecnologia para seu projeto.</p>
          <div className={styles.socials}>
            <a href="https://wa.me/5517997230928" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Links Rápidos</h4>
          <a href="#inicio" className={styles.link}>Início</a>
          <a href="#quem-somos" className={styles.link}>Quem Somos</a>
          <a href="#solucoes" className={styles.link}>Soluções</a>
          <a href="#galeria" className={styles.link}>Galeria</a>
          <a href="#faq" className={styles.link}>FAQ</a>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Soluções</h4>
          <a href="#solucoes" className={styles.link}>Elevadores Residenciais</a>
          <a href="#solucoes" className={styles.link}>Elevadores Comerciais</a>
          <a href="#solucoes" className={styles.link}>Elevadores Industriais</a>
          <a href="#solucoes" className={styles.link}>Plataformas</a>
          <a href="#solucoes" className={styles.link}>Manutenção</a>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contato</h4>
          <p className={styles.info}>(17) 99723-0928</p>
          <p className={styles.info}>contato@hitechelevadores.com.br</p>
          <p className={styles.info}>Seg a Sex: 8h às 18h</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Hi-Tech Elevadores e Plataformas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
