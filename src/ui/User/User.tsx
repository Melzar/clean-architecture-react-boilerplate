import React from 'react';

import { useUser } from 'ui/User/user.hooks';

import { ButtonPrimary } from 'ui/common/components/Buttons/ButtonPrimary/ButtonPrimary';

export const User = () => {
  const { userList, onGoToDashboardScreen } = useUser();

  return (
    <div>
      User List {JSON.stringify(userList)}
      <ButtonPrimary type="button" onClick={onGoToDashboardScreen}>
        Go to dashboard
      </ButtonPrimary>
    </div>
  );
};
