import { Container } from 'inversify';

import { UserModule } from 'ioc/User/UserModule';
import { CommonModule } from 'ioc/common/CommonModule';

export const initializeContainer = (): Container => {
  const container = new Container({
    defaultScope: 'Singleton',
    skipBaseClassChecks: true,
  });

  container.load(CommonModule);
  container.load(UserModule);

  return container;
};

const appContainer = initializeContainer();

export { appContainer };
