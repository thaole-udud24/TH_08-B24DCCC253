export type PostStatus = 'draft' | 'published';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  summary: string;
  thumbnail: string;
  tags: number[];
  status: PostStatus;
  views: number;
  createdAt: string;
  author: string;
}