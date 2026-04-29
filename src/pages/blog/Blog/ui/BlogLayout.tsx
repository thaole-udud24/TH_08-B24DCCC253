import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function BlogLayout({ children }: Props) {
  return (
    <div className="blog-page">
      <div className="blog-container">
        {children}
      </div>
    </div>
  );
}