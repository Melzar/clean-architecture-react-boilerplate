import { Mapper } from '@wufe/mapper';

import { INetworkMapper } from 'data/network/common/INetworkMapper';

import { userToUserDomain } from 'data/network/graphql/common/mappings/userToUserDomain';

export const GraphQLNetworkMapper = (): INetworkMapper => ({
  mapper: new Mapper(),

  initialize() {
    this.mapper.withConfiguration((configuration) =>
      configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true)
    );

    userToUserDomain(this.mapper);
  },
});
