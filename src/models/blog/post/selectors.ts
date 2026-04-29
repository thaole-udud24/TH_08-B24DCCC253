import type { BlogPost, PostFilter } from './types';

export const getPublishedPosts = (posts: BlogPost[]) => {
  return posts.filter((item) => item.status === 'published');
};

export const filterPosts = (posts: BlogPost[], filter: PostFilter) => {
  const keyword = filter.keyword.trim().toLowerCase();

  return posts
    .filter((item) => {
      if (!keyword) return true;
      return (
        item.title.toLowerCase().includes(keyword) ||
        item.summary.toLowerCase().includes(keyword)
      );
    })
    .filter((item) => {
      if (!filter.tagId) return true;
      return item.tags.includes(filter.tagId);
    })
    .filter((item) => {
      if (!filter.status || filter.status === 'all') return true;
      return item.status === filter.status;
    });
};

export const paginatePosts = (
  posts: BlogPost[],
  page: number,
  pageSize = 9,
) => {
  const start = (page - 1) * pageSize;
  return posts.slice(start, start + pageSize);
};

export const findPostBySlug = (posts: BlogPost[], slug?: string) => {
  return posts.find((item) => item.slug === slug);
};

export const getRelatedPosts = (posts: BlogPost[], current?: BlogPost) => {
  if (!current) return [];

  return posts
    .filter((item) => item.status === 'published')
    .filter((item) => item.id !== current.id)
    .filter((item) => item.tags.some((tagId) => current.tags.includes(tagId)))
    .slice(0, 3);
};