import { Authentication } from 'domain/Auth/common/models/Authentication';
import { AuthenticateRepositoryRequest } from 'domain/Auth/common/repositories/requests/AuthenticateRepositoryRequest';

export interface IAuthRepository {
  authenticate: (
    request: AuthenticateRepositoryRequest
  ) => Promise<Authentication>;
}
