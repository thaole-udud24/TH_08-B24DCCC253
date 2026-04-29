import { Card, Typography } from 'antd';
import { history } from 'umi';
import type { BlogPost } from '@/types/post';

interface Props {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: Props) {
  if (!posts.length) return null;

  return (
    <div style={{ marginTop: 40 }}>
      <Typography.Title level={3}>Bài viết liên quan</Typography.Title>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}
      >
        {posts.map((item) => (
          <Card
            key={item.id}
            hoverable
            style={{ cursor: 'pointer' }}
            onClick={() =>
              history.push(`/blog/post-detail?slug=${item.slug}`)
            }
          >
            <Typography.Title level={5}>{item.title}</Typography.Title>

            <Typography.Paragraph type="secondary">
              {item.summary}
            </Typography.Paragraph>
          </Card>
        ))}
      </div>
    </div>
  );
}