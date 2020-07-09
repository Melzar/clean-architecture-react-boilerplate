import { Client } from 'urql';

import { Equipment as EquipmentDomain } from 'domain/common/models/Equipment';
import { IUserEquipmentRepository } from 'domain/User/repositories/IUserEquipmentRepository';
import { GetUserEquipmentRepositoryRequest } from 'domain/User/repositories/requests/GetUserEquipmentRepositoryRequest';

import { INetworkMapper } from 'data/network/common/INetworkMapper';
import { INetworkClient } from 'data/network/common/INetworkClient';

import { NETWORK_MAPPING_SYMBOLS } from 'data/network/common/NetworkMappingSymbols';
import { Equipment } from 'data/network/graphql/common/models/Equipment';

import { GetUserEquipmentResponse } from 'data/network/graphql/User/responses/GetUserEquipmentResponse';
import { GET_USER_EQUIPMENT_QUERY } from 'data/network/graphql/User/gql/GetUserEquipmentQuery';

export const UserEquipmentRepository = (
  { client }: INetworkClient<Client>,
  { mapper }: INetworkMapper
): IUserEquipmentRepository => ({
  getUserEquipment: async ({ userId }: GetUserEquipmentRepositoryRequest) => {
    // TODO This query shouldn't be handled in this repository - it will be changed.
    const { data } = await client
      .query<GetUserEquipmentResponse>(GET_USER_EQUIPMENT_QUERY, { id: userId })
      .toPromise();

    return mapper.map<Equipment[], EquipmentDomain[]>(
      {
        source: NETWORK_MAPPING_SYMBOLS.EQUIPMENT,
        destination: NETWORK_MAPPING_SYMBOLS.EQUIPMENT_DOMAIN,
      },
      data?.user.equipment || []
    );
  },
});
