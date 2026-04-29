import { Button } from 'antd';
import { history } from 'umi';

export default function BackButton() {
  return (
    <Button onClick={() => history.push('/blog/home')}>
      ← Quay lại danh sách
    </Button>
  );
}