import { userQueries } from 'data/network/graphql/mocks/User/userQueries';

export const mockedResolvers = {
  Query: () => ({
    ...userQueries,
  }),
  Mutation: () => ({}),
};
