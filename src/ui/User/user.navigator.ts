import { History } from 'history';

import { RouterPaths } from 'ui/common/routing/router.paths';

export const navigateToDashboard = (history: History) => {
  history.push(RouterPaths.DASHBOARD);
};
