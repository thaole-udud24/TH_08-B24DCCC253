import { Avatar, Typography } from 'antd';

interface Props {
  author: string;
}

export default function AuthorInfo({ author }: Props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Avatar src="https://i.pravatar.cc/120?img=5" size={48} />

      <div>
        <Typography.Text strong>{author}</Typography.Text>
        <br />
        <Typography.Text type="secondary">Tác giả Blog</Typography.Text>
      </div>
    </div>
  );
}