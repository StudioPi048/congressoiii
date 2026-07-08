import { Reveal } from "./Reveal";

export function Sobre() {
  return (
    <section id="sobre" className="section-pad relative">
      <div className="max-w-[780px] mx-auto">
        <Reveal>
          <div className="gold-divider !mt-0 !mb-10" />
          <h2 className="font-display text-2xl md:text-3xl text-center text-offwhite/90 leading-relaxed mb-10">
            A Psicogenealogia e o encontro entre saberes que transformam vidas
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-offwhite/70 text-lg leading-[1.9] font-light mb-6 text-justify">
            Compreender a própria história talvez seja uma das experiências mais profundas que um ser humano possa viver. Ao longo da vida, muitos de nós nos perguntamos por que determinados padrões parecem se repetir nas relações, na saúde, na profissão ou nas escolhas, mesmo quando desejamos seguir um caminho diferente. A Psicogenealogia nasce justamente desse desejo de compreender o invisível, revelando como a história familiar continua presente, influenciando nossa forma de sentir, pensar e viver.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-offwhite/70 text-lg leading-[1.9] font-light mb-6 text-justify">
            Muito além do estudo da árvore genealógica, a Psicogenealogia convida a um novo olhar sobre a existência. Ela nos lembra que somos parte de uma trama construída por gerações e que conhecer esse legado não significa permanecer preso ao passado, mas adquirir consciência <span className="text-gold">das dores que podemos transformar em potência</span>.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-offwhite/70 text-lg leading-[1.9] font-light mb-6 text-justify">
            Essa visão amplia naturalmente o diálogo com outras áreas do conhecimento. Ao longo deste congresso, a Psicogenealogia encontrará a Nova Medicina Germânica, a Neurociência, a Cabalá, a Programação Neurolinguística, a Medicina Integrativa, a Decodificação Dental e tantas outras abordagens que compartilham um mesmo propósito: compreender o ser humano em sua integralidade. Cada uma oferece uma perspectiva singular; juntas, revelam uma compreensão muito mais ampla da vida, da saúde, das relações e dos processos de transformação na busca do <span className="text-gold">propósito</span> da alma.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="text-offwhite/70 text-lg leading-[1.9] font-light mb-6 text-justify">
            É justamente esse encontro entre diferentes saberes que torna este congresso uma experiência única. Reunimos pesquisadores, médicos, dentistas, terapeutas, psicólogos, educadores e estudiosos que acreditam que o conhecimento não se fortalece quando permanece isolado, mas quando dialoga e integra essas diferentes linguagens sob uma perspectiva inter e transgeracional, conectando passado, presente e futuro.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-offwhite/70 text-lg leading-[1.9] font-light mb-6 text-justify">
            Mais do que assistir a palestras, você está sendo convidado a participar de um encontro que poderá ampliar sua forma de compreender o ser humano, enriquecer sua prática profissional e, sobretudo, transformar a maneira como você enxerga a sua própria história. Esperamos que, ao final desta jornada, você leve consigo não apenas novos conhecimentos, mas uma nova forma de olhar para a vida e para o legado que cada geração tem o poder de construir.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="font-display italic text-xl md:text-2xl text-center text-offwhite/90 leading-relaxed mt-10">
            Seja muito bem-vindo ao III Congresso de Psicogenealogia.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
