
// Import React to provide the React namespace for type definitions
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Industry {
  name: string;
  image: string;
}

export interface KPI {
  label: string;
  value: string;
  suffix: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
}
