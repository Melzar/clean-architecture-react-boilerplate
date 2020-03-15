export const useCookieWidget = () => {
  const onAcceptCookieClick = () => {
    console.log('cookie accepted');
  };

  return {
    onAcceptCookieClick,
  };
};
