import { ContainerModule, interfaces } from 'inversify';

import { bindDependencies } from 'ioc/common/helpers/bindDependencies';

import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { NetworkClient } from 'data/network/rest/NetworkClient';
import { INetworkClient } from 'data/network/rest/INetworkClient';

const initializeCommonModule = (bind: interfaces.Bind) => {
  bind<INetworkClient>(DataModuleSymbols.NETWORK_CLIENT).toConstantValue(
    bindDependencies(NetworkClient)()
  );
};

export const CommonModule = new ContainerModule(initializeCommonModule);
