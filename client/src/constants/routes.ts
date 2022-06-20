import { Home, Login, Registration, UserPage } from '../pages';
import { PATHS } from './constants';

export const routes = [
  {
    path: PATHS.home,
    component: Home,
    auth: true,
  },
  {
    path: PATHS.login,
    component: Login,
    auth: false,
  },
  {
    path: PATHS.registration,
    component: Registration,
    auth: false,
  },
  {
    path: PATHS.user,
    component: UserPage,
    auth: true,
  },
];
