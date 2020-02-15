import { IUseCase } from 'domain/useCases/IUseCase';
import { User } from 'domain/models/User';

export interface IGetUserListUseCase extends IUseCase<void, User[]> {}
