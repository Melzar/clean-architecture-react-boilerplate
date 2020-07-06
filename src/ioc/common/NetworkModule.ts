import { ContainerModule, interfaces } from 'inversify';
import { Client } from 'urql';

import { UrQLClient } from 'data/network/graphql/common/config/UrQLClient';
import { GraphQLNetworkMapper } from 'data/network/graphql/common/mappings/GraphQLNetworkMapper';

import { INetworkClient } from 'data/network/common/INetworkClient';
import { INetworkMapper } from 'data/network/common/INetworkMapper';

import { DataModuleSymbols } from 'data/DataModuleSymbols';

const initializeNetworkModule = (bind: interfaces.Bind) => {
  bind<INetworkClient<Client>>(
    DataModuleSymbols.GRAPHQL_NETWORK_CLIENT
  ).toDynamicValue(() => {
    const urQLClient = UrQLClient();
    urQLClient.initialize();
    return urQLClient;
  });
  bind<INetworkMapper>(DataModuleSymbols.GRAPHQL_NETWORK_MAPPER).toDynamicValue(
    () => {
      const mapper = GraphQLNetworkMapper();
      mapper.initialize();
      return mapper;
    }
  );
};

export const NetworkModule = new ContainerModule(initializeNetworkModule);
