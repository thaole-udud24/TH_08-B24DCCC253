import React from 'react';
import { useSelector } from 'umi';
import type { CourseItem } from '@/services/courseManagement/course/typings';
import CommonCard from '../../components/CommonCard';

const COLORS = ['#52c41a', '#ff4d4f', '#faad14'];

const StatusPieChart: React.FC = () => {
  const courses = useSelector(
    (state: any) => state['courseManagement.course']?.courses || [],
  ) as CourseItem[];

  const data = [
    {
      name: 'Đang mở',
      value: courses.filter((item) => item.status === 'OPEN').length,
    },
    {
      name: 'Đã kết thúc',
      value: courses.filter((item) => item.status === 'CLOSED').length,
    },
    {
      name: 'Tạm dừng',
      value: courses.filter((item) => item.status === 'PAUSED').length,
    },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  let cumulative = 0;

  const createArc = (
    cx: number,
    cy: number,
    r: number,
    startAngle: number,
    endAngle: number,
  ) => {
    const rad = Math.PI / 180;

    const x1 = cx + r * Math.cos(rad * startAngle);
    const y1 = cy + r * Math.sin(rad * startAngle);
    const x2 = cx + r * Math.cos(rad * endAngle);
    const y2 = cy + r * Math.sin(rad * endAngle);

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `
      M ${cx} ${cy}
      L ${x1} ${y1}
      A ${r} ${r} 0 ${largeArcFlag} 1 ${x2} ${y2}
      Z
    `;
  };

  return (
    <CommonCard title="Biểu đồ trạng thái khóa học">
      <svg width="100%" height="300" viewBox="0 0 300 300">
        {data.map((item, index) => {
          const valuePercent = total === 0 ? 0 : (item.value / total) * 360;

          const startAngle = cumulative;
          const endAngle = cumulative + valuePercent;

          const pathData = createArc(150, 150, 100, startAngle, endAngle);

          cumulative += valuePercent;

          return (
            <path
              key={index}
              d={pathData}
              fill={COLORS[index]}
              stroke="#fff"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      <div style={{ marginTop: 16 }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: COLORS[index],
                marginRight: 8,
              }}
            />
            {item.name}: {item.value}
          </div>
        ))}
      </div>
    </CommonCard>
  );
};

export default StatusPieChart;