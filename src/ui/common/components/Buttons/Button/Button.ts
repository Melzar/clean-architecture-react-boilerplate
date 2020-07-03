import styled from '@emotion/styled';

export const Button = styled.button`
  align-items: center;
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => `0 0 10px 2px ${theme.shadow.small}`};
  display: inline-flex;
  font-size: 18px;
  height: 45px;
  line-height: 1px;
  padding: 0 20px;
`;
