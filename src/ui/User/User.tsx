import React from 'react';

import { useUser } from 'ui/User/user.hooks';

export const User = () => {
  const { userList, onGoToDashboardScreen } = useUser();

  return (
    <div>
      User List {JSON.stringify(userList)}
      <button type="button" onClick={onGoToDashboardScreen}>
        Go to dashboard
      </button>
    </div>
  );
};
