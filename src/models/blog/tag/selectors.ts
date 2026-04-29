import type { BlogPost } from '@/types/post';
import type { BlogTag } from './types';

export const getTagName = (tags: BlogTag[], id: number) => {
  return tags.find((item) => item.id === id)?.name || 'Không rõ';
};

export const countPostByTag = (posts: BlogPost[], tagId: number) => {
  return posts.filter((item) => item.tags.includes(tagId)).length;
};