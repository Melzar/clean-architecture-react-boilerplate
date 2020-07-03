import styled from '@emotion/styled';

type Props = {
  light?: boolean;
};

export const RoundedCounterCircle = styled.span<Props>`
  align-items: center;
  border: ${({ light, theme }) =>
    light
      ? `1px solid ${theme.color.alabaster}`
      : `1px solid ${theme.color.mineShaft}`};
  border-radius: 25px;
  color: ${({ light, theme }) =>
    light ? theme.color.alabaster : theme.color.mirage};
  display: flex;
  font-weight: 500;
  height: 45px;
  justify-content: center;
  line-height: 0;
  width: 45px;

  & + * {
    color: ${({ light, theme }) =>
      light ? theme.color.alabaster : theme.color.mineShaft};
    font-weight: 300;
    margin-left: 10px;
  }
`;

export const RoundedCounterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;
