export interface PortalItem {
  href: string;
  title: string;
  description: string;
}

export interface OpeningContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPortal: string;
  ctaLetter: string;
  bgImage: string;
  bgAlt: string;
}

export interface DistanceContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  badge: string;
  hugButton: string;
  hugMessage: string;
}

export interface UniverseQuality {
  title: string;
  short: string;
  revealed: string;
}

export interface UniverseContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  qualities: UniverseQuality[];
}

export interface CinemaItem {
  title: string;
  tag: string;
  teaser: string;
  revealed: string;
}

export interface CinemaContent {
  kicker: string;
  title: string;
  scriptAccent: string;
  intro: string;
  items: CinemaItem[];
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
  portal: { title: string; intro: string; items: PortalItem[] };
  distance: DistanceContent;
  universe: UniverseContent;
  cinema: CinemaContent;
  diva: DivaContent;
  nursing: NursingContent;
  pets: PetsContent;
  letter: LetterContent;
  soundtrack: SoundtrackContent;
  finale: FinaleContent;
  footer: { line: string; backToTop: string };
}
