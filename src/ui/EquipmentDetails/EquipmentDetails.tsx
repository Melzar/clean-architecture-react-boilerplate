import React from 'react';

import { ContainerBox } from 'ui/common/components/Layout/ContainerBox/ContainerBox';
import { ContentBox } from 'ui/common/components/Layout/ContentBox/ContentBox';
import { TitleSection } from 'ui/common/components/Typography/TitleSection/TitleSection';
import { Text } from 'ui/common/components/Typography/Text/Text';

import { useEquipmentDetails } from 'ui/EquipmentDetails/equipmentDetails.hooks';

import { NavigatorButton } from 'ui/UserDetails/userDetails.styles';

export const EquipmentDetails = () => {
  const { equipment, onGoToEquipmentListClick } = useEquipmentDetails();
  return (
    <ContainerBox>
      <ContentBox>
        <TitleSection>{equipment?.name}</TitleSection>
        <div>
          <Text> Equipment ID: {equipment?.id} </Text>
        </div>
      </ContentBox>
      <NavigatorButton type="button" onClick={onGoToEquipmentListClick}>
        Go to equipment list
      </NavigatorButton>
    </ContainerBox>
  );
};
