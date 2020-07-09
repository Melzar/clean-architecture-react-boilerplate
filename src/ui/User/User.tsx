import React, { Fragment } from 'react';

import { useUser } from 'ui/User/user.hooks';

import { ButtonPrimary } from 'ui/common/components/Buttons/ButtonPrimary/ButtonPrimary';

export const User = () => {
  const {
    equipment,
    users,
    onGoToDashboardScreen,
    onUserClick,
    selectedUser,
  } = useUser();

  return (
    <div>
      <div>Selected User {JSON.stringify(selectedUser)}</div>
      <div>User Equipment List {JSON.stringify(equipment)} </div>
      {users.map(({ id }) => (
        <Fragment key={id}>
          <div>{id}</div>
          <div>
            <ButtonPrimary type="button" onClick={() => onUserClick(id)}>
              Select user {id}
            </ButtonPrimary>
          </div>
        </Fragment>
      ))}
      <div>
        <ButtonPrimary type="button" onClick={onGoToDashboardScreen}>
          Go to dashboard
        </ButtonPrimary>
      </div>
    </div>
  );
};
