import { Button, Form, Input, Select } from 'antd';
import { useEffect } from 'react';
import type { BlogPost, PostFormValue } from '@/models/blog/post/types';
import type { BlogTag } from '@/types/tag';

interface Props {
  editingPost?: BlogPost;
  tags: BlogTag[];
  onSubmit: (value: PostFormValue) => void;
}

export default function PostForm({ editingPost, tags, onSubmit }: Props) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(
      editingPost || {
        title: '',
        slug: '',
        summary: '',
        content: '',
        thumbnail: '',
        tags: [],
        status: 'draft',
        author: 'Thảo Lê',
      },
    );
  }, [editingPost]);

  return (
    <Form layout="vertical" form={form} onFinish={onSubmit}>
      <Form.Item name="title" label="Tiêu đề" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="slug" label="Slug" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="summary" label="Tóm tắt" rules={[{ required: true }]}>
        <Input.TextArea rows={2} />
      </Form.Item>

      <Form.Item
        name="content"
        label="Nội dung Markdown"
        rules={[{ required: true }]}
      >
        <Input.TextArea rows={8} />
      </Form.Item>

      <Form.Item
        name="thumbnail"
        label="Ảnh đại diện URL"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="author" label="Tác giả" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="tags" label="Thẻ">
        <Select mode="multiple">
          {tags.map((tag) => (
            <Select.Option key={tag.id} value={tag.id}>
              {tag.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="status" label="Trạng thái" rules={[{ required: true }]}>
        <Select>
          <Select.Option value="draft">Nháp</Select.Option>
          <Select.Option value="published">Đã đăng</Select.Option>
        </Select>
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Lưu
      </Button>
    </Form>
  );
}