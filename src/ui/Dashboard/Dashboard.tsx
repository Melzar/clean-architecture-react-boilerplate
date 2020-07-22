import React from 'react';

import { ButtonPrimary } from 'ui/common/components/Buttons/ButtonPrimary/ButtonPrimary';
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
  const { onGoToUserScreenClick, onGoToEquipmentScreenClick } = useDashboard();
  return (
    <DashboardWrapper>
      <AngledContentBox>
        <RoundedCounter light roundedValue={10}>
          <LabelMedium>LIKES</LabelMedium>
        </RoundedCounter>
        <ButtonPrimary onClick={onGoToUserScreenClick}>
          Navigate to users
        </ButtonPrimary>
      </AngledContentBox>
      <DashboardContainer>
        <TitleSection>React Clean Architecture Boilerplate</TitleSection>
        <Logo css={DashboardLogo} />
        <ButtonPrimary onClick={onGoToEquipmentScreenClick}>
          Navigate to equipment list
        </ButtonPrimary>
        <CookieWidget />
      </DashboardContainer>
    </DashboardWrapper>
  );
};
