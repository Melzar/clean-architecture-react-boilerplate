import { ContainerModule, interfaces } from 'inversify';

import { applyDependencies } from 'ioc/common/helpers/applyDependencies';

import { DataModuleSymbols } from 'data/DataModuleSymbols';

import { IAuthenticateUserUseCase } from 'domain/Auth/Login/useCases/IAuthenticateUserUseCase';
import { AuthenticateUserUseCase } from 'domain/Auth/Login/useCases/AuthenticateUserUseCase';
import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';

export const initializeLoginModule = (bind: interfaces.Bind) => {
  bind<IAuthenticateUserUseCase>(
    DomainModuleSymbols.AUTHENTICATE_USER_USE_CASE
  ).toConstantValue(
    applyDependencies(AuthenticateUserUseCase, [
      DataModuleSymbols.AUTH_REPOSITORY,
    ])
  );
};

export const LoginModule = new ContainerModule(initializeLoginModule);
