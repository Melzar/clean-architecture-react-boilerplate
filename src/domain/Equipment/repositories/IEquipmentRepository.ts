import { Equipment } from 'domain/common/models/Equipment';
import { GetEquipmentRepositoryRequest } from 'domain/Equipment/repositories/requests/GetEquipmentRepositoryRequest';

export interface IEquipmentRepository {
  getEquipmentList(): Promise<Equipment[]>;
  getEquipment(request: GetEquipmentRepositoryRequest): Promise<Equipment>;
}
