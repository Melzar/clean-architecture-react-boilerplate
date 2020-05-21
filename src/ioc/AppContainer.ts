import { Container } from 'inversify';

import { UserModule } from 'ioc/User/UserModule';
import { CommonModule } from 'ioc/common/CommonModule';

const appContainer = new Container({
  defaultScope: 'Singleton',
  skipBaseClassChecks: true,
});

appContainer.load(CommonModule);
appContainer.load(UserModule);

export { appContainer };
