import { Button, Typography } from 'antd';
import useTagManage from './hooks/useTagManage';
import TagTable from './components/TagTable';
import TagModal from './components/TagModal';
import TagLayout from './ui/TagLayout';
import './ui/styles.less';

export default function ManageTagPage() {
  const {
    dataSource,
    editingTag,
    modalVisible,
    openCreate,
    openEdit,
    closeModal,
    submitTag,
    removeTag,
  } = useTagManage();

  return (
    <TagLayout>
      <div className="tag-card">
        <div className="tag-header">
          <Typography.Title level={2} className="tag-title">
            Quản lý thẻ
          </Typography.Title>

          <Button type="primary" onClick={openCreate}>
            Thêm thẻ
          </Button>
        </div>

        <div className="tag-table">
          <TagTable
            dataSource={dataSource}
            onEdit={openEdit}
            onDelete={removeTag}
          />
        </div>

        <TagModal
          visible={modalVisible}
          editingTag={editingTag}
          onCancel={closeModal}
          onSubmit={submitTag}
        />
      </div>
    </TagLayout>
  );
}