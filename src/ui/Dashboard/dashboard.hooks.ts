import { useHistory } from 'react-router-dom';

import {
  navigateToEquipmentScreen,
  navigateToUsersScreen,
} from 'ui/Dashboard/dashboard.navigator';

export const useDashboard = () => {
  const history = useHistory();

  const onGoToUserScreenClick = () => navigateToUsersScreen(history);
  const onGoToEquipmentScreenClick = () => navigateToEquipmentScreen(history);

  return {
    onGoToUserScreenClick,
    onGoToEquipmentScreenClick,
  };
};
