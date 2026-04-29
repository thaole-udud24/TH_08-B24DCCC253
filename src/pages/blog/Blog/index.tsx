import { Typography } from 'antd';
import useBlog from './hooks/useBlog';
import SearchBox from './components/SearchBox';
import TagFilter from './components/TagFilter';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import BlogLayout from './ui/BlogLayout';
import './styles.less';

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
    <BlogLayout>
      <div className="blog-header">
        <Typography.Title level={2} className="blog-title">
          Blog cá nhân
        </Typography.Title>

        <Typography.Paragraph type="secondary" className="blog-desc">
          Nơi chia sẻ bài viết, kiến thức và kinh nghiệm học tập.
        </Typography.Paragraph>
      </div>

      <div className="blog-filter">
        <SearchBox value={keyword} onChange={setKeyword} />

        <TagFilter
          tags={tags}
          selectedTag={selectedTag}
          onChange={setSelectedTag}
        />
      </div>

      <PostList
        posts={posts}
        tags={tags}
        onTagClick={setSelectedTag}
      />

      <div className="blog-pagination">
        <Pagination
          page={page}
          total={total}
          onChange={setPage}
        />
      </div>
    </BlogLayout>
  );
}