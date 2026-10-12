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
          "Cara leitora, dizem que a temporada reserva os romances mais encantadores, mas este autor duvida que algum cavalheiro de Londres seja capaz de superar aquele que escolheu estar ao seu lado.",
        image: "/images/cinema/bridgerton.jpeg",
        imageAlt: "Imagem ilustrativa do relato do baile",
      },
      {
        id: "caso-99",
        title: "Caso nº 2",
        tag: "relatório policial",
        teaser: "Caso arquivado: saudade em excesso.",
        revealed:
          "Ok, aqui vai. Ma, eu te amo. Eu amo como você é inteligente. Eu amo como você é linda. Amo seu rosto e amo sua bunda. Eu deveria ter anotado isso primeiro. Esse o título do nosso filme porno.",
        image: "/images/cinema/99.jpeg",
        imageAlt: "Imagem ilustrativa do caso nº 2",
      },
      {
        id: "riso",
        title: "Relato 3 — Riso solto",
        tag: "sessão riso solto",
        teaser: "Lives, jogos e comentários impossíveis.",
        revealed:
          "Assistir a vídeos com você é garantia de boas risadas. Às vezes, a gente ri mais da nossa reação do que do próprio vídeo, e é isso que torna tudo mais divertido.",
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
      "O vídeo da diva mais aguardada chegou para deixar seu aniversário ainda mais icônico. Porque você merece esse surto de qualidade!",
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
      "Meu amor! Feliz aniversário! Hoje, dia 12 de outubro, é um dia tão especial. O mundo ganhou uma pessoa incrível, e eu tive a sorte de encontrar nela o amor da minha vida.",
      "Eu te amo do fundo do meu coração. Mesmo sendo muito difícil viver longe de ti, eu amo cada detalhe seu, amo estar com você e a sua companhia. Cada momento ao seu lado é especial, até aqueles mais simples, que talvez pareçam pequenos, mas que, para mim, se tornam lembranças que guardo com muito carinho. Eu te admiro profundamente, tenho muito orgulho de ti e estarei sempre te apoiando nas suas decisões, nos seus sonhos e na sua carreira. Quero te ver conquistando tudo aquilo que deseja e, sempre que possível, estar ao seu lado para comemorar cada vitória sua.",
      "A distância existe e dói bastante, nas datas comemorativas e no dia a dia. Dói não poder te abraçar quando quero, não poder estar contigo em todos os momentos e não poder transformar cada saudade em um beijo. Mas ela não é e nunca vai ser maior que nós, maior que o nosso amor. Afinal, mesmo longe, você continua fazendo parte dos meus dias, dos meus planos e de tudo aquilo que imagino para o futuro. Vamos continuar nos amando, com muito cuidado e delicadeza. Vamos continuar estudando, crescendo e construindo nosso caminho para termos um futuro maravilhoso juntos, como uma família. E que nossas famílias também possam viver juntas, com muito amor, compartilhando momentos felizes e construindo novas lembranças. Quando penso no futuro, é você quem eu quero encontrar ao meu lado, dividindo a vida, os sonhos, as conquistas e até os dias mais comuns, porque, no fim, são eles que também fazem a vida valer a pena.",
      "Então é isso, minha Pérola. Desejo que este novo ano venha leve, com saúde, com histórias boas para ler e com gente que te ama por perto, eu na primeira fila. Que nunca te faltem motivos para sorrir, sonhos para perseguir e carinho para te lembrar do quanto você é especial. Queria muito poder estar aí hoje, te abraçar bem forte, olhar nos seus olhos e te lembrar pessoalmente de tudo isso, mas, enquanto não posso, espero que estas palavras consigam te fazer sentir um pouquinho do amor que tenho por ti. Come um pedaço de bolo por mim, faz um pedido bonito e guarda este cantinho aqui para quando a saudade bater. Que, de alguma forma, ele te lembre de que existe alguém que te ama muito, que torce por ti e que está contando os dias para poder viver tudo isso bem pertinho de você.",
      "Conte comigo para todo o sempre, minha Pérola. Que este seja mais um de muitos aniversários que ainda vamos comemorar juntos, com menos distância entre nós e cada vez mais histórias para contar. Eu te amo infinitamente.",
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
