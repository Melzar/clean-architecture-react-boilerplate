import React from 'react';

import { useDashboard } from 'ui/Dashboard/dashboard.hooks';

import {
  DashboardHeader,
  DashboardLink,
  DashboardLogo,
  DashboardWrapper,
} from 'ui/Dashboard/dashboard.styles';

import { ReactComponent as Logo } from 'ui/common/assets/images/logo.svg';

export const Dashboard = () => {
  const onGoToUserScreenTap = useDashboard();
  return (
    <DashboardWrapper>
      <DashboardHeader>
        <Logo css={DashboardLogo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <DashboardLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </DashboardLink>
        <button type="button" onClick={onGoToUserScreenTap}>
          Navigate to users
        </button>
      </DashboardHeader>
    </DashboardWrapper>
  );
};
