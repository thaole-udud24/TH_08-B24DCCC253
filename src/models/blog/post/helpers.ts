import type { BlogPost, PostFormValue } from './types';

export const createPostPayload = (value: PostFormValue): BlogPost => ({
  id: Date.now(),
  title: value.title,
  slug: value.slug,
  content: value.content,
  summary: value.summary || value.content.slice(0, 120),
  thumbnail: value.thumbnail,
  tags: value.tags || [],
  status: value.status,
  views: 0,
  createdAt: new Date().toISOString(),
  author: value.author || 'Thảo Lê',
});

export const updatePostPayload = (
  oldPost: BlogPost,
  value: PostFormValue,
): BlogPost => ({
  ...oldPost,
  title: value.title,
  slug: value.slug,
  content: value.content,
  summary: value.summary || value.content.slice(0, 120),
  thumbnail: value.thumbnail,
  tags: value.tags || [],
  status: value.status,
  author: value.author || oldPost.author,
});