import { ApolloError } from "@apollo/client";
import React from "react";

interface GenericApolloErrorProps {
  error: ApolloError;
}

function GenericApolloError(props: GenericApolloErrorProps) {
  return <h1>Some error happened</h1>;
}

export default GenericApolloError;
