import { IUseCase } from 'domain/common/useCases/IUseCase';
import { GetUserRequest } from 'domain/User/useCases/requests/GetUserRequest';
import { User } from 'domain/User/models/User';

export interface IGetUserUseCase extends IUseCase<GetUserRequest, User> {}
