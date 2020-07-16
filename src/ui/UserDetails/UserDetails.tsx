import React from 'react';

import { useUserDetails } from 'ui/UserDetails/userDetails.hooks';
import { ButtonPrimary } from 'ui/common/components/Buttons/ButtonPrimary/ButtonPrimary';

export const UserDetails = () => {
  const { id, onGoToUserListClick } = useUserDetails();

  return (
    <div>
      UserDetails {id}
      <ButtonPrimary type="button" onClick={onGoToUserListClick}>
        Go to users list
      </ButtonPrimary>
    </div>
  );
};
