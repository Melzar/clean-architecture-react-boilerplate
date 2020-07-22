import React, { Fragment } from 'react';

import { useUser } from 'ui/User/user.hooks';

import { ButtonPrimary } from 'ui/common/components/Buttons/ButtonPrimary/ButtonPrimary';
import { Grid } from 'ui/common/components/Grid/Grid';
import { GridRow } from 'ui/common/components/GridRow/GridRow';
import { GridCellHeader } from 'ui/common/components/GridCellHeader/GridCellHeader';
import { GridCell } from 'ui/common/components/GridCell/GridCell';
import { ContainerBox } from 'ui/common/components/Layout/ContainerBox/ContainerBox';
import { TitlePage } from 'ui/common/components/Typography/TitlePage/TitlePage';

import { NavigatorButton } from 'ui/User/user.styles';

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
    <ContainerBox>
      <TitlePage>Users List</TitlePage>
      <Grid>
        <thead>
          <GridRow>
            <GridCellHeader>ID</GridCellHeader>
            <GridCellHeader>FIRST NAME</GridCellHeader>
            <GridCellHeader>LAST NAME</GridCellHeader>
            <GridCellHeader />
          </GridRow>
        </thead>
        <tbody>
          {users.map(({ id, firstName, lastName }) => (
            <Fragment key={id}>
              <GridRow
                onClick={() => onUserClick(id)}
                selected={selectedRow(id)}
              >
                <GridCell>{id}</GridCell>
                <GridCell>{firstName}</GridCell>
                <GridCell>{lastName}</GridCell>
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
                  <GridCell colSpan={4}>
                    {equipment.map(({ id: EquipmentID }) => (
                      <div key={EquipmentID}>Equipment {EquipmentID}</div>
                    ))}
                  </GridCell>
                </GridRow>
              )}
            </Fragment>
          ))}
        </tbody>
      </Grid>
      <NavigatorButton type="button" onClick={onGoToDashboardScreen}>
        Go to dashboard
      </NavigatorButton>
    </ContainerBox>
  );
};
