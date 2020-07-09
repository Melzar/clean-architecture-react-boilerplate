import { Equipment } from 'domain/common/models/Equipment';
import { GetUserEquipmentRepositoryRequest } from 'domain/User/repositories/requests/GetUserEquipmentRepositoryRequest';

export interface IUserEquipmentRepository {
  getUserEquipment(
    request: GetUserEquipmentRepositoryRequest
  ): Promise<Equipment[]>;
}
