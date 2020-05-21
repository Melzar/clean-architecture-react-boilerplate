import { ContainerModule, interfaces } from 'inversify';

import { bindDependencies } from 'ioc/common/helpers/bindDependencies';

import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { GetUserListUseCase } from 'domain/useCases/User/GetUserListUseCase';
import { IUserRepository } from 'domain/repositories/IUserRepository';
import { IGetUserListUseCase } from 'domain/useCases/User/IGetUserListUseCase';

import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { UserRepository } from 'data/network/UserRepository';

const initializeUserModule = (bind: interfaces.Bind) => {
  bind<IGetUserListUseCase>(
    DomainModuleSymbols.GET_USER_LIST_USE_CASE
  ).toConstantValue(
    bindDependencies(GetUserListUseCase, [DataModuleSymbols.USER_REPOSITORY])()
  );
  bind<IUserRepository>(DataModuleSymbols.USER_REPOSITORY).toConstantValue(
    bindDependencies(UserRepository, [DataModuleSymbols.NETWORK_CLIENT])()
  );
};

export const UserModule = new ContainerModule(initializeUserModule);
