import { IUseCase } from 'domain/common/useCases/IUseCase';
import { Equipment } from 'domain/common/models/Equipment';
import { GetUserEquipmentRequest } from 'domain/User/useCases/requests/GetUserEquipmentRequest';

export interface IGetUserEquipmentUseCase
  extends IUseCase<GetUserEquipmentRequest, Equipment[]> {}
