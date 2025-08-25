export interface PortfolioVideo {
  id: string;
  title: string;
  description: string;
  // Video source - either YouTube or Instagram
  platform: 'youtube' | 'instagram';
  // YouTube fields
  youtubeId?: string;
  youtubeUrl?: string;
  // Instagram fields
  instagramId?: string;
  instagramUrl?: string;
  // Common fields
  thumbnail: string;
  duration?: string;
  views?: string;
  category: 'Documentary' | 'Podcast' | 'Commercial' | 'Creative' | 'Showreel' | 'Social Media';
  tags: string[];
  role: string;
  technologies: string[];
  client?: string;
  year: number;
  featured: boolean;
  testimonial?: {
    name: string;
    role: string;
    company: string;
    quote: string;
  };
}

export interface Skill {
  name: string;
  level: number;
  category: 'Video Production' | 'Audio Production' | 'Design & Graphics' | 'Technical';
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  technologies?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar?: string;
  projectId?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
    image: string;
  };
}

export interface FilterOptions {
  category: string[];
  tags: string[];
  search: string;
  sortBy: 'recent' | 'popular' | 'featured' | 'alphabetical';
}
