import React from 'react';
import { useSelector } from 'umi';
import type { CourseItem } from '@/services/courseManagement/course/typings';
import CommonCard from '../../components/CommonCard';

const StudentBarChart: React.FC = () => {
  const courses = useSelector(
    (state: any) => state['courseManagement.course']?.courses || [],
  ) as CourseItem[];

  const maxValue = Math.max(...courses.map(c => c.studentCount), 1);

  return (
    <CommonCard title="Biểu đồ số học viên theo khóa">
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-around',
          height: 300,
          padding: '20px',
          border: '1px solid #eee',
        }}
      >
        {courses.map((item) => {
          const height = (item.studentCount / maxValue) * 200;

          return (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 60,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height,
                  backgroundColor: '#1890ff',
                  borderRadius: 4,
                }}
              />

              <span style={{ marginTop: 8, fontSize: 12 }}>
                {item.studentCount}
              </span>

              <span
                style={{
                  marginTop: 4,
                  fontSize: 12,
                  textAlign: 'center',
                }}
              >
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </CommonCard>
  );
};

export default StudentBarChart;