# Prévia TEMPUS — 19/10/2026

Endereço local: http://127.0.0.1:8088/

Branch: `codex/tempus-redesign`, baseada na main `9f20aed`. Nenhum push ou deploy desta branch foi feito.

## Abrir novamente

1. Neste diretório, manter `.env.local` com `VITE_TEMPUS_PREVIEW=true`.
2. `npm run build`
3. `npm run preview:local`

O comando padrão antigo `npm run preview` do projeto procura `dist/server/server.js`, enquanto esta configuração gera `.output` para Cloudflare. `preview:local` usa a configuração compilada real e roda só em 127.0.0.1.

## O que revisar

- Seis blocos aprovados, identidade oficial e fotografias reais.
- Agenda pública de 16/10, horários transcritos e domingo separado.
- Seis convidados na leitura principal; todos os 18 e suas biografias por expansão. As três remoções de 14/10 continuam aplicadas.
- Proposta completa do evento por expansão; fotografias e local; dúvidas e inscrição.
- Botões de inscrição e atendimento visíveis no começo; barra inferior no celular.

## Validação realizada

- Compilação e TypeScript passaram; `git diff --check` passou.
- Detector mecânico aplicado uma vez, retornou `[]`.
- Conferência visual a 390×844 e desktop1440×1000.
- Na mesma largura da auditoria anterior (470×954), leitura inicial sem expansões: documento8205px (~8,6telas), investimento y5328 (~5,6telas). Site publicado anterior43950px (~46telas); redução de altura~81%. Isso não mede ganho de conversão.
- Menu móvel, alternância de dias, biografia e acesso a todos os convidados testados no navegador. Fotos principais e hotel carregaram. Nenhuma compra concluída, mensagem enviada ou reserva realizada.
- IDs sem duplicação; noindex presente e pixel ausente na compilação de prévia.
- Avisos do plugin de desenvolvimento `data-tsd-source` motivaram a conferência da versão compilada via Wrangler local. Não se tratou de publicação.
- Contrato `user-pinned-tempus-20261019` encontrado no código compilado.
- Revisão independente: APPROVED WITH NOTES para apresentar a prévia, sem P0/P1 visual material. Ver `../Tempus — Redesign Conversão/REVISAO.md`.

## Antes de publicar

Aprovação de Pietro; conciliar os ingressos diários, pacote e condição LIZ; confirmar acesso ao domingo e agenda; obter/testar os links oficiais finais de checkout. Compra confirmada e métricas precisam de integração verificável; não usar clique como venda. Não há estoque confirmado para campanhas de últimas vagas.

O preço geral exibido (R$1200,3x400) foi observado na página Hotmart. Condição LIZ e diários são consultas assistidas na prévia, não novas condições comerciais. A barra de revisão lista as três pendências e deve sair apenas quando elas forem resolvidas. O sinalizador de prévia e o noindex devem ser tratados no momento da publicação; preservar isolamento das visitas de teste.

## Fontes e ativos

`PRODUCT.md`, `DESIGN.md`; proposta em `../Tempus — Redesign Conversão/PROPOSTA.md`; agenda e registro de produção em `../Tempus — Agenda Congresso/PRODUCAO.md`; contexto remoto do Congresso III consultado no Drive.

Derivadas WebP em `public/event-assets` a partir de fotos oficiais do site e logo/relógio do repositório. Originais preservados; nenhuma imagem gerada ou redesenhada. Fontes e estilos jurídicos existentes permanecem separados desta superfície.

Capturas em `../Tempus — Redesign Conversão/previas/`.

## Revisão visual V2 — feedback de Pietro

V1 foi rejeitada por aparência genérica/AI slop e perda da identidade. O parecer local anterior fica superado nesse ponto. V2 retorna à composição e aos ativos originais: logo completo central, manifesto original, fundo preto e atmosfera ancestral, Cinzel e metal dourado, painéis escuros de agenda e oferta. Sem papel creme/postcard/slogan novo. Capturas atuais em `../Tempus — Redesign Conversão/previas-v2`. A V2 aguarda revisão de Pietro; ainda não é aprovação visual nem publicação. Inspeção real a470px e1280px; extensão móvel8151px com detalhes fechados. Build e TypeScript passaram, detector mecânico sem achados.
# V3 — dramaticidade e lúdico

Em19/10, Pietro pediu mais dramaticidade após a recuperação de identidade. Prévia local atualizada com o cenário original mais visível, contraste de luz/sombra e maior presença do manifesto. Capturas atuais em `../Tempus — Redesign Conversão/previas-v3`. V2 permanece como histórico; V3 ainda aguarda revisão humana. Nada publicado.

# V4 — prévia completa para revisão

Direção V3 estendida aos seis blocos, conforme pedido de Pietro. Abra http://127.0.0.1:8088/ para percorrer a página inteira. Capturas completas e por cena em `../Tempus — Redesign Conversão/previas-v4`. V4 aguarda revisão humana; nenhuma publicação ou push realizado. Mantidos detalhes sob demanda e os mesmos seis blocos.

# Autorização de publicação — 19/10/2026

Pietro aprovou V4 e autorizou enviar ao Lovable para publicar. A produção usa VITE_TEMPUS_PREVIEW=false ou ausente: sem barra/notas de revisão e sem noindex, com pixel original ativo. A variável local ignorada continua permitindo reconstruir a prévia quando necessário. Resultado da publicação deve ser confirmado no registro da tarefa.
