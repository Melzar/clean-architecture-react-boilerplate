import React from 'react';

import {
  AngledContentBoxBackground,
  AngledContentBoxContainer,
  AngledContentBoxWrapper,
} from 'ui/common/components/Layout/AngledContentBox/AngledContentBox.styles';

type Props = {
  center?: boolean;
  light?: boolean;
  reverse?: boolean;
  children?: React.ReactNode;
};

export const AngledContentBox = ({ light, center, children }: Props) => (
  <AngledContentBoxWrapper>
    <AngledContentBoxBackground light={light} />
    <AngledContentBoxContainer center={center}>
      {children}
    </AngledContentBoxContainer>
  </AngledContentBoxWrapper>
);
