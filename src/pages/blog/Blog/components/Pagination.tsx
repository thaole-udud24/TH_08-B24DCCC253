import { Pagination as AntPagination } from 'antd';

interface Props {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, total, onChange }: Props) {
  return (
    <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center' }}>
      <AntPagination
        current={page}
        pageSize={9}
        total={total}
        onChange={onChange}
        showSizeChanger={false}
      />
    </div>
  );
}