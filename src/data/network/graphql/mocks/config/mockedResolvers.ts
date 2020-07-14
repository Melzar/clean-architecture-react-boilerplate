import { userQueries } from 'data/network/graphql/mocks/User/userQueries';
import { authMutations } from 'data/network/graphql/mocks/Auth/authMutations';

export const mockedResolvers = {
  Query: () => ({
    ...userQueries,
  }),
  Mutation: () => ({
    ...authMutations,
  }),
};
