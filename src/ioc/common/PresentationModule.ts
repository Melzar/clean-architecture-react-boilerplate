import { ContainerModule, interfaces } from 'inversify';

import { PresentationMapper } from 'ui/common/mappings/PresentationMapper';
import { IPresentationMapper } from 'ui/common/mappings/IPresentationMapper';

import { UIModuleSymbols } from 'ui/UIModuleSymbols';

const initializePresentationModule = (bind: interfaces.Bind) => {
  bind<IPresentationMapper>(UIModuleSymbols.PRESENTATION_MAPPER).toDynamicValue(
    () => {
      const mapper = PresentationMapper();
      mapper.initialize();
      return mapper;
    }
  );
};

export const PresentationModule = new ContainerModule(
  initializePresentationModule
);
