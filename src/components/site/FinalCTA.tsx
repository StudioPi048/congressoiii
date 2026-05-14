import { Reveal } from "./Reveal";
import heroImg from "@/assets/hero-roots.jpg";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <img
        src={heroImg}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(107,63,160,0.35) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="label-cinzel text-xs text-gold mb-6">
            É um chamado. Não uma coincidência.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display italic text-5xl md:text-7xl leading-[1.05] mb-8">
            Sua árvore guarda histórias. <br />
            <span className="text-gradient-gold">
              Talvez seja hora de escutá-las.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="label-cinzel text-[0.7rem] text-offwhite/80 mb-10">
            Florianópolis · 06, 07 e 08 de Novembro · 2026
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <a href="#investimento" className="btn-gold !text-sm !px-10 !py-5">
            Participar do Congresso
          </a>
          <p className="mt-6 text-xs text-muted-foreground">
            Vagas limitadas. Inscrições encerram em breve.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
