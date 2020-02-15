import { BaseContainer } from 'ioc/BaseContainer';
import { UserModule } from 'ioc/User/UserModule';
import { CommonModule } from 'ioc/common/CommonModule';

export class AppContainer extends BaseContainer {
  constructor() {
    super({
      defaultScope: 'Singleton',
      skipBaseClassChecks: true,
    });
  }

  /**
   * @description Order of initialization matters
   */
  init(): void {
    this.provideCommonModule();

    this.provideUserModule();
  }

  private provideCommonModule(): void {
    this.load(new CommonModule());
  }

  private provideUserModule(): void {
    this.load(new UserModule());
  }
}

const appContainer = new AppContainer();

export { appContainer };
