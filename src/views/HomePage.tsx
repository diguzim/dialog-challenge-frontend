import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST, UserList } from "../models";
import { UserCard, CardsDisplayer } from "../components";
import { GenericError } from ".";

function HomePage() {
  const { data, loading, error } = useQuery<UserList>(GET_USER_LIST);

  if (error) {
    <GenericError />;
  }

  if (!data || loading) {
    return <p>Loading...</p>;
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
