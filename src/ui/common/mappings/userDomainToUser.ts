import { Mapper } from '@wufe/mapper';

import { User as UserDomain } from 'domain/User/models/User';
import { User } from 'ui/UserDetails/models/User';
import { PRESENTATION_MAPPING_SYMBOLS } from 'ui/common/mappings/PresentationMappingSymbols';

export const userToUserDomain = (mapper: Mapper) =>
  mapper
    .createMap<UserDomain, User>(
      {
        source: PRESENTATION_MAPPING_SYMBOLS.USER,
        destination: PRESENTATION_MAPPING_SYMBOLS.USER_PRESENTATION,
      },
      User
    )
    .forMember('fullName', (opt) =>
      opt.mapFrom(({ firstName, lastName }) => `${firstName} ${lastName}`)
    );
