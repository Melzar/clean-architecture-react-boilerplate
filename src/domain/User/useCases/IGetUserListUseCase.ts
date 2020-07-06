import { IUseCase } from 'domain/common/useCases/IUseCase';
import { User } from 'domain/User/models/User';

export interface IGetUserListUseCase extends IUseCase<void, User[]> {}
