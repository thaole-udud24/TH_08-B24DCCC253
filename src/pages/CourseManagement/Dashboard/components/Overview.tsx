import React from 'react';
import { Col, Row, Statistic } from 'antd';
import { useSelector } from 'umi';
import type { CourseItem } from '@/services/courseManagement/course/typings';
import CommonCard from '../../components/CommonCard';

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
        <CommonCard>
          <Statistic title="Tổng khóa học" value={totalCourses} />
        </CommonCard>
      </Col>

      <Col xs={24} md={12} xl={6}>
        <CommonCard>
          <Statistic title="Tổng học viên" value={totalStudents} />
        </CommonCard>
      </Col>

      <Col xs={24} md={12} xl={6}>
        <CommonCard>
          <Statistic title="Đang mở" value={totalOpen} />
        </CommonCard>
      </Col>

      <Col xs={24} md={12} xl={6}>
        <CommonCard>
          <Statistic title="Đã kết thúc" value={totalClosed} />
        </CommonCard>
      </Col>
    </Row>
  );
};

export default Overview;