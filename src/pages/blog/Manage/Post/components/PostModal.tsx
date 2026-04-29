import { Modal } from 'antd';
import type { BlogPost, PostFormValue } from '@/models/blog/post/types';
import type { BlogTag } from '@/types/tag';
import PostForm from './PostForm';

interface Props {
  visible: boolean;
  editingPost?: BlogPost;
  tags: BlogTag[];
  onCancel: () => void;
  onSubmit: (value: PostFormValue) => void;
}

export default function PostModal({
  visible,
  editingPost,
  tags,
  onCancel,
  onSubmit,
}: Props) {
  return (
    <Modal
      title={editingPost ? 'Sửa bài viết' : 'Thêm bài viết'}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={820}
      destroyOnClose
    >
      <PostForm editingPost={editingPost} tags={tags} onSubmit={onSubmit} />
    </Modal>
  );
}