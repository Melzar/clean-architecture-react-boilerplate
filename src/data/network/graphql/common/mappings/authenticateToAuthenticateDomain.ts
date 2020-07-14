import { Mapper } from '@wufe/mapper';

import { NETWORK_MAPPING_SYMBOLS } from 'data/network/common/NetworkMappingSymbols';
import { Authentication } from 'data/network/graphql/Auth/models/Authentication';
import { Authentication as AuthenticationDomain } from 'domain/Auth/common/models/Authentication';

export const authenticationToAuthenticationDomain = (mapper: Mapper) =>
  mapper.createMap<Authentication, AuthenticationDomain>(
    {
      source: NETWORK_MAPPING_SYMBOLS.AUTHENTICATION,
      destination: NETWORK_MAPPING_SYMBOLS.AUTHENTICATION_DOMAIN,
    },
    AuthenticationDomain
  );
