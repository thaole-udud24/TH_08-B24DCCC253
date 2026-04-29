import { Button } from 'antd';
import {
  DownloadOutlined,
  MailOutlined,
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hello-text">Hi, I'm</p>

        <h1>
          Thảo Lê <span>UI/UX Enthusiast</span>
        </h1>

        <p className="hero-desc">
          Full Stack Developer & UI/UX Enthusiast. I create beautiful,
          responsive and functional web applications.
        </p>

        <div className="hero-actions">
          <Button
            type="primary"
            size="large"
            icon={<DownloadOutlined />}
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </Button>

          <Button
            size="large"
            icon={<MailOutlined />}
            href="mailto:lethithao2k6yl@gmail.com"
          >
            Contact Me
          </Button>
        </div>

        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <GithubOutlined />
          </a>

          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <FacebookOutlined />
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedinOutlined />
          </a>

          <a href="mailto:lethithao2k6yl@gmail.com">
            <MailOutlined />
          </a>
        </div>
      </div>

      <div className="hero-avatar-wrap">
        <div className="avatar-ring">
          <img
            src="https://i.pravatar.cc/420?img=47"
            alt="Thảo Lê"
            className="hero-avatar"
          />
        </div>

        <span className="tech-icon ts">TS</span>
        <span className="tech-icon js">JS</span>
        <span className="tech-icon react">⚛</span>
        <span className="tech-icon node">JS</span>
      </div>
    </section>
  );
}