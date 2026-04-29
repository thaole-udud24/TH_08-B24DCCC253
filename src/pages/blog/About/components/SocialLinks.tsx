import { Typography } from 'antd';

export default function SocialLinks() {
  return (
    <div style={{ marginTop: 20 }}>
      <Typography.Link href="https://github.com" target="_blank">
        GitHub
      </Typography.Link>
      {' • '}
      <Typography.Link href="https://facebook.com" target="_blank">
        Facebook
      </Typography.Link>
    </div>
  );
}