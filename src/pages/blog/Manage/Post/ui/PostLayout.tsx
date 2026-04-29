import './styles.less';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="post-page">
      <div className="post-container">{children}</div>
    </div>
  );
}