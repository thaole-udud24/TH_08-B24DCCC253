export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        name: 'login',
        component: './user/Login',
      },
      {
        path: '/user',
        redirect: '/user/login',
      },
    ],
  },

  {
    path: '/course-management',
    name: 'Course Management',
    icon: 'AppstoreOutlined',
    routes: [
      {
        path: '/course-management',
        redirect: '/course-management/dashboard',
      },
      {
        path: '/course-management/course',
        name: 'Course',
        component: './CourseManagement/Course',
      },
      {
        path: '/course-management/dashboard',
        name: 'Dashboard',
        component: './CourseManagement/Dashboard',
      },
    ],
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: './TrangChu',
    icon: 'HomeOutlined',
  },

  {
    path: '/travel-planner',
    name: 'Travel Planner',
    icon: 'EnvironmentOutlined',
    routes: [
      {
        path: '/travel-planner',
        redirect: '/travel-planner/explore',
      },
      {
        path: '/travel-planner/explore',
        name: 'Khám phá',
        component: './TravelPlanner/Explore',
      },
      {
        path: '/travel-planner/trip',
        name: 'Lịch trình',
        component: './TravelPlanner/Trip',
      },
      {
        path: '/travel-planner/budget',
        name: 'Ngân sách',
        component: './TravelPlanner/Budget',
      },
      {
        path: '/travel-planner/dashboard',
        name: 'Thống kê',
        component: './TravelPlanner/Dashboard',
      },
    ],
  },

  {
    path: '/random-user',
    name: 'RandomUser',
    component: './RandomUser',
    icon: 'ArrowsAltOutlined',
  },

  {
    path: '/group-tasks',
    name: 'Quản lý công việc',
    component: './GroupTasks',
    icon: 'UnorderedListOutlined',
  },

  {
    path: '/gioi-thieu',
    component: './TienIch/GioiThieu',
    hideInMenu: true,
  },

  {
    path: '/notification',
    layout: false,
    hideInMenu: true,
    routes: [
      {
        path: '/notification/subscribe',
        component: './ThongBao/Subscribe',
      },
      {
        path: '/notification/check',
        component: './ThongBao/Check',
      },
      {
        path: '/notification',
        component: './ThongBao/NotifOneSignal',
      },
    ],
  },

  // 🔥 FIX ROOT
  {
    path: '/',
    redirect: '/course-management/dashboard',
  },

  {
    path: '/403',
    component: './exception/403/403Page',
    layout: false,
  },
  {
    path: '/hold-on',
    component: './exception/DangCapNhat',
    layout: false,
  },

  {
    component: './exception/404',
  },
];