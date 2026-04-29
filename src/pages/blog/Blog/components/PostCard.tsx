import { Card, Tag, Typography } from 'antd';
import { history } from 'umi';
import type { BlogPost } from '@/types/post';
import type { BlogTag } from '@/types/tag';
import { formatDate } from '@/utils/formatDate';

interface Props {
  post: BlogPost;
  tags: BlogTag[];
  onTagClick: (id: number) => void;
}

export default function PostCard({ post, tags, onTagClick }: Props) {
  const postTags = tags.filter((tag) => post.tags.includes(tag.id));

  return (
    <Card
      hoverable
      style={{
        borderRadius: 18,
        overflow: 'hidden',
        boxShadow: '0 12px 32px rgba(15, 23, 42, 0.08)',
        cursor: 'pointer',
      }}
      onClick={() =>
        history.push(`/blog/post-detail?slug=${post.slug}`)
      }
      cover={
        <img
          src={post.thumbnail}
          alt={post.title}
          style={{ height: 210, objectFit: 'cover' }}
        />
      }
    >
      <Typography.Title level={4}>{post.title}</Typography.Title>

      <Typography.Paragraph type="secondary">
        {post.summary}
      </Typography.Paragraph>

      <div style={{ marginBottom: 12 }}>
        {postTags.map((tag) => (
          <Tag
            color="blue"
            key={tag.id}
            onClick={(event) => {
              event.stopPropagation(); // 🔥 tránh click card
              onTagClick(tag.id);
            }}
            style={{ cursor: 'pointer' }}
          >
            {tag.name}
          </Tag>
        ))}
      </div>

      <Typography.Text type="secondary">
        {post.author} • {formatDate(post.createdAt)} • {post.views} lượt xem
      </Typography.Text>
    </Card>
  );
}