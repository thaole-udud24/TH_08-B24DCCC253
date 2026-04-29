import type { BlogPost } from './types';

export interface PostState {
  posts: BlogPost[];
  loading: boolean;
  keyword: string;
  selectedTag?: number;
  page: number;
  pageSize: number;
}

export const initialPostState: PostState = {
  posts: [],
  loading: false,
  keyword: '',
  selectedTag: undefined,
  page: 1,
  pageSize: 9,
};