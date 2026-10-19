# TEMPUS — prévia, identidade original como referência

## Aprovação humana e preparação de publicação

Em19/10/2026 Pietro aprovou a prévia completa V4 e pediu “pode enviar pro lovable publicar”. Envio/publicação em andamento; confirmar resultado no histórico. A produção omite a barra/notas internas de revisão e noindex; pixel original permanece habilitado. Revisão continua disponível apenas quando VITE_TEMPUS_PREVIEW=true. Condições que exigem consulta à equipe permanecem assim, sem inventar preços ou elegibilidade. Orientações anteriores “sem publicação autorizada” registram estados históricos superados por esta autorização.

## V4 — atmosfera completa, 19/10

Pietro gostou mais da direção V3 e autorizou levar a dramaticidade ao restante do site, sem alongar e com prévia completa antes de publicar. Isso aprova a direção de refinamento, não a publicação.

Implementação em `tempus-atmosphere.css`, após o sistema-base. Seis cenas nos mesmos seis blocos: origem/linhagem (geometria genealógica herdada e textura lateral); programação/mecanismo do tempo (luz nas bordas e superfície de leitura escura); convidados (fio genealógico, ouro nos retratos e nos nomes); memórias/local (petróleo luminoso, fotos reais com legenda sobreposta); ingresso (convite em ouro/petróleo com cantos gravados e relógio original); dúvidas/fechamento (leitura sóbria, ancestralidade lateral e retorno ao cenário do hero).

Nenhuma nova seção, animação, texto promocional ou imagem gerada. Cenografia absoluta e fundos dentro dos limites existentes. Legendas agora ocupam a própria foto. Fontes, conteúdo e controles preservados. Logo e textura protegidos, sem alteração nos arquivos originais. `tempus-lineage.svg` deriva apenas da geometria de parentesco já existente em AncestralBackdrop; não redesenha o logo.

Capturas em `../Tempus — Redesign Conversão/previas-v4`; parecer REVISAO-V4.md na pasta pai. Medição final V4 móvel470x954:8.103px (~8,5 telas) com detalhes recolhidos, sem overflow horizontal; desktop1280x900:5.989px. Comparação histórica original móvel470x954:43.950px. Isso não mede conversão. Build/TypeScript verificados; fotos visíveis carregadas e fontes loaded em ambos. FAQ expansível, navegação móvel e teclado da agenda conferidos, todos18 retratos carregados após expansão. Revisão humana da página completa pendente.

## V3 — dramaticidade e lúdico, 19/10

Pietro pediu mais dramaticidade e lúdico após a recuperação visual da V2. A abertura amplifica o cenário original: textura oficial mais presente, luz dourada, engrenagens, partículas e raízes, com máscara escura atrás da leitura. O mostrador do fundo ganhou escala e marcações romanas. Manifesto em48px máximo no desktop e32px no celular. Fechamento retoma o mesmo cenário; conteúdo funcional continua compacto. Sem imagens novas geradas, sem animação, sem alteração dos assets protegidos. V3 ainda aguarda revisão humana.

Estado em19/10/2026: V1 rejeitada por Pietro; V2 implementada para revisão, ainda sem aprovação visual humana e sem publicação. Arquivo anterior e capturas preservados em `../Tempus — Redesign Conversão/rejeitado-v1`.

## Fonte de autoridade

Site original, `src/styles.css`, `src/components/site/AncestralBackdrop.tsx`, logo e textura originais. Ledger em `../Tempus — Redesign Conversão/REFERENCIAS-V2.md`. A aprovação anterior da estrutura não equivale a aprovação de uma nova identidade. V1 creme/editorial e foto-postcard não é direção aprovada.

## Decisões implementadas

- Fundo preto original#050807. Petróleo#07211f/#0b3a39 como profundidade. Texto#f2ecdd; apoio#b7c4b9. Ouro herdado do sistema, acabamento `--gradient-gold-metal`; ênfases legíveis#e9c46c. Marfim é cor de texto, não grandes áreas de papel.
- Logo completo e manifesto original na abertura. Não usar novo slogan gigante, relógio isolado ao lado de foto inclinada, ou composição de editorial de marca não aprovada.
- `AncestralBackdrop` original como ambiente: textura do tempo, relógio, raízes e linhas genealógicas. Apenas adicionada opção de derivada WebP da textura para a prévia. Sem redesenho de imagem.
- Cormorant Garamond600 para títulos, itálico e ouro como no material original. Cinzel nos botões, datas e guias da agenda. Lato400 em texto funcional. Famílias oficiais já carregadas pelo projeto. Há pesos500 no CSS de manifesto/valores que podem usar substituição dos pesos carregados, conforme registro anterior; sem nova família.
- Botões retangulares de2px, metal dourado herdado, outline de ouro na ação secundária; alvos amplos e foco visível. Não usar botões de aplicação genérica em mint/papel.
- Agenda e ingresso em painéis profundos com fio dourado, não fundos creme. Retratos e biografias compactos sob demanda, com nomes em Cormorant itálico e expansão legível de largura completa.
- Fotografias reais das edições anteriores e hotel sem moldura de papel ou inclinação; enquadramento com fio do sistema original.

## Arquitetura e responsividade

Seis blocos continuam: convite, proposta/público, programação+convidados, memórias+local, ingressos, FAQ+fechamento. Biografias completas e texto original sob expansão. O fechamento retoma “O que você herdou pode se transformar.”

Conteúdo até1160px; seção78px vertical no desktop e48px no celular. Grid de convidados6colunas desktop,3até1050px e2até720px. Menu recolhe em720px; barra de inscrição/atendimento no rodapé móvel. Logo principal610px máximo e100% no celular. Datas13px móveis; corpo17–18px; ação12pxCinzel móvel com mínimo52px de altura.

Abas da agenda com ARIA, setas/Home/End; detalhes nativos por teclado; movimento reduzido; foco explícito; não há rolagem interna obrigatória. São mecanismos implementados, não certificação WCAG. V2 foi inspecionada no navegador real com largura móvel470px e computador1280px. Capturas em `previas-v2`; fonte publicada capturada para comparação. Validação visual humana pendente.

## Conteúdo comercial e limites

Nada muda da reserva da revisão anterior: oferta Hotmart observada1200/3x400, condição LIZ e diários por consulta, elegibilidade de domingo mantida conforme FAQ atual até confirmação. Programação transcrita das três artes públicas16/10. Agenda/valores/checkout finais continuam pendentes antes de publicar. Nenhuma compra, mensagem ou reserva testada/concluída.

## Operação de prévia

`.env.local` tem `VITE_TEMPUS_PREVIEW=true`: pixel suprimido e noindex. Barra superior de revisão separa pendências de condições comerciais. Compilar com `npm run build`, servir com `npm run preview:local`. Só127.0.0.1:8088. Sem push/deploy. V1 e seu parecer arquivados; não apresentar aquele parecer como aprovação de Pietro.
