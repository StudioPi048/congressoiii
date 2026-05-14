import { Reveal } from "./Reveal";

export function Calling() {
  return (
    <section className="section-pad relative">
      <div className="max-w-[680px] mx-auto text-center">
        <Reveal>
          <div className="gold-divider !mt-0 !mb-10" />
          <p className="font-display italic text-2xl md:text-3xl leading-relaxed text-offwhite/90 mb-6">
            Existem histórias que herdamos sem perceber.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-offwhite/70 text-lg leading-[1.9] font-light mb-6">
            Padrões, dores, repetições, silêncios e lealdades invisíveis
            atravessam gerações até que alguém decida olhar para a origem.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="text-offwhite/70 text-lg leading-[1.9] font-light mb-6">
            O <span className="text-gold">III Congresso de Psicogenealogia</span> nasce como um chamado
            para aqueles que desejam compreender suas raízes e transformar a
            própria história em consciência.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="text-offwhite/70 text-lg leading-[1.9] font-light">
            Durante três dias, terapeutas, estudiosos e buscadores se reunirão em
            Florianópolis para uma experiência profunda de conhecimento,
            espiritualidade e expansão humana.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
