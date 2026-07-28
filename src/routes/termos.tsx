import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Tempus — Ciclos Invisíveis das Gerações" },
      {
        name: "description",
        content:
          "Condições de uso do site, regras de inscrição, pagamento, cancelamento e participação no III Congresso de Psicogenealogia — Tempus, em Florianópolis.",
      },
      { property: "og:title", content: "Termos de Uso — Tempus" },
      {
        property: "og:description",
        content:
          "Regras de inscrição, pagamento e participação no III Congresso de Psicogenealogia — Tempus.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://congressoiii.lovable.app/termos" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://congressoiii.lovable.app/termos" }],
  }),
  component: Termos,
});

function Termos() {
  return (
    <main className="relative min-h-screen bg-background text-offwhite">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link to="/" className="label-cinzel text-[0.65rem] text-gold hover:opacity-80">
          ← Voltar ao site
        </Link>

        <h1 className="mt-8 font-display text-4xl italic md:text-5xl">
          Termos de <span className="text-gradient-gold">Uso</span>
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Última atualização: julho de 2026 · Instituto LIZ
        </p>

        <div className="mt-12 space-y-10 leading-relaxed text-offwhite/80">
          <section>
            <h2 className="font-display text-2xl italic text-offwhite">1. Aceitação</h2>
            <p className="mt-3">
              Ao navegar neste site ou realizar sua inscrição no III Congresso de Psicogenealogia —
              Tempus, você concorda com estes Termos de Uso e com a Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">2. Sobre o evento</h2>
            <p className="mt-3">
              O congresso ocorre nos dias 06, 07 e 08 de novembro de 2026, no Hotel Torres da
              Cachoeira, em Florianópolis/SC. Os dias 06 e 07 são abertos ao público; o dia 08 é
              exclusivo para psicogenealogistas certificados.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">
              3. Inscrições e pagamento
            </h2>
            <p className="mt-3">
              Os valores praticados são os divulgados na seção Investimento deste site, conforme o
              lote vigente na data da compra. O parcelamento disponível é de até 3x sem juros. A
              vaga é confirmada apenas após a confirmação do pagamento.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">4. O que está incluso</h2>
            <p className="mt-3">
              O ingresso inclui o acesso à programação dos dias contratados, o jantar de sexta-feira
              (06/11), o almoço de sábado (07/11) e o material do evento.{" "}
              <span className="text-offwhite">A hospedagem não está inclusa</span> e deve ser
              contratada diretamente com o hotel.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">
              5. Cancelamento e transferência
            </h2>
            <p className="mt-3">
              O cancelamento pode ser solicitado em até 7 dias corridos após a compra, conforme o
              Código de Defesa do Consumidor, desde que realizado com mais de 7 dias de antecedência
              do evento. Após esse prazo, a inscrição pode ser transferida para outra pessoa mediante
              solicitação com no mínimo 10 dias de antecedência.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">
              6. Programação e imagem
            </h2>
            <p className="mt-3">
              A programação, os painéis e as presenças anunciadas podem sofrer alterações por
              motivos de força maior, preservando-se a qualidade e a carga horária do evento. O
              participante autoriza o uso de sua imagem em fotos e vídeos captados durante o
              congresso para fins de divulgação institucional.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">
              7. Propriedade intelectual
            </h2>
            <p className="mt-3">
              Todo o conteúdo deste site e do evento — textos, marcas, imagens e materiais — pertence
              ao Instituto LIZ e aos respectivos autores, sendo vedada a reprodução sem autorização
              prévia.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">8. Contato</h2>
            <p className="mt-3">
              Dúvidas sobre estes termos: <span className="text-offwhite">contato@institutoliz.com</span>{" "}
              ou WhatsApp <span className="text-offwhite">+55 44 9131-8081</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
