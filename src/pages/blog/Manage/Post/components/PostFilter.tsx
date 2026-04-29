
import { Button, Input, Select } from 'antd';
import type { PostStatus } from '@/types/post';

interface Props {
  keyword: string;
  status: PostStatus | 'all';
  onKeywordChange: (value: string) => void;
  onStatusChange: (value: PostStatus | 'all') => void;
  onCreate: () => void;
}

export default function PostFilter({
  keyword,
  status,
  onKeywordChange,
  onStatusChange,
  onCreate,
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        justifyContent: 'space-between',
        marginBottom: 16,
      }}
    >
      <div style={{ display: 'flex', gap: 12 }}>
        <Input.Search
          allowClear
          placeholder="Tìm theo tiêu đề"
          value={keyword}
          onChange={(event) => onKeywordChange(event.target.value)}
          style={{ width: 280 }}
        />

        <Select value={status} onChange={onStatusChange} style={{ width: 180 }}>
          <Select.Option value="all">Tất cả</Select.Option>
          <Select.Option value="draft">Nháp</Select.Option>
          <Select.Option value="published">Đã đăng</Select.Option>
        </Select>
      </div>

      <Button type="primary" onClick={onCreate}>
        Thêm bài viết
      </Button>
    </div>
  );
}