import { IGetEquipmentListUseCase } from 'domain/Equipment/useCases/IGetEquipmentListUseCase';
import { IEquipmentRepository } from 'domain/Equipment/repositories/IEquipmentRepository';
import { Equipment } from 'domain/common/models/Equipment';

export const GetEquipmentListUseCase = (
  equipmentRepository: IEquipmentRepository
): IGetEquipmentListUseCase => ({
  execute(): Promise<Equipment[]> {
    return equipmentRepository.getEquipmentList();
  },
});
