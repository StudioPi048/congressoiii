import { Reveal } from "./Reveal";
import danila from "@/assets/convidados/danila.jpg.asset.json";
import daniella from "@/assets/convidados/daniella.png.asset.json";
import sergio from "@/assets/convidados/sergio.png.asset.json";
import leandro from "@/assets/convidados/leandro.png.asset.json";
import sol from "@/assets/convidados/sol.png.asset.json";
import placeholder from "@/assets/convidados/placeholder-speaker.jpg.asset.json";
import leticia from "@/assets/convidados/leticia.png.asset.json";
import pietro from "@/assets/convidados/pietro.png.asset.json";

type Speaker = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  themes?: string[];
  gender: "female" | "male";
  modality?: "presencial" | "online" | "remoto";
  note?: string;
  highlight?: boolean;
  status?: "confirmed" | "pending";
};

const speakers: Speaker[] = [
  {
    name: "Dr. Sérgio Felipe de Oliveira",
    role: "Médico · Pesquisador · Neurociência e Consciência",
    photo: sergio.url,
    bio: "Médico, pesquisador e palestrante brasileiro reconhecido por integrar neurociência, espiritualidade, filosofia e consciência humana. Formado em Medicina, atuou por muitos anos na neurologia e tornou-se referência em estudos sobre a relação entre cérebro, mente e fenômenos da consciência. Autor de livros, conferencista internacional e fundador de iniciativas interdisciplinares entre ciência, saúde e espiritualidade.",
    gender: "male",
    modality: "remoto",
    note: "Participação especial — II Congresso. Não estará presente fisicamente.",
    highlight: true,
  },
  {
    name: "Dr. Fabián Brotos",
    role: "Odontologia Integrativa · Decodificação Biológica · Uruguai",
    photo: placeholder.url,
    bio: "Iniciou sua jornada na Decodificação Biológica como aluno do professor Enrique Bouron, destacando-se em Biologia Total pela dedicação e aprofundamento clínico. Graduado em Odontologia pela Universidade da República (Montevidéu, 2000), é docente desde 1999 nas áreas de oclusão, prótese dentária e diversas especialidades odontológicas integrativas. Possui formação em Cerâmica Dentária, Facetas e Inlays Cerâmicos, Tratamento de Edentação, sistema Bredent (Alemanha), Fibra de Vidro em Odontologia, Pós-graduação em Ortopedia e Ortodontia, Implantes Osseointegrados, Próteses Implantoassistidas e Implantologia.",
    gender: "male",
  },
  {
    name: "Danila Gabriel Martins de Campos",
    role: "Fisioterapeuta Integrativa · Saúde Integral e Terapias Transgeracionais",
    photo: danila.url,
    bio: "Graduada em Enfermagem (FMR) e Fisioterapia (UNIFSP), atua com abordagem integrativa voltada à identificação da causa primária das disfunções físicas, emocionais e comportamentais. Com formação em Microfisioterapia, Dermoneuromodulação, Leitura Biológica, Cura Prânica e Psicogenealogia, dedica-se à liberação de memórias biológicas e heranças transgeracionais. Pós-graduanda em Neurociência e fundadora da D G M de Campos.",
    themes: [
      "O corpo não esquece: raízes ocultas do sintoma",
      "Entre gerações: o corpo como guardião da história",
    ],
    gender: "female",
  },
  {
    name: "Daniella Barreto Ruocco",
    role: "Cirurgiã-Dentista · Psicogenealogista · Consteladora Familiar",
    photo: daniella.url,
    bio: "Cirurgiã-Dentista, Psicogenealogista, Consteladora Familiar, Terapeuta Integrativa e palestrante. Integra clínica, escuta sistêmica e trabalho com sistemas familiares em sua atuação como conferencista.",
    gender: "female",
  },
  {
    name: "Dr. Leandro Barreto",
    role: "Médico · Medicina Integrativa e Funcional · USP",
    photo: leandro.url,
    bio: "Médico, palestrante e diretor do Bio Instituto de Medicina Integrativa e Funcional. Médico Assistente do Hospital das Clínicas da Faculdade de Medicina da USP, com formações em Nutrologia, Psiquiatria, Ciências da Longevidade Humana e Diagnóstico por Imagem. Dedica-se ao estudo da saúde física, mental e emocional sob uma abordagem integrativa voltada ao desenvolvimento humano e à qualidade de vida.",
    gender: "male",
    status: "pending",
  },
  {
    name: "Dra. Sol Ayala",
    role: "Médica · Saúde Integrativa · Terapia Neural",
    photo: sol.url,
    bio: "Médica especialista em saúde integrativa, terapia neural e avaliação metabólica e nutricional. Com formação pelo Hospital das Clínicas da USP e ampla experiência clínica, desenvolve uma medicina humanizada que integra corpo, mente e emoções no cuidado à saúde — atuando na prevenção e tratamento de dores crônicas, desequilíbrios metabólicos e na promoção do bem-estar integral.",
    gender: "female",
    status: "pending",
  },
  {
    name: "Letícia Kuchockowolec Baccin",
    role: "Docente Internacional de Psicogenealogia · Fundadora Instituto e Escola LIZ",
    photo: leticia.url,
    bio: "Formada em Direito, atuou como advogada por 25 anos. Foi sócia e cofundadora do 5º maior escritório de advocacia do Brasil — Martinelli Advogados — com registro em 7 seccionais da OAB. Sócia fundadora do Instituto LIZ e da Escola LIZ, com o propósito de Conciliar a Existência a partir da tomada de consciência das programações inconscientes e da compreensão da totalidade do ser e do continuum da vida. Especialista em Direito da Economia e da Empresa, pós-graduada em Direito e Relações do Trabalho, Parapsicologia Clínica Independente e Neurociências (PUC e Uniespírito). Bioneurogestora, Decodificadora Dental, palestrante TEDx, autora de 12 obras e cursando Diplomado de Cabalá pela Escola de Mário Saban. Docente Internacional de Psicogenealogia pela Escola LIZ e responsável legal pelas formações no Brasil, Portugal e países de língua portuguesa.",
    gender: "female",
  },
  {
    name: "Pietro Vinícius Kuchockowolec Baccin",
    role: "Designer Gráfico · Fotógrafo · Branding e Direção Criativa",
    photo: pietro.url,
    bio: "Designer Gráfico e Fotógrafo com mais de 12 anos de experiência no desenvolvimento de marcas, identidades visuais, campanhas publicitárias e projetos digitais. Atuação sólida em branding, marketing visual, design estratégico e produção de conteúdo para mídias digitais. Integra ferramentas de inteligência artificial aos processos criativos para potencializar resultados e gerar experiências visuais impactantes. Bacharelado em Design pela Pontifícia Universidade Católica do Paraná (cursando) e Tecnólogo em Design Gráfico pela Universidade do Vale do Itajaí.",
    gender: "male",
  },
];

export function Convidados() {
  return (
    <section id="convidados" className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(107,63,160,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(201,168,76,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="label-cinzel text-xs text-gold mb-4">
              Convidados e Presenças Especiais
            </p>
            <h2 className="font-display italic text-5xl md:text-6xl leading-[1.05] mb-6">
              Vozes que <span className="text-gradient-gold">reescrevem</span> a
              forma de compreender <br className="hidden md:block" />
              família, corpo e consciência.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Referências nacionais e internacionais da medicina, da clínica
              integrativa, da odontologia e da psicogenealogia reunidas em três
              dias de imersão. Novos nomes serão anunciados em sequência.
            </p>
          </div>
        </Reveal>

        <div className="space-y-10 md:space-y-14">
          {speakers.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <article
                className={`glass-card overflow-hidden grid md:grid-cols-[300px_1fr] md:min-h-[520px] gap-0 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                } ${s.highlight ? "ring-1 ring-gold/40 border-gold/40" : ""} ${
                  s.status === "pending" ? "opacity-70" : ""
                }`}
              >
                <div className="relative aspect-[3/4] md:aspect-auto md:h-full overflow-hidden [direction:ltr]">
                  <img
                    src={s.photo}
                    alt={`Retrato de ${s.name}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  {s.modality === "remoto" && (
                    <span className="absolute top-4 left-4 label-cinzel text-[0.55rem] px-3 py-1 bg-background/80 backdrop-blur text-gold border border-gold/40 rounded-sm tracking-[0.25em]">
                      Participação Remota
                    </span>
                  )}
                </div>

                <div className="p-8 md:p-10 [direction:ltr] flex flex-col justify-center">
                  <div className={`label-cinzel text-[0.65rem] mb-3 tracking-[0.3em] ${s.status === "pending" ? "text-muted-foreground" : "text-gold"}`}>
                    {s.status === "pending"
                      ? (s.gender === "female" ? "Convidada a Confirmar" : "Convidado a Confirmar")
                      : (s.gender === "female" ? "Convidada Confirmada" : "Convidado Confirmado")}
                  </div>
                  <h3 className="font-display italic text-3xl md:text-4xl mb-2 leading-tight">
                    {s.name}
                  </h3>
                  <p className="text-gold/90 text-sm mb-5 tracking-wide">
                    {s.role}
                  </p>
                  {s.note && (
                    <p className="text-xs text-offwhite/70 italic border-l-2 border-gold/40 pl-3 mb-5">
                      {s.note}
                    </p>
                  )}
                  <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                    {s.bio}
                  </p>

                  {s.themes && (
                    <div className="mt-6 border-t border-gold/15 pt-5">
                      <p className="label-cinzel text-[0.6rem] text-gold/80 mb-3 tracking-[0.25em]">
                        Temas da palestra
                      </p>
                      <ul className="space-y-2">
                        {s.themes.map((t) => (
                          <li
                            key={t}
                            className="text-sm font-display italic text-offwhite/90 before:content-['◆'] before:text-gold before:mr-3 before:text-[0.6rem] before:align-middle"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 text-center max-w-2xl mx-auto border-t border-gold/15 pt-12">
            <p className="label-cinzel text-[0.7rem] text-gold mb-4 tracking-[0.3em]">
              Novos nomes em breve
            </p>
            <p className="font-display italic text-2xl md:text-3xl text-offwhite/90 leading-snug">
              "Cada confirmação, um novo capítulo dessa edição histórica."
            </p>
            <a href="#investimento" className="btn-ghost mt-8 inline-flex">
              Garantir presença
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
