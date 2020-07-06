import { Mapper } from '@wufe/mapper';

import { User as UserDomain } from 'domain/User/models/User';

import { User } from 'data/network/graphql/common/models/User';
import { NETWORK_MAPPING_SYMBOLS } from 'data/network/common/NetworkMappingSymbols';

export const userToUserDomain = (mapper: Mapper) =>
  mapper.createMap<User, UserDomain>(
    {
      source: NETWORK_MAPPING_SYMBOLS.USER,
      destination: NETWORK_MAPPING_SYMBOLS.USER_DOMAIN,
    },
    UserDomain
  );
