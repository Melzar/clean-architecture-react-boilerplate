import { User } from 'ui/User/User';
import { Dashboard } from 'ui/Dashboard/Dashboard';
import { RouterPaths } from 'ui/common/routing/router.paths';
import { Login } from 'ui/Login/Login';
import { UserDetails } from 'ui/UserDetails/UserDetails';

export const Router = [
  { path: RouterPaths.DASHBOARD, component: Dashboard },
  { path: RouterPaths.USER, component: User },
  { path: RouterPaths.USER_DETAILS, component: UserDetails },
  { path: RouterPaths.LOGIN, component: Login },
];
