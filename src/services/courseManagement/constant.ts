export const COURSE_STORAGE_KEY = 'course_management_courses';

export const COURSE_STATUS = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  PAUSED: 'PAUSED',
} as const;

export const STATUS_OPTIONS = [
  { label: 'Đang mở', value: COURSE_STATUS.OPEN },
  { label: 'Đã kết thúc', value: COURSE_STATUS.CLOSED },
  { label: 'Tạm dừng', value: COURSE_STATUS.PAUSED },
];

export const STATUS_LABEL_MAP: Record<string, string> = {
  [COURSE_STATUS.OPEN]: 'Đang mở',
  [COURSE_STATUS.CLOSED]: 'Đã kết thúc',
  [COURSE_STATUS.PAUSED]: 'Tạm dừng',
};

export const TEACHER_OPTIONS = [
  { label: 'Nguyễn Văn A', value: 'Nguyễn Văn A' },
  { label: 'Trần Thị B', value: 'Trần Thị B' },
  { label: 'Lê Văn C', value: 'Lê Văn C' },
  { label: 'Phạm Thị D', value: 'Phạm Thị D' },
];