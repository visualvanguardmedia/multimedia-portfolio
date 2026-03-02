import stillsContent from '../../content/stills.json';

export interface Still {
  id: string;
  src: string;
  alt: string;
  project: string;
  category?: 'Product' | 'Portrait' | 'Frame';
  aspect?: 'landscape' | 'portrait';
  /** Optional: mark the hero image to represent this project/shoot in the gallery */
  featured?: boolean;
}

export const stills: Still[] = stillsContent.stills as Still[];
