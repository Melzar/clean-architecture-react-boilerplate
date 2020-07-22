import { IUseCase } from 'domain/common/useCases/IUseCase';
import { Equipment } from 'domain/common/models/Equipment';

export interface IGetEquipmentListUseCase extends IUseCase<void, Equipment[]> {}
