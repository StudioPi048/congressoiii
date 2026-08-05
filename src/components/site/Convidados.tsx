import { Reveal } from "./Reveal";
import danila from "@/assets/convidados/danila.jpg.asset.json";
import daniella from "@/assets/convidados/daniella.png.asset.json";
import leandro from "@/assets/convidados/leandro.png.asset.json";
import sol from "@/assets/convidados/sol.png.asset.json";
import fabian from "@/assets/convidados/fabian-brotos.jpg.asset.json";
import mariaInes from "@/assets/convidados/maria-ines.jpg.asset.json";
import leticia from "@/assets/convidados/leticia.png.asset.json";
import pietro from "@/assets/convidados/pietro.png.asset.json";
import raul from "@/assets/convidados/raul-new.jpg";
import aline from "@/assets/convidados/aline.jpg.asset.json";
import jefferson from "@/assets/convidados/jefferson.jpg.asset.json";
import walter from "@/assets/convidados/walter.jpg.asset.json";
import mariaCamila from "@/assets/convidados/maria-camila.png.asset.json";
import vanuce from "@/assets/convidados/vanuce.png.asset.json";
import marianna from "@/assets/convidados/marianna.png";
import lennon from "@/assets/convidados/lennon.jpg";
import katiucia from "@/assets/convidados/katiucia.jpg";
import talita from "@/assets/convidados/talita.jpg";
import marina from "@/assets/convidados/marina.jpg";
import cintiaAlban from "@/assets/convidados/cintia.png";

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
    name: "Dr. Luis Fabián Brotos",
    role: "Odontologia Integrativa · Decodificação Dental® · Uruguai",
    photo: fabian.url,
    bio: "Terceira geração de sua família a escolher a odontologia como profissão. Cirurgião-dentista, professor universitário e pesquisador uruguaio, reconhecido internacionalmente por seu trabalho em Decodificação Dental.\n\nGraduado em Odontologia pela Universidade da República do Uruguai, atua como docente da Cátedra de Oclusão e Prótese desde 1999. Possui especializações em Implantes e Ortodontia e uma sólida formação complementar em Neurociência, Psicologia das Relações Afetivas, Simbolismo, Filosofia, Neurociência Aplicada e Interpretação e Análise de Sonhos.\n\nDesde 2007 dedica-se ao estudo da Decodificação Biológica e, em 2012, iniciou as pesquisas e estudos ao desenvolvimento da Decodificação Dental, investigando a profunda relação entre dentes, cérebro, emoções e história de vida.\n\nSua trajetória integra conhecimentos em Filosofia, Simbologia, Constelações Familiares, Cabala, Atos Simbólicos e Psico-Neuro-Imuno-Endocrinologia, consolidando uma abordagem inovadora e integrativa da saúde.\n\nDesde 2014 ministra cursos e forma profissionais em diversos países. Foi palestrante e convidado em universidades, congressos e encontros científicos internacionais realizados no Uruguai, Argentina, Portugal, Brasil, México e Estados Unidos, compartilhando sua metodologia com profissionais da saúde de diferentes áreas.\n\nÉ coautor do best-seller \"A Nova Visão Integrativa e Sistêmica sobre a Saúde e o Bem-Estar\" (2024), autor de publicações técnicas sobre Decodificação Dental® e diretor do Curso de Extensão Universitária em Decodificação Dental® da UNIFATEC, no Brasil.\n\nAtualmente, dedica-se à pesquisa, ao ensino e à formação de profissionais, contribuindo para a expansão da Decodificação Dental® em diferentes países e consolidando-se como uma das principais referências internacionais na área.",
    gender: "male",
    highlight: true,
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
  },
  {
    name: "Dra. Sol Ayala",
    role: "Médica · Saúde Integrativa · Terapia Neural",
    photo: sol.url,
    bio: "Médica especialista em saúde integrativa, terapia neural e avaliação metabólica e nutricional. Com formação pelo Hospital das Clínicas da USP e ampla experiência clínica, desenvolve uma medicina humanizada que integra corpo, mente e emoções no cuidado à saúde — atuando na prevenção e tratamento de dores crônicas, desequilíbrios metabólicos e na promoção do bem-estar integral.",
    gender: "female",
  },
  {
    name: "Raul Ferreira Netto",
    role: "Cineasta · Diretor · Apresentador · Locutor Oficial E! Entertainment TV Brasil",
    photo: raul,
    bio: "Cineasta, diretor, produtor, apresentador, locutor, ator e dublador brasileiro, com carreira iniciada nos Estados Unidos em 1993, onde trabalhou para grandes emissoras como MTV, HBO, Disney, Discovery, ESPN e Cartoon Network. Atuou em filmes como Mais Velozes e Mais Furiosos e Bad Boys 2, participou da série CSI: Miami e, no Brasil, consolidou-se como diretor de documentários, programas de televisão e produções especiais, além de ser a voz de personagens em séries de sucesso. Atualmente, é locutor oficial do E! Entertainment TV Brasil, dirige produções do canal e é sócio-diretor da produtora 2por1 Comunicação, destacando-se como um dos profissionais mais versáteis do audiovisual brasileiro.",
    gender: "male",
  },
  {
    name: "Aline Rosa",
    role: "Terapeuta Integrativa · Pesquisadora da Consciência · Isekhem Kundalini",
    photo: aline.url,
    bio: "Terapeuta integrativa, pesquisadora da consciência e facilitadora de jornadas de reconexão com a essência. Seu trabalho nasce do encontro entre ancestralidade, consciência corporal, espiritualidade e autoconhecimento, criando espaços onde cada pessoa pode se reconectar com sua própria verdade. Acredita que o corpo guarda memórias, que a história carrega sabedorias e que a consciência é o caminho que nos conduz de volta ao que realmente somos. Integrando conhecimentos em psicogenealogia, leitura simbólica e Isekhem Kundalini, conduz processos profundos de escuta, presença e transformação, respeitando a singularidade de cada jornada. Sua missão é lembrar às pessoas que a força que procuram não está fora, mas dentro delas. O corpo é o templo. A consciência é o caminho. A essência é o retorno.",
    gender: "female",
  },
  {
    name: "Cintia Maria Nobre Lucas Alban",
    role: "Empresária · Mentora · Voluntária · Embaixadora de Impacto Social",
    photo: cintiaAlban,
    bio: "Cintia Maria Nobre Lucas Alban tem 56 anos, é casada e mãe de três filhos. Empresária com experiência no varejo de produtos nacionais e importados, ao longo de sua trajetória uniu sua visão de negócios a um profundo propósito humano, atuando como mentora, voluntária e embaixadora em diversas iniciativas de impacto social.\n\nLinha do tempo e projetos: em 1990, graduou-se em Engenharia Agrícola pela Ulbra-RS; em 1996, iniciou sua atuação como mentora na Associação Santa Rita, lar de idosos no interior do Rio Grande do Sul; em 2011, concluiu o bacharelado em Gastronomia pela Faculdade Assesc-SC; em 2015, ao lado da Família Alban, realizou o Projeto Origens do Saber, uma viagem pela América do Sul que entrevistou inúmeros idosos em busca de sabedoria; em 2017, tornou-se embaixadora da ACIC, Associação Catarinense para Integração do Cego; em 2018, foi cofundadora do Nonno, plataforma que conecta famílias com cuidadores de pessoas; em 2020, cofundou o Instituto AlKE, dedicado à reabilitação em prol da amputação; em 2021, tornou-se embaixadora do RAMP, Reabilitação Multidisciplinar em Amputados; e, em 2026, retoma o Projeto Oriens, de volta ao mundo a bordo de um caminhão 4x4.\n\nSua atuação comunitária e social inclui 18 anos de dedicação como catequista em comunidades vulneráveis nos estados do Rio Grande do Sul e Santa Catarina. Em 2009, foi ordenada Ministra na Paróquia Santa Teresinha do Menino Jesus, em Florianópolis-SC, atuando ativamente como voluntária nos projetos sociais liderados pelo Padre Valmir Silvano.",
    themes: [
      "Sabedoria ancestral e propósito humano",
      "Projetos sociais, cuidado e reabilitação",
    ],
    gender: "female",
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
  {
    name: "Jefferson Zomignan",
    role: "Especialista em Comportamento Humano · Gestão Consciente · Desenvolvimento de Líderes",
    photo: jefferson.url,
    bio: "“Sou a expressão de muitas gerações que me antecederam. Em mim vivem histórias, emoções, aprendizados, talentos e desafios herdados daqueles que contribuíram para que eu estivesse aqui hoje. Reconheço-me como um ser em constante evolução, dedicado à busca do autoconhecimento, da consciência e da compreensão da experiência humana. Foi essa jornada que me conduziu ao estudo do comportamento humano, da gestão consciente e do desenvolvimento de líderes. Minha atuação busca integrar propósito, humanidade e lucro, compreendendo que toda estratégia, toda cultura e todo resultado organizacional são reflexos das escolhas, das relações e da consciência das pessoas que compõem uma organização. Antes de qualquer estrutura, processo ou negócio, existem seres humanos. E é por isso que afirmo: ‘Não existem empresas. Existem seres humanos realizando negócios.’”",
    gender: "male",
  },
  {
    name: "Walter Maisonnett",
    role: "Acupunturista · Odontologia Sistêmica e Integrativa · Medicina Tradicional Chinesa",
    photo: walter.url,
    bio: "Acupunturista formado em Odontologia e responsável pelo canal no YouTube Odonto Sistêmica Educacional. Atua em Medicina Tradicional Chinesa, Disfunção Temporomandibular e Dor Orofacial, e Implantodontia. Pós-graduação lato sensu em Adequação Nutricional e Manutenção da Homeostase, com especialização lato sensu em Terapia Neural. Professor da pós-graduação em Odontologia Sistêmica e Integrativa e da pós-graduação em Biofísica, Tecnologias e Práticas Integrativas em Saúde. Possui formação em Decodificação Dental e em Psicogenealogia pelo Instituto LIZ — entre muitos outros certificados.",
    gender: "male",
  },
  {
    name: "Maria Inês Dressler",
    role: "Founder & CEO Grupo DRESSLER · Psicogenealogista · MBA em Liderança e Gestão (PUCRS)",
    photo: mariaInes.url,
    bio: "Contadora e Técnica Contábil com especialização em custos industriais, pós-graduada em Finanças e MBA em Liderança, Gestão de Equipes e Produtividade pela PUCRS, com TCC em Metodologias Ágeis. Psicogenealogista formada pelo Instituto LIZ. Atuou como auditora da PWC por 4 anos, professora universitária da Univali/SC por 5 anos e conselheira do CRCSC por 4 anos. Atualmente conduz a gestão do Grupo DRESSLER e o atendimento a clientes, integrando visão contábil, liderança consciente e Psicogenealogia.",
    themes: ["Saúde Mental nas Empresas"],
    gender: "female",
  },
  {
    name: "Maria Camila Suzini Francisco",
    role: "Terapeuta Integrativa · Psicogenealogista · Desenvolvimento Humano",
    photo: mariaCamila.url,
    bio: "Terapeuta integrativa, Psicogenealogista e facilitadora do desenvolvimento humano. Atua no acompanhamento de pessoas por meio de abordagens voltadas ao autoconhecimento, à saúde emocional e aos relacionamentos, integrando diferentes ferramentas terapêuticas em sua prática clínica. Graduada em Letras, possui formação técnica em Terapia Holística e dedica-se à promoção do bem-estar integral, conciliando conhecimento, acolhimento e uma visão fundamentada em princípios cristãos.",
    gender: "female",
  },
  {
    name: "Dra. Vanuce Torres de Oliveira",
    role: "Cirurgiã-Dentista · Medicina Funcional Integrativa · Psicogenealogia",
    photo: vanuce.url,
    bio: "Cirurgiã-dentista graduada pela Universidade de Guarulhos (UNG), com 26 anos de experiência clínica. Pós-graduada em Ortodontia (2000–2002) e em Medicina Funcional Integrativa pela ABMFI – Academia Brasileira de Medicina Funcional Integrativa (2025). Ao longo de sua trajetória, aprofundou seus estudos sistêmicos a partir de formações em Biocibernética Bucal, Terapia Neural, Psiconeurodontologia, Psicogenealogia e Decodificação Biológica, direcionando sua atuação para uma compreensão global da saúde. Acredita que o cuidado em saúde começa pela compreensão integral do ser humano, unindo conhecimento, escuta e respeito à singularidade de cada pessoa.",
    gender: "female",
  },
  {
    name: "Dra. Marianna de Abreu Costa",
    role: "Médica Psiquiatra · Pesquisadora em Psiquiatria e Espiritualidade · UFRGS",
    photo: marianna,
    bio: "Médica formada pela Universidade Federal do Rio Grande do Sul (UFRGS) e especializada em Psiquiatria pelo Hospital de Clínicas de Porto Alegre (HCPA), Doutora pelo Programa de Pós-Graduação em Psiquiatria e Ciência do Comportamento da Faculdade de Medicina da UFRGS. Pós-doutoramento no Núcleo de Pesquisas em Espiritualidade e Saúde da Universidade Federal de Juiz de Fora (UFJF). Membro atuante do Departamento de Psiquiatria e Espiritualidade da Associação de Psiquiatria do Rio Grande do Sul (DPE-APRS) e da Comissão de Estudos e Pesquisa em Espiritualidade e Saúde da Associação Brasileira de Psiquiatria, contribuindo para a integração desses campos na prática psiquiátrica, divulgando o tema através da organização e participação em eventos científicos.",
    gender: "female",
    modality: "online",
    highlight: true,
  },
  {
    name: "Lennon",
    role: "Artista Visual · Marketing e Tecnologia · Estratégia Criativa",
    photo: lennon,
    bio: "Iniciou sua caminhada no silêncio do desenho, aprendendo a observar aquilo que muitas vezes passa despercebido: emoções, detalhes, histórias e a beleza presente em cada pessoa. A arte moldou seu olhar muito antes de moldar sua profissão — depois, junto com ela, vieram o marketing, a tecnologia e a visão estratégica aplicada ao crescimento de empresas, marcas e projetos. Transita naturalmente entre esses universos, pois nunca os enxergou como caminhos separados: a arte ensina a sentir, a tecnologia amplia possibilidades e a estratégia transforma visão em realidade. É nesse encontro entre criatividade, tecnologia, estratégia e humanidade que constrói sua trajetória, criando conexões com o poder de transformar pessoas, organizações e realidades.",
    gender: "male",
  },
  {
    name: "Katiucia Garcia Vilela",
    role: "Fundadora Escola Ser InComum · Instituto Kalel · Pesquisadora da Consciência",
    photo: katiucia,
    bio: "Katiucia Garcia Vilela é fundadora da Escola Ser InComum, do Espaço Arcturus – Terapias Quânticas Integrativas e do Instituto Kalel, um hospital do espírito dedicado ao cuidado integral do ser humano.\n\nPesquisadora da consciência encarnada, idealizadora da AutoMedicina da IntroVisão e da TransMediunidade, dedica sua vida à investigação da consciência como princípio organizador da biologia, das relações e da espiritualidade.\n\nSua missão é recordar ao ser humano sua natureza essencial, conduzindo-o ao acesso consciente ao inconsciente biológico, para que possa transcender os condicionamentos inscritos no corpo e espiritualizar a própria existência. Seu trabalho revela que a verdadeira cura nasce quando consciência, biologia e espírito voltam a caminhar em unidade.\n\nPor meio de uma pedagogia espiritual que integra ciência, filosofia e experiência contemplativa, Katiucia convida cada pessoa a reorganizar o Coração Celestial — o centro vivo da consciência — e a reconhecer o corpo como um templo onde o espírito se manifesta.\n\nSua obra está a serviço de uma nova humanidade: uma humanidade capaz de viver a transcendência biológica, desenvolver a TransMediunidade como expressão natural da consciência ampliada e recordar que o destino de todo ser é reunir novamente aquilo que um dia se percebeu separado.\n\nSua missão é abrir caminhos de recordação, para que a espiritualidade deixe de ser uma ideia e se torne uma presença viva no corpo, nas relações e na consciência, revelando que o ser humano é a própria manifestação do divino em evolução.",
    gender: "female",
  },
  {
    name: "Talita Auler",
    role: "Fonoaudióloga · Especialista em Espiritualidade e Saúde (UCS) · Fundadora Clínica Adit",
    photo: talita,
    bio: "Fonoaudióloga, especialista em Espiritualidade e Saúde pela UCS. Fundadora da Clínica Adit, a primeira clínica do RS a integrar saúde, espiritualidade e comunicação. Integra conhecimentos das neurociências, da tanatologia e da espiritualidade em movimentos que promovem uma compreensão ampliada do ser humano.",
    gender: "female",
  },
  {
    name: "Marina Renault",
    role: "Facilitadora de Processos de Reconexão Interior · Códigos de Luz",
    photo: marina,
    bio: "Marina Renault é facilitadora de processos de reconexão interior, com atuação voltada ao desenvolvimento espiritual, emocional e energético do ser humano.\n\nSua abordagem une práticas intuitivas, meditações guiadas e Códigos de Luz, criando espaços de cura e expansão da consciência. Com uma trajetória dedicada ao serviço do autoconhecimento, Marina conduz experiências que integram sensibilidade, presença e alinhamento com o coração. Seu trabalho não se baseia em dogmas, nomes de guias ou tradições específicas, mas em despertar a autonomia espiritual e a força interior de cada indivíduo.\n\nMais do que transmitir técnicas, Marina sustenta vivências que convidam à transmutação das dores, à libertação de condicionamentos antigos e à construção de um novo olhar sobre si e sobre a vida. Atua em grupos, projetos especiais, jornadas online e presenciais, sempre com a proposta de que o Verdadeiro Mestre habita em cada um de nós.",
    gender: "female",
  },
];

export function Convidados() {
  return (
    <section id="convidados" className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(28,119,117,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(214,154,23,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="label-cinzel text-xs text-gold mb-4">Convidados e Presenças Especiais</p>
            <h2 className="font-display italic text-5xl md:text-6xl leading-[1.05] mb-6">
              Vozes que <span className="text-gradient-gold">reescrevem</span> a forma de
              compreender <br className="hidden md:block" />
              família, corpo e consciência.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Referências nacionais e internacionais da medicina, da clínica integrativa, da
              odontologia e da psicogenealogia reunidas em três dias de imersão. Novos nomes serão
              anunciados em sequência.
            </p>
          </div>
        </Reveal>

        <div className="space-y-10 md:space-y-14">
          {speakers.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <article
                className={`glass-card overflow-hidden grid md:grid-cols-[300px_1fr] md:min-h-[520px] gap-0 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                } ${
                  s.highlight
                    ? "ring-2 ring-gold shadow-[var(--shadow-gold)] border-gold/70 md:min-h-[560px]"
                    : ""
                } ${s.status === "pending" ? "opacity-70" : ""}`}
              >
                <div className="relative aspect-[3/4] md:aspect-auto md:h-full overflow-hidden [direction:ltr]">
                  <img
                    src={s.photo}
                    alt={`Retrato de ${s.name}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  {(s.modality === "remoto" || s.modality === "online") && (
                    <span className="absolute top-4 left-4 label-cinzel text-[0.55rem] px-3 py-1 bg-background/80 backdrop-blur text-gold border border-gold/40 rounded-sm tracking-[0.25em]">
                      {s.modality === "online" ? "Participação Online" : "Participação Remota"}
                    </span>
                  )}
                  {s.highlight && (
                    <span
                      className="label-cinzel text-[0.6rem] px-4 py-1.5 rounded-sm tracking-[0.25em] absolute top-4 right-4 text-background font-semibold"
                      style={{ background: "var(--gradient-gold-metal)" }}
                    >
                      ★ Palestrante Destaque
                    </span>
                  )}
                </div>

                <div className="p-8 md:p-10 [direction:ltr] flex flex-col justify-center">
                  <div
                    className={`label-cinzel text-[0.65rem] mb-3 tracking-[0.3em] ${s.status === "pending" ? "text-muted-foreground" : "text-gold"}`}
                  >
                    {s.status === "pending"
                      ? "Palestrante a Confirmar"
                      : s.highlight
                        ? `Destaque do Painel · Palestrante ${s.gender === "female" ? "Confirmada" : "Confirmado"}`
                        : s.gender === "female"
                          ? "Palestrante Confirmada"
                          : "Palestrante Confirmado"}
                  </div>
                  <h3
                    className={`font-display italic mb-2 leading-tight ${s.highlight ? "text-4xl md:text-5xl text-gradient-gold" : "text-3xl md:text-4xl"}`}
                  >
                    {s.name}
                  </h3>
                  <p className="text-gold/90 text-sm mb-5 tracking-wide">{s.role}</p>
                  {s.note && (
                    <p className="text-xs text-offwhite/70 italic border-l-2 border-gold/40 pl-3 mb-5">
                      {s.note}
                    </p>
                  )}
                  <div className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed space-y-4">
                    {s.bio.split("\n\n").map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

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
