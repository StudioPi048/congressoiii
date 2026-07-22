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
            <div className="flex justify-center">
              <a
                href="https://wa.me/5548991232043?text=Ol%C3%A1!%20Quero%20reservar%20hospedagem%20para%20o%20III%20Congresso%20de%20Psicogenealogia."
                target="_blank"
                rel="noreferrer"
                className="btn-gold !px-8 !py-4 !text-sm inline-flex items-center gap-3 shadow-[0_10px_40px_-10px_rgba(201,168,76,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(201,168,76,0.9)] transition-all duration-500 hover:-translate-y-1"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7 0-.3-.2-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1.1 2.8 1.2 3 .1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                Reservar pelo WhatsApp
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
