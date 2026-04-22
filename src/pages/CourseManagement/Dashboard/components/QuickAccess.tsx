import React from 'react';
import { Col, Row } from 'antd';
import { AppstoreOutlined, BarChartOutlined, PlusOutlined } from '@ant-design/icons';
import { history, useDispatch } from 'umi';
import CommonCard from '../../components/CommonCard';

interface QuickItemProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

const QuickItem: React.FC<QuickItemProps> = ({ icon, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        textAlign: 'center',
        padding: 18,
        borderRadius: 10,
        background: '#f8fafc',
        border: '1px solid #eef2f7',
      }}
    >
      <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontWeight: 500 }}>{title}</div>
    </div>
  );
};

const QuickAccess: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <CommonCard title="Truy cập nhanh">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <QuickItem
            icon={<PlusOutlined />}
            title="Thêm khóa học"
            onClick={() => {
              history.push('/course-management/course');
              dispatch({
                type: 'courseManagement.course/setModal',
                payload: { visible: true, record: null },
              });
            }}
          />
        </Col>

        <Col xs={24} md={8}>
          <QuickItem
            icon={<AppstoreOutlined />}
            title="Quản lý khóa học"
            onClick={() => history.push('/course-management/course')}
          />
        </Col>

        <Col xs={24} md={8}>
          <QuickItem
            icon={<BarChartOutlined />}
            title="Xem dashboard"
            onClick={() => history.push('/course-management/dashboard')}
          />
        </Col>
      </Row>
    </CommonCard>
  );
};

export default QuickAccess;