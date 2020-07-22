import { ContainerModule, interfaces } from 'inversify';

import { RecoilValue } from 'recoil/dist';

import { applyDependencies } from 'ioc/common/helpers/applyDependencies';

import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { GetUserUseCase } from 'domain/User/useCases/GetUserUseCase';
import { GetUsersUseCase } from 'domain/User/useCases/GetUsersUseCase';
import { GetUserEquipmentUseCase } from 'domain/User/useCases/GetUserEquipmentUseCase';
import { IUserRepository } from 'domain/User/repositories/IUserRepository';
import { IUserEquipmentRepository } from 'domain/User/repositories/IUserEquipmentRepository';
import { IGetUserUseCase } from 'domain/User/useCases/IGetUserUseCase';
import { IGetUsersUseCase } from 'domain/User/useCases/IGetUsersUseCase';
import { IGetUserEquipmentUseCase } from 'domain/User/useCases/IGetUserEquipmentUseCase';

import { DataStoreModuleSymbols } from 'dataStore/DataStoreModuleSymbols';
import { fetchSelectedUserEquipmentList } from 'dataStore/User/selectors/fetchSelectedUserEquipmentList';
import { selectedUserEquipmentList } from 'dataStore/User/selectors/selectedUserEquipmentList';

import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { UserRepository } from 'data/network/graphql/User/UserRepository';
import { UserEquipmentRepository } from 'data/network/graphql/User/UserEquipmentRepository';

const initializeUserModule = (bind: interfaces.Bind) => {
  bind<IUserRepository>(DataModuleSymbols.USER_REPOSITORY).toConstantValue(
    applyDependencies(UserRepository, [
      DataModuleSymbols.GRAPHQL_NETWORK_CLIENT,
      DataModuleSymbols.GRAPHQL_NETWORK_MAPPER,
    ])
  );
  bind<IUserEquipmentRepository>(
    DataModuleSymbols.USER_EQUIPMENT_REPOSITORY
  ).toConstantValue(
    applyDependencies(UserEquipmentRepository, [
      DataModuleSymbols.GRAPHQL_NETWORK_CLIENT,
      DataModuleSymbols.GRAPHQL_NETWORK_MAPPER,
    ])
  );
  bind<IGetUserUseCase>(DomainModuleSymbols.GET_USER_USE_CASE).toConstantValue(
    applyDependencies(GetUserUseCase, [DataModuleSymbols.USER_REPOSITORY])
  );
  bind<IGetUsersUseCase>(
    DomainModuleSymbols.GET_USERS_USE_CASE
  ).toConstantValue(
    applyDependencies(GetUsersUseCase, [DataModuleSymbols.USER_REPOSITORY])
  );
  bind<IGetUserEquipmentUseCase>(
    DomainModuleSymbols.GET_USER_EQUIPMENT_USE_CASE
  ).toConstantValue(
    applyDependencies(GetUserEquipmentUseCase, [
      DataModuleSymbols.USER_EQUIPMENT_REPOSITORY,
    ])
  );
  // TODO Think how we can abstract it so it won't be library dependent
  bind<RecoilValue<any>>(
    DataStoreModuleSymbols.FETCH_SELECTED_USER_EQUIPMENT_LIST_SELECTOR
  ).toConstantValue(
    applyDependencies(fetchSelectedUserEquipmentList, [
      DomainModuleSymbols.GET_USER_EQUIPMENT_USE_CASE,
    ])
  );
  bind<RecoilValue<any>>(
    DataStoreModuleSymbols.SELECTED_USER_EQUIPMENT_LIST_SELECTOR
  ).toConstantValue(
    applyDependencies(selectedUserEquipmentList, [
      DataStoreModuleSymbols.FETCH_SELECTED_USER_EQUIPMENT_LIST_SELECTOR,
    ])
  );
};

export const UserModule = new ContainerModule(initializeUserModule);
