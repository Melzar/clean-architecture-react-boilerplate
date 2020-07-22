import { History } from 'history';

import { RouterPaths } from 'ui/common/routing/router.paths';

export const navigateToEquipmentDetails = (history: History, id: string) => {
  history.push(RouterPaths.EQUIPMENT_DETAILS.replace(':id', id));
};

export const navigateToDashboard = (history: History) => {
  history.replace(RouterPaths.DASHBOARD);
};
