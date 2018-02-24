export interface ArtWork {
  id: string;
  workUrl: string;
  title: string;
  description: string;
  imageUrl: string;
  pubdate: string;
  tech: string;
  displayType: 'featured' | 'list';
  collab?: string;
  publisher?: string;
  moreinfo?: string;
  awards?: Award[];
  accolades?: Accolade[];
}

interface Accolade {
  name: string;
  url: string;
}

interface Award {
  name: string;
  url: string;
}
