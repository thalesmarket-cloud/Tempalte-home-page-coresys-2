
import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Wallet, 
  Users, 
  Truck, 
  ShoppingCart, 
  Factory, 
  Briefcase
} from 'lucide-react';
import { NavItem, Feature, ValueProp, Industry, KPI, Testimonial, BlogPost } from './types';

export const LOGO_URL = "https://i.ibb.co/h1d8RF88/image.png";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Produit', href: '#product' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Ressources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Gestion Centralisée',
    description: 'Unifiez tous vos processus métier au sein d’une plateforme unique et cohérente.',
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Données & Analytics',
    description: 'Prenez des décisions éclairées grâce à des tableaux de bord interactifs en temps réel.',
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Évolutivité & Performance',
    description: 'Une solution Cloud native conçue pour accompagner la croissance de votre entreprise.',
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Sécurité & Conformité',
    description: 'Vos données sont protégées par les standards de sécurité les plus élevés du marché.',
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
];

export const FEATURES: Feature[] = [
  {
    id: 'finance',
    title: 'Finance & Comptabilité',
    description: 'Maîtrisez votre rentabilité et automatisez vos processus financiers conformes aux normes marocaines.',
    icon: <Wallet className="w-6 h-6" />,
  },
  {
    id: 'hr',
    title: 'Ressources Humaines',
    description: 'Optimisez la gestion de vos talents et simplifiez l’administration du personnel.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 'supply',
    title: 'Supply Chain',
    description: 'Gérez vos stocks et votre logistique avec une précision inégalée.',
    icon: <Truck className="w-6 h-6" />,
  },
  {
    id: 'crm',
    title: 'CRM & Ventes',
    description: 'Boostez votre efficacité commerciale et fidélisez vos clients.',
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    id: 'mfg',
    title: 'Industrie & Fabrication',
    description: 'Planifiez votre production et suivez vos opérations en temps réel.',
    icon: <Factory className="w-6 h-6" />,
  },
  {
    id: 'projects',
    title: 'Gestion de Projets',
    description: 'Pilotez vos activités de services et respectez vos engagements délais.',
    icon: <Briefcase className="w-6 h-6" />,
  },
];

export const INDUSTRIES: Industry[] = [
  { name: 'Industrie', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
  { name: 'Distribution', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800' },
  { name: 'Services', image: 'https://i.pinimg.com/1200x/4b/f6/1f/4bf61f7bec0d6e6d35644df9f76e210e.jpg' },
  { name: 'Retail', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
  { name: 'Grandes Entreprises', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
];

export const KPIS: KPI[] = [
  { label: 'Réduction des coûts', value: '35', suffix: '%' },
  { label: 'Gain de productivité', value: '50', suffix: '%' },
  { label: 'Temps de déploiement', value: '2', suffix: 'x plus rapide' },
  { label: 'Satisfaction client', value: '98', suffix: '%' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Benjelloun',
    role: 'Directeur Financier',
    company: 'Atlas Distribution Group (Casablanca)',
    content: "L'implémentation de Coresys a transformé notre gestion multisites entre Casablanca et Agadir. La conformité fiscale marocaine est parfaitement intégrée, ce qui simplifie nos clôtures.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '2',
    name: 'Yasmine El Mansouri',
    role: 'Responsable Supply Chain',
    company: 'Logistique Tanger Med',
    content: "Pour nos activités au port de Tanger Med, Coresys offre une visibilité sans précédent sur notre chaîne logistique internationale. Un gain de temps considérable pour nos équipes.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '3',
    name: 'Omar Alami',
    role: 'CEO',
    company: 'Maroc Industrie SA',
    content: "C'est l'outil indispensable pour piloter la croissance de notre industrie basée à Kénitra. Coresys allie puissance technique et simplicité, parfaitement adapté aux besoins du marché local.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Transformation digitale au Maroc : Les enjeux de 2025',
    category: 'Stratégie',
    date: '12 Fév 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'IA et ERP : Optimiser la gestion financière des entreprises marocaines',
    category: 'Innovation',
    date: '08 Fév 2025',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Cloud vs On-premise : Quelle infrastructure pour votre PME au Maroc ?',
    category: 'Guide',
    date: '05 Fév 2025',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  }
];
