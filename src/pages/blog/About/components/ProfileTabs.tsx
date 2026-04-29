import { Tabs } from 'antd';
import PhotoGrid from './PhotoGrid';

const { TabPane } = Tabs;

export default function ProfileTabs() {
  return (
    <div className="profile-tabs">
      <Tabs defaultActiveKey="about">
        <TabPane tab="Posts" key="posts">
          <div className="tab-card">
            <h3>Bài viết nổi bật</h3>
            <p>
              Chia sẻ kiến thức React, TypeScript, UI/UX và kinh nghiệm
              xây dựng sản phẩm web.
            </p>
          </div>
        </TabPane>

        <TabPane tab="About" key="about">
          <div className="tab-card">
            <h3>Thông tin cá nhân</h3>
            <p>
              Sinh viên yêu thích lập trình web, đam mê giao diện hiện đại,
              trải nghiệm người dùng và sản phẩm có tính ứng dụng.
            </p>
          </div>
        </TabPane>

        <TabPane tab="Photos" key="photos">
          <PhotoGrid />
        </TabPane>
      </Tabs>
    </div>
  );
}