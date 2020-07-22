import { ContainerModule, interfaces } from 'inversify';

import { applyDependencies } from 'ioc/common/helpers/applyDependencies';

import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { EquipmentRepository } from 'data/network/graphql/Equipment/EquipmentRepository';

import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { IEquipmentRepository } from 'domain/Equipment/repositories/IEquipmentRepository';
import { IGetEquipmentListUseCase } from 'domain/Equipment/useCases/IGetEquipmentListUseCase';
import { IGetEquipmentUseCase } from 'domain/Equipment/useCases/IGetEquipmentUseCase';
import { GetEquipmentListUseCase } from 'domain/Equipment/useCases/GetEquipmentListUseCase';
import { GetEquipmentUseCase } from 'domain/Equipment/useCases/GetEquipmentUseCase';

const initializeEquipmentModule = (bind: interfaces.Bind) => {
  bind<IEquipmentRepository>(
    DataModuleSymbols.EQUIPMENT_REPOSITORY
  ).toConstantValue(
    applyDependencies(EquipmentRepository, [
      DataModuleSymbols.GRAPHQL_NETWORK_CLIENT,
      DataModuleSymbols.GRAPHQL_NETWORK_MAPPER,
    ])
  );
  bind<IGetEquipmentListUseCase>(
    DomainModuleSymbols.GET_EQUIPMENT_LIST_USE_CASE
  ).toConstantValue(
    applyDependencies(GetEquipmentListUseCase, [
      DataModuleSymbols.EQUIPMENT_REPOSITORY,
    ])
  );
  bind<IGetEquipmentUseCase>(
    DomainModuleSymbols.GET_EQUIPMENT_USE_CASE
  ).toConstantValue(
    applyDependencies(GetEquipmentUseCase, [
      DataModuleSymbols.EQUIPMENT_REPOSITORY,
    ])
  );
};

export const EquipmentModule = new ContainerModule(initializeEquipmentModule);
