import { Container } from 'inversify';

import { UserModule } from 'ioc/User/UserModule';
import { NetworkModule } from 'ioc/common/NetworkModule';
import { AuthModule } from 'ioc/Auth/common/AuthModule';
import { LoginModule } from 'ioc/Auth/Login/LoginModule';

const appContainer = new Container({
  defaultScope: 'Singleton',
  skipBaseClassChecks: true,
});

const initializeContainer = () => {
  appContainer.load(NetworkModule);

  // TODO It's shared module think later about folder structure
  appContainer.load(AuthModule);

  appContainer.load(LoginModule);
  appContainer.load(UserModule);
};

initializeContainer();

export { appContainer, initializeContainer };
