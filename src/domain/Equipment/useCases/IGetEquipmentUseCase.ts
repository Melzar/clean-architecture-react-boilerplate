import { IUseCase } from 'domain/common/useCases/IUseCase';
import { Equipment } from 'domain/common/models/Equipment';
import { GetEquipmentRequest } from 'domain/Equipment/useCases/requests/GetEquipmentRequest';

export interface IGetEquipmentUseCase
  extends IUseCase<GetEquipmentRequest, Equipment> {}
