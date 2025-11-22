
import { 
  Stethoscope, 
  Smile, 
  Sparkles, 
  Activity, 
  Baby,
  ShieldCheck,
  Phone,
  Calendar,
  MapPin
} from 'lucide-react';
import { ServiceCategory, ServiceItem, Doctor, Testimonial, NavItem } from './types';

export const COMPANY_NAME = "Signature Smile";
export const PHONE_NUMBER = "(469) 721-6774";
export const ADDRESS = "554 I-30, Royse City, TX 75189";
export const EMAIL = "info@signaturesmiledfw.com";
export const LOGO_URL = "https://signaturesmiledfw.com/wp-content/uploads/2023/02/Signature-Smile-Logo-1024x158.png";
export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.697797398523!2d-96.3453!3d32.9636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864bfe8aa5b52497%3A0x7cdeacd17de9ee11!2sSignature%20Smile%20Family%20Dentistry%20%26%20Orthodontics!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/team" },
  { label: "Services", path: "/services" },
  { label: "New Patients", path: "/patients" },
  { label: "Insurance", path: "/insurance" },
  { label: "Contact", path: "/contact" },
  { label: "Book Online", path: "/contact", isButton: true },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'General & Preventative',
    description: 'Routine cleanings, fillings, and exams to maintain your optimal oral health.',
    icon: Stethoscope,
    category: ServiceCategory.GENERAL,
  },
  {
    id: '2',
    title: 'Cosmetic Dentistry',
    description: 'Veneers, whitening, and aesthetic bonding to transform your smile.',
    icon: Sparkles,
    category: ServiceCategory.COSMETIC,
  },
  {
    id: '3',
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth that restore function and confidence.',
    icon: Activity,
    category: ServiceCategory.SURGICAL,
  },
  {
    id: '4',
    title: 'Orthodontics',
    description: 'Braces and clear aligners for children, teens, and adults.',
    icon: Smile,
    category: ServiceCategory.ORTHODONTIC,
  },
  {
    id: '5',
    title: 'Pediatric Dentistry',
    description: 'Gentle dental care designed specifically for children of all ages.',
    icon: Baby,
    category: ServiceCategory.PEDIATRIC,
  },
  {
    id: '6',
    title: 'Sedation Dentistry',
    description: 'Anxiety-free experiences for patients who feel nervous about treatment.',
    icon: ShieldCheck,
    category: ServiceCategory.GENERAL,
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. M. Raghid Alolabi',
    title: 'Orthodontist',
    // Professional light-skinned Arab male dentist
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    bio: 'Dr. Alolabi specializes in creating perfect smiles through modern orthodontic techniques, ensuring every patient leaves with confidence.'
  },
  {
    id: '2',
    name: 'Dr. Firas Junaid',
    title: 'General & Cosmetic Dentistry',
    // High-quality provided image - Dr. Junaid in navy scrubs
    image: '/images/dr-junaid.jpg',
    bio: 'With a passion for aesthetic restorative care, Dr. Junaid combines artistry with clinical excellence to enhance your natural smile.'
  },
  {
    id: '3',
    name: 'Dr. Joshua Cooper',
    title: 'Dental Surgery',
    // High-resolution provided image - Dr. Cooper in light blue scrubs
    image: '/images/dr-joshua-cooper.jpg',
    bio: 'Dr. Cooper provides expert surgical care, including implants and extractions, with a focus on patient comfort and quick recovery.'
  },
  {
    id: '4',
    name: 'Dr. Patricia Heritier',
    title: 'General Dentist',
    // Professional white female dentist
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    bio: 'Dr. Heritier is dedicated to providing gentle, comprehensive dental care for the entire family in a warm environment.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Jason Myers',
    text: 'I’ve currently got five crowns in my mouth. I did it all in Signature Smile, and I have nothing to complain about. I didn’t have any cold or heat sensitivity. This place is absolutely good.',
    rating: 5
  },
  {
    id: '2',
    name: 'Barry Dave',
    text: 'My daughter was so comfortable with the GREAT staff at Signature Smile that she honestly slept through the whole process. Dr. Alolabi & his staff are just AMAZING!',
    rating: 5
  },
  {
    id: '3',
    name: 'Aron Woody',
    text: 'I honestly could not be happier with every visit I have had to Signature Smile. From my first consultation, to wisdom tooth removal. Everything was always explained so well.',
    rating: 5
  }
];
