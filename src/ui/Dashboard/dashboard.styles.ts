import styledReact, { CreateStyled } from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import { Theme } from 'ui/common/types/theme';
import { RoundedCounterWrapper } from 'ui/common/components/RoundedCounter/RoundedCounter.styles';
import { AngledContentBoxContainer } from 'ui/common/components/Layout/AngledContentBox/AngledContentBox.styles';
import { ButtonPrimary } from 'ui/common/components/Buttons/ButtonPrimary/ButtonPrimary';

const styled = styledReact as CreateStyled<Theme>;

const DashboardLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const DashboardLogo = css`
  animation: ${DashboardLogoSpin} infinite 20s linear;
  height: 200px;
  pointer-events: none;
`;

export const DashboardWrapper = styled.div`
  ${AngledContentBoxContainer} {
    flex-direction: column;
    height: 50vh;
    ${RoundedCounterWrapper} {
      align-self: flex-start;
      margin-left: auto;
    }
    ${ButtonPrimary} {
      align-self: center;
      margin-bottom: 35px;
      margin-top: auto;
    }
  }
`;

export const DashboardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 50vh;
`;
