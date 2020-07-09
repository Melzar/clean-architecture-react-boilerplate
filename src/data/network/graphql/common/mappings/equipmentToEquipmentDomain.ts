import { Mapper } from '@wufe/mapper';

import { Equipment } from 'data/network/graphql/common/models/Equipment';
import { Equipment as EquipmentDomain } from 'domain/common/models/Equipment';

import { NETWORK_MAPPING_SYMBOLS } from 'data/network/common/NetworkMappingSymbols';

export const equipmentToEquipmentDomain = (mapper: Mapper) =>
  mapper.createMap<Equipment, EquipmentDomain>(
    {
      source: NETWORK_MAPPING_SYMBOLS.EQUIPMENT,
      destination: NETWORK_MAPPING_SYMBOLS.EQUIPMENT_DOMAIN,
    },
    EquipmentDomain
  );
