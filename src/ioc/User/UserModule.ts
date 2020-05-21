import { ContainerModule, interfaces } from 'inversify';

import { applyDependencies } from 'ioc/common/helpers/applyDependencies';

import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { GetUserListUseCase } from 'domain/useCases/User/GetUserListUseCase';
import { IUserRepository } from 'domain/repositories/IUserRepository';
import { IGetUserListUseCase } from 'domain/useCases/User/IGetUserListUseCase';

import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { UserRepository } from 'data/network/UserRepository';

const initializeUserModule = (bind: interfaces.Bind) => {
  bind<IUserRepository>(DataModuleSymbols.USER_REPOSITORY).toConstantValue(
    applyDependencies(UserRepository, [DataModuleSymbols.NETWORK_CLIENT])
  );
  bind<IGetUserListUseCase>(
    DomainModuleSymbols.GET_USER_LIST_USE_CASE
  ).toConstantValue(
    applyDependencies(GetUserListUseCase, [DataModuleSymbols.USER_REPOSITORY])
  );
};

export const UserModule = new ContainerModule(initializeUserModule);
