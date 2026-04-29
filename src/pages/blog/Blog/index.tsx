import { Typography } from 'antd';
import useBlog from './hooks/useBlog';
import SearchBox from './components/SearchBox';
import TagFilter from './components/TagFilter';
import PostList from './components/PostList';
import Pagination from './components/Pagination';

export default function BlogPage() {
  const {
    posts,
    total,
    tags,
    keyword,
    setKeyword,
    selectedTag,
    setSelectedTag,
    page,
    setPage,
  } = useBlog();

  return (
    <div style={{ padding: 32, background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Typography.Title>Blog cá nhân</Typography.Title>

        <Typography.Paragraph type="secondary">
          Nơi chia sẻ bài viết, kiến thức và kinh nghiệm học tập.
        </Typography.Paragraph>

        <div
          style={{
            background: '#fff',
            padding: 24,
            borderRadius: 20,
            marginBottom: 24,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 16,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <SearchBox value={keyword} onChange={setKeyword} />

          <TagFilter
            tags={tags}
            selectedTag={selectedTag}
            onChange={setSelectedTag}
          />
        </div>

        <PostList posts={posts} tags={tags} onTagClick={setSelectedTag} />

        <Pagination page={page} total={total} onChange={setPage} />
      </div>
    </div>
  );
}