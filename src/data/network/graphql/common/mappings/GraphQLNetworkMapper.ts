import { Mapper } from '@wufe/mapper';

import { INetworkMapper } from 'data/network/common/INetworkMapper';

import { userToUserDomain } from 'data/network/graphql/common/mappings/userToUserDomain';
import { equipmentToEquipmentDomain } from 'data/network/graphql/common/mappings/equipmentToEquipmentDomain';
import { authenticationToAuthenticationDomain } from 'data/network/graphql/common/mappings/authenticateToAuthenticateDomain';

export const GraphQLNetworkMapper = (): INetworkMapper => ({
  mapper: new Mapper(),

  initialize() {
    this.mapper.withConfiguration((configuration) =>
      configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true)
    );

    authenticationToAuthenticationDomain(this.mapper);
    userToUserDomain(this.mapper);
    equipmentToEquipmentDomain(this.mapper);
  },
});
