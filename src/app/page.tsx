import styles from "./page.module.css";

export default function SuspendedPage() {
  const whatsappUrl = "https://wa.me/5517991185439?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20a%20ativa%C3%A7%C3%A3o%20e%20regulariza%C3%A7%C3%A3o%20t%C3%A9cnica%20do%20site%20Hi-Tech%20Elevadores.";

  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <div className={styles.statusIndicator}>
            <span className={styles.led}></span>
            <span>Status: offline / manutenção</span>
          </div>
          <span className={styles.techCode}>SYS_CODE: 403_MNT</span>
        </div>

        {/* Minimalist Premium Technical SVG (Status Node Wireframe) */}
        <div style={{ marginBottom: "32px", display: "flex", justifyContent: "center" }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="60" height="60" rx="2" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="2" />
            <circle cx="32" cy="32" r="16" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="32" cy="32" r="8" stroke="#e67e22" strokeWidth="1.5" />
            <path d="M32 4V16" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            <path d="M32 48V60" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            <path d="M4 32H16" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            <path d="M48 32H60" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          </svg>
        </div>

        <h1 className={styles.title}>
          Sistema Temporariamente Indisponível para Manutenção e Conformidade
        </h1>

        <p className={styles.text}>
          Este domínio encontra-se temporariamente fora do ar para atualizações estruturais e conformidade de serviços. 
          Se você é o proprietário ou responsável por este canal, entre em contato diretamente com o administrador 
          do serviço para obter informações detalhadas e solicitar a regularização/ativação imediata.
        </p>

        <div className={styles.actions}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Falar com Administrador do Serviço
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </a>
          <span className={styles.supportInfo}>Identificação do Domínio: hitechelevadores.com.br</span>
        </div>
      </div>

      <div className={styles.signature}>
        Desenvolvido com ❤️ pela{" "}
        <a href="https://www.tcadigital.com.br/express" target="_blank" rel="noopener noreferrer">
          TCA Digital Ai-Driven
        </a>
      </div>
    </div>
  );
}
