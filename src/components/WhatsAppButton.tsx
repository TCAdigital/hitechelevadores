import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5517997230928?text=Olá! Gostaria de mais informações sobre elevadores e plataformas."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp />
      <span className={styles.tooltip}>Fale Conosco</span>
    </a>
  );
}
