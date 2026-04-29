import {
  createTagApi,
  deleteTagApi,
  getTagsApi,
  updateTagApi,
} from '@/services/blog/tag/api';
import type { BlogTag, TagFormValue } from './types';

export const fetchTags = async () => {
  return getTagsApi();
};

export const createTag = async (value: TagFormValue) => {
  const payload: BlogTag = {
    id: Date.now(),
    name: value.name,
  };

  return createTagApi(payload);
};

export const updateTag = async (tag: BlogTag, value: TagFormValue) => {
  return updateTagApi({
    ...tag,
    name: value.name,
  });
};

export const deleteTag = async (id: number) => {
  return deleteTagApi(id);
};