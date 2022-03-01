export type BlogPost = {
  id: number;
  title: string;
  content: string;
  cover?: string;
  tags: string[];
  readingTime: string;
  slug: string;
  date: string;
};
