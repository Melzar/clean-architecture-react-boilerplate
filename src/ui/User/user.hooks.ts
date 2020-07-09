import { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { RecoilState, useRecoilState } from 'recoil';

import { useInjection } from 'ui/common/hooks/DependencyProvider/dependencyProvider.hooks';
import { navigateToDashboard } from 'ui/User/user.navigator';

import { User } from 'domain/User/models/User';
import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { IGetUsersUseCase } from 'domain/User/useCases/IGetUsersUseCase';

import { DataStoreModuleSymbols } from 'dataStore/DataStoreModuleSymbols';
import { selectedUserState } from 'dataStore/User/atoms/selectedUserState';

import { Equipment } from 'domain/common/models/Equipment';

export const useUser = () => {
  const history = useHistory();
  const getUserListUseCase = useInjection<IGetUsersUseCase>(
    DomainModuleSymbols.GET_USERS_USE_CASE
  );
  const selectedUserEquipmentList = useInjection<RecoilState<Equipment[]>>(
    DataStoreModuleSymbols.SELECTED_USER_EQUIPMENT_LIST_SELECTOR
  );

  const [users, setUsers] = useState<User[]>([]);
  const [equipment] = useRecoilState(selectedUserEquipmentList);
  const [selectedUser, setSelectedUser] = useRecoilState(selectedUserState);

  const onGoToDashboardScreen = () => navigateToDashboard(history);
  const onUserClick = (id: string | null) => setSelectedUser(id);

  useEffect(() => {
    (async () => {
      const userListResult = await getUserListUseCase.execute();
      setUsers(userListResult);
    })();
  }, [getUserListUseCase]);

  return {
    users,
    equipment,
    selectedUser,
    onGoToDashboardScreen,
    onUserClick,
  };
};
