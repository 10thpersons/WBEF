export interface NavItem {
  label: string;
  path: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Speaker {
  name: string;
  role: string;
  institution: string;
  image: string;
  bio?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  description?: string;
  type: 'keynote' | 'plenary' | 'break' | 'interactive' | 'ceremony';
}

export interface AgendaDay {
  date: string;
  day: string;
  items: AgendaItem[];
}

export interface SponsorshipTier {
  name: string;
  price: string;
  spots: string;
  features: string[];
  isPopular?: boolean;
}