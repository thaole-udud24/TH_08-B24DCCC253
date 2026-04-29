import { Tag, Typography } from 'antd';
import type { BlogPost } from '@/types/post';
import type { BlogTag } from '@/types/tag';
import { formatDate } from '@/utils/formatDate';

interface Props {
  post: BlogPost;
  tags: BlogTag[];
}

export default function PostMeta({ post, tags }: Props) {
  const postTags = tags.filter((tag) => post.tags.includes(tag.id));

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        {postTags.map((tag) => (
          <Tag color="blue" key={tag.id}>
            {tag.name}
          </Tag>
        ))}
      </div>

      <Typography.Text type="secondary">
        {formatDate(post.createdAt)} • {post.views} lượt xem
      </Typography.Text>
    </div>
  );
}