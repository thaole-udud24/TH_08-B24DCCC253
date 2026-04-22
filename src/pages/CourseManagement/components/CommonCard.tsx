import React from 'react';
import { Card } from 'antd';

interface Props {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
}

const CommonCard: React.FC<Props> = ({ title, extra, children, style, bodyStyle }) => {
  return (
    <Card
      title={title}
      extra={extra}
      style={{
        borderRadius: 12,
        boxShadow: '0 6px 18px rgba(15, 23, 42, 0.06)',
        ...style,
      }}
      bodyStyle={bodyStyle}
    >
      {children}
    </Card>
  );
};

export default CommonCard;