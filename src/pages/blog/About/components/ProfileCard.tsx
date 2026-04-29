import { Avatar, Typography } from 'antd';

export default function ProfileCard() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Avatar src="https://i.pravatar.cc/220?img=5" size={140} />

      <div>
        <Typography.Title>Thảo Lê</Typography.Title>

        <Typography.Paragraph>
          Sinh viên yêu thích lập trình web, React, TypeScript và xây dựng
          giao diện hiện đại, dễ sử dụng.
        </Typography.Paragraph>
      </div>
    </div>
  );
}