import { Reveal } from "./Reveal";

const included = [
  "Acesso aos 3 dias do congresso",
  "Jantar de sexta-feira (06/11)",
  "Almoço de sábado (07/11)",
  "Material do evento",
];

const lotes = [
  {
    lote: "Lote 1",
    period: "01 a 15 de Agosto",
    price: "990",
    parcela: "3x de R$ 330",
  },
  {
    lote: "Lote 2",
    period: "16 a 31 de Agosto",
    price: "1.140",
    parcela: "3x de R$ 380",
  },
  {
    lote: "Lote 3",
    period: "A partir de 01 de Setembro",
    price: "1.200",
    parcela: "3x de R$ 400",
    note: "Enquanto durarem as inscrições",
  },
];

export function Investment() {
  return (
    <section id="investimento" className="section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(28,119,117,0.22) 0%, transparent 62%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="mb-6 flex justify-center">
              <span className="eyebrow eyebrow--center">Investimento</span>
            </div>
            <h2 className="font-display text-5xl italic md:text-6xl">
              Seu lugar <span className="text-gradient-gold">nessa experiência.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Valor de elevação do congresso:{" "}
              <span className="text-offwhite">R$ 1.200</span>. Garanta condições especiais
              inscrevendo-se nos primeiros lotes.
            </p>
          </div>
        </Reveal>

        {/* Condição especial — Alunos e Psicogenealogistas Liz */}
        <Reveal delay={0.1}>
          <div className="glass-card relative mb-8 overflow-hidden border-gold/40 p-8 ring-1 ring-gold/30 md:p-12">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(200,149,31,0.16) 0%, transparent 60%)",
              }}
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <span className="label-cinzel mb-4 inline-block rounded-sm border border-gold/40 px-4 py-1.5 text-[0.6rem] text-gold">
                  Condição Exclusiva
                </span>
                <h3 className="font-display text-3xl italic text-offwhite md:text-4xl">
                  Alunos e Psicogenealogistas Liz
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  A comunidade que carrega este propósito tem lugar reservado — e o melhor valor de
                  toda a jornada.
                </p>
              </div>
              <div className="flex flex-col gap-5 md:items-end md:text-right">
                <div className="rounded-sm border border-gold/25 bg-background/40 px-6 py-4">
                  <p className="label-cinzel text-[0.55rem] text-gold">Até 31 de Julho</p>
                  <p className="font-display text-5xl text-gradient-gold leading-none">R$ 870</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    3x de R$ 290 · parcelas a partir de 10/08
                  </p>
                </div>
                <div className="px-6">
                  <p className="label-cinzel text-[0.55rem] text-muted-foreground">
                    A partir de 01 de Agosto
                  </p>
                  <p className="font-display text-2xl text-offwhite/90">
                    R$ 900{" "}
                    <span className="text-sm font-body text-muted-foreground">· 3x de R$ 300</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Público em geral — lotes */}
        <Reveal delay={0.15}>
          <p className="label-cinzel mb-6 text-center text-[0.65rem] tracking-[0.3em] text-gold">
            Público em geral
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {lotes.map((l, i) => (
            <Reveal key={l.lote} delay={0.15 + i * 0.08}>
              <div className="glass-card flex h-full flex-col p-8 text-center">
                <p className="label-cinzel text-[0.6rem] text-gold">{l.lote}</p>
                <p className="mt-2 text-xs text-muted-foreground">{l.period}</p>
                <div className="my-6 h-px w-12 self-center bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                <p className="font-display text-5xl leading-none text-offwhite">R$ {l.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">{l.parcela}</p>
                {l.note && (
                  <p className="mt-4 text-[0.7rem] italic text-muted-foreground/80">{l.note}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Incluso + CTA */}
        <Reveal delay={0.25}>
          <div className="glass-card mx-auto mt-12 max-w-3xl p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="label-cinzel mb-5 text-[0.65rem] text-gold">Incluso em todos os lotes</p>
                <ul className="space-y-3">
                  {included.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-offwhite/85">
                      <span className="mt-1 text-gold">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3 italic text-muted-foreground">
                    <span className="mt-1 text-muted-foreground">✕</span>
                    <span>Hospedagem (contratar separadamente)</span>
                  </li>
                </ul>
              </div>
              <div className="text-center md:border-l md:border-gold/15 md:pl-10">
                <a
                  href="https://wa.me/554491318081?text=Ol%C3%A1!%20Quero%20garantir%20minha%20vaga%20no%20III%20Congresso%20de%20Psicogenealogia%20%E2%80%94%20Tempus."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold !text-sm"
                >
                  Garantir Minha Vaga
                </a>

                <p className="mt-5 text-xs text-muted-foreground">
                  🔒 Pagamento seguro · Vagas limitadas
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
