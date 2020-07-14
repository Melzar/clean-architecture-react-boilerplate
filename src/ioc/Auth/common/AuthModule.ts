import { ContainerModule, interfaces } from 'inversify';

import { applyDependencies } from 'ioc/common/helpers/applyDependencies';

import { IAuthRepository } from 'domain/Auth/common/repositories/IAuthRepository';

import { AuthRepository } from 'data/network/graphql/Auth/AuthRepository';

import { DataModuleSymbols } from 'data/DataModuleSymbols';

const initializeAuthModule = (bind: interfaces.Bind) => {
  bind<IAuthRepository>(DataModuleSymbols.AUTH_REPOSITORY).toConstantValue(
    applyDependencies(AuthRepository, [
      DataModuleSymbols.GRAPHQL_NETWORK_CLIENT,
      DataModuleSymbols.GRAPHQL_NETWORK_MAPPER,
    ])
  );
};

export const AuthModule = new ContainerModule(initializeAuthModule);
