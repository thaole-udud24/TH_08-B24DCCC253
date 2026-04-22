import React from 'react';
import { Col, Row, Statistic } from 'antd';
import {
  BookOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { useSelector } from 'umi';
import type { CourseItem } from '@/services/courseManagement/course/typings';
import CommonCard from '../../components/CommonCard';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <CommonCard
      style={{
        borderRadius: 16,
        boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Statistic
          title={
            <span style={{ fontWeight: 500, color: '#6b7280' }}>
              {title}
            </span>
          }
          value={value}
          valueStyle={{
            fontSize: 26,
            fontWeight: 600,
            color: '#1f2937',
          }}
        />

        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: `${color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            color,
          }}
        >
          {icon}
        </div>
      </div>
    </CommonCard>
  );
};

const Overview: React.FC = () => {
  const courses = useSelector(
    (state: any) => state['courseManagement.course']?.courses || [],
  ) as CourseItem[];

  const totalCourses = courses.length;
  const totalStudents = courses.reduce((sum, item) => sum + item.studentCount, 0);
  const totalOpen = courses.filter((item) => item.status === 'OPEN').length;
  const totalClosed = courses.filter((item) => item.status === 'CLOSED').length;

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={12} xl={6}>
        <StatCard
          title="Tổng khóa học"
          value={totalCourses}
          icon={<BookOutlined />}
          color="#1677ff"
        />
      </Col>

      <Col xs={24} md={12} xl={6}>
        <StatCard
          title="Tổng học viên"
          value={totalStudents}
          icon={<TeamOutlined />}
          color="#52c41a"
        />
      </Col>

      <Col xs={24} md={12} xl={6}>
        <StatCard
          title="Đang mở"
          value={totalOpen}
          icon={<CheckCircleOutlined />}
          color="#faad14"
        />
      </Col>

      <Col xs={24} md={12} xl={6}>
        <StatCard
          title="Đã kết thúc"
          value={totalClosed}
          icon={<CloseCircleOutlined />}
          color="#ff4d4f"
        />
      </Col>
    </Row>
  );
};

export default Overview;