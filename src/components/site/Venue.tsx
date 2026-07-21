import { Reveal } from "./Reveal";
import hotelImg from "@/assets/hotel.jpg";

export function Venue() {
  return (
    <section id="local" className="section-pad relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={hotelImg}
              alt="Hotel Torres da Cachoeira"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="label-cinzel text-[0.65rem] text-gold mb-2">
                Florianópolis · SC
              </p>
              <p className="font-display italic text-2xl text-offwhite">
                Hotel Torres da Cachoeira
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="label-cinzel text-xs text-gold mb-4">Local do Encontro</p>
          <h2 className="font-display italic text-4xl md:text-5xl mb-8 leading-[1.1]">
            Um cenário à altura da{" "}
            <span className="text-gradient-gold">profundidade do encontro.</span>
          </h2>
          <p className="text-offwhite/75 text-lg leading-relaxed mb-8 font-light">
            Um dos cenários mais encantadores de Florianópolis, unindo natureza,
            conforto e experiência premium à beira-mar.
          </p>

          <div className="border-l-2 border-gold/40 pl-5 mb-8 space-y-1">
            <p className="text-offwhite font-medium">Hotel Torres da Cachoeira</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Av. Luiz Boiteux Piazza, 3991 <br />
              Cachoeira do Bom Jesus <br />
              Florianópolis · SC · CEP 88056-000
            </p>
          </div>

          {/* Reservas — contato direto com o hotel */}
          <div className="glass-card mb-6 p-6">
            <p className="label-cinzel mb-2 text-[0.6rem] text-gold">Reservas de hospedagem</p>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Garanta seu quarto falando diretamente com o hotel. Mencione o{" "}
              <span className="text-offwhite">III Congresso de Psicogenealogia</span> ao reservar.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="tel:+5548991232043" className="btn-gold !px-6 !py-3 !text-[0.7rem]">
                📞 (48) 99123-2043
              </a>
              <a
                href="https://wa.me/5548991232043?text=Ol%C3%A1!%20Quero%20reservar%20hospedagem%20para%20o%20III%20Congresso%20de%20Psicogenealogia."
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                WhatsApp Reservas
              </a>
              <a
                href="https://maps.google.com/?q=Hotel+Torres+da+Cachoeira+Florianopolis"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Ver no mapa →
              </a>
            </div>
          </div>

          <p className="text-xs text-muted-foreground italic">
            ⚠ Hospedagem não inclusa no ingresso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
