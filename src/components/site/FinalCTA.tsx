import { Reveal } from "./Reveal";
import { AncestralBackdrop } from "./AncestralBackdrop";
import tempusIcon from "@/assets/tempus-icon.png";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <AncestralBackdrop variant="cta" />

      {/* Ícone do conceito como marca d'água — relógio, engrenagens e raízes */}
      <img
        src={tempusIcon}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 w-[520px] max-w-[80%] -translate-x-1/2 -translate-y-1/2 opacity-[0.06] blur-[1px]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="mb-8 flex justify-center">
            <span className="eyebrow eyebrow--center">O próximo ciclo começa aqui</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mb-8 font-display text-5xl italic leading-[1.05] md:text-7xl">
            O que você herdou <br />
            <span className="text-gradient-gold">pode se transformar.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="label-cinzel mb-10 text-[0.7rem] text-offwhite/80">
            Florianópolis · 06, 07 e 08 de Novembro · 2026
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <a href="#investimento" className="btn-gold !px-10 !py-5 !text-sm">
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
