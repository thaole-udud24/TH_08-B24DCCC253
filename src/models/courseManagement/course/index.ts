import { message } from 'antd';
import type { CourseItem } from '@/services/courseManagement/course/typings';
import { getCourses, saveCourses } from '@/services/courseManagement/course';
import type { CourseModelState, EffectContext } from '../typing';

interface ActionPayload<T = any> {
  payload: T;
}

interface OpenModalPayload {
  visible: boolean;
  record?: CourseItem | null;
}

interface SetFilterPayload {
  keyword?: string;
  teacher?: string;
  status?: string;
}

const initialState: CourseModelState = {
  courses: [],
  keyword: '',
  teacher: undefined,
  status: undefined,
  modalVisible: false,
  editingCourse: null,
};

export default {
  namespace: 'courseManagement.course',

  state: initialState,

  effects: {
    *fetch(_: unknown, { call, put }: EffectContext): Generator<any, void, any> {
      const data: CourseItem[] = yield call(getCourses);
      yield put({ type: 'setCourses', payload: data });
    },

    *add(
      { payload }: ActionPayload<Omit<CourseItem, 'id' | 'createdAt' | 'updatedAt'>>,
      { select, call, put }: EffectContext,
    ): Generator<any, void, any> {
      const list: CourseItem[] = yield select(
        (state: any) => state['courseManagement.course']?.courses || [],
      );

      const duplicate = list.some(
        (item: CourseItem) =>
          item.name.trim().toLowerCase() === payload.name.trim().toLowerCase(),
      );

      if (duplicate) {
        message.error('Tên khóa học đã tồn tại');
        return;
      }

      const now = new Date().toISOString();

      const newItem: CourseItem = {
        ...payload,
        id: `${Date.now()}`,
        createdAt: now,
        updatedAt: now,
      };

      const newData: CourseItem[] = [...list, newItem];

      yield call(saveCourses, newData);
      yield put({ type: 'setCourses', payload: newData });
      yield put({ type: 'setModal', payload: { visible: false, record: null } });

      message.success('Thêm mới thành công');
    },

    *update(
      { payload }: ActionPayload<CourseItem>,
      { select, call, put }: EffectContext,
    ): Generator<any, void, any> {
      const list: CourseItem[] = yield select(
        (state: any) => state['courseManagement.course']?.courses || [],
      );

      const duplicate = list.some(
        (item: CourseItem) =>
          item.id !== payload.id &&
          item.name.trim().toLowerCase() === payload.name.trim().toLowerCase(),
      );

      if (duplicate) {
        message.error('Tên khóa học đã tồn tại');
        return;
      }

      const newData: CourseItem[] = list.map((item: CourseItem) =>
        item.id === payload.id
          ? {
              ...payload,
              updatedAt: new Date().toISOString(),
            }
          : item,
      );

      yield call(saveCourses, newData);
      yield put({ type: 'setCourses', payload: newData });
      yield put({ type: 'setModal', payload: { visible: false, record: null } });

      message.success('Lưu thành công');
    },

    *delete(
      { payload }: ActionPayload<string>,
      { select, call, put }: EffectContext,
    ): Generator<any, void, any> {
      const list: CourseItem[] = yield select(
        (state: any) => state['courseManagement.course']?.courses || [],
      );

      const current = list.find((item: CourseItem) => item.id === payload);

      if (current && current.studentCount > 0) {
        message.error('Chỉ được xóa khóa học chưa có học viên');
        return;
      }

      const newData: CourseItem[] = list.filter((item: CourseItem) => item.id !== payload);

      yield call(saveCourses, newData);
      yield put({ type: 'setCourses', payload: newData });

      message.success('Xóa thành công');
    },
  },

  reducers: {
    setCourses(
      state: CourseModelState = initialState,
      { payload }: ActionPayload<CourseItem[]>,
    ): CourseModelState {
      return {
        ...state,
        courses: payload,
      };
    },

    setFilter(
      state: CourseModelState = initialState,
      { payload }: ActionPayload<SetFilterPayload>,
    ): CourseModelState {
      return {
        ...state,
        keyword: payload.keyword !== undefined ? payload.keyword : state.keyword,
        teacher: payload.teacher !== undefined ? payload.teacher : state.teacher,
        status: payload.status !== undefined ? payload.status : state.status,
      };
    },

    resetFilter(state: CourseModelState = initialState): CourseModelState {
      return {
        ...state,
        keyword: '',
        teacher: undefined,
        status: undefined,
      };
    },

    setModal(
      state: CourseModelState = initialState,
      { payload }: ActionPayload<OpenModalPayload>,
    ): CourseModelState {
      return {
        ...state,
        modalVisible: payload.visible,
        editingCourse: payload.record || null,
      };
    },
  },
};