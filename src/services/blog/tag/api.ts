import type { BlogTag } from '@/types/tag';
import type { BlogPost } from '@/types/post';
import { POST_STORAGE_KEY } from '../post/mock';
import { mockTags, TAG_STORAGE_KEY } from './mock';

const safeParse = <T>(data: string | null): T[] => {
  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const readTags = (): BlogTag[] => {
  const raw = localStorage.getItem(TAG_STORAGE_KEY);

  if (!raw) {
    localStorage.setItem(TAG_STORAGE_KEY, JSON.stringify(mockTags));
    return mockTags;
  }

  return safeParse<BlogTag>(raw);
};

const writeTags = (tags: BlogTag[]) => {
  localStorage.setItem(TAG_STORAGE_KEY, JSON.stringify(tags));
};

export const getTagsApi = async () => {
  return readTags();
};

export const createTagApi = async (tag: BlogTag) => {
  const tags = readTags();

  const newTag = {
    ...tag,
    id: Date.now() + Math.floor(Math.random() * 1000),
  };

  writeTags([newTag, ...tags]);

  return newTag;
};

export const updateTagApi = async (tag: BlogTag) => {
  const tags = readTags().map((item) =>
    item.id === tag.id ? tag : item,
  );

  writeTags(tags);

  return tag;
};

export const deleteTagApi = async (id: number) => {
  const tags = readTags().filter((item) => item.id !== id);

  writeTags(tags);

  const rawPosts = localStorage.getItem(POST_STORAGE_KEY);
  const posts: BlogPost[] = safeParse<BlogPost>(rawPosts);

  const nextPosts = posts.map((post) => ({
    ...post,
    tags: post.tags.filter((tagId) => tagId !== id),
  }));

  localStorage.setItem(POST_STORAGE_KEY, JSON.stringify(nextPosts));

  return true;
};