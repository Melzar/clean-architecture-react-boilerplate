import { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { useInjection } from 'ui/common/hooks/DependencyProvider/dependencyProvider.hooks';
import { navigateToDashboard } from 'ui/User/user.navigator';

import { User } from 'domain/User/models/User';
import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { IGetUserListUseCase } from 'domain/User/useCases/IGetUserListUseCase';

export const useUser = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const getUserListUseCase = useInjection<IGetUserListUseCase>(
    DomainModuleSymbols.GET_USER_LIST_USE_CASE
  );
  const history = useHistory();
  const onGoToDashboardScreen = () => navigateToDashboard(history);

  useEffect(() => {
    (async () => {
      const userListResult = await getUserListUseCase.execute();
      setUserList(userListResult);
    })();
  }, [getUserListUseCase]);

  return {
    userList,
    onGoToDashboardScreen,
  };
};
