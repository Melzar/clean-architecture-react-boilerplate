import React from 'react';

import { useUser } from 'ui/User/user.hooks';

import { ButtonPrimary } from 'ui/common/components/Buttons/ButtonPrimary/ButtonPrimary';
import { Grid } from 'ui/common/components/Grid/Grid';
import { GridRow } from 'ui/common/components/GridRow/GridRow';
import { GridCellHeader } from 'ui/common/components/GridCellHeader/GridCellHeader';
import { GridCell } from 'ui/common/components/GridCell/GridCell';

import { UserGridWrapper, UserWrapper } from 'ui/User/user.styles';

export const User = () => {
  const {
    equipment,
    users,
    onGoToDashboardScreen,
    onUserClick,
    onUserDetailsClick,
    selectedUser,
  } = useUser();

  const selectedRow = (id: string) => selectedUser === id;

  return (
    <UserWrapper>
      <UserGridWrapper>
        <Grid>
          <GridRow>
            <GridCellHeader>ID</GridCellHeader>
            <GridCellHeader />
          </GridRow>
          {users.map(({ id }) => (
            <>
              <GridRow
                key={id}
                onClick={() => onUserClick(id)}
                selected={selectedRow(id)}
              >
                <GridCell>{id}</GridCell>
                <GridCell>
                  <ButtonPrimary
                    type="button"
                    onClick={(event) => onUserDetailsClick(event, id)}
                  >
                    See Details
                  </ButtonPrimary>
                </GridCell>
              </GridRow>
              {selectedRow(id) && (
                <GridRow>
                  <GridCell colSpan={2}>
                    {equipment.map(({ id: EquipmentID }) => (
                      <div key={EquipmentID}>Equipment {EquipmentID}</div>
                    ))}
                  </GridCell>
                </GridRow>
              )}
            </>
          ))}
        </Grid>
      </UserGridWrapper>
      <div>
        <ButtonPrimary type="button" onClick={onGoToDashboardScreen}>
          Go to dashboard
        </ButtonPrimary>
      </div>
    </UserWrapper>
  );
};
