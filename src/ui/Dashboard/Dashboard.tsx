import React from 'react';

import { ButtonPrimary } from 'ui/common/components/Buttons/ButtonPrimary/ButtonPrimary';
import { Text } from 'ui/common/components/Typography/Text/Text';
import { LinkPrimary } from 'ui/common/components/Links/LinkPrimary/LinkPrimary';
import { CookieWidget } from 'ui/common/widgets/CookieWidget/CookieWidget';
import { TitleSection } from 'ui/common/components/Typography/TitleSection/TitleSection';
import { LabelMedium } from 'ui/common/components/Labels/LabelMedium/LabelMedium';
import { RoundedCounter } from 'ui/common/components/RoundedCounter/RoundedCounter';
import { AngledContentBox } from 'ui/common/components/Layout/AngledContentBox/AngledContentBox';

import { useDashboard } from 'ui/Dashboard/dashboard.hooks';

import {
  DashboardContainer,
  DashboardLogo,
  DashboardWrapper,
} from 'ui/Dashboard/dashboard.styles';

import { ReactComponent as Logo } from 'ui/common/assets/images/logo.svg';

export const Dashboard = () => {
  const onGoToUserScreenTap = useDashboard();
  return (
    <DashboardWrapper>
      <AngledContentBox>
        <RoundedCounter light roundedValue={10}>
          <LabelMedium>LIKES</LabelMedium>
        </RoundedCounter>
        <Logo css={DashboardLogo} />
        <ButtonPrimary type="button" onClick={onGoToUserScreenTap}>
          Navigate to users
        </ButtonPrimary>
      </AngledContentBox>
      <DashboardContainer>
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

        <CookieWidget />
      </DashboardContainer>
    </DashboardWrapper>
  );
};
