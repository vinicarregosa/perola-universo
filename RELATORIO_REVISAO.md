# Relatório de Revisão — Pérola Universo

**Data:** 11/10/2026
**Pasta analisada:** `/home/vinicius/Projects/javascript/perola-universo`
**Versão (`package.json`):** `0.0.0` (`react ^19.2.8`, `react-dom ^19.2.8`, `vite ^8.3.0`, `typescript ~6.0.2`)
**Stack:** React + TypeScript + Vite, CSS Modules puro (sem framework de UI). Estilos globais via `src/styles/tokens.css`, `base.css`, `animations.css` importados em `src/main.tsx`.

> Método: somente leitura (`Glob`/`Read`/`Grep`). Nada foi alterado, instalado ou buildado. Todas as afirmações têm evidência em arquivo citado.

---

## 1. Estrutura das páginas e dos componentes

### 1.1. Árvore real

```
perola-universo/
  index.html
  vite.config.ts (só plugins: [react()])
  package.json
  public/
    favicon.svg
    audio/.gitkeep (vazio — sem MP3)
    video/.gitkeep (vazio — sem MP4)
    images/README.md
    images/abertura/.gitkeep
    images/carta/.gitkeep
    images/distancia/.gitkeep
    images/diva/.gitkeep
    images/pets/.gitkeep
    images/universo/.gitkeep
  src/
    main.tsx (StrictMode + 3 CSS globais + App)
    App.tsx + App.module.css (footer)
    content/types.ts (interfaces)
    content/site.ts (todo o texto, com [EDITAR])
    styles/tokens.css | base.css | animations.css
    hooks/useReducedMotion.ts | useLockBody.ts
    components/
      SectionShell/SectionShell.tsx + .module.css
      ChapterHeading/ChapterHeading.tsx + .module.css
      Reveal/Reveal.tsx + .module.css
      PlaceholderPhoto/PlaceholderPhoto.tsx + .module.css
      Modal/Modal.tsx + .module.css
      AudioPlayer/AudioPlayer.tsx + .module.css
      PortalNav/PortalNav.tsx + .module.css
      LilyDivider/LilyDivider.tsx + .module.css
    sections/
      Opening/Opening.tsx + .module.css
      Portal/Portal.tsx + .module.css
      Distance/Distance.tsx + .module.css
      Universe/Universe.tsx + .module.css
      Cinema/Cinema.tsx + .module.css
      Diva/Diva.tsx + .module.css
      Nursing/Nursing.tsx + .module.css
      Pets/Pets.tsx + .module.css
      Letter/Letter.tsx + .module.css
      Soundtrack/Soundtrack.tsx + .module.css
      Finale/Finale.tsx + .module.css
```

### 1.2. Componentes reutilizáveis (props reais)

| Componente | Arquivo | O que faz | Props |
|---|---|---|---|
| `SectionShell` | `src/components/SectionShell/SectionShell.tsx` | Envolve 8 seções: `<section id aria-labelledby>` + `.container` + `ChapterHeading` + `.body` + link `← Voltar ao portal` (`href="#portal"`). | `id: string`, `kicker?`, `title`, `scriptAccent?`, `intro?`, `tone?: "cream"\|"floral"\|"wine"` (default `cream`), `children` |
| `ChapterHeading` | `src/components/ChapterHeading/ChapterHeading.tsx` | Kicker uppercase + `h2` com acento script (função `withAccent` procura `accent` dentro de `title` case-insensitive e envolve em `<span class=script>`) + `intro`. | `id`, `kicker?`, `title`, `scriptAccent?`, `intro?`, `tone?`, `align?: "left"\|"center"` (default `left`) |
| `Reveal` | `src/components/Reveal/Reveal.tsx` | Fade-in on-scroll via `IntersectionObserver` (`threshold: 0.15`, `rootMargin: 0px 0px -8% 0px`). Se `useReducedMotion()` → classe `reveal-no-motion is-visible` sem animação; senão `reveal` + `is-visible` + opcional `animationDelay`. | `children`, `delayMs?` (default 0), `as?: "div"\|"article"\|"li"\|"figure"`, `className?` |
| `PlaceholderPhoto` | `src/components/PlaceholderPhoto/PlaceholderPhoto.tsx` | Evita 404 no console: faz `fetch(src, {method:"HEAD"})`; só renderiza `<img loading=lazy decoding=async>` se `res.ok`. Senão renderiza `<figure role=img aria-label>` com fundo marfim + SVG de lírio + `label` (default `"Espaço para fotografia — ver public/images/README.md"`). | `src?`, `alt`, `label?`, `aspect?` (default `"4 / 3"`), `eager?`, `className?` |
| `Modal` | `src/components/Modal/Modal.tsx` | Diálogo acessível: `role=dialog aria-modal aria-labelledby`, `useLockBody(open)`, foco inicial no 1º focável (timeout 30ms), restaura foco ao fechar, ESC fecha, trap de Tab manual, fecha em `onMouseDown` se `target===overlay`. Retorna `null` se `!open`. | `open: boolean`, `onClose`, `labelledBy`, `children`, `closeLabel?` (default `"Fechar"`) |
| `AudioPlayer` | `src/components/AudioPlayer/AudioPlayer.tsx` | Player custom sem autoplay: `<audio preload="none">` + botão play 56px + `role=progressbar` + tempo `m:ss` (`fmt()` retorna `–:––` se NaN) + `<details>` transcrição + `role=status` com instrução `[EDITAR]` se `missing` (erro/`catch` no `play()`). | `src`, `title`, `artist`, `transcript?` |
| `PortalNav` | `src/components/PortalNav/PortalNav.tsx` | Divide `items` em 1 destaque (`feature`), 2 médios (`mediumGrid`) e resto em lista editorial `<ol>` com numerais romanos `ROMAN = [I..IX]`. Cada card é `<a href>` com `Reveal`. Destaque tem eyebrow fixo `"Comece por aqui · Capítulo VII"`. | `items: PortalItem[]` (`{href,title,description}` em `types.ts`) |
| `LilyDivider` | `src/components/LilyDivider/LilyDivider.tsx` | Divisor decorativo `aria-hidden`: 2 linhas em gradiente + SVG 120×40 (hastes + pérola com `radialGradient#pearl` `#FFFEFA→#F1E7D2→#C2A164`). Sem props. | — |

Hooks: `useReducedMotion` (`src/hooks/useReducedMotion.ts`) — `matchMedia("(prefers-reduced-motion: reduce)")` com listener `change`; `useLockBody` (`src/hooks/useLockBody.ts`) — `body.style.overflow=hidden` enquanto `locked`, restaura ao limpar.

### 1.3. Seções (o que cada uma renderiza)

| # | Seção | Arquivo | `id` / tone | Conteúdo renderizado |
|---|---|---|---|---|
| 0 | `Opening` | `src/sections/Opening/Opening.tsx` | `header#abertura` | Hero full-viewport: `fetch HEAD` de `site.opening.bgImage`; se OK `<img.bg aria-hidden fetchPriority=high>` opacidade 0.55; sempre `<div.bgFallback>` com `PlaceholderPhoto src="" aspect 16/9` + `<div.scrim>`; `.container.inner` com `Reveal` (eyebrow + `h1#abertura-titulo` `Um universo [script]só nosso[/]` + subtitle + 2 CTAs `#portal`/`#carta`) + `a.scrollHint` (`↓ rolar`, `href="#portal"`). |
| 1 | `Portal` | `src/sections/Portal/Portal.tsx` | `section#portal`, sem Shell (CSS próprio) | `Reveal` (kicker `O portal` + `h2#portal-titulo` `Escolha o seu [script]capítulo[/]` + intro de `site.portal.intro`) + `LilyDivider` + `PortalNav items={9 itens}`. |
| 2 | `Distance` | `src/sections/Distance/Distance.tsx` | `section#distancia`, `tone="floral"` | `SectionShell` kicker `Capítulo I` + grid 2 col (desktop): texto (3 `<p.para>` com `Reveal delay i*80` + `p.badge role=note 🧸` + toggle abraço) + `Reveal.photoWrap` com `PlaceholderPhoto src=/images/distancia/abraco.jpg aspect 4/5`. Toggle: `useState hugged`; fechado = `button.btn-wine aria-expanded`; aberto = `div.hug[role=status]` (+ `hugAnimate` se !reduced) com `hugText` + `button.btn-outline-wine.smallBtn "Guardar para depois"`. |
| 3 | `Universe` | `src/sections/Universe/Universe.tsx` | `section#universo`, `tone="cream"` | 4 cards (`site.universe.qualities`) em grid: `article.card` + `div.orb` (emoji cíclico `✦❧✎⚕`) + `h3.cardTitle` + `p.short` + `div.revealWrap[hidden]` com `p.revealed` + `button.toggle aria-expanded aria-controls=universo-detalhe-i` (`Revelar ↓`/`Recolher ↑`). Estado `open: number\|null` (default `null`, só 1 aberto). |
| 4 | `Cinema` | `src/sections/Cinema/Cinema.tsx` | `section#cinema`, `tone="wine"` | 5 itens (`site.cinema.items`: Bridgerton, Brooklyn Nine-Nine, Avatar, Brino, Felipe Neto) como acordeão: `article.item` + `button.head aria-expanded aria-controls=id` (num `01..05` + `itemTitle` + `tag` + `teaser` + ícone `+/−`) + `div.panel[role=region][hidden]` com `p.revealed`. Estado `open: number\|null` default `0` (primeiro aberto). |
| 5 | `Diva` | `src/sections/Diva/Diva.tsx` | `section#diva`, `tone="cream"` | `div.sealed` (selo `✦` 64px + `blockquote.quote` + `button.btn-wine aria-haspopup=dialog`) + `Modal labelledBy=diva-modal-titulo` (kicker + `h3.modalTitle` + `p.modalBody` + `video` condicional + `p.hint` + botão fechar). Vídeo detectado via `fetch HEAD /video/diva.mp4`; se ausente, `div.videoPlaceholder[role=img]` (`♡` + `O vídeo mora aqui — em breve.`). |
| 6 | `Nursing` | `src/sections/Nursing/Nursing.tsx` | `section#enfermagem`, `tone="floral"` | `article.chart`: `header.chartHead` (hospital `Hospital do Coração · Plantão da Pérola` + `h3.chartTitle Prontuário afetivo nº 12-10` + `span.stamp ♥ carimbado` rotacionado -4°) + `dl.rows` (4 `div.row`: Paciente/Diagnóstico/Tratamento/Prognóstico de `site.nursing`) + `footer.foot` com `p.note` script. Sem interação. |
| 7 | `Pets` | `src/sections/Pets/Pets.tsx` | `section#pets`, `tone="cream"` | Grid 2 cards (`Snow`, `Pedro`): `article.card` com `PlaceholderPhoto aspect 4/3` + `h3.name` (+ `span.role`) + `p.message` itálico serif + `aside.birthday[aria-label]` (🐾 + `birthdayText` + `signature` script). Sem interação. |
| 8 | `Letter` | `src/sections/Letter/Letter.tsx` | `section#carta`, `tone="floral"` | `article.paper > div.paperInner` (drop `P` script 3–4rem + `p.preview` itálico serif + `button.btn-wine aria-haspopup=dialog`) + `Modal labelledBy=carta-modal-titulo` (kicker + `h3.modalTitle` + `div.full` 5 parágrafos `§1–§5` com `::first-letter` capitular + `p.signature` script 1.8rem + botão fechar). |
| 9 | `Soundtrack` | `src/sections/Soundtrack/Soundtrack.tsx` | `section#trilha`, `tone="cream"` | `div.wrap` com `div.vinyl[aria-hidden]` (148px, `span.vinylCore` 44px) + `div.playerWrap` com `AudioPlayer src=/audio/trilha.mp3`. Sem autoplay. |
| 10 | `Finale` | `src/sections/Finale/Finale.tsx` | `section#final` (sem Shell, CSS próprio) | `.container-narrow` + `div.inner` centralizado: `p.pearl[aria-hidden] ◯` 56px + `h2#final-titulo` `A distância não nos [script]diminui[/]` + `p.message` + 2 CTAs (`btn-gold #portal` com texto de `site.finale.ctaPortal`, `btn-ghost #abertura` texto fixo `Recomeçar do início`). |
| — | Footer | `src/App.tsx:34-41` + `src/App.module.css` | `footer.footer` | `.container` com `p.line` (`site.footer.line`) + `a.top href=#abertura` (`↑` + `site.footer.backToTop`). Fundo `#1a050f`, borda-top `1px rgba(194,161,100,0.3)`. |

### 1.4. Como `App.tsx` monta tudo

`src/App.tsx:15-44`: fragmento → `<a.skip-link href="#portal">Pular para o portal</a>` → `<Opening />` (fora do `main`, é `header#abertura`) → `<main>` com ordem fixa `Portal, Distance, Universe, Cinema, Diva, Nursing, Pets, Letter, Soundtrack, Finale` → `<footer>`. Ou seja, single-page linear com 1 header + 10 seções em `main` + footer. Nenhum roteador; navegação é por âncoras. `src/main.tsx:8-12` monta em `#root` sob `StrictMode`.

---

## 2. Descrição visual de cada seção

Base global (evidência em `tokens.css`, `base.css`, `animations.css`, `index.html`):

| Grupo | Valores reais |
|---|---|
| Cores | `--wine-950:#230714`, `--wine-900:#3d0f22`, `--wine-700:#68233c`, `--cream-100:#faf5e9`, `--cream-200:#f1e7d2`, `--floral-white:#fffefa`, `--rose-old-300:#d9b8bb`, `--rose-old-500:#c1949a`, `--rosewood-700:#7c4a53`, `--ink:#2e1e26`, `--muted:#6b5a62`, `--gold-500:#c2a164`, `--gold-700:#8c6e3e`, `--line:#e7d9c3`; footer `#1a050f` (`App.module.css:2`), vídeo bg `#000` (`base.css:72`), pérola gradiente `#FFFEFA→#F1E7D2→#C2A164` (`LilyDivider.tsx:25-29`) |
| Tipografia | `--font-serif:"Cormorant Garamond",Georgia,"Times New Roman",serif` (h1–h4, títulos, quotes, capitular); `--font-sans:"Nunito Sans",system-ui,-apple-system,"Segoe UI",sans-serif` (corpo, botões, kickers); `--font-script:"Parisienne","Cormorant Garamond",cursive` (acentos 1.08–1.12em, assinaturas). Google Fonts em `index.html:16` (Cormorant 500/600 + itálicos, Nunito Sans 400/600/700, Parisienne). Escala fluida: `--fs-h1:clamp(2.4rem,1.6rem+6vw,5.2rem)`, `--fs-h2:clamp(1.9rem,1.5rem+2.4vw,3rem)`, `--fs-body:clamp(1rem,0.94rem+0.6vw,1.0625rem)`, `--fs-lead:clamp(1rem,0.95rem+0.8vw,1.15rem)`; corpo `line-height:1.65` (`base.css:24`), h `1.15` |
| Espaçamentos/layout | `--container:1080px`, `--container-narrow:760px`, `--gutter:1.25rem`, `.container{width:min(100%-2.5rem,1080px)}` (mobile `100%-2rem`), `--section-pad:clamp(3rem,8vw+1rem,5.5rem)` (Shell + Portal), Finale `clamp(3rem,8vw+1rem,5rem)`; `--space-1:0.25rem…--space-12:5rem`; `--radius-sm:8px, -md:16px, -lg:24px, -pill:999px`; sombras `--shadow-soft:0 12px 40px rgba(35,7,20,0.12)`, `--shadow-lift:0 18px 60px rgba(35,7,20,0.18)`; `--header-offset:72px` para `scroll-margin-top` |
| Animações | `@keyframes fade-up` (24px→0, usado em `.reveal.is-visible` com `var(--duration:700ms)` + `var(--ease-out:cubic-bezier(0.22,1,0.36,1))`, Modal overlay 0.3s, `revealed` 0.4s), `float-soft` (±8px, vinil 5s infinite), `glow-pulse` (anel ouro 0→14px, pérola final 3s), `hug-pop` (scale .92→1.02→1, 0.6s), `scroll-hint` (±8px, 2.4s), `shimmer` (definido, sem uso encontrado). `prefers-reduced-motion` desliga tudo (`animations.css:90-112`) |

Seção a seção:

- **Abertura (`Opening.module.css`)**: fundo `var(--wine-950)` + foto `hero.jpg` (ausente → invisível) a `opacity:0.55` + fallback marfim a `0.35` + `scrim` (`radial ouro 0.18` + `linear rgba(35,7,20,0.55→0.88)`). Hero `100vh/svh/dvh`, `padding-bottom:var(--safe-b)`. Eyebrow ouro `#c2a164` 0.82rem ls 0.22em uppercase; título creme `#faf5e9` `clamp(2.4rem…5.2rem)` lh 1.05 max 14ch, script ouro 1.08em (nowrap só ≥720px); subtitle `#f1e7d2` max 38rem lh 1.7. CTAs `.btn-gold` (ouro `#c2a164` sobre `#230714`) + `.btn-ghost` (creme, borda 45%). Scroll-hint creme 1.4rem com `scroll-hint` infinite.
- **Portal (`Portal.module.css` + `PortalNav.module.css`)**: fundo creme `#faf5e9`. Kicker ouro-escuro `#8c6e3e`, título vinho `#3d0f22` + script `#68233c` 1.12em, intro `#6b5a62`. Cards: destaque gradiente `135deg #230714→#68233c` + radial ouro 0.28, texto creme, CTA ouro; médios `#fffefa` + `shadow-soft`, título vinho, CTA vinho; lista editorial com borda-top `#e7d9c3`, numeral serif ouro-escuro 1.1rem, título vinho 1.25rem, seta circular 44px. Hover só eleva/sombreia.
- **Distância (`Distance.module.css`, tone floral `#fffefa` + bordas `#e7d9c3`)**: parágrafos `#2e1e26` lh 1.75 max 65ch; badge pill gradiente ouro/rosa `rgba(194,161,100,0.18)→rgba(217,184,187,0.3)` borda ouro, texto vinho 600; caixa abraço creme borda ouro + `shadow-soft`, texto serif vinho `clamp(1.1…1.25rem)`, animação `hug-pop`; foto `4/5` max 480px com moldura marfim + lírio (placeholder visível, pois `abraco.jpg` ausente).
- **Universo (`Universe.module.css`, tone cream)**: grid 1 col (2 col ≥720px). Card `#fffefa` borda `#e7d9c3` radius 24px padding 1.5/1.25rem, orb 48px gradiente `#fffefa→#f1e7d2→#d9b8bb` borda ouro; título vinho, short `#6b5a62`; revelado creme com borda-esquerda 3px ouro + `fade-up` 0.4s; botão pill borda vinho, ativo/hover vinho sólido creme.
- **Cinema (`Cinema.module.css`, tone wine gradiente `#230714→#3d0f22`, texto creme)**: item translúcido `rgba(250,245,233,0.06)` borda ouro 0.35; fechado: título creme, tag ouro `#c2a164` 0.78rem ls 0.16em, teaser `#d9b8bb`; aberto (`.open`): fundo creme sólido, título vinho, tag ouro-escuro, teaser muted; ícone circular 44px ouro; painel revelado `#fffefa` borda-esquerda vinho 3px + `fade-up`. Números serif ouro 1.4rem.
- **Diva (`Diva.module.css`)**: cartão `sealed` `#fffefa` + radial ouro 0.2, selo 64px gradiente vinho + borda ouro 2px; quote serif itálica vinho `clamp(1.1…1.35rem)`; modal: kicker ouro-escuro, título vinho, corpo `#2e1e26` lh 1.75, vídeo 16/9 bg `#000`, placeholder tracejado ouro com `♡` 2rem, hint creme 0.9rem.
- **Enfermagem (`Nursing.module.css`)**: prontuário listrado (`repeating-linear #fffefa 30px / #fdf7ec 31px`) borda `#e7d9c3`; cabeçalho gradiente vinho, hospital ouro 0.78rem ls 0.2em, título creme; carimbo ouro vazado rotacionado; linhas `1.1rem` borda dashed, label ouro-escuro uppercase, valor ink; assinatura script vinho `clamp(1.3…1.5rem)` centralizada. Mobile 1 col, ≥720px label 11rem + valor.
- **Pets (`Pets.module.css`)**: cards `#fffefa` com foto `4/3` (placeholder marfim, pois `snow.jpg`/`pedro.jpg` ausentes) + nome vinho + role ouro-escuro uppercase 0.82rem + mensagem serif itálica; faixa aniversário gradiente vinho borda ouro 0.45, texto `#f1e7d2`, assinatura script ouro `clamp(1.4…1.7rem)`, 🐾 1.8rem.
- **Carta (`Letter.module.css`)**: papel `#f1e7d2` padding 0.75rem + interno `#fffefa` com brilho ouro 0.12; drop `P` script ouro 3–4rem; prévia serif itálica vinho; modal: texto em caixa creme borda `#e7d9c3`, capitular `::first-letter` serif 2.2em vinho flutuante, assinatura script vinho 1.8rem.
- **Trilha (`Soundtrack.module.css` + `AudioPlayer.module.css`)**: vinil 148px (180px ≥720px) com anéis `#2b0b19/#160409` + núcleo pérola, `float-soft` 5s; player `#fffefa` radius 24px, play 56px vinho (hover `#68233c`), faixa serif vinho 1.3rem, artista muted, barra 10px marfim com fill gradiente ouro-escuro→ouro, tempo tabular muted, aviso tracejado ouro se sem MP3, transcrição `<details>` com summary vinho 48px altura.
- **Encerramento + footer (`Finale.module.css`, `App.module.css`)**: final gradiente (`radial ouro 0.22` + `linear #230714→#1a050f`), pérola 56px com `glow-pulse`, título creme + script ouro, mensagem `#f1e7d2` lh 1.8 max 44rem, CTAs ouro/fantasma; footer `#1a050f` texto `#d9b8bb` 0.9–0.95rem, link topo ouro 700 com área 44px.

---

## 3. Navegação e interações

Modelo: **single-page por âncoras** com `scroll-behavior:smooth` (`base.css:8`) e `scroll-margin-top:72px` (`base.css:80-84`). Sem router, sem scroll-spy, sem menu fixo.

| Interação | Onde | Implementação (arquivo:linha aprox.) |
|---|---|---|
| Skip-link `Pular para o portal` | Topo global | `App.tsx:18-20` (`a.skip-link href="#portal"`); estilo `base.css:87-105` (oculto `top:-100px`, aparece `top:1rem` em `:focus-visible` com anel ouro). |
| CTAs hero | Abertura | `Opening.tsx:63-68` (`btn-gold href="#portal"`, `btn-ghost href="#carta"`); scroll-hint `Opening.tsx:71-78` (`href="#portal"`, `aria-label="Rolar para o portal"`, animação `scroll-hint`). |
| Portal editorial | Portal | `PortalNav.tsx:20,35,51` (9 `<a href="#carta\|#cinema\|#pets\|#distancia\|#universo\|#diva\|#enfermagem\|#trilha\|#final">` vindos de `site.ts:31-80`); destaque fixo `Capítulo VII` (`PortalNav.tsx:21`). |
| Voltar ao portal (8×) | Todas via Shell | `SectionShell.tsx:41-43` (`a.back-to-portal href="#portal"`); estilo `base.css:222-258` (vinho `#7c4a53`, em `.on-wine` herdaria rosa — mas Shell wine não aplica `.on-wine`, então Cinema usa vinho sobre vinho; ver §6). |
| Voltar ao topo / recomeço | Footer + Final | `App.tsx:37-39` (`a.top href="#abertura"`), `Finale.tsx:22-27` (`btn-gold href="#portal"`, `btn-ghost href="#abertura"` texto fixo fora de `site.ts`). |
| Modal Carta | Carta | `Letter.tsx:28-35` abre (`useState open`, `aria-haspopup=dialog`), `Letter.tsx:40-59` (`Modal open onClose labelledBy=carta-modal-titulo`, 5 parágrafos + assinatura + botão fechar). |
| Modal Diva | Diva | `Diva.tsx:45-52` abre, `Diva.tsx:56-88` (título/corpo/vídeo-ou-placeholder/hint/botão). |
| Modal genérico: foco, ESC, trap, lock | Modal | `Modal.tsx:24` (`useLockBody`), `Modal.tsx:27-42` (salva foco, foca 1º focável em 30ms, restaura ao fechar), `Modal.tsx:45-76` (ESC fecha + trap Tab/Shift+Tab), `Modal.tsx:84-86` (fecha em mousedown no overlay). Botão × 48px `Modal.tsx:96-103`. |
| Acordeão Universo | Universo | `Universe.tsx:9-13,42-51` (`open:number\|null=null`, `toggle`, `button aria-expanded aria-controls=universo-detalhe-i`, painel `hidden`). Só um aberto por vez; `Reveal delay min(i*70,210)`. |
| Acordeão Cinema | Cinema | `Cinema.tsx:9,26-54` (`open=0` — primeiro já aberto, `button#cinema-botao-i aria-expanded`, `div#region[hidden]`). |
| Botão abraço de urso | Distância | `Distance.tsx:11,38-62` (`hugged:boolean`, `button aria-expanded` → `div[role=status]` com `hug-pop` salvo `reduced`; `useReducedMotion` em `Distance.tsx:12`). Botão desfazer `Guardar para depois` (texto fixo). |
| Player trilha | Trilha | `AudioPlayer.tsx:44-60` (`toggle play/pause` com `try/catch→missing`), `AudioPlayer.tsx:62-96` (progresso + `progressbar` + tempos), `preload="none"` (`AudioPlayer.tsx:68`), transcrição `<details>` (`AudioPlayer.tsx:107-111`), aviso `[EDITAR]` se erro (`AudioPlayer.tsx:99-105`). Vinil decorativo `Soundtrack.tsx:21-23`. |
| Reveal on-scroll | Global | `Reveal.tsx:21-41` (`IntersectionObserver threshold 0.15`), `animations.css:70-88` (`fade-up 700ms`). Respeita reduced-motion (`Reveal.tsx:19,44-46`). |
| Detecção de mídia ausente | Abertura/Diva/Fotos | `Opening.tsx:13-25` (HEAD `hero.jpg`), `Diva.tsx:14-26` (HEAD `/video/diva.mp4`), `PlaceholderPhoto.tsx:27-53` (HEAD por `src`). Nenhum 404 estoura; ausência é estado válido. |

IDs-âncora reais: `#abertura` (header), `#portal`, `#distancia`, `#universo`, `#cinema`, `#diva`, `#enfermagem`, `#pets`, `#carta`, `#trilha`, `#final` (footer sem id). Todos os `href` do portal conferem com esses ids.

---

## 4. Adaptação mobile 360–430px

Evidências em `tokens.css`, `base.css`, `*.module.css`:

- **Uma coluna por padrão (mobile-first):** `.grid` de Distância (`Distance.module.css:1-6`), Universo (`Universe.module.css:1-5`), Pets (`Pets.module.css:1-5`), Soundtrack `wrap` (`Soundtrack.module.css:1-6`) e `mediumGrid` do portal (`PortalNav.module.css:77-80`) são 1 coluna; 2 colunas só em `@media (min-width:720px)` (`Distance.module.css:78-83`, `Universe.module.css:117-125`, `Pets.module.css:99-102`, `Soundtrack.module.css:44-49`, `PortalNav.module.css:196-199`). Enfermagem empilha label/valor, vira `11rem+1fr` só ≥720px (`Nursing.module.css:119-123`).
- **Fluido sem overflow:** `clamp()` em títulos/corpo (`tokens.css:38-41`; ex. `fs-h1:clamp(2.4rem,1.6rem+6vw,5.2rem)`), `.container{min(100%-2rem)}` em ≤719px (`base.css:127-136`), `overflow-x:clip` global (`base.css:13-17`, `SectionShell.module.css:3`), `overflow-wrap:break-word` + `min-width:0` sistemáticos nos cards, `text-wrap:balance/pretty` (`base.css:40,53`). Script da hero permite quebrar no mobile, `nowrap` só ≥720px (`Opening.module.css:91-96`).
- **Breakpoints reais (só 2):** `720px` (2 colunas, paddings maiores, vinil 180px, modal padding 3rem) e `1024px` (Shell/Portal `6.5rem`), além de `max-width:719px` para regras mobile. Não há breakpoint específico 360/430 — a faixa é coberta pelo fluido + `100%-2rem`.
- **Viewport e safe-area:** hero `100vh + 100svh + 100dvh` (`Opening.module.css:2-5`), modal `90vh/svh/dvh` (`Modal.module.css:25-27`), `--safe-b/t:env(safe-area-inset-*)` (`tokens.css:34-35`) aplicado em hero (`:13`), footer (`App.module.css:4`), modal overlay/dialog (`Modal.module.css:12,36`) e final (`Finale.module.css:6`).
- **Toques ≥44px:** `--tap-min:44px, --tap-comfort:48px, --tap-large:56px` (`tokens.css:29-31`); `.btn` min 44px (48px em `pointer:coarse`, `base.css:165-169`), play 56px (`AudioPlayer.module.css:21-24`), fechar modal 48px (`Modal.module.css:49-52`), setas portal 44px (`PortalNav.module.css:166-169`), `back-to-portal`/top com 44px (`base.css:231-232`, `App.module.css:25-26`), `touch-action:manipulation` + `-webkit-tap-highlight:transparent` em todos os clicáveis. `:active` sempre dá feedback (ex. `scale(0.96)`, fundo vinho).
- **CTAs empilhados:** hero e final viram coluna full-width ≤719px com altura 52px (`Opening.module.css:115-128`, `Finale.module.css:72-83`).
- **Modal bottom-sheet:** ≤719px overlay `align-items:flex-end` + padding 0.75rem, dialog radius inferior 16px (`Modal.module.css:79-93`); scroll interno `overflow:auto + overscroll:contain` (`:29-30`), `body{overflow:hidden}` via `useLockBody.ts:8`.
- **Hover só desktop:** todos os `:hover` estão dentro de `@media (hover:hover)` (`base.css:199-220,239-244`, `PortalNav.module.css:25-30,125-130`, `AudioPlayer.module.css:46-51`, etc.); mobile depende de `:active`. Transições 0.2–0.25s `ease-out`.
- **Custo de mídia:** fotos `loading=lazy decoding=async` (só hero usa `eager`/`fetchPriority=high` quando existe), áudio/vídeo `preload="none"` (`AudioPlayer.tsx:68`, `Diva.tsx:72`), HEAD antes de `<img>` para não poluir console.
- **Reduced-motion:** hook + CSS (`animations.css:90-112`, `base.css:265-269`): scroll `auto`, `fade-up/hug-pop/float-soft/glow-pulse/scroll-hint` desligados, `Reveal` vira estático, durações colapsadas para `0.01ms`.

---

## 5. Conteúdo provisório

### 5.1. Regra geral

Todo texto editável vive em `src/content/site.ts` (tipado por `src/content/types.ts`). Comentário de topo (`site.ts:3-7`) manda procurar `[EDITAR]`. Contagem atual: **85 ocorrências em `site.ts` + 1 em `AudioPlayer.tsx:101` + 1 `meta description` em `index.html:9`** (≈86 no `Grep`).

### 5.2. Tabela completa por seção (texto → caminho de troca)

| Local | Campo(s) com `[EDITAR]` | Trocar em |
|---|---|---|
| Meta | `meta.description` (`site.ts:11-12`; espelhado em `index.html:7-10`) | `src/content/site.ts:11` + `index.html:9` |
| Abertura | `eyebrow`, `subtitle`, `bgAlt` (`site.ts:16,18-19,23`) | `src/content/site.ts:15-24` |
| Portal | `intro` + 9 `description` (`site.ts:28-29,35,41,47,52,58,63,68,73,78`) | `src/content/site.ts:26-81` |
| Distância | `intro`, 3 `paragraphs`, `imageAlt`, `badge`, `hugMessage` (`site.ts:87-99`) | `src/content/site.ts:83-100` |
| Universo | `intro` + 4×(`title`,`short`,`revealed`) (`site.ts:106-132`) | `src/content/site.ts:102-134` |
| Cinema | `intro` + 5×(`tag`,`teaser`,`revealed`) (`site.ts:140-177`) | `src/content/site.ts:136-179` |
| Diva | `intro`, `letterPreview`, `modalTitle`, `modalBody`, `videoHint` (`site.ts:185-194`) | `src/content/site.ts:181-196` |
| Enfermagem | `intro`, `patient`, `diagnosis`, `treatment`, `prognosis`, `note` (`site.ts:202-211`) | `src/content/site.ts:198-212` |
| Pets | `intro`, 2×(`role`,`message`,`imageAlt`), `birthdayMessage`, `birthdaySignature` (`site.ts:218-240`) | `src/content/site.ts:214-241` |
| Carta | `intro`, `preview`, 5 `full[§1–§5]`, `signature` (`site.ts:247-259`) | `src/content/site.ts:243-261` |
| Trilha | `intro`, `trackTitle`, `trackArtist`, `transcript` (`site.ts:267-273`) | `src/content/site.ts:263-274` |
| Final | `message` (`site.ts:279-280`) | `src/content/site.ts:276-282` |
| Footer | `line` (`site.ts:285`) | `src/content/site.ts:284-287` |
| Player | aviso `Áudio ainda não publicado…` (`AudioPlayer.tsx:99-105`) | some sozinho quando o MP3 existir |

Textos **já finais** (sem `[EDITAR]`, não trocar): títulos das seções, kickers `Capítulo I–VIII`, CTAs (`Entrar no portal`, `Ir direto à carta`, `Quero meu abraço de urso`, `Abrir a carta misteriosa`, `Ler a carta completa`, `Voltar ao portal/topo`, `Recomeçar do início`, `Guardar para depois`, `Recolher/Revelar`), nomes `Snow/Pedro`, títulos dos 5 filmes, `Hospital do Coração`, `Prontuário afetivo nº 12-10`, skip-link.

### 5.3. Mídias ausentes (todas as pastas só têm `.gitkeep`)

| Esperado pelo código | Estado | Publicar em (mesmo nome, sem mudar código) |
|---|---|---|
| `site.opening.bgImage = /images/abertura/hero.jpg` (`site.ts:22`) | ausente (`public/images/abertura/` vazio) | `public/images/abertura/hero.jpg` — 16/9, lado maior 1600px, ~72, <250 KB (ver `public/images/README.md`) |
| `site.distance.image = /images/distancia/abraco.jpg` (`site.ts:94`) | ausente | `public/images/distancia/abraco.jpg` — 4/5 retrato |
| `pets[0].image = /images/pets/snow.jpg`, `pets[1].image = /images/pets/pedro.jpg` (`site.ts:226,234`) | ausentes | `public/images/pets/snow.jpg` + `public/images/pets/pedro.jpg` — 4/3 paisagem |
| `site.soundtrack.audioSrc = /audio/trilha.mp3` (`site.ts:269`) | ausente (`public/audio/` vazio) | `public/audio/trilha.mp3` — MP3 ~128 kbps |
| `/video/diva.mp4` (detectado em `Diva.tsx:16`) | ausente (`public/video/` vazio) | `public/video/diva.mp4` — MP4 H.264 1080p máx, ≤50 MB |
| Pastas reservadas `images/universo|diva|carta` | vazias, sem referência no código atual | reserva futura; nada a fazer |

### 5.4. Placeholders visuais (o que o visitante vê hoje)

- `PlaceholderPhoto` (marfim `#faf5e9→#f1e7d2` + radial ouro 0.16 + lírio SVG 72px + texto `Espaço para fotografia — ver public/images/README.md`): hero (fundo a 0.35, `Opening.tsx:43-52`), Distância 4/5, Snow/Pedro 4/3. Hero usa `label=""` então mostra só o lírio.
- Diva sem vídeo: `div.videoPlaceholder` tracejado ouro (`Diva.module.css:81-91`) + `♡` + `O vídeo mora aqui — em breve.` (texto fixo em `Diva.tsx:81`) + `p.hint` com instrução `[EDITAR]`.
- Trilha sem áudio: player com `0:00 / –:––`, barra 0%, + aviso `role=status` com caminho do MP3 + `<details>Ver transcrição` com texto `[EDITAR]`.

---

## 6. Cinco principais problemas de design/UX

> Todos observáveis no código atual, sem inventar comportamento. Sugestões são propostas, não implementadas.

### P1 — Contraste limítrofe em textos secundários sobre fundos claros/escuros
**Onde:** `ChapterHeading.module.css:54` (`.intro{color:var(--muted)#6b5a62}` sobre `#faf5e9/#fffefa`), `Cinema.module.css:93-96` (`.teaser{color:var(--rose-old-300)#d9b8bb}` sobre vinho translúcido `rgba(250,245,233,0.06)`), `Pets.module.css:87` (`.birthdayText{#f1e7d2}` sobre gradiente vinho), `Portal.module.css:12` / `Opening.module.css:70` (kickers ouro `#8c6e3e`/`#c2a164` em 0.8rem uppercase ls 0.22em).
**Por que prejudica:** são justamente os textos longos (intros, teasers, transcrições) e pequenos (kickers). `#6b5a62` sobre marfim e `#d9b8bb` sobre vinho translúcido tendem a ficar no limite do WCAG AA para corpo pequeno; usuário com sol na tela ou daltonismo perde a hierarquia antes de chegar ao CTA.
**Sugestão:** escurecer `intro/teaser` um tom (ex. usar `--ink` ou `--rose-old-500` no wine) ou aumentar corpo para ≥1rem com lh 1.7; validar com medidor de contraste antes de publicar fotos (o scrim 0.55–0.88 muda tudo quando `hero.jpg` chegar).

### P2 — Link “Voltar ao portal” ilegível na seção Cinema (tone wine sem `.on-wine`)
**Onde:** `SectionShell.tsx:41` sempre renderiza `a.back-to-portal`; `base.css:250-258` prevê variante clara `.on-wine .back-to-portal{color:var(--rose-old-300)}`, mas `SectionShell` nunca aplica classe `on-wine` — o link herda `base.css:230` (`color:var(--rosewood-700)#7c4a53`) sobre fundo `linear-gradient(#230714,#3d0f22)` (`SectionShell.module.css:18-21`).
**Por que prejudica:** vinho-escuro sobre vinho-quase-preto some; o usuário do capítulo mais longo (5 acordeões) perde a saída principal e recorre ao scroll manual.
**Sugestão:** em `SectionShell`, adicionar `on-wine` ao `section` quando `tone==="wine"` (só CSS, sem mudar texto), ou forçar `className` do link para `rose-old-300` nesse tone.

### P3 — Primeira dobra parece “vazia/quebrada” sem as 4 fotos + áudio + vídeo
**Onde:** `Opening.tsx:43-52` (fallback sempre montado, `opacity:0.35`), `PlaceholderPhoto.tsx:74-106` (marfim + lírio), `AudioPlayer.tsx:92-105` (tempo `–:––`, barra 0%), `Diva.tsx:77-83` (`O vídeo mora aqui — em breve.`).
**Por que prejudica:** hoje 100% das visitas caem nos placeholders: hero marfim apagado atrás do scrim escuro, 3 molduras idênticas de lírio, player zerado e caixa tracejada. O visitante pode ler como erro de carregamento, não como convite romântico — e o `HEAD` silencioso não dá nenhum feedback de “fotos chegando”.
**Sugestão:** sem trocar código de detecção, priorizar publicar ao menos `hero.jpg` + `snow.jpg/pedro.jpg` (as de maior área); enquanto isso, esconder o `label` genérico nas seções (como a hero já faz com `label=""`) e trocar por microcopy afetivo (“Aqui mora nosso abraço 🤍”).

### P4 — Carta longa em modal com scroll interno + body travado (foco e polegar sofrem no mobile)
**Onde:** `Modal.module.css:25-30,79-93` (`max-height:90svh/dvh`, `overflow:auto`, bottom-sheet ≤719px), `Letter.tsx:50-54` (5 parágrafos + capitular), `Modal.tsx:27-42` (foco com 30ms + `useLockBody`).
**Por que prejudica:** a carta (o conteúdo mais importante, vindo do card-destaque `PortalNav.tsx:20`) abre presa numa janela de 90% da tela com scroll próprio, botão fechar × no canto e CTA final fora da vista inicial. Em 360px o polegar precisa rolar dentro do sheet sem perder o contexto da página; leitores de tela ganham `role=dialog` mas o `h3` do modal repete o `h2` da seção (`Carta para a minha Pérola`), sem indicar “texto completo”.
**Sugestão:** manter o modal, mas ancorar botão `Fechar carta` também no topo do sheet (sticky), dar `aria-label` distinto ao `h3` (“Carta completa…”) e testar leitura com VoiceOver/TalkBack antes do aniversário.

### P5 — Densidade do Portal + âncoras sem estado ativo nem ordem numerada consistente
**Onde:** `PortalNav.tsx:5,11-66` (`ROMAN` I–IX aplicado só à `list`, mas `feature+medium` consomem os 3 primeiros itens sem numeral; eyebrow fixo `Capítulo VII` aponta para `#carta` enquanto `site.portal.items[0].href` é `#carta` — ok hoje, mas quebra se reordenar), `site.ts:30-80` (9 destinos), `App.tsx:23-32` (10 seções empilhadas).
**Por que prejudica:** o portal lista 9 capítulos (1 destaque + 2 médios + 6 editoriais) e cada seção repete `Voltar ao portal`, mas nada indica “onde estou / o que já li”. Como `Cinema` já vem com item 01 aberto (`Cinema.tsx:9`) e `Universe` vem tudo fechado, o ritmo parece inconsistente; em mobile são ~3–4 telas só de índice antes do conteúdo.
**Sugestão:** numerar visualmente também destaque/médios (ou remover `ROMAN` da lista para não sugerir ordem), e considerar `aria-current` futuro via scroll-spy leve — sem mudar rotas, só sinalização.

---

*Fim do relatório. Gerado por leitura estática em 11/10/2026 a partir de `package.json 0.0.0`, `src/**/*`, `index.html`, `public/**/*`. Nenhum arquivo de código foi modificado.*
