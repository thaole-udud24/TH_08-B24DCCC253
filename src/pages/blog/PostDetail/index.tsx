import { Empty, Typography } from 'antd';
import usePostDetail from './hooks/usePostDetail';
import MarkdownViewer from './components/MarkdownViewer';
import AuthorInfo from './components/AuthorInfo';
import RelatedPosts from './components/RelatedPosts';
import PostMeta from './components/PostMeta';
import BackButton from './components/BackButton';

export default function PostDetailPage() {
  const { post, tags, relatedPosts } = usePostDetail();

  if (!post) {
    return <Empty style={{ marginTop: 80 }} description="Không tìm thấy bài viết" />;
  }

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: 32 }}>
      <div
        style={{
          maxWidth: 980,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 24,
          padding: 32,
        }}
      >
        <BackButton />

        <Typography.Title style={{ marginTop: 24 }}>
          {post.title}
        </Typography.Title>

        <PostMeta post={post} tags={tags} />

        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <AuthorInfo author={post.author} />
        </div>

        <img
          src={post.thumbnail}
          alt={post.title}
          style={{
            width: '100%',
            maxHeight: 420,
            objectFit: 'cover',
            borderRadius: 20,
            marginBottom: 32,
          }}
        />

        <MarkdownViewer content={post.content} />

        <RelatedPosts posts={relatedPosts} />
      </div>
    </div>
  );
}