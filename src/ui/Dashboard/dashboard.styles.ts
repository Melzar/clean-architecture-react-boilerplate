import styledReact, { CreateStyled } from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import { Theme } from 'ui/common/types/theme';

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
  height: 40vmin;
  pointer-events: none;
`;

export const DashboardWrapper = styled.div`
  text-align: center;
`;

export const DashboardHeader = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`;

export const DashboardLink = styled.a`
  color: ${({ theme }) => theme.color.malibu};
`;
