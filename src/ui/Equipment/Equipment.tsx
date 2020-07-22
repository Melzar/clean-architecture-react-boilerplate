import React from 'react';

import { Grid } from 'ui/common/components/Grid/Grid';
import { GridRow } from 'ui/common/components/GridRow/GridRow';
import { GridCellHeader } from 'ui/common/components/GridCellHeader/GridCellHeader';
import { GridCell } from 'ui/common/components/GridCell/GridCell';
import { ButtonPrimary } from 'ui/common/components/Buttons/ButtonPrimary/ButtonPrimary';
import { ContainerBox } from 'ui/common/components/Layout/ContainerBox/ContainerBox';
import { TitlePage } from 'ui/common/components/Typography/TitlePage/TitlePage';

import { useEquipment } from 'ui/Equipment/equipment.hooks';

import { NavigatorButton } from 'ui/Equipment/equipment.styles';

export const Equipment = () => {
  const {
    equipment,
    onEquipmentDetailsClick,
    onGoToDashboardClick,
  } = useEquipment();

  return (
    <ContainerBox>
      <TitlePage>Equipment List</TitlePage>
      <Grid>
        <thead>
          <GridRow>
            <GridCellHeader>ID</GridCellHeader>
            <GridCellHeader>NAME</GridCellHeader>
            <GridCellHeader />
          </GridRow>
        </thead>
        <tbody>
          {equipment.map(({ id, name }) => (
            <GridRow key={id}>
              <GridCell>{id}</GridCell>
              <GridCell>{name}</GridCell>
              <GridCell>
                <ButtonPrimary
                  type="button"
                  onClick={(event) => onEquipmentDetailsClick(event, id)}
                >
                  See Details
                </ButtonPrimary>
              </GridCell>
            </GridRow>
          ))}
        </tbody>
      </Grid>
      <NavigatorButton type="button" onClick={onGoToDashboardClick}>
        Go to dashboard
      </NavigatorButton>
    </ContainerBox>
  );
};
