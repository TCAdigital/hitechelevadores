"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import styles from "./FAQ.module.css";

const QUESTIONS = [
  { q: "Qual é o processo de instalação de um elevador?", a: "O processo inclui uma avaliação inicial do local, elaboração de projeto personalizado, instalação por técnicos especializados e testes rigorosos de segurança para garantir o funcionamento adequado do equipamento." },
  { q: "Os elevadores residenciais consomem muita energia?", a: "Não. Os elevadores modernos são projetados para máxima eficiência energética, utilizando tecnologia de ponta para minimizar o consumo de energia durante o uso diário." },
  { q: "Quais tipos de elevadores e plataformas estão disponíveis?", a: "Oferecemos elevadores residenciais, comerciais, industriais, plataformas de acessibilidade, elevadores de carga, monta-cargas e soluções personalizadas para cada necessidade." },
  { q: "Quais são os padrões de segurança dos equipamentos?", a: "Todos os nossos equipamentos atendem rigorosamente às normas técnicas ABNT e regulamentações vigentes, garantindo operação segura e confiável." },
  { q: "Como funciona a manutenção preventiva?", a: "A manutenção preventiva é realizada periodicamente por técnicos especializados, incluindo inspeções, lubrificação, ajustes e substituição de peças desgastadas para garantir funcionamento eficiente e seguro." },
  { q: "Qual o tempo médio de vida útil de um elevador?", a: "Com manutenção adequada, os elevadores são projetados para durar décadas. O tempo de vida útil varia conforme o uso, manutenção e condições de operação." },
  { q: "A Hi-Tech oferece garantia nos equipamentos?", a: "Sim. Todos os nossos equipamentos possuem garantia de fábrica e oferecemos suporte técnico completo durante e após o período de garantia." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className={`section ${styles.faq}`}>
      <div className="container">
        <ScrollReveal>
          <p className="section-label section-label--center">Dúvidas</p>
          <h2 className="section-title section-title--center">Perguntas Frequentes</h2>
        </ScrollReveal>
        <div className={styles.list}>
          {QUESTIONS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className={`${styles.item} ${open === i ? styles.itemOpen : ""}`}>
                <button className={styles.question} onClick={() => setOpen(open === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className={styles.toggle}>{open === i ? "−" : "+"}</span>
                </button>
                <div className={styles.answer} style={{ maxHeight: open === i ? "300px" : "0" }}>
                  <p className={styles.answerText}>{item.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: QUESTIONS.map((q) => ({
              "@type": "Question",
              name: q.q,
              acceptedAnswer: { "@type": "Answer", text: q.a },
            })),
          }),
        }}
      />
    </section>
  );
}
