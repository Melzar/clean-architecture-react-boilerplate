import styledReact, { CreateStyled } from '@emotion/styled';

import { Theme } from 'ui/common/types/theme';

const styled = styledReact as CreateStyled<Theme>;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.mineShaft};
`;
