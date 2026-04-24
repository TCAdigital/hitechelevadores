"use client";
import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";
import { FaPhone, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className={`section ${styles.contact}`}>
      <div className={`container ${styles.grid}`}>
        <ScrollReveal direction="left">
          <div className={styles.formSide}>
            <p className="section-label">Contato</p>
            <h2 className="section-title">Solicite sua cotação</h2>
            <p className={styles.desc}>Preencha o formulário e nossa equipe entrará em contato rapidamente.</p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input name="name" placeholder="Seu nome completo" required className={styles.input} />
              <input name="phone" placeholder="Telefone com DDD" required className={styles.input} />
              <input name="email" type="email" placeholder="Seu e-mail" required className={styles.input} />
              <select name="type" required className={styles.input} defaultValue="">
                <option value="" disabled>Tipo de projeto</option>
                <option>Elevador Residencial</option>
                <option>Elevador Comercial</option>
                <option>Elevador Industrial</option>
                <option>Plataforma de Acessibilidade</option>
                <option>Manutenção / Modernização</option>
                <option>Outro</option>
              </select>
              <textarea name="message" placeholder="Descreva seu projeto ou dúvida" rows={4} className={styles.input} />
              <button type="submit" className="btn btn-primary" disabled={status === "loading"} style={{ width: "100%" }}>
                {status === "loading" ? "Enviando..." : "Enviar Solicitação"}
              </button>
              {status === "success" && <p className={styles.success}>✓ Mensagem enviada com sucesso! Entraremos em contato em breve.</p>}
              {status === "error" && <p className={styles.error}>Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.</p>}
            </form>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={200}>
          <div className={styles.infoSide}>
            <h3 className={styles.infoTitle}>Informações de Contato</h3>
            <div className={styles.infoItem}>
              <FaWhatsapp className={styles.infoIcon} />
              <div>
                <p className={styles.infoLabel}>WhatsApp</p>
                <a href="https://wa.me/5517997230928" target="_blank" rel="noopener noreferrer">(17) 99723-0928</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaPhone className={styles.infoIcon} />
              <div>
                <p className={styles.infoLabel}>Telefone</p>
                <a href="tel:+5517997230928">(17) 99723-0928</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} />
              <div>
                <p className={styles.infoLabel}>E-mail</p>
                <a href="mailto:contato@hitechelevadores.com.br">contato@hitechelevadores.com.br</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaClock className={styles.infoIcon} />
              <div>
                <p className={styles.infoLabel}>Horário</p>
                <p>Seg a Sex: 8h às 18h</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
