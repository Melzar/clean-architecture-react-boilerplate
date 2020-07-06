import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import { schema } from 'data/network/graphql/mocks/config/schema';
import { mockedResolvers } from 'data/network/graphql/mocks/config/mockedResolvers';

export const mockedSchema = () => {
  const mockedExecutableSchema = makeExecutableSchema({ typeDefs: schema });

  addMockFunctionsToSchema({
    schema: mockedExecutableSchema,
    mocks: mockedResolvers,
    preserveResolvers: false,
  });

  return mockedExecutableSchema;
};
