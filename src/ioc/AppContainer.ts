import { Container } from 'inversify';

import { UserModule } from 'ioc/User/UserModule';
import { NetworkModule } from 'ioc/common/NetworkModule';

const appContainer = new Container({
  defaultScope: 'Singleton',
  skipBaseClassChecks: true,
});

appContainer.load(NetworkModule);
appContainer.load(UserModule);

export { appContainer };
