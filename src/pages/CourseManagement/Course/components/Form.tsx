import React, { useEffect } from 'react';
import { Form, Input, InputNumber, Select } from 'antd';
import { STATUS_OPTIONS, TEACHER_OPTIONS } from '@/services/courseManagement/constant';
import type { CourseItem } from '@/services/courseManagement/course/typings';

const { TextArea } = Input;

interface Props {
  form: any;
  editingCourse: CourseItem | null;
}

const CourseForm: React.FC<Props> = ({ form, editingCourse }) => {
  useEffect(() => {
    if (editingCourse) {
      form.setFieldsValue({
        name: editingCourse.name,
        teacher: editingCourse.teacher,
        studentCount: editingCourse.studentCount,
        description: editingCourse.description,
        status: editingCourse.status,
      });
      return;
    }

    form.resetFields();
  }, [editingCourse, form]);

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Tên khóa học"
        name="name"
        rules={[
          { required: true, message: 'Vui lòng nhập tên khóa học' },
          { max: 100, message: 'Tên khóa học tối đa 100 ký tự' },
          {
            validator: async (_, value) => {
              if (!value || `${value}`.trim()) return Promise.resolve();
              return Promise.reject(new Error('Tên khóa học không được để trống'));
            },
          },
        ]}
      >
        <Input placeholder="Nhập tên khóa học" />
      </Form.Item>

      <Form.Item
        label="Giảng viên"
        name="teacher"
        rules={[{ required: true, message: 'Vui lòng chọn giảng viên' }]}
      >
        <Select options={TEACHER_OPTIONS} placeholder="Chọn giảng viên" />
      </Form.Item>

      <Form.Item
        label="Số lượng học viên"
        name="studentCount"
        rules={[{ required: true, message: 'Vui lòng nhập số lượng học viên' }]}
      >
        <InputNumber min={0} style={{ width: '100%' }} placeholder="Nhập số lượng học viên" />
      </Form.Item>

      <Form.Item
        label="Mô tả khóa học"
        name="description"
        rules={[{ required: true, message: 'Vui lòng nhập mô tả khóa học' }]}
      >
        <TextArea rows={5} placeholder="Nhập HTML hoặc mô tả khóa học" />
      </Form.Item>

      <Form.Item
        label="Trạng thái"
        name="status"
        rules={[{ required: true, message: 'Vui lòng chọn trạng thái' }]}
      >
        <Select options={STATUS_OPTIONS} placeholder="Chọn trạng thái" />
      </Form.Item>
    </Form>
  );
};

export default CourseForm;