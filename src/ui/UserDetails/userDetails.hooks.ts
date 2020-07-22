import { useHistory, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { navigateToUsersList } from 'ui/UserDetails/userDetails.navigator';
import { useInjection } from 'ui/common/hooks/DependencyProvider/dependencyProvider.hooks';

import { IGetUserUseCase } from 'domain/User/useCases/IGetUserUseCase';
import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { GetUserRequest } from 'domain/User/useCases/requests/GetUserRequest';
import { User } from 'domain/User/models/User';

export const useUserDetails = () => {
  const [user, setUser] = useState<User>();

  const history = useHistory();
  const getUserUseCase = useInjection<IGetUserUseCase>(
    DomainModuleSymbols.GET_USER_USE_CASE
  );
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const fetchUser = await getUserUseCase.execute(new GetUserRequest(id));
      setUser(fetchUser);
    })();
  }, [getUserUseCase]);

  const onGoToUserListClick = () => navigateToUsersList(history);

  return {
    user,
    onGoToUserListClick,
  };
};
