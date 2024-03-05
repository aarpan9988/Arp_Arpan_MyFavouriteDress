export interface Content {
    emit(newContentItem: Content): unknown;
    id: number;
    title: string;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string;
    tags?: string[];
  }