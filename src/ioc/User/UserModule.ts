import { interfaces } from 'inversify';

import { BaseModule } from 'ioc/BaseModule';
import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { applyDependencies } from 'ioc/common/helpers/applyDependencies';
import { GetUserListUseCase } from 'domain/useCases/User/GetUserListUseCase';
import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { IUserRepository } from 'domain/repositories/IUserRepository';
import { UserRepository } from 'data/network/UserRepository';
import { IGetUserListUseCase } from 'domain/useCases/User/IGetUserListUseCase';

export class UserModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideUserRepository(bind);

    this.provideGetUserListUseCase(bind);
  }

  private provideGetUserListUseCase(bind: interfaces.Bind): void {
    bind<IGetUserListUseCase>(
      DomainModuleSymbols.GET_USER_LIST_USE_CASE
    ).toConstantValue(
      applyDependencies(GetUserListUseCase, [DataModuleSymbols.USER_REPOSITORY])
    );
  }

  private provideUserRepository(bind: interfaces.Bind): void {
    bind<IUserRepository>(DataModuleSymbols.USER_REPOSITORY).toConstantValue(
      applyDependencies(UserRepository, [DataModuleSymbols.NETWORK_CLIENT])
    );
  }
}
