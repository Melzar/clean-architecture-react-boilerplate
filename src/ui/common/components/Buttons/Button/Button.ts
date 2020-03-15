import styledReact, { CreateStyled } from '@emotion/styled';

import { Theme } from 'ui/common/types/theme';

const styled = styledReact as CreateStyled<Theme>;

export const Button = styled.button`
  align-items: center;
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => `0 0 10px 2px ${theme.shadow.small}`};
  display: inline-flex;
  font-size: 18px;
  height: 45px;
  padding: 0 20px;
`;
