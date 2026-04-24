"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  { name: "Carlos Mendes", role: "Proprietário de Edifício Residencial", text: "A Hi-Tech superou todas as nossas expectativas. O elevador foi instalado dentro do prazo e com uma qualidade impressionante. A equipe é extremamente profissional e atenciosa.", rating: 5 },
  { name: "Fernanda Oliveira", role: "Gerente de Condomínio", text: "Contratamos a Hi-Tech para a modernização dos nossos elevadores e o resultado foi excelente. Os moradores elogiaram muito a melhoria no conforto e na segurança.", rating: 5 },
  { name: "Ricardo Almeida", role: "Diretor Industrial", text: "Precisávamos de um elevador de carga robusto para nossa fábrica. A Hi-Tech entregou exatamente o que precisávamos, com acompanhamento técnico do início ao fim.", rating: 5 },
  { name: "Ana Paula Santos", role: "Arquiteta", text: "Indico a Hi-Tech para todos os meus projetos. Eles entendem a importância do design aliado à funcionalidade e sempre entregam soluções que se integram perfeitamente ao projeto.", rating: 5 },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((current + 1) % TESTIMONIALS.length);

  return (
    <section id="depoimentos" className={`section ${styles.testimonials}`}>
      <div className="container">
        <ScrollReveal>
          <p className="section-label section-label--center">Depoimentos</p>
          <h2 className="section-title section-title--center">O que nossos clientes dizem</h2>
        </ScrollReveal>
        <div className={styles.slider}>
          <button onClick={prev} className={styles.arrow} aria-label="Anterior"><FaChevronLeft /></button>
          <div className={styles.card}>
            <FaQuoteLeft className={styles.quote} />
            <p className={styles.text}>{TESTIMONIALS[current].text}</p>
            <div className={styles.stars}>
              {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className={styles.name}>{TESTIMONIALS[current].name}</p>
            <p className={styles.role}>{TESTIMONIALS[current].role}</p>
          </div>
          <button onClick={next} className={styles.arrow} aria-label="Próximo"><FaChevronRight /></button>
        </div>
        <div className={styles.dots}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ""}`} onClick={() => setCurrent(i)} aria-label={`Depoimento ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
