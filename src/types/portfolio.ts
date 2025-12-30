export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  completionTime: string;
  budget: string;
  description: string;
  beforeImage?: string;
  afterImage: string;
  features: string[];
  client: string;
}

export type ProjectCategory = 'all' | 'kitchen' | 'living-room' | 'bedroom' | 'bathroom' | 'complete-home';