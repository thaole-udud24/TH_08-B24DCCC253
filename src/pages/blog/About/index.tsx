import { useState } from 'react';
import { Button } from 'antd';
import HeroSection from './components/HeroSection';
import SkillMarquee from './components/SkillMarquee';
import ProfileTabs from './components/ProfileTabs';
import AboutSection from './components/AboutSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import LanguageSection from './components/LanguageSection';
import FloatingDecor from './components/FloatingDecor';
import './styles.less';

export default function AboutPage() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`portfolio-page ${dark ? 'dark' : ''}`}>
      <div className="portfolio-wrapper">
        <div className="theme-toggle">
          <Button shape="circle" onClick={() => setDark(!dark)}>
            {dark ? '☀️' : '🌙'}
          </Button>
        </div>

        <FloatingDecor />

        <div className="portfolio-container">
          <HeroSection />
          <SkillMarquee />
          <ProfileTabs />
          <AboutSection />
          <ExperienceTimeline />
          <LanguageSection />
        </div>
      </div>
    </div>
  );
}