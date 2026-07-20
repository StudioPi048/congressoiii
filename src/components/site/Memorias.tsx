import { Reveal } from "./Reveal";
import sergio from "@/assets/convidados/sergio.png.asset.json";
import eGrupo from "@/assets/edicoes/edicao-grupo.jpg.asset.json";
import eDomoInterno from "@/assets/edicoes/edicao-domo-interno.jpg.asset.json";
import eRitual from "@/assets/edicoes/edicao-ritual.jpg.asset.json";
import eDomeYoga from "@/assets/edicoes/edicao-dome-yoga.jpg.asset.json";
import memoria01 from "@/assets/edicoes/memoria-edicao-01.png.asset.json";
import memoria02 from "@/assets/edicoes/memoria-edicao-02.png.asset.json";
import memoria03 from "@/assets/edicoes/memoria-edicao-03.png.asset.json";
import memoria04 from "@/assets/edicoes/memoria-edicao-04.png.asset.json";
import memoria05 from "@/assets/edicoes/memoria-edicao-05.png.asset.json";

const images = [
  { src: memoria01.url, alt: "Participantes posando ao lado do banner do simpósio" },
  {
    src: memoria02.url,
    alt: "Registro ao ar livre com convidados e participantes de edição anterior",
  },
  { src: memoria03.url, alt: "Foto de família da organização e apoiadores em edição anterior" },
  { src: memoria04.url, alt: "Vivência em círculo dentro do domo durante encontro anterior" },
  { src: memoria05.url, alt: "Foto coletiva dos participantes em uma edição anterior" },
  { src: eDomoInterno.url, alt: "Palestra dentro do domo geodésico" },
  { src: eGrupo.url, alt: "Foto oficial dos participantes" },
  { src: eRitual.url, alt: "Ritual de roda ao ar livre" },
  { src: eDomeYoga.url, alt: "Vivência corporal em frente ao domo" },
];

const videos = [
  {
    id: "ngi3sUSRkug",
    title: "Memórias do Simpósio anterior",
  },
];

export function Memorias() {
  return (
    <section id="memorias" className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, rgba(214,154,23,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(28,119,117,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="label-cinzel text-xs text-gold mb-4">Arquivo Vivo · 2024 — 2025</p>
            <h2 className="font-display italic text-5xl md:text-6xl leading-[1.05] mb-6">
              Memórias dos <span className="text-gradient-gold">Congressos Anteriores</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Um retorno aos encontros que abriram caminho para esta terceira edição. Imagens, falas
              e presenças que continuam reverberando entre quem viveu cada momento.
            </p>
          </div>
        </Reveal>

        {/* Destaque Dr. Sérgio */}
        <Reveal>
          <article className="glass-card overflow-hidden grid md:grid-cols-[360px_1fr] gap-0 ring-1 ring-gold/30 border-gold/30 mb-14">
            <div className="relative aspect-[3/4] md:aspect-auto md:h-full overflow-hidden">
              <img
                src={sergio.url}
                alt="Dr. Sérgio Felipe de Oliveira"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 label-cinzel text-[0.55rem] px-3 py-1 bg-background/80 backdrop-blur text-gold border border-gold/40 rounded-sm tracking-[0.25em]">
                Presença Histórica
              </span>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="label-cinzel text-[0.65rem] mb-3 tracking-[0.3em] text-gold">
                Convidado das edições anteriores
              </div>
              <h3 className="font-display italic text-3xl md:text-4xl mb-2 leading-tight">
                Dr. Sérgio Felipe de Oliveira
              </h3>
              <p className="text-gold/90 text-sm mb-5 tracking-wide">
                Médico · Pesquisador · Neurociência e Consciência
              </p>
              <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                Uma das vozes mais marcantes das edições anteriores do Congresso. Suas conferências
                sobre a interface entre cérebro, mente e consciência abriram portas para o diálogo
                entre ciência e espiritualidade que segue como um dos eixos centrais deste encontro.
              </p>
            </div>
          </article>
        </Reveal>

        {/* Vídeos */}
        <Reveal delay={0.1}>
          <div className="mb-14">
            <p className="label-cinzel text-[0.7rem] text-gold mb-6 tracking-[0.3em] text-center">
              Em movimento
            </p>
            <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
              {videos.map((v) => (
                <div
                  key={v.id}
                  className="relative aspect-video overflow-hidden rounded-sm ring-1 ring-gold/20"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Galeria do simpósio */}
        <Reveal delay={0.15}>
          <div>
            <p className="label-cinzel text-[0.7rem] text-gold mb-6 tracking-[0.3em] text-center">
              Registros do Simpósio
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {images.map((p, i) => (
                <div key={i} className="relative aspect-[3/4] overflow-hidden group rounded-sm">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute inset-0 ring-0 ring-gold/0 group-hover:ring-1 group-hover:ring-gold/60 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="font-display italic text-2xl md:text-3xl text-offwhite/90 leading-snug">
              "Uma família que trabalha para famílias!"
            </p>
            <a href="#edicoes-anteriores" className="btn-ghost mt-8 inline-flex">
              Ver galeria completa
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
