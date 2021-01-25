import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST, UserList } from "../models";
import { UserCard, CardsDisplayer } from "../components";
import { GenericApolloError, GenericLoading } from "../layouts";

function HomePage() {
  const { data, loading, error } = useQuery<UserList>(GET_USER_LIST);

  if (error) {
    return <GenericApolloError error={error} />;
  }

  if (!data || loading) {
    return <GenericLoading />;
  }

  const { list: userList } = data;

  return (
    <CardsDisplayer>
      {userList.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </CardsDisplayer>
  );
}

export default HomePage;
