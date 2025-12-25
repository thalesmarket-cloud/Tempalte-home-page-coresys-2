
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