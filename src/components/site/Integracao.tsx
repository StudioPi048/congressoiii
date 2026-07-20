import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Ciência",
    desc: "Evidência, pesquisa e rigor metodológico como base de toda investigação sobre o humano.",
  },
  {
    title: "Saúde Integral",
    desc: "Corpo, mente, emoção e história familiar compreendidos como um sistema único e indivisível.",
  },
  {
    title: "Espiritualidade",
    desc: "A dimensão simbólica, ancestral e transcendente que sustenta sentido, pertencimento e propósito.",
  },
  {
    title: "Consciência",
    desc: "O fio condutor que atravessa cérebro, alma e vínculos — e que possibilita transformação real.",
  },
];

export function Integracao() {
  return (
    <section
      id="integracao"
      className="section-pad relative overflow-hidden border-y border-gold/15"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(214,154,23,0.12) 0%, transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(28,119,117,0.18) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="label-cinzel text-xs text-gold mb-4 tracking-[0.3em]">
              Diferencial do Congresso
            </p>
            <h2 className="font-display italic text-5xl md:text-6xl leading-[1.05] mb-6">
              Integração de <span className="text-gradient-gold">Ciência e Espiritualidade</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              O III Congresso de Psicogenealogia propõe um diálogo legítimo entre ciência, saúde,
              espiritualidade, desenvolvimento humano e consciência — territórios que, juntos,
              ampliam a compreensão do ser humano em sua totalidade.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="glass-card h-full p-7 flex flex-col">
                <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold text-xs font-display italic mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display italic text-2xl text-offwhite mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="font-display italic text-2xl md:text-3xl text-offwhite/90 leading-snug border-t border-gold/15 pt-10">
              "Quando ciência e espiritualidade se escutam,{" "}
              <span className="text-gradient-gold">a saúde encontra outra profundidade.</span>"
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
