import { useEffect, useMemo, useState } from 'react';
import { message } from 'antd';
import {
  createTag,
  deleteTag,
  fetchTags,
  updateTag,
} from '@/models/blog/tag/actions';
import { fetchPosts } from '@/models/blog/post/actions';
import { countPostByTag } from '@/models/blog/tag/selectors';
import type { BlogTag, TagFormValue } from '@/models/blog/tag/types';
import type { BlogPost } from '@/types/post';

export default function useTagManage() {
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingTag, setEditingTag] = useState<BlogTag | undefined>();
  const [modalVisible, setModalVisible] = useState(false);

  const loadData = async () => {
    const [tagData, postData] = await Promise.all([fetchTags(), fetchPosts()]);
    setTags(tagData);
    setPosts(postData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const dataSource = useMemo(() => {
    return tags.map((tag) => ({
      ...tag,
      postCount: countPostByTag(posts, tag.id),
    }));
  }, [tags, posts]);

  const openCreate = () => {
    setEditingTag(undefined);
    setModalVisible(true);
  };

  const openEdit = (tag: BlogTag) => {
    setEditingTag(tag);
    setModalVisible(true);
  };

  const closeModal = () => {
    setEditingTag(undefined);
    setModalVisible(false);
  };

  const submitTag = async (value: TagFormValue) => {
    if (editingTag) {
      await updateTag(editingTag, value);
      message.success('Cập nhật thẻ thành công');
    } else {
      await createTag(value);
      message.success('Thêm thẻ thành công');
    }

    closeModal();
    loadData();
  };

  const removeTag = async (id: number) => {
    await deleteTag(id);
    message.success('Xóa thẻ thành công');
    loadData();
  };

  return {
    dataSource,
    editingTag,
    modalVisible,
    openCreate,
    openEdit,
    closeModal,
    submitTag,
    removeTag,
  };
}