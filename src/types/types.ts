export enum SortEnum {
  RELEVANCE = 'relevance',
  NEWEST = 'newest'
}

export enum CategoryEnum {
  ALL = 'all',
  ART = 'art',
  BIOGRAPHY = 'biography',
  COMPUTERS = 'computers',
  HISTORY = 'history',
  MEDICAL = 'medical',
  POETRY = 'poetry'
}

export type BooksResponse = {
  totalItems: number;
  items: Book[];
};

export type Book = {
  volumeInfo: VolumeInfo;
};

export type VolumeInfo = {
  title: string;
  description: string;
  previewLink: string;
  imageLinks: ImageLinks;
  categories: string[];
  authors: string[];
};

export type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};
