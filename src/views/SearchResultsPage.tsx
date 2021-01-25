import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USER_LIST, UserList } from "../models";
import { UserCard, CardsDisplayer } from "../components";
import { useParams } from "react-router-dom";
import { GenericApolloError, GenericLoading } from "../layouts";

interface SearchResultsPageRouterParams {
  searchTerm: string;
}

function SearchResultsPage() {
  const { searchTerm } = useParams<SearchResultsPageRouterParams>();
  const { data, loading, error } = useQuery<UserList>(GET_USER_LIST, {
    variables: { searchTerm },
  });

  if (error) {
    return <GenericApolloError error={error} />;
  }

  if (!data || loading) {
    return <GenericLoading />;
  }

  const { list: userList } = data;

  if (userList.length === 0) {
    return <h1>No results found.</h1>;
  }

  return (
    <>
      <h1>Search Results:</h1>
      <CardsDisplayer>
        {userList.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </CardsDisplayer>
    </>
  );
}

export default SearchResultsPage;
