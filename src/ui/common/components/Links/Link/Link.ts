import styledReact, { CreateStyled } from '@emotion/styled';

import { Theme } from 'ui/common/types/theme';

const styled = styledReact as CreateStyled<Theme>;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.mineShaft};
  text-decoration: none;
`;
