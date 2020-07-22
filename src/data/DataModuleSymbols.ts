export const DataModuleSymbols = {
  AUTH_REPOSITORY: Symbol.for('AuthRepository'),

  EQUIPMENT_REPOSITORY: Symbol.for('EquipmentRepository'),

  USER_REPOSITORY: Symbol.for('UserRepository'),
  USER_EQUIPMENT_REPOSITORY: Symbol.for('UserEquipmentRepository'),

  NETWORK_CLIENT: Symbol.for('NetworkClient'), // TODO to be defined later
  GRAPHQL_NETWORK_CLIENT: Symbol.for('GraphQLNetworkClient'),

  GRAPHQL_NETWORK_MAPPER: Symbol.for('GraphQLNetworkMapper'),
};
