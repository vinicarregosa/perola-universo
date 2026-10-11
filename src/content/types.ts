export interface PortalItem {
  href: string;
  title: string;
  description: string;
  icon?: string;
}

export interface PortalPhoto {
  src: string;
  alt: string;
}

export interface OpeningContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPortal: string;
  ctaLetter: string;
  bgImage: string;
  bgAlt: string;
  photo: string;
  photoAlt: string;
  photoCaption: string;
}

export interface DistanceContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  badge: string;
  hugButton: string;
  hugAnother: string;
  hugMessage: string;
  hugMessages: string[];
  hugReset: string;
}

export interface UniverseQuality {
  title: string;
  short: string;
  revealed: string;
  photo?: string;
  photoAlt?: string;
  photoCaption?: string;
}

export interface UniverseBook {
  title: string;
  author: string;
  cover: string;
  coverAlt: string;
  note: string;
}

export interface UniverseContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  qualities: UniverseQuality[];
  books: UniverseBook[];
  booksTitle: string;
  booksIntro: string;
}

export interface ReferenceComposition {
  id: string;
  title?: string;
  text?: string;
  photo: string;
  photoAlt: string;
  photoCaption?: string;
}

export interface ReferencesContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro?: string;
  items: ReferenceComposition[];
  tripsLinkLabel?: string;
}

export interface CinemaItem {
  id: string;
  /** Título neutro visível — nunca o nome da obra (ex: "Caso nº 99", "Relato 1"). */
  title: string;
  tag: string;
  teaser: string;
  revealed: string;
  /** Imagem pequena configurável em public/images/cinema/* (placeholder até o usuário substituir). */
  image: string;
  imageAlt: string;
}

export interface CinemaContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  items: CinemaItem[];
}

export interface Trip {
  id: string;
  name: string;
  caption: string;
  text?: string;
  photo: string;
  photoAlt: string;
}

export interface TripsContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  items: Trip[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  location?: string;
  date?: string;
}

export interface GalleryContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  images: GalleryImage[];
  emptyNote: string;
  openLabel: string;
  closeLabel: string;
  prevLabel: string;
  nextLabel: string;
}

export interface DivaContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  letterPreview: string;
  openButton: string;
  modalTitle: string;
  modalBody: string;
  videoSrc: string;
  fallbackMessage: string;
  videoHint: string;
  closeButton: string;
}

export interface NursingContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  patient: string;
  diagnosis: string;
  treatment: string;
  prognosis: string;
  note: string;
  fictionBadge: string;
  prescribeButton: string;
  prescriptionTitle: string;
  prescription: string;
  prescriptionNote: string;
}

export interface PetCard {
  name: string;
  role: string;
  message: string;
  image: string;
  imageAlt: string;
}

export interface PetsContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  cards: PetCard[];
  birthdayMessage: string;
  birthdaySignature: string;
}

export interface LetterContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  preview: string;
  openButton: string;
  full: string[];
  signature: string;
  closeButton: string;
  saveButton: string;
  savedMessage: string;
}

export interface SoundtrackTrack {
  src: string;
  title: string;
  artist: string;
}

export interface SoundtrackLink {
  label: string;
  href: string;
}

export interface SoundtrackContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  audioSrc: string;
  trackTitle: string;
  trackArtist: string;
  transcript: string;
  tracks: SoundtrackTrack[];
  links: SoundtrackLink[];
  fallbackNote: string;
}

export interface FinaleContent {
  title: string;
  scriptAccent: string;
  message: string;
  ctaPortal: string;
}

export interface SiteContent {
  meta: { title: string; description: string };
  opening: OpeningContent;
  portal: {
    title: string;
    intro: string;
    items: PortalItem[];
    featuredTitle: string;
    featuredPhotos: PortalPhoto[];
    galleryLinkLabel: string;
  };
  distance: DistanceContent;
  universe?: UniverseContent;
  referencias: ReferencesContent;
  trips: TripsContent;
  gallery: GalleryContent;
  cinema?: CinemaContent;
  diva: DivaContent;
  nursing: NursingContent;
  pets: PetsContent;
  letter: LetterContent;
  soundtrack: SoundtrackContent;
  finale: FinaleContent;
  footer: { line: string; backToTop: string };
}
