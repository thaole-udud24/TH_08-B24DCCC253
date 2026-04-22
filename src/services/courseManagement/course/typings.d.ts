export type CourseStatus = 'OPEN' | 'CLOSED' | 'PAUSED';

export interface CourseItem {
  id: string;
  name: string;
  teacher: string;
  studentCount: number;
  description: string;
  status: CourseStatus;
  createdAt: string;
  updatedAt: string;
}