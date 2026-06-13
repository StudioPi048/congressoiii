import { Reveal } from "./Reveal";

export function Convidados() {
  return (
    <section id="convidados" className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(107,63,160,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(201,168,76,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="label-cinzel text-xs text-gold mb-4">Convidados e Presenças Especiais</p>
            <h2 className="font-display italic text-5xl md:text-6xl leading-[1.05] mb-6">
              Nomes que <span className="text-gradient-gold">marcam época</span>, <br className="hidden md:block" />
              reunidos em um só palco.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Estão sendo convidadas referências nacionais e internacionais da ciência,
              da clínica e da espiritualidade — vozes que vêm reescrevendo a forma
              como compreendemos família, ancestralidade e consciência.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              title: "Ciência",
              desc: "Pesquisadores e médicos que investigam a memória transgeracional sob a ótica clínica e científica.",
            },
            {
              title: "Consciência",
              desc: "Psicólogos, terapeutas e autores que conduzem o trabalho profundo com sistemas familiares.",
            },
            {
              title: "Espiritualidade",
              desc: "Mestres e estudiosos das tradições que iluminam a alma — Cabalá, ancestralidade e sabedoria antiga.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass-card p-8 h-full text-center">
                <div className="label-cinzel text-[0.65rem] text-gold mb-4 tracking-[0.3em]">
                  Eixo
                </div>
                <h3 className="font-display italic text-3xl mb-4">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 text-center max-w-2xl mx-auto border-t border-gold/15 pt-12">
            <p className="label-cinzel text-[0.7rem] text-gold mb-4 tracking-[0.3em]">
              Anúncio oficial em breve
            </p>
            <p className="font-display italic text-2xl md:text-3xl text-offwhite/90 leading-snug">
              "Os nomes convidados serão revelados em sequência —
              cada anúncio, um capítulo dessa edição histórica."
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              Cadastre-se para receber, em primeira mão, cada confirmação.
            </p>
            <a href="#investimento" className="btn-ghost mt-6 inline-flex">
              Garantir presença
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
