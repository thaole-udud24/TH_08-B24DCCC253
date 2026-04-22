import React from 'react';
import { Col, Row } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { history, useDispatch } from 'umi';
import CommonCard from '../../components/CommonCard';

interface QuickItemProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  color?: string;
}

const QuickItem: React.FC<QuickItemProps> = ({
  icon,
  title,
  onClick,
  color = '#1677ff',
}) => {
  return (
    <div
      onClick={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'scale(0.96)';
        setTimeout(() => {
          el.style.transform = 'scale(1)';
          onClick();
        }, 100);
      }}
      style={{
        cursor: 'pointer',
        textAlign: 'center',
        padding: 22,
        borderRadius: 16,
        background: '#ffffff',
        border: '1px solid #f0f0f0',
        transition: 'all 0.25s ease',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-5px)';
        el.style.boxShadow = '0 10px 24px rgba(0,0,0,0.08)';
        el.style.borderColor = '#d6e4ff';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
        el.style.borderColor = '#f0f0f0';
      }}
    >
      <div
        style={{
          fontSize: 30,
          marginBottom: 12,
          color,
        }}
      >
        {icon}
      </div>

      <div
        style={{
          fontWeight: 600,
          fontSize: 15,
          color: '#1f2937',
        }}
      >
        {title}
      </div>
    </div>
  );
};

const QuickAccess: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <CommonCard
      title="Truy cập nhanh"
      style={{
        borderRadius: 16,
        boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
      }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <QuickItem
            icon={<PlusOutlined />}
            color="#52c41a"
            title="Thêm khóa học"
            onClick={() => {
              history.push('/course-management/course');
              setTimeout(() => {
                dispatch({
                  type: 'courseManagement.course/setModal',
                  payload: { visible: true, record: null },
                });
              }, 100);
            }}
          />
        </Col>

        <Col xs={24} md={8}>
          <QuickItem
            icon={<AppstoreOutlined />}
            color="#1677ff"
            title="Quản lý khóa học"
            onClick={() => history.push('/course-management/course')}
          />
        </Col>

        <Col xs={24} md={8}>
          <QuickItem
            icon={<BarChartOutlined />}
            color="#fa8c16"
            title="Xem dashboard"
            onClick={() => history.push('/course-management/dashboard')}
          />
        </Col>
      </Row>
    </CommonCard>
  );
};

export default QuickAccess;