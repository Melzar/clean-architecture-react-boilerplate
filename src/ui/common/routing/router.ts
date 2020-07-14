import { User } from 'ui/User/User';
import { Dashboard } from 'ui/Dashboard/Dashboard';
import { RouterPaths } from 'ui/common/routing/router.paths';
import { Login } from 'ui/Login/Login';

export const Router = [
  { path: RouterPaths.DASHBOARD, component: Dashboard },
  { path: RouterPaths.USER, component: User },
  { path: RouterPaths.LOGIN, component: Login },
];
