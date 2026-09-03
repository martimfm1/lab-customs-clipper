# LAB Customs Clipper

Website oficial da LAB Customs Clipper, oficina especializada em manutenção, reparação e otimização de equipamento profissional de barbearia em Portugal.

**Produção:** https://labcustomsclipper.pt

## O que o site inclui

- Landing page orientada para conversão e marcação de serviços.
- Serviços de manutenção preventiva, reparação e envio de equipamento.
- Formulário de marcação em `/marcacao`.
- Informação de garantia, processo e equipamentos compatíveis.
- Links para WhatsApp, Instagram, YouTube e Google Maps.
- SEO técnico com metadata, canonical, sitemap, robots e structured data.
- Open Graph image e assets PWA.
- UI responsiva, mobile-first e preparada para desktop.
- Componentes baseados em shadcn/Base UI, Tailwind CSS e Framer Motion.

## Google Rating dinâmico

O rating e o número de avaliações do Google são atualizados automaticamente através de um scraper de terceiros, sem usar a Google Places API.

Os valores consumidos pelo site ficam em:

```text
lib/google-rating.ts
```

O ficheiro expõe:

```ts
export const googleRating = 5;
export const googleReviewCount = 4;
export const googleRatingUpdatedAt = "...";
export const googleMapsUrl = "...";
```

Estes valores são utilizados na secção de confiança do site e no `AggregateRating` do JSON-LD.

### Scraper

A atualização usa o API Codex Google Maps Data API, que aceita diretamente uma URL pública do Google Maps e devolve `rating` e `reviews_count`. O plano gratuito anunciado inclui 1.000 créditos por mês, cerca de 40 pedidos/mês e não exige cartão de crédito.

### GitHub Actions

O workflow está em:

```text
.github/workflows/google-rating.yml
```

Executa automaticamente uma vez por dia e também pode ser executado manualmente através do `workflow_dispatch`. O workflow só cria um commit quando os dados gerados mudam.

### Secret obrigatório

No GitHub, adicionar o secret:

```text
APICODEX_API_KEY
```

O valor é usado exclusivamente pela GitHub Action. Nunca colocar a chave no frontend, no `.env` versionado ou no código público.

### Execução manual local

```bash
APICODEX_API_KEY="a_tua_chave" pnpm update:google-rating
```

No Windows PowerShell:

```powershell
$env:APICODEX_API_KEY="a_tua_chave"
pnpm update:google-rating
```

## Desenvolvimento

Instalar dependências:

```bash
pnpm install
```

Servidor local:

```bash
pnpm dev
```

Abrir `http://localhost:3000`.

Build de produção:

```bash
pnpm build
```

Lint:

```bash
pnpm lint
```

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/Base UI
- Framer Motion
- Lucide React
- pnpm

## Segurança

- Chaves de terceiros apenas em GitHub Actions secrets.
- Nenhum segredo é enviado para o browser.
- O workflow tem `contents: write` apenas para atualizar o ficheiro de dados gerado.
- O scraper valida a resposta antes de substituir os valores publicados.
- Em caso de falha do scraper, o site mantém os últimos valores conhecidos.

## Deploy

O projeto está preparado para deploy na Vercel. Uma atualização automática do rating gera um commit no `main`, permitindo que o deploy automático publique os novos dados.

## Estrutura relevante

```text
app/
├── layout.tsx
├── page.tsx
└── marcacao/

components/
├── hero.tsx
├── trust-section.tsx
├── services-section.tsx
├── process-section.tsx
├── portfolio-section.tsx
├── faq-section.tsx
├── cta-section.tsx
├── footer.tsx
└── ui/

lib/
├── google-rating.ts
└── utils.ts

scripts/
└── update-google-rating.mjs

.github/
└── workflows/
    └── google-rating.yml
```

## Conteúdo empresarial

A manutenção preventiva está definida desde **8€ por máquina**. Para serviços acima de **60€**, o cliente fica isento do pagamento do envio de devolução. A garantia publicada é de **90 dias** para motores, placas de circuito e baterias, não cobrindo quedas, impactos ou intervenções fora da oficina.

## Licença

Projeto privado da LAB Customs Clipper.
