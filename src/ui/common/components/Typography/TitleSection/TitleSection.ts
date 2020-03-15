import styledReact, { CreateStyled } from '@emotion/styled';

import { Theme } from 'ui/common/types/theme';

const styled = styledReact as CreateStyled<Theme>;

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
