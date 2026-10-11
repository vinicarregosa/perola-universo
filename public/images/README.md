# Imagens — como trocar

Este site funciona **sem nenhum arquivo real de foto**: o componente
`PlaceholderPhoto` exibe um marco marfim elegante com lírio + o texto
"Espaço para fotografia — ver public/images/README.md".

Para publicar as fotos reais, salve JPGs com **o mesmo nome** indicado abaixo
(JPG, lado maior 1600px, qualidade ~72, < 250 KB cada):

| Capítulo   | Arquivo esperado                | Proporção ideal |
|------------|----------------------------------|-----------------|
| Abertura   | `abertura/hero.jpg`              | 16 / 9 (fundo)  |
| Distância  | `distancia/abraco.jpg`           | 4 / 5 retrato   |
| Pets       | `pets/snow.jpg`                  | 4 / 3 paisagem  |
| Pets       | `pets/pedro.jpg`                 | 4 / 3 paisagem  |

Pastas reservadas (com `.gitkeep` até a troca):
`abertura/`, `distancia/`, `universo/`, `diva/`, `pets/`, `carta/`

## Vídeo

- Exporte em MP4 H.264, até 50 MB, 1080p no máximo.
- Salve como `public/video/diva.mp4` — a seção Diva detecta automaticamente.
- Sem o arquivo, a mensagem elegante continua no lugar. Nada quebra.

## Áudio

- Exporte em MP3 (~128 kbps), nome `public/audio/trilha.mp3`.
- O player é custom, **sem autoplay**, mostra duração e transcrição.
- Sem o arquivo, aparece um aviso discreto com instrução. Nada quebra.

## Dicas

- Mantenha os mesmos nomes de arquivo — nenhum código precisa mudar.
- Otimize antes de publicar (ex.: Squoosh, `sharp`, ou exportação "para web").
- Textos provisórios: procure por `[EDITAR]` em `src/content/site.ts`.
