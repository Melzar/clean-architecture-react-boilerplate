import { ContainerModule, interfaces } from 'inversify';

import { applyDependencies } from 'ioc/common/helpers/applyDependencies';

import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { NetworkClient } from 'data/network/rest/NetworkClient';
import { INetworkClient } from 'data/network/rest/INetworkClient';

const initializeCommonModule = (bind: interfaces.Bind) => {
  bind<INetworkClient>(DataModuleSymbols.NETWORK_CLIENT).toConstantValue(
    applyDependencies(NetworkClient, [])
  );
};

export const CommonModule = new ContainerModule(initializeCommonModule);
