export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
  category: string;
  photographer?: string;
}

export interface GallerySection {
  id: string;
  title: string;
  subtitle: string;
  images: GalleryImage[];
}