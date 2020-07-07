import React from 'react';

import { useMockButtonWidget } from 'ui/common/widgets/MockButtonWidget/mockButtonWidget.hooks';
import { MockButton } from 'ui/common/widgets/MockButtonWidget/mockButtonWidget.styles';

export const MockButtonWidget = () => {
  const onMockButtonClick = useMockButtonWidget();

  return <MockButton onClick={onMockButtonClick}>M</MockButton>;
};
