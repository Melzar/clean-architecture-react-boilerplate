import { Equipment } from 'domain/common/models/Equipment';

export class User {
  constructor(
    public readonly id: string,
    public readonly fullName: string,
    public readonly equipment: Equipment[]
  ) {}
}
