import { useHistory, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { UIModuleSymbols } from 'ui/UIModuleSymbols';

import { navigateToUsersList } from 'ui/UserDetails/userDetails.navigator';
import { useInjection } from 'ui/common/hooks/DependencyProvider/dependencyProvider.hooks';
import { User } from 'ui/UserDetails/models/User';
import { IPresentationMapper } from 'ui/common/mappings/IPresentationMapper';

import { User as UserDomain } from 'domain/User/models/User';
import { IGetUserUseCase } from 'domain/User/useCases/IGetUserUseCase';
import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { GetUserRequest } from 'domain/User/useCases/requests/GetUserRequest';
import { PRESENTATION_MAPPING_SYMBOLS } from 'ui/common/mappings/PresentationMappingSymbols';

export const useUserDetails = () => {
  const [user, setUser] = useState<User>();

  const getUserUseCase = useInjection<IGetUserUseCase>(
    DomainModuleSymbols.GET_USER_USE_CASE
  );
  const { mapper } = useInjection<IPresentationMapper>(
    UIModuleSymbols.PRESENTATION_MAPPER
  );

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const fetchedUser = await getUserUseCase.execute(new GetUserRequest(id));

      const mappedUser = mapper.map<UserDomain, User>(
        {
          source: PRESENTATION_MAPPING_SYMBOLS.USER,
          destination: PRESENTATION_MAPPING_SYMBOLS.USER_PRESENTATION,
        },
        fetchedUser
      );

      setUser(mappedUser);
    })();
  }, [getUserUseCase]);

  const onGoToUserListClick = () => navigateToUsersList(history);

  return {
    user,
    onGoToUserListClick,
  };
};
