import { History } from 'history';

import { RouterPaths } from 'ui/common/routing/router.paths';

export const navigateToDashboard = (history: History) => {
  history.replace(RouterPaths.DASHBOARD);
};

export const navigateToUserDetails = (history: History, id: string) => {
  history.push(RouterPaths.USER_DETAILS.replace(':id', id));
};
