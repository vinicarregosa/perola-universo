# Imagens — como trocar

Este site funciona **sem nenhum arquivo real de foto**: o componente
`PlaceholderPhoto` exibe um marco marfim elegante com lírio + texto curto.
Nada quebra sem os arquivos (verificação por HEAD, sem 404 no console).

Para publicar as fotos reais, salve JPGs com **o mesmo nome** indicado abaixo
(JPG, lado maior 1600px, qualidade ~72, < 250 KB cada):

| Seção       | Arquivo esperado                  | Proporção ideal |
|-------------|-----------------------------------|-----------------|
| Abertura    | `abertura/hero.jpg`               | 4 / 5 retrato   |
| Distância   | `distancia/abraco.jpg`            | 4 / 5 retrato   |
| Universo    | `universo/maquiagem.jpg`          | 4 / 5 retrato   |
| Universo    | `universo/lirios.jpg`             | 16 / 10 paisagem|
| Universo    | `universo/sir-phillip.jpg`        | 3 / 4 capa      |
| Universo    | `universo/paciente-silenciosa.jpg`| 3 / 4 capa      |
| Referências | `referencias/foto-a.jpg`          | 4 / 5 retrato   |
| Referências | `referencias/foto-b.jpg`          | 16 / 10 paisagem|
| Referências | `referencias/foto-c.jpg`          | 1 / 1 quadrada  |
| Viagens     | `viagens/ubatuba.jpg`             | 16 / 10 paisagem|
| Viagens     | `viagens/campos.jpg`              | 4 / 5 retrato   |
| Viagens     | `viagens/aguas.jpg`               | 1 / 1 quadrada  |
| Pets        | `pets/snow.jpg`                   | 4 / 3 paisagem  |
| Pets        | `pets/pedro.jpg`                  | 4 / 3 paisagem  |
| Cinema      | `cinema/baile.jpg`                | 1 / 1 quadrada (pequena) |
| Cinema      | `cinema/caso-99.jpg`              | 1 / 1 quadrada (pequena) |
| Cinema      | `cinema/conexao.jpg`              | 1 / 1 quadrada (pequena) |
| Cinema      | `cinema/riso.jpg`                 | 1 / 1 quadrada (pequena) |
| Cinema      | `cinema/sessao.jpg`               | 1 / 1 quadrada (pequena) |

Galeria reutiliza os caminhos acima (sem duplicar arquivos). Para trocar uma
foto da galeria, edite `src/content/site.ts` → `gallery.images`.

`viagens/aguas.jpg`: nome provisório — complete o nome do destino em
`src/content/site.ts` → `trips.items` (não fixar sobrenome aqui).

## Vídeo

- Exporte em MP4 H.264, até 50 MB, 1080p no máximo.
- Salve como `public/video/diva.mp4` — a seção Diva detecta automaticamente.
- Sem o arquivo, a mensagem elegante continua no lugar. Nada quebra.

## Áudio

- Exporte em MP3 (~128 kbps), nome `public/audio/trilha.mp3`.
- O player é custom, **sem autoplay**, `preload="none"`, mostra transcrição.
- Sem o arquivo, aparece um aviso discreto com instrução. Nada quebra.
