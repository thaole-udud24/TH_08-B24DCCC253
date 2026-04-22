import React from 'react';
import { Button, Col, Input, Row, Select, Space } from 'antd';
import { useDispatch, useSelector } from 'umi';
import { STATUS_OPTIONS, TEACHER_OPTIONS } from '@/services/courseManagement/constant';
import CommonCard from '../../components/CommonCard';

const FilterBar: React.FC = () => {
  const dispatch = useDispatch();
  const courseState = useSelector((state: any) => state['courseManagement.course']);

  return (
    <CommonCard title="Quản lý khóa học">
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={8}>
          <Input
            placeholder="Tìm theo tên khóa học"
            value={courseState?.keyword || ''}
            onChange={(e) =>
              dispatch({
                type: 'courseManagement.course/setFilter',
                payload: { keyword: e.target.value },
              })
            }
          />
        </Col>

        <Col xs={24} md={6}>
          <Select
            allowClear
            placeholder="Chọn giảng viên"
            style={{ width: '100%' }}
            options={TEACHER_OPTIONS}
            value={courseState?.teacher}
            onChange={(value) =>
              dispatch({
                type: 'courseManagement.course/setFilter',
                payload: { teacher: value },
              })
            }
          />
        </Col>

        <Col xs={24} md={6}>
          <Select
            allowClear
            placeholder="Chọn trạng thái"
            style={{ width: '100%' }}
            options={STATUS_OPTIONS}
            value={courseState?.status}
            onChange={(value) =>
              dispatch({
                type: 'courseManagement.course/setFilter',
                payload: { status: value },
              })
            }
          />
        </Col>

        <Col xs={24} md={4}>
          <Space>
            <Button
              type="primary"
              onClick={() =>
                dispatch({
                  type: 'courseManagement.course/setModal',
                  payload: { visible: true, record: null },
                })
              }
            >
              Thêm mới
            </Button>

            <Button onClick={() => dispatch({ type: 'courseManagement.course/resetFilter' })}>
              Reset
            </Button>
          </Space>
        </Col>
      </Row>
    </CommonCard>
  );
};

export default FilterBar;