const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Personal Projects',
    desc: 'Xây dựng giao diện React, quản lý state, responsive layout và tối ưu UX.',
  },
  {
    title: 'React Developer',
    company: 'University Practice',
    desc: 'Làm việc với TypeScript, Ant Design, API service và mô hình tách layer.',
  },
  {
    title: 'UI/UX Learner',
    company: 'Self Learning',
    desc: 'Thiết kế giao diện hiện đại, clean layout, dashboard và blog system.',
  },
  {
    title: 'Full Stack Practice',
    company: 'Course Projects',
    desc: 'Thực hành Node.js, REST API, localStorage mock API và CRUD logic.',
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="experience-section">
      <h2>
        My <span>Experience</span>
      </h2>

      <p className="section-desc">
        My professional journey and educational background in web development.
      </p>

      <div className="timeline-wrap">
        <div className="timeline-center">
          <img src="https://i.pravatar.cc/360?img=44" alt="timeline" />
          <div className="journey-badge">2+ Years Journey</div>
        </div>

        <div className="timeline-grid">
          {experiences.map((item, index) => (
            <div className={`timeline-card card-${index + 1}`} key={item.title}>
              <h3>{item.title}</h3>
              <strong>{item.company}</strong>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}