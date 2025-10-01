import type { ContactInfo } from "./common";

/**
 * Contact page data types
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export interface Office {
  id: string;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  hours?: {
    weekday: string;
    weekend: string;
  };
  image?: {
    url: string;
    alt: string;
  };
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  contactInfo: ContactInfo;
  offices: Office[];
  faqs: FAQ[];
  serviceOptions: string[];
}
