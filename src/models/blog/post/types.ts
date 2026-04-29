import type { BlogPost, PostStatus } from '@/types/post';

export interface PostFilter {
  keyword: string;
  tagId?: number;
  status?: PostStatus | 'all';
}

export interface PostFormValue {
  title: string;
  slug: string;
  content: string;
  summary: string;
  thumbnail: string;
  tags: number[];
  status: PostStatus;
  author: string;
}

export type { BlogPost, PostStatus };