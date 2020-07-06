import { User } from 'domain/User/models/User';

export interface IUserRepository {
  fetchUsers(): Promise<User[]>;
}
