import React from 'react';
import { Form, Modal } from 'antd';
import { useDispatch, useSelector } from 'umi';
import type { CourseItem } from '@/services/courseManagement/course/typings';
import CourseForm from './Form';

type FormValues = Omit<CourseItem, 'id' | 'createdAt' | 'updatedAt'>;

const CourseModal: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm<FormValues>();

  const courseState = useSelector((state: any) => state['courseManagement.course']);
  const editingCourse = courseState?.editingCourse || null;
  const visible = !!courseState?.modalVisible;

  const handleCancel = (): void => {
    dispatch({
      type: 'courseManagement.course/setModal',
      payload: { visible: false, record: null },
    });
    form.resetFields();
  };

  const handleSubmit = async (): Promise<void> => {
    const values = await form.validateFields();

    if (editingCourse) {
      dispatch({
        type: 'courseManagement.course/update',
        payload: {
          ...editingCourse,
          ...values,
        },
      });
      return;
    }

    dispatch({
      type: 'courseManagement.course/add',
      payload: values,
    });
  };

  return (
    <Modal
      visible={visible}
      title={editingCourse ? 'Chỉnh sửa khóa học' : 'Thêm mới khóa học'}
      onCancel={handleCancel}
      onOk={handleSubmit}
      destroyOnClose
      okText="Lưu"
      cancelText="Hủy"
    >
      <CourseForm form={form} editingCourse={editingCourse} />
    </Modal>
  );
};

export default CourseModal;