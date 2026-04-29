import type { BlogPost } from '@/types/post';
import { mockPosts, POST_STORAGE_KEY } from './mock';

const safeParse = (data: string | null): BlogPost[] => {
  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const readPosts = (): BlogPost[] => {
  const rawData = localStorage.getItem(POST_STORAGE_KEY);

  if (!rawData) {
    localStorage.setItem(POST_STORAGE_KEY, JSON.stringify(mockPosts));
    return mockPosts;
  }

  return safeParse(rawData);
};

const writePosts = (posts: BlogPost[]) => {
  localStorage.setItem(POST_STORAGE_KEY, JSON.stringify(posts));
};

const sortPosts = (posts: BlogPost[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime(),
  );
};

export const getPostsApi = async () => {
  return sortPosts(readPosts());
};

export const createPostApi = async (post: BlogPost) => {
  const posts = readPosts();

  const newPost = {
    ...post,
    id: Date.now() + Math.floor(Math.random() * 1000),
  };

  writePosts([newPost, ...posts]);

  return newPost;
};

export const updatePostApi = async (post: BlogPost) => {
  const posts = readPosts().map((item) =>
    item.id === post.id ? post : item,
  );

  writePosts(posts);

  return post;
};

export const deletePostApi = async (id: number) => {
  const posts = readPosts().filter((item) => item.id !== id);

  writePosts(posts);

  return true;
};

export const increasePostViewApi = async (id: number) => {
  let updatedPost: BlogPost | undefined;

  const posts = readPosts().map((item) => {
    if (item.id === id) {
      updatedPost = {
        ...item,
        views: item.views + 1,
      };
      return updatedPost;
    }
    return item;
  });

  writePosts(posts);

  return updatedPost;
};