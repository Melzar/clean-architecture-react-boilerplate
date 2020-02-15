import { useHistory } from 'react-router-dom';

import { navigateToUsersScreen } from 'ui/Dashboard/dashboard.navigator';

export const useDashboard = () => {
  const history = useHistory();

  const onGoToUserScreenTap = () => navigateToUsersScreen(history);

  return onGoToUserScreenTap;
};
