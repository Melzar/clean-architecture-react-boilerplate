import React from 'react';

import { useDashboard } from 'ui/Dashboard/dashboard.hooks';
import { ButtonPrimary } from 'ui/common/components/Buttons/ButtonPrimary/ButtonPrimary';
import { Text } from 'ui/common/components/Typography/Text/Text';
import { LinkPrimary } from 'ui/common/components/Links/LinkPrimary/LinkPrimary';
import { CookieWidget } from 'ui/common/widgets/CookieWidget/CookieWidget';
import { TitleSection } from 'ui/common/components/Typography/TitleSection/TitleSection';

import {
  DashboardHeader,
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
        <TitleSection>React App</TitleSection>
        <Text>
          Edit <code>src/App.tsx</code> and save to reload.
        </Text>
        <LinkPrimary
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </LinkPrimary>
        <ButtonPrimary type="button" onClick={onGoToUserScreenTap}>
          Navigate to users
        </ButtonPrimary>
        <CookieWidget />
      </DashboardHeader>
    </DashboardWrapper>
  );
};
