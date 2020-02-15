import { interfaces } from 'inversify';

import { BaseModule } from 'ioc/BaseModule';
import { bindDependencies } from 'ioc/common/helpers/bindDependencies';

import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { NetworkClient } from 'data/network/rest/NetworkClient';
import { INetworkClient } from 'data/network/rest/INetworkClient';

export class CommonModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideNetworkClient(bind);
  }

  private provideNetworkClient(bind: interfaces.Bind): void {
    bind<INetworkClient>(DataModuleSymbols.NETWORK_CLIENT).toConstantValue(
      bindDependencies(NetworkClient)()
    );
  }
}
