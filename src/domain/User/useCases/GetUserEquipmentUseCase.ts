import { IGetUserEquipmentUseCase } from 'domain/User/useCases/IGetUserEquipmentUseCase';
import { GetUserEquipmentRequest } from 'domain/User/useCases/requests/GetUserEquipmentRequest';
import { IUserEquipmentRepository } from 'domain/User/repositories/IUserEquipmentRepository';
import { Equipment } from 'domain/common/models/Equipment';
import { GetUserEquipmentRepositoryRequest } from 'domain/User/repositories/requests/GetUserEquipmentRepositoryRequest';

export const GetUserEquipmentUseCase = (
  userEquipmentRepository: IUserEquipmentRepository
): IGetUserEquipmentUseCase => ({
  execute({ userId }: GetUserEquipmentRequest): Promise<Equipment[]> {
    return userEquipmentRepository.getUserEquipment(
      new GetUserEquipmentRepositoryRequest(userId)
    );
  },
});
