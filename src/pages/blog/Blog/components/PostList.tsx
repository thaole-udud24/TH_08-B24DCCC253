import PostCard from './PostCard';
import EmptyState from './EmptyState';
import type { BlogPost } from '@/types/post';
import type { BlogTag } from '@/types/tag';

interface Props {
  posts: BlogPost[];
  tags: BlogTag[];
  onTagClick: (id: number) => void;
}

export default function PostList({ posts, tags, onTagClick }: Props) {
  if (!posts.length) {
    return <EmptyState />;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: 24,
      }}
    >
      {posts.map((item) => (
        <PostCard
          key={item.id}
          post={item}
          tags={tags}
          onTagClick={onTagClick}
        />
      ))}
    </div>
  );
}