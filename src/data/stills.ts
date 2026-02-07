import stillsContent from '../../content/stills.json';

export interface Still {
  id: string;
  src: string;
  alt: string;
  project: string;
  aspect?: 'landscape' | 'portrait';
}

export const stills: Still[] = stillsContent.stills as Still[];
