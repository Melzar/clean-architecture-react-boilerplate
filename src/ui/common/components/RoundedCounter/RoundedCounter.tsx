import React from 'react';

import {
  RoundedCounterCircle,
  RoundedCounterWrapper,
} from 'ui/common/components/RoundedCounter/RoundedCounter.styles';
import { LabelSmall } from 'ui/common/components/Labels/LabelSmall/LabelSmall';

type Props = {
  roundedValue: string | number;
  children?: React.ReactNode;
  light?: boolean;
};

export const RoundedCounter = ({ children, roundedValue, light }: Props) => (
  <RoundedCounterWrapper>
    <RoundedCounterCircle light={light}>
      <LabelSmall>{roundedValue}</LabelSmall>
    </RoundedCounterCircle>
    {children}
  </RoundedCounterWrapper>
);
