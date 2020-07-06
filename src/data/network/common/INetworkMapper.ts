import { Mapper } from '@wufe/mapper';

export interface INetworkMapper {
  mapper: Mapper;
  initialize(): void;
}
