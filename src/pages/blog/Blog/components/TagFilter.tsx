import { Tag } from 'antd';
import type { BlogTag } from '@/types/tag';

interface Props {
  tags: BlogTag[];
  selectedTag?: number;
  onChange: (id?: number) => void;
}

export default function TagFilter({ tags, selectedTag, onChange }: Props) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag
        color={!selectedTag ? 'blue' : 'default'}
        style={{ cursor: 'pointer', padding: '6px 12px' }}
        onClick={() => onChange(undefined)}
      >
        Tất cả
      </Tag>

      {tags.map((item) => (
        <Tag
          key={item.id}
          color={selectedTag === item.id ? 'blue' : 'default'}
          style={{ cursor: 'pointer', padding: '6px 12px' }}
          onClick={() => onChange(item.id)}
        >
          {item.name}
        </Tag>
      ))}
    </div>
  );
}