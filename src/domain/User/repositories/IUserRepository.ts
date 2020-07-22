import { User } from 'domain/User/models/User';
import { GetUserRepositoryRequest } from 'domain/User/repositories/requests/GetUserRepositoryRequest';

export interface IUserRepository {
  getUsers(): Promise<User[]>;
  getUser(request: GetUserRepositoryRequest): Promise<User>;
}
