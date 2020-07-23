import { Mapper } from '@wufe/mapper';

export interface IPresentationMapper {
  mapper: Mapper;
  initialize(): void;
}
