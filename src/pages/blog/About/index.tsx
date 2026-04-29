import { Card } from 'antd';
import ProfileCard from './components/ProfileCard';
import SkillList from './components/SkillList';
import SocialLinks from './components/SocialLinks';

export default function AboutPage() {
  return (
    <div style={{ padding: 32, background: '#f8fafc', minHeight: '100vh' }}>
      <Card
        style={{
          maxWidth: 860,
          margin: '0 auto',
          borderRadius: 24,
          boxShadow: '0 12px 32px rgba(15, 23, 42, 0.08)',
        }}
      >
        <ProfileCard />
        <SkillList />
        <SocialLinks />
      </Card>
    </div>
  );
}