import type { CourseItem } from '@/services/courseManagement/course/typings';

export interface CourseModelState {
  courses: CourseItem[];
  keyword: string;
  teacher?: string;
  status?: string;
  modalVisible: boolean;
  editingCourse: CourseItem | null;
}

export interface DashboardModelState {}

export interface EffectContext {
  call: <T = any>(fn: (...args: any[]) => Promise<T> | T, ...args: any[]) => T;
  put: (action: { type: string; payload?: any }) => void;
  select: <T = any>(selector: (state: any) => T) => T;
}