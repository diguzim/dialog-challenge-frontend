import React from "react";
import { cache } from "./cache";
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider as ApolloProviderLib,
  gql,
} from "@apollo/client";

export const typeDefs = gql`
  extend type Query {
    list: UserList!
  }
`;

// Initialize ApolloClient
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
  typeDefs,
});

interface ApolloProviderInterface {
  children: JSX.Element;
}

function ApolloProvider(props: ApolloProviderInterface) {
  const { children } = props;
  return <ApolloProviderLib client={client}>{children}</ApolloProviderLib>;
}

export default ApolloProvider;
