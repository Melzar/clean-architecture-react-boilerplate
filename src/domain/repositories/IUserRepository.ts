import { User } from 'domain/models/User';

export interface IUserRepository {
  fetchUsers(): Promise<User[]>;
}
