import { Modal } from 'antd';
import type { BlogTag, TagFormValue } from '@/models/blog/tag/types';
import TagForm from './TagForm';

interface Props {
  visible: boolean;
  editingTag?: BlogTag;
  onCancel: () => void;
  onSubmit: (value: TagFormValue) => void;
}

export default function TagModal({
  visible,
  editingTag,
  onCancel,
  onSubmit,
}: Props) {
  return (
    <Modal
      title={editingTag ? 'Sửa thẻ' : 'Thêm thẻ'}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      destroyOnClose
    >
      <TagForm editingTag={editingTag} onSubmit={onSubmit} />
    </Modal>
  );
}