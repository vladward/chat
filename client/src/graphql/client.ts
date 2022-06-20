import { ApolloClient, ApolloLink, InMemoryCache, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import create from 'zustand';

import { API_HOST, WS_HOST } from '../constants';
// import { WebSocketLink } from './ws-link';

type ErrorType = {
  hasError: boolean;
  error: any;
  date: number | undefined;
};

export const useErrorsStore = create<ErrorType>(() => ({
  hasError: false,
  error: undefined,
  date: undefined,
}));

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    for (const graphQLError of graphQLErrors) {
      console.log('graphQLError: ', graphQLError);

      useErrorsStore.setState({
        hasError: true,
        error: graphQLError,
        date: Date.now(),
      });
    }
  } else if (networkError) {
    console.log('networkError: ', networkError);

    useErrorsStore.setState({
      hasError: true,
      error: networkError,
      date: Date.now(),
    });
  }
});

const httpLink = createUploadLink({
  uri: API_HOST,
});

// const wsLink = new WebSocketLink({
//   url: 'ws://localhost:5000/graphql',
//   connectionParams: () => {
//     const token = localStorage.getItem('token');
//
//     return {
//       authorization: `Bearer ${token}`,
//     };
//   },
// });
const wsLink = new WebSocketLink(
  new SubscriptionClient(WS_HOST, {
    reconnect: true,
    // uri: 'ws://localhost:5000/graphql',
    connectionParams: () => {
      const token = localStorage.getItem('token');

      return {
        Authorization: `Bearer ${token}`,
      };
    },
  }),
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token') || localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, splitLink]),
  cache: new InMemoryCache(),
});
