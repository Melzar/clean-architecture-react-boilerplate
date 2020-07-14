import { Client } from 'urql';

import { IAuthRepository } from 'domain/Auth/common/repositories/IAuthRepository';
import { AuthenticateRepositoryRequest } from 'domain/Auth/common/repositories/requests/AuthenticateRepositoryRequest';
import { Authentication as AuthenticationDomain } from 'domain/Auth/common/models/Authentication';

import { INetworkClient } from 'data/network/common/INetworkClient';
import { INetworkMapper } from 'data/network/common/INetworkMapper';

import { Authentication } from 'data/network/graphql/Auth/models/Authentication';
import { AuthenticateResponse } from 'data/network/graphql/Auth/responses/AuthenticateResponse';
import { AuthenticateInput } from 'data/network/graphql/Auth/inputs/AuthenticateInput';
import { AUTHENTICATE_MUTATION } from 'data/network/graphql/Auth/gql/AuthenticateMutation';
import { NETWORK_MAPPING_SYMBOLS } from 'data/network/common/NetworkMappingSymbols';

export const AuthRepository = (
  { client }: INetworkClient<Client>,
  { mapper }: INetworkMapper
): IAuthRepository => ({
  authenticate: async ({ login, password }: AuthenticateRepositoryRequest) => {
    const { data } = await client
      .mutation<AuthenticateResponse, AuthenticateInput>(
        AUTHENTICATE_MUTATION,
        {
          input: {
            login,
            password,
          },
        }
      )
      .toPromise();

    // TODO Apply proper error handling
    if (!data?.authenticate) {
      throw Error('');
    }

    return mapper.map<Authentication, AuthenticationDomain>(
      {
        source: NETWORK_MAPPING_SYMBOLS.AUTHENTICATION,
        destination: NETWORK_MAPPING_SYMBOLS.AUTHENTICATION_DOMAIN,
      },
      data?.authenticate
    );
  },
});
