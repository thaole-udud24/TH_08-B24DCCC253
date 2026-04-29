import { Button, Form, Input } from 'antd';
import { useEffect } from 'react';
import type { BlogTag, TagFormValue } from '@/models/blog/tag/types';

interface Props {
  editingTag?: BlogTag;
  onSubmit: (value: TagFormValue) => void;
}

export default function TagForm({ editingTag, onSubmit }: Props) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: editingTag?.name || '',
    });
  }, [editingTag]);

  return (
    <Form layout="vertical" form={form} onFinish={onSubmit}>
      <Form.Item
        name="name"
        label="Tên thẻ"
        rules={[{ required: true, message: 'Nhập tên thẻ' }]}
      >
        <Input placeholder="Nhập tên thẻ" />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Lưu
      </Button>
    </Form>
  );
}