import { IUserRepository } from 'domain/repositories/IUserRepository';
import { User } from 'domain/models/User';
import { INetworkClient } from 'data/network/rest/INetworkClient';

export const UserRepository = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  client: INetworkClient
): IUserRepository => ({
  fetchUsers(): Promise<User[]> {
    return Promise.resolve([new User('1')]);
  },
});
