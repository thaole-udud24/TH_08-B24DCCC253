import React, { useMemo } from 'react';
import { Button, Popconfirm, Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'umi';
import type { ColumnsType } from 'antd/es/table';
import type { CourseItem } from '@/services/courseManagement/course/typings';
import { STATUS_LABEL_MAP } from '@/services/courseManagement/constant';
import CommonCard from '../../components/CommonCard';

const getStatusColor = (status: string): string => {
  if (status === 'OPEN') return 'green';
  if (status === 'CLOSED') return 'red';
  return 'gold';
};

const CourseTable: React.FC = () => {
  const dispatch = useDispatch();
  const courseState = useSelector((state: any) => state['courseManagement.course']);

  const dataSource = useMemo(() => {
    const list: CourseItem[] = courseState?.courses || [];
    const keyword = (courseState?.keyword || '').trim().toLowerCase();
    const teacher = courseState?.teacher;
    const status = courseState?.status;

    return list
      .filter((item) => item.name.toLowerCase().includes(keyword))
      .filter((item) => (teacher ? item.teacher === teacher : true))
      .filter((item) => (status ? item.status === status : true));
  }, [courseState]);

  const columns: ColumnsType<CourseItem> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100,
    },
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
      sorter: (a, b) => a.studentCount - b.studentCount,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: 150,
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>{STATUS_LABEL_MAP[status] || status}</Tag>
      ),
    },
    {
      title: 'Thao tác',
      width: 180,
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            onClick={() =>
              dispatch({
                type: 'courseManagement.course/setModal',
                payload: { visible: true, record },
              })
            }
          >
            Sửa
          </Button>

          <Popconfirm
            title="Xác nhận xóa khóa học?"
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={() =>
              dispatch({
                type: 'courseManagement.course/delete',
                payload: record.id,
              })
            }
          >
            <Button type="link" danger>
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <CommonCard title="Danh sách khóa học">
      <Table<CourseItem>
        rowKey="id"
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 6 }}
        scroll={{ x: 900 }}
      />
    </CommonCard>
  );
};

export default CourseTable;