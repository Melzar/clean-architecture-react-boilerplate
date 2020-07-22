import { userQueries } from 'data/network/graphql/mocks/User/userQueries';
import { authMutations } from 'data/network/graphql/mocks/Auth/authMutations';
import { equipmentQueries } from 'data/network/graphql/mocks/Equipment/equipmentQueries';

export const mockedResolvers = {
  Query: () => ({
    ...userQueries,
    ...equipmentQueries,
  }),
  Mutation: () => ({
    ...authMutations,
  }),
};
