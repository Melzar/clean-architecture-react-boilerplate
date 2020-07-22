import { useHistory } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import { Equipment } from 'domain/common/models/Equipment';
import { IGetEquipmentListUseCase } from 'domain/Equipment/useCases/IGetEquipmentListUseCase';
import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';

import { useInjection } from 'ui/common/hooks/DependencyProvider/dependencyProvider.hooks';

import {
  navigateToDashboard,
  navigateToEquipmentDetails,
} from 'ui/Equipment/equipment.navigator';

export const useEquipment = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const history = useHistory();
  const getEquipmentListUseCase = useInjection<IGetEquipmentListUseCase>(
    DomainModuleSymbols.GET_EQUIPMENT_LIST_USE_CASE
  );

  useEffect(() => {
    (async () => {
      const equipmentList = await getEquipmentListUseCase.execute();
      setEquipment(equipmentList);
    })();
  }, [getEquipmentListUseCase]);

  const onEquipmentDetailsClick = (
    event: React.MouseEvent<HTMLElement>,
    id: string
  ) => {
    event.stopPropagation();
    navigateToEquipmentDetails(history, id);
  };

  const onGoToDashboardClick = () => {
    navigateToDashboard(history);
  };

  return {
    equipment,
    onGoToDashboardClick,
    onEquipmentDetailsClick,
  };
};
