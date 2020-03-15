import styledReact, { CreateStyled } from '@emotion/styled';

import { Theme } from 'ui/common/types/theme';

const styled = styledReact as CreateStyled<Theme>;

type Props = {
  center?: boolean;
};

export const ContentBox = styled.div<Props>`
  align-items: ${({ center }) => (center ? `center` : `initial`)};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  box-shadow: ${({ theme }) => `0 0 10px 0px ${theme.shadow.xsmall}`};
  display: flex;
  padding: 20px;
`;
