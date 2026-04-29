import './styles.less';

export default function TagLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="tag-page">
      <div className="tag-container">{children}</div>
    </div>
  );
}