import { useEffect, useMemo, useState } from 'react';
import { fetchPosts } from '@/models/blog/post/actions';
import {
  filterPosts,
  getPublishedPosts,
  paginatePosts,
} from '@/models/blog/post/selectors';
import { fetchTags } from '@/models/blog/tag/actions';
import { useDebounce } from '@/utils/debounce';
import type { BlogPost } from '@/types/post';
import type { BlogTag } from '@/types/tag';

export default function useBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [keyword, setKeyword] = useState('');
  const [selectedTag, setSelectedTag] = useState<number | undefined>();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const debouncedKeyword = useDebounce(keyword, 300);

  const loadData = async () => {
    setLoading(true);
    const [postData, tagData] = await Promise.all([
      fetchPosts(),
      fetchTags(),
    ]);
    setPosts(postData);
    setTags(tagData);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  // reset page khi filter
  useEffect(() => {
    setPage(1);
  }, [debouncedKeyword, selectedTag]);

  const filteredPosts = useMemo(() => {
    return filterPosts(getPublishedPosts(posts), {
      keyword: debouncedKeyword,
      tagId: selectedTag,
      status: 'published',
    });
  }, [posts, debouncedKeyword, selectedTag]);

  const pagedPosts = useMemo(() => {
    return paginatePosts(filteredPosts, page, 9);
  }, [filteredPosts, page]);

  return {
    posts: pagedPosts,
    total: filteredPosts.length,
    tags,
    keyword,
    setKeyword,
    selectedTag,
    setSelectedTag,
    page,
    setPage,
    loading,
  };
}