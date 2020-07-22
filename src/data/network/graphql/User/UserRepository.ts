import { Client } from 'urql';

import { IUserRepository } from 'domain/User/repositories/IUserRepository';

import { GetUsersResponse } from 'data/network/graphql/User/responses/GetUsersResponse';
import { GET_USERS_QUERY } from 'data/network/graphql/User/gql/GetUsersQuery';

import { INetworkMapper } from 'data/network/common/INetworkMapper';
import { INetworkClient } from 'data/network/common/INetworkClient';

import { User } from 'data/network/graphql/common/models/User';
import { User as UserDomain } from 'domain/User/models/User';

import { NETWORK_MAPPING_SYMBOLS } from 'data/network/common/NetworkMappingSymbols';
import { GetUserRepositoryRequest } from 'domain/User/repositories/requests/GetUserRepositoryRequest';
import { GetUserResponse } from 'data/network/graphql/User/responses/GetUserResponse';
import { GET_USER_QUERY } from 'data/network/graphql/User/gql/GetUserQuery';

const USER_NOT_AVAILABLE = 'USER_NOT_AVAILABLE'; // TODO APPLY ERROR HANDLING AND LOGIC, IT'S TEMPORARY

export const UserRepository = (
  { client }: INetworkClient<Client>,
  { mapper }: INetworkMapper
): IUserRepository => ({
  getUsers: async () => {
    const { data } = await client
      .query<GetUsersResponse>(GET_USERS_QUERY, {})
      .toPromise();

    return mapper.map<User[], UserDomain[]>(
      {
        source: NETWORK_MAPPING_SYMBOLS.USER,
        destination: NETWORK_MAPPING_SYMBOLS.USER_DOMAIN,
      },
      data?.users || []
    );
  },
  getUser: async ({ id }: GetUserRepositoryRequest) => {
    const { data } = await client
      .query<GetUserResponse>(GET_USER_QUERY, {
        id,
      })
      .toPromise();

    if (!data?.user) {
      throw Error(USER_NOT_AVAILABLE);
    }

    return mapper.map<User, UserDomain>(
      {
        source: NETWORK_MAPPING_SYMBOLS.USER,
        destination: NETWORK_MAPPING_SYMBOLS.USER_DOMAIN,
      },
      data.user
    );
  },
});
