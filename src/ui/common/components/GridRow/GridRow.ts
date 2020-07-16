import styled from '@emotion/styled';

type Props = {
  selected?: boolean;
};

export const GridRow = styled.tr<Props>`
  background-color: ${({ selected }) => (selected ? '#ffeaed' : 'inherit')};
`;
