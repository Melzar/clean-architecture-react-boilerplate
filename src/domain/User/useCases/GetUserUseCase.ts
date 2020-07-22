import { IGetUserUseCase } from 'domain/User/useCases/IGetUserUseCase';
import { IUserRepository } from 'domain/User/repositories/IUserRepository';
import { GetUserRequest } from 'domain/User/useCases/requests/GetUserRequest';
import { GetUserRepositoryRequest } from 'domain/User/repositories/requests/GetUserRepositoryRequest';
import { User } from 'domain/User/models/User';

export const GetUserUseCase = (
  userRepository: IUserRepository
): IGetUserUseCase => ({
  execute({ id }: GetUserRequest): Promise<User> {
    return userRepository.getUser(new GetUserRepositoryRequest(id));
  },
});
