import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.col}>
          <Image 
            src="/logo-hitech-elevadores.png" 
            alt="Hi-Tech Elevadores" 
            width={180} 
            height={50} 
            className={styles.footerLogo}
          />
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
          <p style={{ marginTop: '8px', fontSize: '0.8rem', opacity: 0.7 }}>
            Desenvolvido com ❤️ pela <a href="https://www.tcadigital.com.br/express" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>TCA Digital Ai-Driven</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
