import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const CategoryCreate = lazy(() => import('../components/admin/category/create'));
const CategoryList = lazy(() => import('../components/admin/category/list'));


const ProductCreate = lazy(() => import('../components/admin/product/create'));

const coreRoutes = [
  {
    path: 'calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: 'profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: 'forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: 'forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },

  {
    path: 'categories/list',
    title: 'Категорії',
    component: CategoryList,
  },

  {
    path: 'categories/create',
    title: 'Додати категорію',
    component: CategoryCreate,
  },

  {
    path: 'products/list',
    title: 'Продукти',
    component: CategoryList,
  },

  {
    path: 'products/create',
    title: 'Додати продукт',
    component: ProductCreate,
  },

  {
    path: 'tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: 'settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: 'chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: 'ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: 'ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
