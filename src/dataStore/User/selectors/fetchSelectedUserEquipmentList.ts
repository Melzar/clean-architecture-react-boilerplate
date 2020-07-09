import { selectorFamily } from 'recoil';

import { FETCH_SELECTED_USER_EQUIPMENT_LIST } from 'dataStore/User/UserStateKeys';

import { IGetUserEquipmentUseCase } from 'domain/User/useCases/IGetUserEquipmentUseCase';
import { GetUserEquipmentRequest } from 'domain/User/useCases/requests/GetUserEquipmentRequest';
import { Equipment } from 'domain/common/models/Equipment';

export const fetchSelectedUserEquipmentList = (
  getUserEquipmentListUseCase: IGetUserEquipmentUseCase
) =>
  selectorFamily<Equipment[], string>({
    key: FETCH_SELECTED_USER_EQUIPMENT_LIST,
    get: (id) => async () => {
      if (!id) {
        return [];
      }

      return getUserEquipmentListUseCase.execute(
        new GetUserEquipmentRequest(id)
      );
    },
  });
