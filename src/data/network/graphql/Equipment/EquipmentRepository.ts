import { Client } from 'urql';

import { Equipment } from 'data/network/graphql/common/models/Equipment';
import { INetworkClient } from 'data/network/common/INetworkClient';
import { INetworkMapper } from 'data/network/common/INetworkMapper';
import { GetEquipmentListResponse } from 'data/network/graphql/Equipment/responses/GetEquipmentListResponse';
import { GET_EQUIPMENT_LIST_QUERY } from 'data/network/graphql/Equipment/gql/GetEquipmentListQuery';
import { NETWORK_MAPPING_SYMBOLS } from 'data/network/common/NetworkMappingSymbols';
import { GET_EQUIPMENT_QUERY } from 'data/network/graphql/Equipment/gql/GetEquipmentQuery';
import { GetEquipmentResponse } from 'data/network/graphql/Equipment/responses/GetEquipmentResponse';

import { Equipment as EquipmentDomain } from 'domain/common/models/Equipment';
import { IEquipmentRepository } from 'domain/Equipment/repositories/IEquipmentRepository';
import { GetEquipmentRepositoryRequest } from 'domain/Equipment/repositories/requests/GetEquipmentRepositoryRequest';

const EQUIPMENT_NOT_AVAILABLE = 'EQUIPMENT_NOT_AVAILABLE';

export const EquipmentRepository = (
  { client }: INetworkClient<Client>,
  { mapper }: INetworkMapper
): IEquipmentRepository => ({
  getEquipmentList: async () => {
    const { data } = await client
      .query<GetEquipmentListResponse>(GET_EQUIPMENT_LIST_QUERY, {})
      .toPromise();

    return mapper.map<Equipment[], EquipmentDomain[]>(
      {
        source: NETWORK_MAPPING_SYMBOLS.EQUIPMENT,
        destination: NETWORK_MAPPING_SYMBOLS.EQUIPMENT_DOMAIN,
      },
      data?.equipmentList || []
    );
  },
  getEquipment: async ({ id }: GetEquipmentRepositoryRequest) => {
    const { data } = await client
      .query<GetEquipmentResponse>(GET_EQUIPMENT_QUERY, { id })
      .toPromise();

    if (!data?.equipment) {
      throw Error(EQUIPMENT_NOT_AVAILABLE);
    }

    return mapper.map<Equipment, EquipmentDomain>(
      {
        source: NETWORK_MAPPING_SYMBOLS.EQUIPMENT,
        destination: NETWORK_MAPPING_SYMBOLS.EQUIPMENT_DOMAIN,
      },
      data.equipment
    );
  },
});
