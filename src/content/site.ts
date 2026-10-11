import type { SiteContent } from "./types";

/**
 * TODO DE CONTEÚDO — todos os textos abaixo são provisórios.
 * Procure por "[EDITAR]" e substitua pelos textos, fotos, áudio e vídeo reais.
 * Nenhum fato pessoal foi inventado: use rascunhos curtos e elegantes.
 */
export const site: SiteContent = {
  meta: {
    title: "Um universo só nosso — Para a Pérola",
    description:
      "[EDITAR] Site de aniversário romântico — um universo só nosso, feito para a Pérola.",
  },

  opening: {
    eyebrow: "[EDITAR] 12 de outubro — aniversário da minha Pérola",
    title: "Um universo só nosso",
    subtitle:
      "[EDITAR] Texto provisório: uma porta de entrada delicada para celebrar você — com calma, com carinho e com um abraço que atravessa a distância.",
    ctaPortal: "Entrar no portal",
    ctaLetter: "Ir direto à carta",
    bgImage: "/images/abertura/hero.jpg",
    bgAlt: "[EDITAR] Fotografia do casal para o fundo da abertura",
  },

  portal: {
    title: "O portal",
    intro:
      "[EDITAR] Texto provisório: escolha por onde começar. Cada capítulo guarda um pedacinho do que você significa — sem pressa, na ordem que o coração pedir.",
    items: [
      {
        href: "#carta",
        title: "Carta",
        description:
          "[EDITAR] A carta completa, como num diário guardado a sete chaves.",
      },
      {
        href: "#cinema",
        title: "Cinema",
        description:
          "[EDITAR] Nossas maratonas comentadas — do drama de época à comédia policial.",
      },
      {
        href: "#pets",
        title: "Snow & Pedro",
        description:
          "[EDITAR] Recados assinados pelos nossos guardiões de quatro patas.",
      },
      {
        href: "#distancia",
        title: "Distância",
        description: "[EDITAR] A saudade explicada sem tristeza — só abraço.",
      },
      {
        href: "#universo",
        title: "Universo",
        description:
          "[EDITAR] Pequenos mundos da Pérola: do cuidado à leitura.",
      },
      {
        href: "#diva",
        title: "Diva misteriosa",
        description: "[EDITAR] Uma carta selada e um vídeo guardado.",
      },
      {
        href: "#enfermagem",
        title: "Prontuário do amor",
        description: "[EDITAR] Diagnóstico oficial: saudade aguda de abraço.",
      },
      {
        href: "#trilha",
        title: "Trilha sonora",
        description: "[EDITAR] Aperte o play e leia com música.",
      },
      {
        href: "#final",
        title: "Final",
        description: "[EDITAR] O fecho: a distância não diminui o vínculo.",
      },
    ],
  },

  distance: {
    kicker: "Capítulo I",
    title: "A nossa distância, o nosso abraço",
    scriptAccent: "abraço",
    intro:
      "[EDITAR] Texto provisório: a distância existe no mapa, não no cuidado.",
    paragraphs: [
      "[EDITAR] Texto provisório: sentir saudade é só o coração confirmando o endereço — ele mora onde você está.",
      "[EDITAR] Texto provisório: a gente transforma quilômetro em mensagem boa, chamada demorada e plano bonito para o próximo encontro.",
      "[EDITAR] Texto provisório: nada de tristeza grande aqui. É saudade boa, dessas que fazem sorrir no meio do dia.",
    ],
    image: "/images/distancia/abraco.jpg",
    imageAlt: "[EDITAR] Fotografia simbólica do abraço à distância",
    badge: "[EDITAR] abraço de urso — válido para sempre",
    hugButton: "Quero meu abraço de urso",
    hugMessage:
      "[EDITAR] Texto provisório: considerando entregue — um abraço de urso bem apertado, com direito a rodopio lento e promessa de repeteco em breve. 🤍",
  },

  universe: {
    kicker: "Capítulo II",
    title: "O universo da minha Pérola",
    scriptAccent: "Pérola",
    intro:
      "[EDITAR] Texto provisório: não é catálogo, é constelação — quatro brilhos que eu amo observar em você. Toque em cada um para revelar.",
    qualities: [
      {
        title: "[EDITAR] Maquiagem",
        short: "[EDITAR] O ritual que vira arte.",
        revealed:
          "[EDITAR] Texto provisório: você se maquia como quem pinta o dia — com calma, com capricho, e o espelho devolve o que já estava lá: beleza com intenção.",
      },
      {
        title: "[EDITAR] Lírios",
        short: "[EDITAR] Delicadeza com presença.",
        revealed:
          "[EDITAR] Texto provisório: lírios são elegantes sem pedir licença — iguais a você entrando numa sala e iluminando sem esforço.",
      },
      {
        title: "[EDITAR] Leitura",
        short: "[EDITAR] Mundos dentro do mundo.",
        revealed:
          "[EDITAR] Texto provisório: você lê e o tempo desacelera. Admiro como cada história encontra morada na sua imaginação generosa.",
      },
      {
        title: "[EDITAR] Enfermagem",
        short: "[EDITAR] Cuidar como vocação.",
        revealed:
          "[EDITAR] Texto provisório: seu cuidado é técnica e ternura ao mesmo tempo. Quem cruza seu plantão recebe mais do que assistência: recebe acolhimento.",
      },
    ],
  },

  cinema: {
    kicker: "Capítulo III",
    title: "Nosso cinema particular",
    scriptAccent: "cinema",
    intro:
      "[EDITAR] Texto provisório: cinco sessões comentadas por nós dois. Toque em cada título para abrir a resenha afetiva — humor original, sem spoilers alheios.",
    items: [
      {
        title: "Bridgerton",
        tag: "[EDITAR] carta da alta sociedade",
        teaser: "[EDITAR] Fofocas, bailes e olhares que dizem tudo.",
        revealed:
          "[EDITAR] Texto provisório humorístico original: por este meio, esta autora declara que qualquer baile empalidece diante do nosso sofá — onde o par é certo, a pipoca é farta e o par romântico nunca atrasa.",
      },
      {
        title: "Brooklyn Nine-Nine",
        tag: "[EDITAR] relatório policial",
        teaser: "[EDITAR] Caso arquivado: saudade em excesso.",
        revealed:
          "[EDITAR] Texto provisório humorístico original: boletim de ocorrência afetiva — vítima: um namorado; causa: saudade em excesso após maratona; providência: abraço de urso imediato e reprise do episódio favorito lado a lado.",
      },
      {
        title: "Avatar",
        tag: "[EDITAR] conexão à distância",
        teaser: "[EDITAR] A nossa própria árvore das vozes.",
        revealed:
          "[EDITAR] Texto provisório humorístico original: dizem que os Na'vi se conectam pela trança — nós nos conectamos pelo bom e velho 'ficou acordada até tarde só para terminar o episódio comigo'. Conexão estabelecida com sucesso.",
      },
      {
        title: "Brino",
        tag: "[EDITAR] sessão riso solto",
        teaser: "[EDITAR] Lives, jogos e comentários impossíveis.",
        revealed:
          "[EDITAR] Texto provisório humorístico original: ver Brino com você é terapia do riso — pausamos, rebobinamos a piada e rimos de novo, porque alegria boa é alegria compartilhada.",
      },
      {
        title: "Felipe Neto",
        tag: "[EDITAR] sessão comentada",
        teaser: "[EDITAR] Opiniões fortes e sofá macio.",
        revealed:
          "[EDITAR] Texto provisório humorístico original: entre um vídeo e outro, a melhor parte nem está na tela — está no seu comentário afiado logo depois, que sempre rende a nossa própria versão do assunto.",
      },
    ],
  },

  diva: {
    kicker: "Capítulo IV",
    title: "A diva misteriosa",
    scriptAccent: "misteriosa",
    intro:
      "[EDITAR] Texto provisório: há capítulos que se guardam com lacre. Este é um deles — uma carta selada e um vídeo à espera do momento certo.",
    letterPreview:
      "[EDITAR] Texto provisório: 'Para a aniversariante mais elegante deste universo: este selo guarda uma surpresa que só se abre com o coração…'",
    openButton: "Abrir a carta misteriosa",
    modalTitle: "[EDITAR] A carta misteriosa da diva",
    modalBody:
      "[EDITAR] Texto provisório: aqui mora a homenagem em vídeo — ou, enquanto ele não chega, esta mensagem escrita com carinho vale como trailer do que está por vir.",
    videoHint:
      "[EDITAR] Como substituir: exporte o vídeo em MP4 (até 50 MB), salve como public/video/diva.mp4 e ele aparecerá aqui automaticamente. Sem o arquivo, esta mensagem elegante continua no lugar — nada quebra.",
    closeButton: "Fechar",
  },

  nursing: {
    kicker: "Capítulo V",
    title: "Prontuário do amor",
    scriptAccent: "amor",
    intro:
      "[EDITAR] Texto provisório: documento oficial do plantão do coração — carimbado pela enfermeira mais amada deste universo.",
    patient: "[EDITAR] Paciente: namorado com saudade — admissão por carência de abraço",
    diagnosis:
      "[EDITAR] Diagnóstico: necessidade aguda de abraço de urso, com crises de vontade de ligar só para ouvir a voz",
    treatment:
      "[EDITAR] Tratamento: contato diário com a Pérola, dose generosa de mensagens boas, 1 chamada demorada à noite e abraço presencial assim que possível",
    prognosis:
      "[EDITAR] Prognóstico: melhora imediata após contato com a Pérola; cura completa prevista para o próximo encontro",
    note: "[EDITAR] Assinado e carimbado com amor pela Enfermeira Pérola 🤍",
  },

  pets: {
    kicker: "Capítulo VI",
    title: "Snow & Pedro em missão",
    scriptAccent: "missão",
    intro:
      "[EDITAR] Texto provisório: correspondência oficial do reino animal — entregue sem atraso, com bigodes e patas.",
    cards: [
      {
        name: "Snow",
        role: "[EDITAR] chow chow guardião",
        message:
          "[EDITAR] Texto provisório (como se fosse da Snow): 'Au-au. Vigiei a casa direitinho e guardei o melhor lugar do sofá para vocês dois. Parabéns, humana favorita!'",
        image: "/images/pets/snow.jpg",
        imageAlt: "[EDITAR] Fotografia da Snow, a chow chow",
      },
      {
        name: "Pedro",
        role: "[EDITAR] gato estrategista",
        message:
          "[EDITAR] Texto provisório (como se fosse do Pedro): 'Miau. Derrubei exatamente zero copos esta semana em sua homenagem. Isso é amor em linguagem felina. Parabéns!'",
        image: "/images/pets/pedro.jpg",
        imageAlt: "[EDITAR] Fotografia do Pedro, o gato",
      },
    ],
    birthdayMessage:
      "[EDITAR] Texto provisório: parabéns do fundo dos nossos coraçõezinhos peludos — que nunca faltem petiscos, sonecas ao sol e humanos que amam você como nós amamos.",
    birthdaySignature: "[EDITAR] Assinado com patas: Snow & Pedro 🐾",
  },

  letter: {
    kicker: "Capítulo VII",
    title: "Carta para a minha Pérola",
    scriptAccent: "Pérola",
    intro:
      "[EDITAR] Texto provisório: guardei o essencial aqui fora e o transbordamento lá dentro. Abra com calma.",
    preview:
      "[EDITAR] Texto provisório (prévia curta): 'Se este site fosse o mar, esta carta seria a pérola — pequena por fora, imensa por dentro…'",
    openButton: "Ler a carta completa",
    full: [
      "[EDITAR] Texto provisório §1: Querida Pérola, começo pelo óbvio — feliz aniversário. Que este 12 de outubro seja leve, com cheiro de lírio e gosto de começo bonito.",
      "[EDITAR] Texto provisório §2: A distância me ensinou uma aritmética nova: quanto mais sinto sua falta, mais tenho certeza do lugar onde quero estar.",
      "[EDITAR] Texto provisório §3: Admiro seu cuidado, sua fé no dia seguinte, seu jeito de transformar rotina em ritual — do café à leitura, da maquiagem ao plantão.",
      "[EDITAR] Texto provisório §4: Prometo o simples que sustenta o grande: presença atenta, humor nos dias cinzentos e abraços de urso sem data de validade.",
      "[EDITAR] Texto provisório §5: Fecha os olhos e imagina: eu, você, Snow disputando o sofá e Pedro julgando tudo de cima do armário. Esse é o meu para sempre favorito.",
    ],
    signature: "[EDITAR] Com todo o meu amor — seu namorado 🤍",
    closeButton: "Fechar carta",
  },

  soundtrack: {
    kicker: "Capítulo VIII",
    title: "Nossa trilha sonora",
    scriptAccent: "trilha",
    intro:
      "[EDITAR] Texto provisório: aperte o play e leia o resto com música. Sem autoplay — o momento é seu.",
    audioSrc: "/audio/trilha.mp3",
    trackTitle: "[EDITAR] Nossa música — título provisório",
    trackArtist: "[EDITAR] Artista provisório",
    transcript:
      "[EDITAR] Transcrição/legendas provisórias: descreva aqui o clima da faixa para quem não puder ouvir — ex.: 'balada suave, violão e voz doce, refrão que abraça'.",
  },

  finale: {
    title: "A distância não nos diminui",
    scriptAccent: "diminui",
    message:
      "[EDITAR] Texto provisório: fechamos este universo com a certeza que o abriu — a distância mede quilômetros, nunca vínculo. Feliz aniversário, minha Pérola. O próximo capítulo a gente escreve juntinhos.",
    ctaPortal: "Voltar ao portal",
  },

  footer: {
    line: "[EDITAR] Feito com amor para a Pérola — 12 de outubro 🤍",
    backToTop: "Voltar ao topo",
  },
};
