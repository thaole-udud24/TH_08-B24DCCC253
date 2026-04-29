import { Typography } from 'antd';
import usePostManage from './hooks/usePostManage';
import PostFilter from './components/PostFilter';
import PostTable from './components/PostTable';
import PostModal from './components/PostModal';
import PostLayout from './ui/PostLayout';
import './ui/styles.less';

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
    <PostLayout>
      <div className="post-card">
        <Typography.Title level={2} className="post-title">
          Quản lý bài viết
        </Typography.Title>

        <div className="post-filter">
          <PostFilter
            keyword={keyword}
            status={status}
            onKeywordChange={setKeyword}
            onStatusChange={setStatus}
            onCreate={openCreate}
          />
        </div>

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
      </div>
    </PostLayout>
  );
}