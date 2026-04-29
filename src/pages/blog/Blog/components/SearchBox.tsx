import { Input } from 'antd';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: Props) {
  return (
    <Input.Search
      size="large"
      allowClear
      placeholder="Tìm kiếm bài viết..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      style={{ maxWidth: 420 }}
    />
  );
}