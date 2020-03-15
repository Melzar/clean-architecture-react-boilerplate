import styledReact, { CreateStyled } from '@emotion/styled';

import { Theme } from 'ui/common/types/theme';
import { Link } from 'ui/common/components/Links/Link/Link';

const styled = styledReact as CreateStyled<Theme>;

export const LinkPrimary = styled(Link)`
  color: ${({ theme }) => theme.color.mandy};
`;
