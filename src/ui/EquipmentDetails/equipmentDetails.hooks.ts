import { useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';

import { useInjection } from 'ui/common/hooks/DependencyProvider/dependencyProvider.hooks';
import { navigateToEquipmentList } from 'ui/EquipmentDetails/equipmentDetails.navigator';

import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { IGetEquipmentUseCase } from 'domain/Equipment/useCases/IGetEquipmentUseCase';
import { Equipment } from 'domain/common/models/Equipment';
import { GetEquipmentRequest } from 'domain/Equipment/useCases/requests/GetEquipmentRequest';

export const useEquipmentDetails = () => {
  const [equipment, setEquipment] = useState<Equipment>();

  const history = useHistory();
  const getEquipmentUseCase = useInjection<IGetEquipmentUseCase>(
    DomainModuleSymbols.GET_EQUIPMENT_USE_CASE
  );
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const fetchUser = await getEquipmentUseCase.execute(
        new GetEquipmentRequest(id)
      );
      setEquipment(fetchUser);
    })();
  }, [getEquipmentUseCase]);

  const onGoToEquipmentListClick = () => navigateToEquipmentList(history);

  return {
    equipment,
    onGoToEquipmentListClick,
  };
};
