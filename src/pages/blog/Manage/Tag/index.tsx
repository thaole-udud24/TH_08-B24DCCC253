import { Button, Card, Typography } from 'antd';
import useTagManage from './hooks/useTagManage';
import TagTable from './components/TagTable';
import TagModal from './components/TagModal';

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
    <div style={{ padding: 32, background: '#f8fafc', minHeight: '100vh' }}>
      <Card style={{ borderRadius: 20 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}
        >
          <Typography.Title level={2}>Quản lý thẻ</Typography.Title>

          <Button type="primary" onClick={openCreate}>
            Thêm thẻ
          </Button>
        </div>

        <TagTable
          dataSource={dataSource}
          onEdit={openEdit}
          onDelete={removeTag}
        />

        <TagModal
          visible={modalVisible}
          editingTag={editingTag}
          onCancel={closeModal}
          onSubmit={submitTag}
        />
      </Card>
    </div>
  );
}