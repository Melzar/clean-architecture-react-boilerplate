import { IUseCase } from 'domain/common/useCases/IUseCase';
import { AuthenticateUserRequest } from 'domain/Auth/Login/useCases/requests/AuthenticateUserRequest';
import { Authentication } from 'domain/Auth/common/models/Authentication';

export interface IAuthenticateUserUseCase
  extends IUseCase<AuthenticateUserRequest, Authentication> {}
