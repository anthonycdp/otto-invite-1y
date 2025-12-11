export enum InvitationStep {
  HERO = 'hero',
  INFO = 'info',
  RSVP = 'rsvp'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

export interface RSVPFormData {
  name: string;
  adults: number;
  children: number;
  message?: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
