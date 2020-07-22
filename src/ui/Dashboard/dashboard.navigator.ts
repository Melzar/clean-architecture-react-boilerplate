import { History } from 'history';

import { RouterPaths } from 'ui/common/routing/router.paths';

export const navigateToUsersScreen = (history: History) => {
  history.push(RouterPaths.USER);
};

export const navigateToEquipmentScreen = (history: History) => {
  history.push(RouterPaths.EQUIPMENT);
};
