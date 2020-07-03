import styled from '@emotion/styled';

type Props = {
  center?: boolean;
  light?: boolean;
  reverse?: boolean;
};

export const AngledContentBoxWrapper = styled.div`
  position: relative;
`;

export const AngledContentBoxBackground = styled.div<Props>`
  background-color: ${({ light, theme }) =>
    light ? theme.color.alabaster : theme.color.mirage};
  height: 100%;
  position: absolute;
  transform: skewY(-5deg);
  transform-origin: 0;
  width: 100%;
`;

export const AngledContentBoxContainer = styled.div<Props>`
  align-items: ${({ center }) => (center ? `center` : `initial`)};
  display: flex;
  height: 100vh;
  padding: 20px;
  position: relative;
`;
