import { Mapper } from '@wufe/mapper';

import { INetworkMapper } from 'data/network/common/INetworkMapper';

export const RestNetworkMapper = (): INetworkMapper => ({
  mapper: new Mapper(),

  initialize() {
    this.mapper.withConfiguration((configuration) =>
      configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true)
    );
  },
});
