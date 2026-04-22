import React from 'react';
import { Table, Tag } from 'antd';
import { useSelector } from 'umi';
import type { ColumnsType } from 'antd/es/table';
import type { RootState } from '@/models/courseManagement/typing';
import type { CourseItem } from '@/services/courseManagement/course/typings';
import { STATUS_LABEL_MAP } from '@/services/courseManagement/constant';
import CommonCard from '../../components/CommonCard';

const DashboardTable: React.FC = () => {
  const courses = useSelector(
    (state: RootState) => state.courseManagement?.course?.courses || [],
  ) as CourseItem[];

  const topCourses = [...courses]
    .sort((a: CourseItem, b: CourseItem) => b.studentCount - a.studentCount)
    .slice(0, 5);

  const columns: ColumnsType<CourseItem> = [
    {
      title: 'Tên khóa học',
      dataIndex: 'name',
    },
    {
      title: 'Giảng viên',
      dataIndex: 'teacher',
      width: 180,
    },
    {
      title: 'Số học viên',
      dataIndex: 'studentCount',
      width: 140,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: 150,
      render: (status: string) => <Tag>{STATUS_LABEL_MAP[status] || status}</Tag>,
    },
  ];

  return (
    <CommonCard title="Top khóa học nổi bật">
      <Table<CourseItem>
        rowKey="id"
        columns={columns}
        dataSource={topCourses}
        pagination={false}
        scroll={{ x: 700 }}
      />
    </CommonCard>
  );
};

export default DashboardTable;