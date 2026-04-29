import { Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-image">
        <div className="about-image-frame">
          <img src="https://i.pravatar.cc/420?img=32" alt="About me" />
        </div>
      </div>

      <div className="about-content">
        <h2>
          About <span>Me</span>
        </h2>

        <p>
          I'm a passionate Full Stack Developer with a strong interest in
          building creative, clean and intuitive web solutions.
        </p>

        <p>
          My journey started when I built my first website in college. Since
          then, I have worked with modern frontend technologies and focused on
          creating user-friendly interfaces.
        </p>

        <div className="stats">
          <div>
            <strong>2+</strong>
            <span>Years Learning</span>
          </div>

          <div>
            <strong>20+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>30+</strong>
            <span>Blog Posts</span>
          </div>
        </div>

        <Button
          type="primary"
          icon={<MailOutlined />}
          href="mailto:lethithao2k6yl@gmail.com"
        >
          Hire Me
        </Button>
      </div>
    </section>
  );
}