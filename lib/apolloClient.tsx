import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { config } from './config';

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
    ssrMode: true,
      link: new HttpLink({
        uri: config.backendUrl,
      }),
      cache: new InMemoryCache(),
    });
  }

  return client;
};
