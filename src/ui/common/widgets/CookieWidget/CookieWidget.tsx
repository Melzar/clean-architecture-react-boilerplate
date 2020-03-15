import React from 'react';

import { ContentBox } from 'ui/common/components/Layout/ContentBox/ContentBox';
import { LinkPrimary } from 'ui/common/components/Links/LinkPrimary/LinkPrimary';
import { Text } from 'ui/common/components/Typography/Text/Text';

import { ReactComponent as Cookie } from 'ui/common/assets/icons/cookie.svg';
import {
  CookieIcon,
  CookieText,
  CookieWidgetWrapper,
} from 'ui/common/widgets/CookieWidget/cookieWidget.styles';
import { useCookieWidget } from 'ui/common/widgets/CookieWidget/cookieWidget.hooks';

export const CookieWidget = () => {
  const { onAcceptCookieClick } = useCookieWidget();

  return (
    <ContentBox center css={CookieWidgetWrapper}>
      <Cookie css={CookieIcon} />
      <Text css={CookieText}>
        I&apos;m using cookies on this page to enhance your experience.
      </Text>
      <LinkPrimary onClick={onAcceptCookieClick}>Alright</LinkPrimary>
    </ContentBox>
  );
};
