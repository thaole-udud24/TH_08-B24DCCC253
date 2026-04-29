import { useEffect, useMemo, useState } from 'react';
import { fetchPosts, increasePostView } from '@/models/blog/post/actions';
import {
  findPostBySlug,
  getPublishedPosts,
  getRelatedPosts,
} from '@/models/blog/post/selectors';
import { fetchTags } from '@/models/blog/tag/actions';
import type { BlogPost } from '@/types/post';
import type { BlogTag } from '@/types/tag';

export default function usePostDetail() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);

  const slug = new URLSearchParams(window.location.search).get('slug') || '';

  const loadData = async () => {
    const [postData, tagData] = await Promise.all([fetchPosts(), fetchTags()]);
    setPosts(postData);
    setTags(tagData);
  };

  useEffect(() => {
    loadData();
  }, [slug]);

  useEffect(() => {
    if (!slug) return;

    fetchPosts().then((items) => {
      const currentPost = findPostBySlug(items, slug);

      if (currentPost) {
        increasePostView(currentPost.id).then(loadData);
      }
    });
  }, [slug]);

  const post = useMemo(() => {
    return findPostBySlug(posts, slug);
  }, [posts, slug]);

  const relatedPosts = useMemo(() => {
    return getRelatedPosts(getPublishedPosts(posts), post);
  }, [posts, post]);

  return {
    post,
    tags,
    relatedPosts,
  };
}