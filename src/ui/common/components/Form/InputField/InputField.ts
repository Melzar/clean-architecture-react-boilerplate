import styled from '@emotion/styled';

export const InputField = styled.input`
  border: ${({ theme }) => `1px solid ${theme.color.mercury}`};
  caret-color: ${({ theme }) => theme.color.mandy};
  color: ${({ theme }) => theme.color.gray};
  font-family: ${({ theme }) => theme.font.oswald};
  font-size: 18px;
  font-weight: 300;
  height: 60px;
  padding: 0 20px;

  &::placeholder {
    color: ${({ theme }) => theme.color.alto};
    font-family: ${({ theme }) => theme.font.oswald};
    font-size: 18px;
    font-weight: 300;
    text-transform: uppercase;
  }

  &:focus {
    outline: ${({ theme }) => `1px solid ${theme.color.alto}`};
  }
`;
