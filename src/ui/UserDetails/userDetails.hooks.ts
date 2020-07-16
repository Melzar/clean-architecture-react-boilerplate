import { useHistory, useParams } from 'react-router-dom';

import { navigateToUsersList } from 'ui/UserDetails/userDetails.navigator';

export const useUserDetails = () => {
  const history = useHistory();
  const { id } = useParams();

  const onGoToUserListClick = () => navigateToUsersList(history);

  return {
    id,
    onGoToUserListClick,
  };
};
