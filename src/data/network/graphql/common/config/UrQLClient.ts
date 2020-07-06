import { createClient, Client } from 'urql';

import { schemaExchange } from 'urql-exchange-schema';

import { INetworkClient } from 'data/network/common/INetworkClient';
import { mockedSchema } from 'data/network/graphql/mocks/config/mockedSchema';

export const UrQLClient = (): INetworkClient<Client> => ({
  client: createClient({
    url: process.env.REACT_APP_API_URL || '',
    suspense: true,
    // ...(window.localStorage.getItem('MOCKED') && {
    //   exchanges: [schemaExchange(mockedSchema())],
    // }),

    exchanges: [schemaExchange(mockedSchema())],
  }),
  initialize() {},
});
