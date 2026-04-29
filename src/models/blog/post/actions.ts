import {
  createPostApi,
  deletePostApi,
  getPostsApi,
  increasePostViewApi,
  updatePostApi,
} from '@/services/blog/post/api';
import type { BlogPost, PostFormValue } from './types';
import { createPostPayload, updatePostPayload } from './helpers';

export const fetchPosts = async () => {
  return getPostsApi();
};

export const createPost = async (value: PostFormValue) => {
  return createPostApi(createPostPayload(value));
};

export const updatePost = async (post: BlogPost, value: PostFormValue) => {
  return updatePostApi(updatePostPayload(post, value));
};

export const deletePost = async (id: number) => {
  return deletePostApi(id);
};

export const increasePostView = async (id: number) => {
  return increasePostViewApi(id);
};