import styled from '@emotion/styled';

type Props = {
  light?: boolean;
};

export const TitlePage = styled.h1<Props>`
  color: ${({ light, theme }) =>
    light ? theme.color.white : theme.color.mineShaft};
  font-size: 40px;
  font-weight: 500;
  margin: 0;
  text-transform: uppercase;
`;
