import styled from '@emotion/styled';

import { Button } from 'ui/common/components/Buttons/Button/Button';

type Props = {
  disabled?: boolean;
};

export const ButtonPrimary = styled(Button)<Props>`
  background: ${({ disabled, theme }) =>
    disabled ? theme.color.grey : theme.color.mandy};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.oswald};
  text-transform: uppercase;
`;
