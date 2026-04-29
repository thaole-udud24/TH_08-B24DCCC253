import { useEffect, useMemo, useState } from 'react';
import { message } from 'antd';
import {
  createPost,
  deletePost,
  fetchPosts,
  updatePost,
} from '@/models/blog/post/actions';
import { filterPosts } from '@/models/blog/post/selectors';
import { fetchTags } from '@/models/blog/tag/actions';
import type {
  BlogPost,
  PostFormValue,
  PostStatus,
} from '@/models/blog/post/types';
import type { BlogTag } from '@/types/tag';

export default function usePostManage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [keyword, setKeyword] = useState('');
  const [status, setStatus] = useState<PostStatus | 'all'>('all');
  const [editingPost, setEditingPost] = useState<BlogPost | undefined>();
  const [formVisible, setFormVisible] = useState(false);

  const loadData = async () => {
    const [postData, tagData] = await Promise.all([fetchPosts(), fetchTags()]);
    setPosts(postData);
    setTags(tagData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const dataSource = useMemo(() => {
    return filterPosts(posts, {
      keyword,
      status,
    });
  }, [posts, keyword, status]);

  const openCreate = () => {
    setEditingPost(undefined);
    setFormVisible(true);
  };

  const openEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormVisible(true);
  };

  const closeForm = () => {
    setEditingPost(undefined);
    setFormVisible(false);
  };

  const submitForm = async (value: PostFormValue) => {
    if (editingPost) {
      await updatePost(editingPost, value);
      message.success('Cập nhật bài viết thành công');
    } else {
      await createPost(value);
      message.success('Thêm bài viết thành công');
    }

    closeForm();
    loadData();
  };

  const removePost = async (id: number) => {
    await deletePost(id);
    message.success('Xóa bài viết thành công');
    loadData();
  };

  return {
    dataSource,
    tags,
    keyword,
    setKeyword,
    status,
    setStatus,
    editingPost,
    formVisible,
    openCreate,
    openEdit,
    closeForm,
    submitForm,
    removePost,
  };
}