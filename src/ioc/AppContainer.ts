import { Container } from 'inversify';

import { UserModule } from 'ioc/User/UserModule';
import { NetworkModule } from 'ioc/common/NetworkModule';
import { EquipmentModule } from 'ioc/Equipment/EquipmentModule';
import { AuthModule } from 'ioc/Auth/common/AuthModule';
import { LoginModule } from 'ioc/Auth/Login/LoginModule';
import { PresentationModule } from 'ioc/common/PresentationModule';

const appContainer = new Container({
  defaultScope: 'Singleton',
  skipBaseClassChecks: true,
});

const initializeContainer = () => {
  appContainer.load(NetworkModule);

  appContainer.load(PresentationModule);

  // TODO It's shared module think later about folder structure
  appContainer.load(AuthModule);

  appContainer.load(LoginModule);
  appContainer.load(UserModule);
  appContainer.load(EquipmentModule);
};

initializeContainer();

export { appContainer, initializeContainer };
