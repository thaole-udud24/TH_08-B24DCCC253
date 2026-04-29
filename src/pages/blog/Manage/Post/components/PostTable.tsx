import { Button, Space, Table, Tag } from 'antd';
import type { BlogPost } from '@/types/post';
import type { BlogTag } from '@/types/tag';
import { formatDate } from '@/utils/formatDate';
import DeleteConfirm from './DeleteConfirm';

interface Props {
  dataSource: BlogPost[];
  tags: BlogTag[];
  onEdit: (post: BlogPost) => void;
  onDelete: (id: number) => void;
}

export default function PostTable({
  dataSource,
  tags,
  onEdit,
  onDelete,
}: Props) {
  return (
    <Table
      rowKey="id"
      dataSource={dataSource}
      pagination={{ pageSize: 8 }}
      columns={[
        {
          title: 'Tiêu đề',
          dataIndex: 'title',
        },
        {
          title: 'Trạng thái',
          dataIndex: 'status',
          render: (status) => (
            <Tag color={status === 'published' ? 'green' : 'orange'}>
              {status === 'published' ? 'Đã đăng' : 'Nháp'}
            </Tag>
          ),
        },
        {
          title: 'Thẻ',
          dataIndex: 'tags',
          render: (tagIds: number[]) =>
            tags
              .filter((tag) => tagIds.includes(tag.id))
              .map((tag) => <Tag key={tag.id}>{tag.name}</Tag>),
        },
        {
          title: 'Lượt xem',
          dataIndex: 'views',
        },
        {
          title: 'Ngày tạo',
          dataIndex: 'createdAt',
          render: formatDate,
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