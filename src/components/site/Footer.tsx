import logo from "@/assets/tempus-logo.jpg";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/15 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Tempus"
                className="h-14 w-auto max-w-[260px] object-contain object-left"
              />
            </div>
            <p className="font-display italic text-lg text-offwhite/70 leading-relaxed">
              "Ciclos Invisíveis das Gerações" <br />
              III Congresso de Psicogenealogia
            </p>
          </div>

          <div>
            <p className="label-cinzel text-[0.65rem] text-gold mb-5">Navegação</p>
            <ul className="space-y-3 text-sm">
              {[
                ["#hero", "Início"],
                ["#programacao", "Programação"],
                ["#local", "Local"],
                ["#investimento", "Investimento"],
                ["#faq", "FAQ"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="text-offwhite/70 hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-cinzel text-[0.65rem] text-gold mb-5">Contato</p>
            <ul className="space-y-3 text-sm text-offwhite/70">
              <li>💬 WhatsApp: (48) 0000-0000</li>
              <li>📧 contato@institutoliz.com</li>
              <li>📷 @institutoliz</li>
            </ul>
          </div>
        </div>

        <div className="gold-divider !w-full" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-xs text-muted-foreground">
          <p>© 2026 Instituto LIZ · Tempus · Todos os direitos reservados</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gold">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
