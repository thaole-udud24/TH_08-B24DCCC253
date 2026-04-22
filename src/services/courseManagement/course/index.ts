import type { CourseItem } from './typings';
import { COURSE_STATUS, COURSE_STORAGE_KEY } from '../constant';

const mockCourses: CourseItem[] = [
  {
    id: '1',
    name: 'React cơ bản',
    teacher: 'Nguyễn Văn A',
    studentCount: 32,
    description: '<p>Khóa học React từ cơ bản đến thực hành component.</p>',
    status: COURSE_STATUS.OPEN,
    createdAt: '2026-04-01T08:00:00.000Z',
    updatedAt: '2026-04-01T08:00:00.000Z',
  },
  {
    id: '2',
    name: 'TypeScript nâng cao',
    teacher: 'Trần Thị B',
    studentCount: 18,
    description: '<p>Học generic, utility types và typing thực chiến.</p>',
    status: COURSE_STATUS.OPEN,
    createdAt: '2026-04-02T08:00:00.000Z',
    updatedAt: '2026-04-02T08:00:00.000Z',
  },
  {
    id: '3',
    name: 'NodeJS API',
    teacher: 'Lê Văn C',
    studentCount: 0,
    description: '<p>Xây dựng REST API với NodeJS.</p>',
    status: COURSE_STATUS.PAUSED,
    createdAt: '2026-04-03T08:00:00.000Z',
    updatedAt: '2026-04-03T08:00:00.000Z',
  },
  {
    id: '4',
    name: 'UmiJS thực chiến',
    teacher: 'Phạm Thị D',
    studentCount: 25,
    description: '<p>Thực hành project theo cấu trúc UmiJS.</p>',
    status: COURSE_STATUS.CLOSED,
    createdAt: '2026-04-04T08:00:00.000Z',
    updatedAt: '2026-04-04T08:00:00.000Z',
  },
];

export async function getCourses(): Promise<CourseItem[]> {
  const raw = localStorage.getItem(COURSE_STORAGE_KEY);

  if (!raw) {
    localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(mockCourses));
    return mockCourses;
  }

  try {
    const parsed = JSON.parse(raw) as CourseItem[];
    return Array.isArray(parsed) ? parsed : mockCourses;
  } catch (error) {
    localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(mockCourses));
    return mockCourses;
  }
}

export async function saveCourses(data: CourseItem[]): Promise<void> {
  localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(data));
}