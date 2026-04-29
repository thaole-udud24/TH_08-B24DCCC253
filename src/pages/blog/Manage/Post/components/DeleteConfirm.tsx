import { Button, Popconfirm } from 'antd';

interface Props {
  onConfirm: () => void;
}

export default function DeleteConfirm({ onConfirm }: Props) {
  return (
    <Popconfirm
      title="Bạn chắc chắn muốn xóa?"
      okText="Xóa"
      cancelText="Hủy"
      onConfirm={onConfirm}
    >
      <Button danger size="small">
        Xóa
      </Button>
    </Popconfirm>
  );
}