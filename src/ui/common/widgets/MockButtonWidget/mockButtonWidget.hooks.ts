import { useLocalStorage } from 'ui/common/hooks/LocalStorage/localStorage.hooks';

// eslint-disable-next-line no-restricted-imports
import { appContainer, initializeContainer } from 'ioc/AppContainer';

export const useMockButtonWidget = () => {
  const [localStoreValue, setValue] = useLocalStorage('MOCK'); // TODO Try to extract this key

  const onMockButtonClick = () => {
    setValue(!localStoreValue);
    appContainer.unbindAll();
    initializeContainer();
    // eslint-disable-next-line no-console
    console.log(`MOCKS ${!localStoreValue ? 'ENABLED' : 'DISABLED'}`);
  };

  return onMockButtonClick;
};
