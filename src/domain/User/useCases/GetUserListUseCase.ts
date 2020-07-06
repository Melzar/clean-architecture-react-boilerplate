import { User } from 'domain/User/models/User';
import { IUserRepository } from 'domain/User/repositories/IUserRepository';
import { IGetUserListUseCase } from 'domain/User/useCases/IGetUserListUseCase';

export const GetUserListUseCase = (
  userRepository: IUserRepository
): IGetUserListUseCase => ({
  execute(): Promise<User[]> {
    return userRepository.fetchUsers();
  },
});
