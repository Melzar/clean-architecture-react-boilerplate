import { User } from 'domain/User/models/User';

export interface IUserRepository {
  getUsers(): Promise<User[]>;
}
