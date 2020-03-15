import styledReact, { CreateStyled } from '@emotion/styled';

import { Button } from 'ui/common/components/Buttons/Button/Button';

import { Theme } from 'ui/common/types/theme';

const styled = styledReact as CreateStyled<Theme>;

type Props = {
  disabled?: boolean;
};

export const ButtonPrimary = styled(Button)<Props>`
  background: ${({ disabled, theme }) =>
    disabled ? theme.color.grey : theme.color.mandy};
  color: ${({ theme }) => theme.color.white};
`;
