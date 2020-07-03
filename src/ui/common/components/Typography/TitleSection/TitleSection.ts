import styled from '@emotion/styled';

type Props = {
  light?: boolean;
};

export const TitleSection = styled.h2<Props>`
  color: ${({ light, theme }) =>
    light ? theme.color.white : theme.color.mineShaft};
  font-size: 30px;
  font-weight: 400;
  margin: 0;
`;
