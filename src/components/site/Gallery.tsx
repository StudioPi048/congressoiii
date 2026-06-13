import { Reveal } from "./Reveal";
import e0 from "@/assets/edicoes/edicao-0.jpg.asset.json";
import e1 from "@/assets/edicoes/edicao-1.jpg.asset.json";
import e2 from "@/assets/edicoes/edicao-2.jpg.asset.json";
import e3 from "@/assets/edicoes/edicao-3.jpg.asset.json";
import e4 from "@/assets/edicoes/edicao-4.jpg.asset.json";
import eGrupo from "@/assets/edicoes/edicao-grupo.jpg.asset.json";
import eDomoInterno from "@/assets/edicoes/edicao-domo-interno.jpg.asset.json";
import eRitual from "@/assets/edicoes/edicao-ritual.jpg.asset.json";
import eDomeYoga from "@/assets/edicoes/edicao-dome-yoga.jpg.asset.json";

const photos = [
  { src: eDomoInterno.url, alt: "Palestra dentro do domo geodésico com Árvore da Vida", span: "md:col-span-2 md:row-span-2" },
  { src: eGrupo.url, alt: "Foto oficial dos participantes de edição anterior" },
  { src: eRitual.url, alt: "Ritual de roda em vivência ao ar livre" },
  { src: e0.url, alt: "Palestrante no palco diante da Árvore da Vida" },
  { src: eDomeYoga.url, alt: "Prática corporal em frente ao domo geodésico", span: "md:col-span-2" },
  { src: e1.url, alt: "Momento de fala emocionante em palco" },
  { src: e2.url, alt: "Palestrante conduzindo vivência" },
  { src: e3.url, alt: "Apresentação científica no congresso" },
  { src: e4.url, alt: "Conferencista no palco principal", span: "md:col-span-2" },
];

export function Gallery() {
  return (
    <section className="section-pad relative" id="edicoes-anteriores">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="label-cinzel text-xs text-gold mb-4">Edições anteriores</p>
            <h2 className="font-display italic text-5xl md:text-6xl mb-6">
              Memórias que permaneceram <span className="text-gradient-gold">na alma.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mais de mil pessoas já atravessaram essa experiência. Cada edição reúne
              referências do pensamento contemporâneo, vivências profundas e encontros
              que reorganizam histórias familiares.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[280px] gap-3 md:gap-4">
          {photos.map((p, i) => (
            <Reveal key={i} delay={i * 0.07} className={p.span ?? ""}>
              <div className="relative w-full h-full overflow-hidden group rounded-sm">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-0 ring-gold/0 group-hover:ring-1 group-hover:ring-gold/60 transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 grid grid-cols-3 max-w-2xl mx-auto text-center gap-6">
            <div>
              <div className="font-display text-4xl md:text-5xl text-gradient-gold">+1.000</div>
              <div className="label-cinzel text-[0.65rem] text-muted-foreground mt-2">Participantes</div>
            </div>
            <div className="border-x border-gold/15">
              <div className="font-display text-4xl md:text-5xl text-gradient-gold">II</div>
              <div className="label-cinzel text-[0.65rem] text-muted-foreground mt-2">Edições realizadas</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-gradient-gold">III</div>
              <div className="label-cinzel text-[0.65rem] text-muted-foreground mt-2">Em 2026</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
