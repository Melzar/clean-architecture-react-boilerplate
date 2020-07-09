import { selector } from 'recoil';

import { SELECTED_USERS_EQUIPMENT_LIST } from 'dataStore/User/UserStateKeys';
import { selectedUserState } from 'dataStore/User/atoms/selectedUserState';

export const selectedUserEquipmentList = (
  fetchSelectedUserEquipmentList: Function
) =>
  selector({
    key: SELECTED_USERS_EQUIPMENT_LIST,
    get: ({ get }) =>
      get(fetchSelectedUserEquipmentList(get(selectedUserState))),
  });
