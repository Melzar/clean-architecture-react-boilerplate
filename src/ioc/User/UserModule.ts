import { ContainerModule, interfaces } from 'inversify';

import { applyDependencies } from 'ioc/common/helpers/applyDependencies';

import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { GetUserListUseCase } from 'domain/User/useCases/GetUserListUseCase';
import { IUserRepository } from 'domain/User/repositories/IUserRepository';
import { IGetUserListUseCase } from 'domain/User/useCases/IGetUserListUseCase';

import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { UserRepository } from 'data/network/graphql/User/UserRepository';

const initializeUserModule = (bind: interfaces.Bind) => {
  bind<IUserRepository>(DataModuleSymbols.USER_REPOSITORY).toConstantValue(
    applyDependencies(UserRepository, [
      DataModuleSymbols.GRAPHQL_NETWORK_CLIENT,
      DataModuleSymbols.GRAPHQL_NETWORK_MAPPER,
    ])
  );
  bind<IGetUserListUseCase>(
    DomainModuleSymbols.GET_USER_LIST_USE_CASE
  ).toConstantValue(
    applyDependencies(GetUserListUseCase, [DataModuleSymbols.USER_REPOSITORY])
  );
};

export const UserModule = new ContainerModule(initializeUserModule);
