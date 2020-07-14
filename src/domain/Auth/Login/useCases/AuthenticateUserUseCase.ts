import { IAuthenticateUserUseCase } from 'domain/Auth/Login/useCases/IAuthenticateUserUseCase';
import { AuthenticateUserRequest } from 'domain/Auth/Login/useCases/requests/AuthenticateUserRequest';
import { AuthenticateRepositoryRequest } from 'domain/Auth/common/repositories/requests/AuthenticateRepositoryRequest';
import { IAuthRepository } from 'domain/Auth/common/repositories/IAuthRepository';
import { Authentication } from 'domain/Auth/common/models/Authentication';

export const AuthenticateUserUseCase = (
  authRepository: IAuthRepository
): IAuthenticateUserUseCase => ({
  execute({
    login,
    password,
  }: AuthenticateUserRequest): Promise<Authentication> {
    return authRepository.authenticate(
      new AuthenticateRepositoryRequest(login, password)
    );
  },
});
