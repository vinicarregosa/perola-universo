import type { SiteContent } from "./types";

/**
 * Conteúdo — Pérola Universo.
 * Textos curtos, diretos, sem inventar lembranças/datas.
 * Letter.full preservada exatamente como recebida.
 * Fotos/músicas/vídeo configuráveis pelos caminhos abaixo.
 */
export const site: SiteContent = {
  meta: {
    title: "Um universo só nosso — Para a Pérola",
    description:
      "Site de aniversário para a Pérola, feito pelo namorado. 12 de outubro.",
  },

  opening: {
    eyebrow: "12 de outubro — aniversário da Ma",
    title: "Um universo só nosso.",
    subtitle: "Para a minha Pérola, no dia dela.",
    ctaPortal: "Ver o portal",
    ctaLetter: "Ler a carta",
    bgImage: "/images/abertura/principal.jpeg",
    bgAlt: "",
    photo: "/images/abertura/principal.jpeg",
    photoAlt: "Ma e eu juntos",
    photoCaption: "Nós dois.",
  },

  portal: {
    title: "Por onde começar",
    intro: "Escolhe por onde começar. Sem ordem certa, sem pressa.",
    items: [
      {
        href: "#distancia",
        title: "Distância",
        description: "O abraço que está me devendo",
        icon: "🧸",
      },
      {
        href: "#referencias",
        title: "Referências",
        description: "Algumas histórias têm um pouco da gente",
        icon: "📺",
      },
      {
        href: "#cinema",
        title: "Cinema",
        description: "Três relatos com imagem e texto",
        icon: "🎬",
      },
      {
        href: "#viagens",
        title: "Viagens",
        description: "Lugares onde já estivemos juntos",
        icon: "🧳",
      },
      {
        href: "#galeria",
        title: "Galeria",
        description: "Provas de que a gente existe fora da saudade",
        icon: "📷",
      },
      {
        href: "#diva",
        title: "Diva",
        description: "Uma participação especial",
        icon: "✦",
      },
      {
        href: "#enfermagem",
        title: "Enfermagem",
        description: "Departamento de Enfermagem da Saudade",
        icon: "⚕",
      },
      {
        href: "#pets",
        title: "Pets",
        description: "Snow e Pedro",
        icon: "🐾",
      },
      {
        href: "#carta",
        title: "Carta",
        description: "Uma coisa que quero te dizer",
        icon: "💌",
      },
      {
        href: "#trilha",
        title: "Trilha",
        description: "Músicas que têm a nossa cara",
        icon: "🎵",
      },
    ],
    featuredTitle: "Um pouco de nós",
    featuredPhotos: [
      { src: "/images/galeria/ubatuba.jpeg", alt: "Nós dois em Ubatuba" },
      { src: "/images/galeria/fotoscampos.jpeg", alt: "Nós dois em Campos do Jordão" },
      { src: "/images/galeria/fotos4.jpeg", alt: "Nós dois juntos" },
    ],
    galleryLinkLabel: "Ver nossas fotografias",
  },

  distance: {
    kicker: "Distância",
    title: "Falta um abraço aqui",
    scriptAccent: "abraço",
    intro: "A gente se vê espaçado. Quando se vê, compensa.",
    paragraphs: [
      "Ma, a distância é simples: moramos longe e nos vemos de tempos em tempos. No meio disso, mensagem durante o dia e ligação à noite.",
      "O resto fica para o reencontro. Tem um abraço e beijo me devendo — quero cobrar com juros.",
    ],
    image: "/images/galeria/fotos1.jpeg",
    imageAlt: "Nós dois juntos",
    imageCaption: "Esse abraço aí.",
    badge: "vale-abraço sem validade",
    hugButton: "Cobrar o abraço",
    hugAnother: "Quero outro",
    hugMessage: "Abraço entregue. Bem apertado, como combinado.",
    hugMessages: [
      "Abraço entregue. Bem apertado, como combinado.",
      "Mais um: esse vale para a ligação de hoje à noite.",
      "Último por agora — o resto fica para o reencontro.",
    ],
    hugReset: "Guardar para depois",
  },

  universe: {
    kicker: "A Ma",
    title: "O que faz a Ma ser a Ma",
    scriptAccent: "Ma",
    intro: "Quatro coisas tuas que eu reparo bastante.",
    qualities: [
      {
        title: "Maquiagem",
        short: "Ela manja. Eu assisto.",
        revealed:
          "A Ma entende de maquiagem de verdade. Eu entendo de segurar a luz e dizer “ficou bom”. Cada um com seu talento.",
        photo: "/images/universo/maquiagem.jpg",
        photoAlt: "Ma se maquiando",
        photoCaption: "O ritual dela.",
      },
      {
        title: "Lírios",
        short: "Os favoritos dela.",
        revealed:
          "Quando vejo lírios por aí, lembro dela na hora. Sem muito mistério.",
        photo: "/images/universo/lirios.jpg",
        photoAlt: "Lírios",
        photoCaption: "Lírios — os favoritos dela.",
      },
      {
        title: "Livros",
        short: "Duas escolhas para a estante.",
        revealed:
          "Dei esses dois para ela: um romance e um suspense, para ela escolher o ritmo. Espero os comentários depois.",
      },
      {
        title: "Enfermagem",
        short: "O técnico e a paciência.",
        revealed:
          "Ela está no técnico de enfermagem e leva a sério. Eu só observo e aprendo onde fica o termômetro.",
      },
    ],
    booksTitle: "Dois presentes",
    booksIntro:
      "Comprei esses dois para ela. As capas aparecem aqui quando eu fotografar.",
    books: [
      {
        title: "Para Sir Phillip, Com Amor",
        author: "Julia Quinn",
        cover: "/images/universo/sir-phillip.jpg",
        coverAlt: "Capa do livro Para Sir Phillip, Com Amor, de Julia Quinn",
        note: "Presente — para ler sem pressa.",
      },
      {
        title: "A Paciente Silenciosa",
        author: "Alex Michaelides",
        cover: "/images/universo/paciente-silenciosa.jpg",
        coverAlt: "Capa do livro A Paciente Silenciosa, de Alex Michaelides",
        note: "Presente — para ler devagar.",
      },
    ],
  },

  referencias: {
    kicker: "Referências",
    title: "Um pouco da gente nas histórias",
    scriptAccent: "gente",
    intro: "Fotografias nossas.",
    items: [
      {
        id: "escandalo",
        photo: "/images/galeria/fotos2.jpeg",
        photoAlt: "Nós dois juntos",
      },
      {
        id: "sem-explicar",
        photo: "/images/galeria/fotos3.jpeg",
        photoAlt: "Nós dois juntos",
      },
      {
        id: "do-nosso-jeito",
        photo: "/images/galeria/fotos4.jpeg",
        photoAlt: "Nós dois em uma viagem",
      },
    ],
    tripsLinkLabel: "Ver nossas viagens",
  },

  cinema: {
    kicker: "Cinema",
    title: "Nosso cinema particular",
    scriptAccent: "cinema",
    intro:
      "Três sessões comentadas por nós dois. Toque em cada título para abrir a resenha afetiva — humor original, sem spoilers alheios.",
    items: [
      {
        id: "baile",
        title: "Relato 1 — O baile",
        tag: "carta da alta sociedade",
        teaser: "Fofocas, bailes e olhares que dizem tudo.",
        revealed:
          "Por este meio, esta autora declara que qualquer baile empalidece diante do nosso sofá — onde o par é certo, a pipoca é farta e o par romântico nunca atrasa.",
        image: "/images/cinema/bridgerton.jpeg",
        imageAlt: "Imagem ilustrativa do relato do baile",
      },
      {
        id: "caso-99",
        title: "Caso nº 2",
        tag: "relatório policial",
        teaser: "Caso arquivado: saudade em excesso.",
        revealed:
          "Boletim de ocorrência afetiva — vítima: um namorado; causa: saudade em excesso após maratona; providência: abraço de urso imediato e reprise do episódio favorito lado a lado.",
        image: "/images/cinema/99.jpeg",
        imageAlt: "Imagem ilustrativa do caso nº 2",
      },
      {
        id: "riso",
        title: "Relato 3 — Riso solto",
        tag: "sessão riso solto",
        teaser: "Lives, jogos e comentários impossíveis.",
        revealed:
          "Ver Brino com você é terapia do riso — pausamos, rebobinamos a piada e rimos de novo, porque alegria boa é alegria compartilhada.",
        image: "/images/cinema/brino.jpeg",
        imageAlt: "Imagem ilustrativa do relato do riso solto",
      },
    ],
  },

  trips: {
    kicker: "Viagens",
    title: "Lugares onde já estivemos juntos",
    scriptAccent: "juntos",
    intro:
      "Tem lugar que a gente visita e lugar que depois acaba lembrando. Separei algumas fotografias das nossas viagens para deixar esses momentos reunidos aqui.",
    items: [
      {
        id: "ubatuba",
        name: "Ubatuba",
        caption: "Um daqueles dias que merecem ficar guardados.",
        photo: "/images/galeria/ubatuba.jpeg",
        photoAlt: "Nós dois em Ubatuba",
      },
      {
        id: "campos",
        name: "Campos do Jordão",
        caption: "Mais uma lembrança nossa.",
        photo: "/images/galeria/fotoscampos.jpeg",
        photoAlt: "Nós dois em Campos do Jordão",
      },
      {
        id: "aguas",
        name: "Águas",
        caption: "Um lugar nosso.",
        photo: "/images/galeria/fotosaguas.jpeg",
        photoAlt: "Nós dois em Águas",
      },
    ],
  },

  gallery: {
    kicker: "Galeria",
    title: "Provas de que a gente existe fora da saudade",
    scriptAccent: "saudade",
    intro:
      "Algumas fotografias são de viagens, outras de momentos comuns. Juntas, elas guardam um pouco do que já vivemos.",
    images: [
      {
        src: "/images/galeria/ubatuba.jpeg",
        alt: "Nós dois em Ubatuba",
        caption: "Ubatuba",
        location: "Ubatuba",
      },
      {
        src: "/images/galeria/fotoscampos.jpeg",
        alt: "Nós dois em Campos do Jordão",
        caption: "Campos do Jordão",
        location: "Campos do Jordão",
      },
      {
        src: "/images/galeria/fotosaguas.jpeg",
        alt: "Nós dois em Águas",
        caption: "Águas",
        location: "Águas",
      },
      {
        src: "/images/galeria/fotos1.jpeg",
        alt: "Nós dois juntos",
        caption: "Nós dois",
      },
      {
        src: "/images/abertura/principal.jpeg",
        alt: "Ma e eu juntos",
        caption: "Nós dois",
      },
      {
        src: "/images/galeria/fotos2.jpeg",
        alt: "Nós dois juntos",
        caption: "Nós dois",
      },
      {
        src: "/images/galeria/fotos3.jpeg",
        alt: "Nós dois na praia",
        caption: "Praia",
      },
      {
        src: "/images/galeria/fotos4.jpeg",
        alt: "Nós dois juntos",
        caption: "Nós dois",
      },
      {
        src: "/images/galeria/fotoaparecida.jpeg",
        alt: "Nós dois em Aparecida",
        caption: "Aparecida",
        location: "Aparecida",
      },
    ],
    emptyNote: "As fotos entram aqui — por enquanto, esse espaço fica reservado.",
    openLabel: "Ampliar fotografia",
    closeLabel: "Fechar",
    prevLabel: "Fotografia anterior",
    nextLabel: "Próxima fotografia",
  },

  diva: {
    kicker: "Diva",
    title: "Uma participação especial",
    scriptAccent: "especial",
    intro: "Um espaço reservado para uma participação especial.",
    letterPreview:
      "“Para a aniversariante: este selo guarda uma surpresa feita com carinho.”",
    openButton: "Abrir a surpresa",
    modalTitle: "Participação especial",
    modalBody:
      "Guardei este espaço para uma homenagem. Enquanto ela não chega, fica aqui o convite: volte depois para conferir.",
    videoSrc: "/images/diva/WhatsApp%20Video%202026-10-11%20at%2002.33.49.mp4",
    fallbackMessage: "A surpresa mora aqui — em breve.",
    videoHint: "O vídeo aparece aqui quando estiver pronto.",
    closeButton: "Fechar",
  },

  nursing: {
    kicker: "Enfermagem",
    title: "Departamento de Enfermagem da Saudade",
    scriptAccent: "Saudade",
    intro: "Um prontuário de brincadeira, carimbado pela futura técnica.",
    patient: "Paciente: Ma e eu — queixa de saudade",
    diagnosis: "Quadro: saudade de abraço, com vontade de ligar só para ouvir a voz",
    treatment: "Conduta: mensagem durante o dia, ligação à noite e abraço no reencontro",
    prognosis: "Evolução: melhora quando a gente se fala; alta no próximo encontro",
    note: "Assinado pela futura técnica Pérola",
    fictionBadge: "brincadeira — nada aqui é de verdade",
    prescribeButton: "Prescrever um abraço",
    prescriptionTitle: "Receita",
    prescription:
      "1 abraço sem validade, ligações sem pressa e 1 reencontro com rodopio.",
    prescriptionNote: "Repetir quando a saudade apertar.",
  },

  pets: {
    kicker: "Capítulo VI",
    title: "Snow & Pedro em missão",
    scriptAccent: "missão",
    intro:
      "Correspondência oficial do reino animal — entregue sem atraso, com bigodes e patas.",
    cards: [
      {
        name: "Snow",
        role: "chow chow guardião",
        message:
          "Au-au. Vigiei a casa direitinho e guardei o melhor lugar do sofá para vocês dois. Parabéns, humana favorita!",
        image: "/images/pets/snow.jpeg",
        imageAlt: "Fotografia da Snow, a chow chow",
      },
      {
        name: "Pedro",
        role: "gato estrategista",
        message:
          "Miau. Derrubei exatamente zero copos esta semana em sua homenagem. Isso é amor em linguagem felina. Parabéns!",
        image: "/images/pets/pedro.jpeg",
        imageAlt: "Fotografia do Pedro, o gato",
      },
    ],
    birthdayMessage:
      "Parabéns do fundo dos nossos coraçõezinhos peludos — que nunca faltem petiscos, sonecas ao sol e humanos que amam você como nós amamos.",
    birthdaySignature: "Assinado com patas: Snow & Pedro 🐾",
  },

  letter: {
    kicker: "Carta",
    title: "Uma coisa que quero te dizer",
    scriptAccent: "dizer",
    intro: "A carta está aqui, inteira. Lê com calma.",
    preview: "“Ma, feliz aniversário — o resto está na carta.”",
    openButton: "Ler a carta completa",
    full: [
      "Ma, feliz aniversário. Hoje, 12 de outubro, o calendário faz o favor de lembrar o óbvio: o mundo ficou melhor no dia em que você chegou.",
      "De longe, aprendi a te amar em detalhes pequenos. No lírio que me faz parar na floricultura, no pincel fora do lugar que me arranca um sorriso, na notificação de mensagem sua que muda o ritmo do meu dia.",
      "Admiro você de um jeito inteiro: o capricho da maquiagem, a calma da leitura, a vocação do cuidado. Ver você no caminho do técnico de enfermagem me dá um orgulho que não cabe em mensagem curta — é técnica e ternura na mesma pessoa.",
      "A distância existe, não vou fingir que não. Ela pesa em dia comum e aperta em data bonita. Mas ela nunca foi maior que nós: virou chamada longa, virou plano, virou contagem para o próximo encontro — esses reencontros a cada seis meses, mais ou menos, que viram feriado particular.",
      "E tem a nossa trupe: Snow guardando o sofá como quem guarda tesouro, Pedro julgando tudo lá de cima com sua sabedoria felina. Minha imagem favorita tem esse cenário — você rindo, eu do seu lado, eles disputando atenção.",
      "Então é isso, minha Pérola: que este novo ano venha leve, com saúde, com histórias boas para ler e com gente que te ama por perto — eu na primeira fila. Come um pedaço de bolo por mim, faz um pedido bonito e guarda este cantinho aqui para quando a saudade bater.",
    ],
    signature: "Com todo o meu amor — seu namorado 🤍",
    closeButton: "Fechar carta",
    saveButton: "Guardar para depois",
    savedMessage: "Guardado. Volta aqui quando a saudade bater.",
  },

  soundtrack: {
    kicker: "Trilha",
    title: "Músicas que têm a nossa cara",
    scriptAccent: "cara",
    intro: "Aperta o play quando quiser. Sem autoplay.",
    audioSrc: "/audio/eu-te-seguro---panda-sem-moderação-2.mp3",
    trackTitle: "Eu te seguro",
    trackArtist: "Panda",
    transcript: "Uma faixa calma para acompanhar a leitura.",
    tracks: [
      {
        src: "/audio/eu-te-seguro---panda-sem-moderação-2.mp3",
        title: "Eu te seguro",
        artist: "Panda",
      },
    ],
    links: [],
    fallbackNote: "Sem música por enquanto.",
  },

  finale: {
    title: "Até o próximo abraço",
    scriptAccent: "abraço",
    message:
      "Ma, feliz aniversário. Guarda um abraço para mim até o próximo encontro.",
    ctaPortal: "Voltar ao portal",
  },

  footer: {
    line: "Para a Pérola — 12 de outubro",
    backToTop: "Voltar ao topo",
  },
};
