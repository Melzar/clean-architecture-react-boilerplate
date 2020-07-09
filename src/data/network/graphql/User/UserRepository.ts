import { Client } from 'urql';

import { IUserRepository } from 'domain/User/repositories/IUserRepository';

import { GetUsersResponse } from 'data/network/graphql/User/responses/GetUsersResponse';
import { GET_USERS_QUERY } from 'data/network/graphql/User/gql/GetUsersQuery';

import { INetworkMapper } from 'data/network/common/INetworkMapper';
import { INetworkClient } from 'data/network/common/INetworkClient';

import { User } from 'data/network/graphql/common/models/User';
import { User as UserDomain } from 'domain/User/models/User';

import { NETWORK_MAPPING_SYMBOLS } from 'data/network/common/NetworkMappingSymbols';

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
});
