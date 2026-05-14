import { Reveal } from "./Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, span: "md:row-span-2", alt: "Auditório do congresso" },
  { src: g2, span: "", alt: "Momento de abraço emocional" },
  { src: g3, span: "", alt: "Vivência em grupo" },
  { src: g4, span: "md:row-span-2", alt: "Palestrante em cena" },
  { src: g5, span: "", alt: "Networking" },
  { src: g6, span: "", alt: "Bastidores" },
];

export function Gallery() {
  return (
    <section className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <p className="label-cinzel text-xs text-gold mb-4">Edições anteriores</p>
            <h2 className="font-display italic text-5xl md:text-6xl mb-4">
              Memórias que permaneceram <span className="text-gradient-gold">na alma.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Mais de mil pessoas já passaram por essa experiência.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {photos.map((p, i) => (
            <Reveal key={i} delay={i * 0.07} className={p.span}>
              <div className="relative w-full h-full overflow-hidden group rounded-sm">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-0 ring-gold/0 group-hover:ring-1 group-hover:ring-gold/60 transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
