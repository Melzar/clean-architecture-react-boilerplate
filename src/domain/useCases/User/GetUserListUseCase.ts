import { User } from 'domain/models/User';
import { IUserRepository } from 'domain/repositories/IUserRepository';
import { IGetUserListUseCase } from 'domain/useCases/User/IGetUserListUseCase';

export const GetUserListUseCase = (
  userRepository: IUserRepository
): IGetUserListUseCase => ({
  execute(): Promise<User[]> {
    return userRepository.fetchUsers();
  },
});
