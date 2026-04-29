import type { BlogTag } from './types';

export interface TagState {
  tags: BlogTag[];
  loading: boolean;
}

export const initialTagState: TagState = {
  tags: [],
  loading: false,
};