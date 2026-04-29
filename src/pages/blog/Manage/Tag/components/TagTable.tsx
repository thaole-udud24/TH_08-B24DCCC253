import { Button, Space, Table, Tag } from 'antd';
import type { BlogTag } from '@/types/tag';
import DeleteConfirm from './DeleteConfirm';

interface TagRow extends BlogTag {
  postCount: number;
}

interface Props {
  dataSource: TagRow[];
  onEdit: (tag: BlogTag) => void;
  onDelete: (id: number) => void;
}

export default function TagTable({ dataSource, onEdit, onDelete }: Props) {
  return (
    <Table
      rowKey="id"
      dataSource={dataSource}
      columns={[
        {
          title: 'Tên thẻ',
          dataIndex: 'name',
          render: (name) => <Tag color="blue">{name}</Tag>,
        },
        {
          title: 'Số bài viết đang sử dụng',
          dataIndex: 'postCount',
        },
        {
          title: 'Thao tác',
          render: (_, record) => (
            <Space>
              <Button size="small" onClick={() => onEdit(record)}>
                Sửa
              </Button>

              <DeleteConfirm onConfirm={() => onDelete(record.id)} />
            </Space>
          ),
        },
      ]}
    />
  );
}