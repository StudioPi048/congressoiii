import { Reveal } from "./Reveal";

const included = [
  "Acesso aos 3 dias do congresso",
  "Jantar de sexta-feira (06/11)",
  "Almoço de sábado (07/11)",
  "Material do evento",
];

export function Investment() {
  return (
    <section id="investimento" className="section-pad relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(28,119,117,0.25) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-3xl mx-auto relative">
        <Reveal>
          <div className="text-center mb-16">
            <p className="label-cinzel text-xs text-gold mb-4">Investimento</p>
            <h2 className="font-display italic text-5xl md:text-6xl">
              Seu lugar <span className="text-gradient-gold">nessa experiência.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-card p-10 md:p-14 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(201,168,76,0.15) 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="text-center mb-10">
                <span className="label-cinzel text-[0.65rem] inline-block px-4 py-1.5 border border-gold/40 text-gold rounded-sm mb-8">
                  Ingresso Completo · 3 Dias
                </span>
                <p className="label-cinzel text-[0.7rem] text-muted-foreground mb-3">
                  Investimento
                </p>
                <p className="font-display text-7xl md:text-8xl text-gradient-gold leading-none mb-3">
                  R$ 1.150
                </p>
                <p className="text-muted-foreground text-sm">
                  ou em até <span className="text-offwhite">5x de R$ 230,00</span> sem juros
                </p>
              </div>

              <div className="border-t border-gold/15 pt-8 mb-8">
                <p className="label-cinzel text-[0.65rem] text-gold mb-5">
                  Incluso no seu ingresso
                </p>
                <ul className="space-y-3">
                  {included.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-offwhite/85">
                      <span className="text-gold mt-1">✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3 text-muted-foreground italic">
                    <span className="text-muted-foreground mt-1">✕</span>
                    <span>Hospedagem (contratar separadamente)</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a href="#" className="btn-gold w-full sm:w-auto !text-sm">
                  Garantir Minha Vaga
                </a>
                <p className="mt-5 text-xs text-muted-foreground">
                  🔒 Pagamento 100% seguro · Vagas limitadas
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
