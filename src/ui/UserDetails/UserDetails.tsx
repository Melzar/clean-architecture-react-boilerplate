import React from 'react';

import { useUserDetails } from 'ui/UserDetails/userDetails.hooks';
import { ContentBox } from 'ui/common/components/Layout/ContentBox/ContentBox';
import { NavigatorButton } from 'ui/UserDetails/userDetails.styles';
import { TitleSection } from 'ui/common/components/Typography/TitleSection/TitleSection';
import { Text } from 'ui/common/components/Typography/Text/Text';
import { ContainerBox } from 'ui/common/components/Layout/ContainerBox/ContainerBox';

export const UserDetails = () => {
  const { user, onGoToUserListClick } = useUserDetails();

  return (
    <ContainerBox>
      <ContentBox>
        <TitleSection>
          {user?.firstName} {user?.lastName}
        </TitleSection>
        <div>
          <Text> User ID: {user?.id} </Text>
          <Text> Equipment count: {user?.equipment?.length} </Text>
        </div>
      </ContentBox>
      <NavigatorButton type="button" onClick={onGoToUserListClick}>
        Go to users list
      </NavigatorButton>
    </ContainerBox>
  );
};
