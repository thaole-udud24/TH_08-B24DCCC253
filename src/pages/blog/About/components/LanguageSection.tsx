const languages = [
  { code: 'VN', percent: '100%', name: 'Vietnamese' },
  { code: 'EN', percent: '75%', name: 'English' },
  { code: 'JS', percent: '90%', name: 'JavaScript' },
  { code: 'TS', percent: '80%', name: 'TypeScript' },
];

export default function LanguageSection() {
  return (
    <section className="language-section">
      <h2>
        Languages <span>I Speak</span>
      </h2>

      <p className="section-desc">
        Communicating with the world in multiple languages.
      </p>

      <div className="language-list">
        {languages.map((item) => (
          <div className="language-circle" key={item.code}>
            <div className="circle-inner">
              <strong>{item.code}</strong>
              <span>{item.percent}</span>
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}