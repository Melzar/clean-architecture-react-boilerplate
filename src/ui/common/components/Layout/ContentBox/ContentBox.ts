import styled from '@emotion/styled';

type Props = {
  center?: boolean;
};

export const ContentBox = styled.div<Props>`
  align-items: ${({ center }) => (center ? `center` : `initial`)};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  box-shadow: ${({ theme }) => `0 0 10px 0px ${theme.shadow.xsmall}`};
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
