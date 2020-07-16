import styled from '@emotion/styled';

import { GridRow } from 'ui/common/components/GridRow/GridRow';
import { GridCell } from 'ui/common/components/GridCell/GridCell';
import { GridCellHeader } from 'ui/common/components/GridCellHeader/GridCellHeader';

export const Grid = styled.table`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  border-spacing: 0px;
  box-shadow: ${({ theme }) => `0 0 10px 0px ${theme.shadow.xsmall}`};
  table-layout: fixed;
  width: 100%;

  ${GridRow} {
    ${GridCell}:first-child,
    ${GridCellHeader}:first-child {
      padding-left: 20px;
    }
    ${GridCell}:last-child,
    ${GridCellHeader}:last-child {
      padding-right: 20px;
    }
  }

  ${GridRow}:last-child {
    ${GridCell} {
      border-bottom: none;
    }
  }
`;
