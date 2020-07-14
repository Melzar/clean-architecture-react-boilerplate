import { useHistory } from 'react-router-dom';

import { useInjection } from 'ui/common/hooks/DependencyProvider/dependencyProvider.hooks';

import { IAuthenticateUserUseCase } from 'domain/Auth/Login/useCases/IAuthenticateUserUseCase';
import { AuthenticateUserRequest } from 'domain/Auth/Login/useCases/requests/AuthenticateUserRequest';
import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';

import { navigateToDashboard } from 'ui/Login/login.navigator';

type FormFields = {
  login: string;
  password: string;
};

export const useLogin = () => {
  const history = useHistory();
  const authenticateUserUseCase = useInjection<IAuthenticateUserUseCase>(
    DomainModuleSymbols.AUTHENTICATE_USER_USE_CASE
  );

  const onSubmit = async ({ login, password }: FormFields) => {
    if (login && password) {
      const { token } = await authenticateUserUseCase.execute(
        new AuthenticateUserRequest(login, password)
      ); // TODO handle later this token

      console.log(token);
      if (token) {
        navigateToDashboard(history);
      }
    }
  };

  return {
    onSubmit,
  };
};
