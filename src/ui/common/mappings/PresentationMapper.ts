import { Mapper } from '@wufe/mapper';

import { userToUserDomain } from 'ui/common/mappings/userDomainToUser';
import { IPresentationMapper } from 'ui/common/mappings/IPresentationMapper';

export const PresentationMapper = (): IPresentationMapper => ({
  mapper: new Mapper(),

  initialize() {
    this.mapper.withConfiguration((configuration) =>
      configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true)
    );

    userToUserDomain(this.mapper);
  },
});
