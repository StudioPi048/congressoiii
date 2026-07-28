import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Tempus — Ciclos Invisíveis das Gerações" },
      {
        name: "description",
        content:
          "Como o Instituto LIZ coleta, usa e protege dados dos visitantes do site do III Congresso de Psicogenealogia — Tempus, incluindo cookies, analytics e Facebook Pixel.",
      },
      { property: "og:title", content: "Política de Privacidade — Tempus" },
      {
        property: "og:description",
        content:
          "Uso de dados, cookies, analytics e Facebook Pixel no site do III Congresso de Psicogenealogia — Tempus.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://congressoiii.lovable.app/privacidade" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://congressoiii.lovable.app/privacidade" }],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <main className="relative min-h-screen bg-background text-offwhite">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link to="/" className="label-cinzel text-[0.65rem] text-gold hover:opacity-80">
          ← Voltar ao site
        </Link>

        <h1 className="mt-8 font-display text-4xl italic md:text-5xl">
          Política de <span className="text-gradient-gold">Privacidade</span>
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Última atualização: julho de 2026 · Instituto LIZ
        </p>

        <div className="mt-12 space-y-10 leading-relaxed text-offwhite/80">
          <section>
            <h2 className="font-display text-2xl italic text-offwhite">1. Quem somos</h2>
            <p className="mt-3">
              Este site é mantido pelo Instituto LIZ para divulgação do III Congresso de
              Psicogenealogia — Tempus, realizado em Florianópolis/SC nos dias 06, 07 e 08 de
              novembro de 2026. Dúvidas sobre esta política podem ser enviadas para{" "}
              <span className="text-offwhite">contato@institutoliz.com</span> ou pelo WhatsApp{" "}
              <span className="text-offwhite">+55 44 9131-8081</span>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">2. Dados que coletamos</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <span className="text-offwhite">Dados fornecidos por você:</span> nome, telefone,
                e-mail e demais informações enviadas voluntariamente ao entrar em contato conosco
                (por exemplo, via WhatsApp) ou ao se inscrever no congresso.
              </li>
              <li>
                <span className="text-offwhite">Dados de navegação:</span> páginas visitadas, tempo
                de permanência, origem do acesso, tipo de dispositivo, navegador e endereço IP
                aproximado, coletados automaticamente por cookies e tecnologias similares.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">
              3. Cookies, analytics e Facebook Pixel
            </h2>
            <p className="mt-3">
              Utilizamos <span className="text-offwhite">cookies</span> próprios e de terceiros para
              manter o funcionamento do site, medir audiência e melhorar a experiência de navegação.
            </p>
            <p className="mt-3">
              Utilizamos ferramentas de <span className="text-offwhite">analytics</span> para
              entender de forma agregada como os visitantes usam a página (seções mais vistas,
              cliques em botões, origem do tráfego).
            </p>
            <p className="mt-3">
              Utilizamos o <span className="text-offwhite">Facebook Pixel (Meta Pixel)</span>, que
              registra ações realizadas no site e as associa a identificadores da Meta Platforms.
              Isso nos permite medir a eficácia das campanhas e exibir anúncios relevantes no
              Facebook e no Instagram. O tratamento desses dados pela Meta segue as políticas da
              própria plataforma.
            </p>
            <p className="mt-3">
              Você pode bloquear ou apagar cookies nas configurações do seu navegador e desativar a
              publicidade personalizada nas preferências de anúncios da Meta. Algumas funções do
              site podem ficar limitadas se os cookies forem bloqueados.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">4. Como usamos os dados</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Responder solicitações e atender inscrições no congresso.</li>
              <li>Enviar informações sobre o evento, lotes e programação.</li>
              <li>Medir e otimizar campanhas de divulgação.</li>
              <li>Cumprir obrigações legais aplicáveis.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">
              5. Compartilhamento com terceiros
            </h2>
            <p className="mt-3">
              Compartilhamos dados apenas com prestadores necessários à operação do site e do evento
              (hospedagem, ferramentas de analytics, Meta Platforms e meios de pagamento). Não
              vendemos dados pessoais.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">6. Seus direitos (LGPD)</h2>
            <p className="mt-3">
              Nos termos da Lei nº 13.709/2018, você pode solicitar confirmação de tratamento,
              acesso, correção, anonimização, portabilidade ou exclusão dos seus dados, bem como
              revogar consentimentos. Basta escrever para{" "}
              <span className="text-offwhite">contato@institutoliz.com</span>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl italic text-offwhite">7. Alterações</h2>
            <p className="mt-3">
              Esta política pode ser atualizada a qualquer momento. A data da última revisão será
              sempre indicada no topo desta página.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
