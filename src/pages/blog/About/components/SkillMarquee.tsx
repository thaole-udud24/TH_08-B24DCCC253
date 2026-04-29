const skills = [
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind',
  'Redux',
  'React Query',
  'Node.js',
  'Express',
  'Ant Design',
];

export default function SkillMarquee() {
  return (
    <div className="skill-marquee">
      {skills.map((item) => (
        <div className="skill-pill" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}