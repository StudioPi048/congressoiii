import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "O evento é apenas para profissionais?",
    a: "Não. Os dias 06 e 07/11 são abertos ao público geral. O dia 08/11 é exclusivo para psicogenealogistas certificados.",
  },
  {
    q: "O ingresso inclui hospedagem?",
    a: "Não. A hospedagem deve ser contratada separadamente. Recomendamos o próprio Hotel Torres da Cachoeira ou hotéis próximos.",
  },
  {
    q: "O que está incluso no meu ingresso?",
    a: "Jantar de sexta-feira (06/11), almoço de sábado (07/11) e acesso completo à programação dos dias contratados.",
  },
  {
    q: "Posso parcelar?",
    a: "Sim, em até 3x sem juros. O valor da parcela depende do lote: Lote 1 (3x de R$ 330), Lote 2 (3x de R$ 380) e Lote 3 (3x de R$ 400). Alunos e Psicogenealogistas Liz têm condição exclusiva a partir de 3x de R$ 290.",
  },

  {
    q: "Como posso tirar dúvidas antes de me inscrever?",
    a: "Fale diretamente com nossa equipe pelo WhatsApp clicando no botão flutuante na tela.",
  },
  {
    q: "Há certificado de participação?",
    a: "Sim. Todos os participantes recebem certificado digital de participação.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="label-cinzel text-xs text-gold mb-4">Perguntas frequentes</p>
            <h2 className="font-display italic text-5xl md:text-6xl">
              Tudo o que você <span className="text-gradient-gold">precisa saber.</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-1">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="border-b border-gold/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  >
                    <span className="font-display italic text-xl md:text-2xl text-offwhite group-hover:text-gold-light transition-colors">
                      {f.q}
                    </span>
                    <span
                      className={`text-gold text-2xl transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-offwhite/70 leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
