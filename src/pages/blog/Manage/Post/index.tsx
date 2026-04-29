import { Card, Typography } from 'antd';
import usePostManage from './hooks/usePostManage';
import PostFilter from './components/PostFilter';
import PostTable from './components/PostTable';
import PostModal from './components/PostModal';

export default function ManagePostPage() {
  const {
    dataSource,
    tags,
    keyword,
    setKeyword,
    status,
    setStatus,
    editingPost,
    formVisible,
    openCreate,
    openEdit,
    closeForm,
    submitForm,
    removePost,
  } = usePostManage();

  return (
    <div style={{ padding: 32, background: '#f8fafc', minHeight: '100vh' }}>
      <Card style={{ borderRadius: 20 }}>
        <Typography.Title level={2}>Quản lý bài viết</Typography.Title>

        <PostFilter
          keyword={keyword}
          status={status}
          onKeywordChange={setKeyword}
          onStatusChange={setStatus}
          onCreate={openCreate}
        />

        <PostTable
          dataSource={dataSource}
          tags={tags}
          onEdit={openEdit}
          onDelete={removePost}
        />

        <PostModal
          visible={formVisible}
          editingPost={editingPost}
          tags={tags}
          onCancel={closeForm}
          onSubmit={submitForm}
        />
      </Card>
    </div>
  );
}