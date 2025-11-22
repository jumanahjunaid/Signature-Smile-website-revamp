import { LucideIcon } from 'lucide-react';

export enum ServiceCategory {
  GENERAL = 'General',
  COSMETIC = 'Cosmetic',
  SURGICAL = 'Surgical',
  PEDIATRIC = 'Pediatric',
  ORTHODONTIC = 'Orthodontic'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: ServiceCategory;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface NavItem {
  label: string;
  path: string;
  isButton?: boolean;
}