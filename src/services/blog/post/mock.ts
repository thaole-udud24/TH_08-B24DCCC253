import type { BlogPost, PostStatus } from '@/types/post';

export const POST_STORAGE_KEY = 'TH08_BLOG_POSTS';

const getStatus = (index: number): PostStatus => {
  return index % 4 === 0 ? 'draft' : 'published';
};

export const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: 'React cơ bản cho người mới',
    slug: 'react-co-ban-cho-nguoi-moi',
    summary:
      'Tìm hiểu component, props, state và cách xây dựng giao diện React.',
    content: `# React cơ bản

React là thư viện JavaScript dùng để xây dựng giao diện người dùng.

## Nội dung chính

- Component
- Props
- State
- Event handling

React giúp chia giao diện thành nhiều phần nhỏ dễ quản lý.`,
    thumbnail:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900',
    tags: [1, 2],
    status: 'published',
    views: 12,
    createdAt: '2024-02-01T08:00:00.000Z',
    author: 'Thảo Lê',
  },
  {
    id: 2,
    title: 'TypeScript trong dự án React',
    slug: 'typescript-trong-du-an-react',
    summary:
      'Cách dùng type, interface và generic để code React an toàn hơn.',
    content: `# TypeScript trong React

TypeScript giúp kiểm soát kiểu dữ liệu tốt hơn.

## Lợi ích

- Giảm lỗi runtime
- Dễ bảo trì
- Code rõ ràng hơn`,
    thumbnail:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900',
    tags: [2],
    status: 'published',
    views: 8,
    createdAt: '2024-02-02T08:00:00.000Z',
    author: 'Thảo Lê',
  },
  {
    id: 3,
    title: 'Tối ưu giao diện Blog cá nhân',
    slug: 'toi-uu-giao-dien-blog-ca-nhan',
    summary:
      'Một số nguyên tắc giúp giao diện blog hiện đại, dễ đọc và đẹp hơn.',
    content: `# Tối ưu UI Blog

Một giao diện tốt cần rõ ràng, dễ đọc và có khoảng trắng hợp lý.

## Gợi ý

- Dùng card
- Màu sắc thống nhất
- Typography rõ ràng
- Nội dung dễ quét`,
    thumbnail:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900',
    tags: [3],
    status: 'published',
    views: 21,
    createdAt: '2024-02-03T08:00:00.000Z',
    author: 'Thảo Lê',
  },
  ...Array.from({ length: 12 }).map((_, index): BlogPost => ({
    id: index + 4,
    title: `Bài viết Blog số ${index + 4}`,
    slug: `bai-viet-blog-so-${index + 4}`,
    summary: `Tóm tắt nội dung bài viết số ${index + 4}.`,
    content: `# Bài viết số ${index + 4}

Đây là nội dung markdown của bài viết.

## Nội dung

- Ý chính 1
- Ý chính 2
- Ý chính 3`,
    thumbnail: `https://picsum.photos/seed/blog-${index + 4}/900/600`,
    tags: index % 2 === 0 ? [1, 3] : [2, 4],
    status: getStatus(index),
    views: index * 4,
    createdAt: new Date(2024, 1, index + 4).toISOString(),
    author: 'Thảo Lê',
  })),
];