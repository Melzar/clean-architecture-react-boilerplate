import { IGetEquipmentUseCase } from 'domain/Equipment/useCases/IGetEquipmentUseCase';
import { IEquipmentRepository } from 'domain/Equipment/repositories/IEquipmentRepository';
import { Equipment } from 'domain/common/models/Equipment';
import { GetEquipmentRequest } from 'domain/Equipment/useCases/requests/GetEquipmentRequest';
import { GetEquipmentRepositoryRequest } from 'domain/Equipment/repositories/requests/GetEquipmentRepositoryRequest';

export const GetEquipmentUseCase = (
  equipmentRepository: IEquipmentRepository
): IGetEquipmentUseCase => ({
  execute({ id }: GetEquipmentRequest): Promise<Equipment> {
    return equipmentRepository.getEquipment(
      new GetEquipmentRepositoryRequest(id)
    );
  },
});
