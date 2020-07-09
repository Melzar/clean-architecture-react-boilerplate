import { User } from 'domain/User/models/User';
import { IUserRepository } from 'domain/User/repositories/IUserRepository';
import { IGetUsersUseCase } from 'domain/User/useCases/IGetUsersUseCase';

export const GetUsersUseCase = (
  userRepository: IUserRepository
): IGetUsersUseCase => ({
  execute(): Promise<User[]> {
    return userRepository.getUsers();
  },
});
