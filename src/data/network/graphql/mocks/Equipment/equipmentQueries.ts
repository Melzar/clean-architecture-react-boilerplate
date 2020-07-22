import { Equipment } from 'data/network/graphql/common/models/Equipment';

type EquipmentList = {
  [key: string]: Equipment;
};

const equipmentList: EquipmentList = {
  '1': new Equipment(1, 'Knife'),
  '2': new Equipment(2, 'Axe'),
};

export const equipmentQueries = {
  equipmentList: (): Equipment[] => {
    return [equipmentList['1'], equipmentList['2']];
  },
  equipment: (_: any, { id }: { id: string }) => {
    return equipmentList[id];
  },
};
