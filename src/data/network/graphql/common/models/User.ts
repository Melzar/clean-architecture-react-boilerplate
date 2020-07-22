import { Equipment } from 'data/network/graphql/common/models/Equipment';

export class User {
  constructor(
    public readonly id: number,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly equipment: Equipment[]
  ) {}
}
