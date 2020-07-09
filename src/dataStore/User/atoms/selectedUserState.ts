import { atom } from 'recoil';

import { SELECTED_USER_STATE } from 'dataStore/User/UserStateKeys';

export const selectedUserState = atom<string | null>({
  key: SELECTED_USER_STATE,
  default: null,
});
