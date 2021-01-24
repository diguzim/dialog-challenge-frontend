import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_USER_AND_ITS_FRIENDS, User, UserList } from "../models";
import { useParams } from "react-router-dom";
import { CardsDisplayer, Paragraph, UserCard } from "../components";

const UserRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserImage = styled.img`
  max-width: 100px;
`;

const UserInfo = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

interface UserRouteParams {
  userId: string;
}

function UserPage() {
  const { userId } = useParams<UserRouteParams>();
  const { data, loading, error } = useQuery<UserList>(
    GET_USER_AND_ITS_FRIENDS,
    {
      variables: { userId: userId },
    }
  );

  if (!data || loading) {
    return <p>Loading...</p>;
  }

  const user = data.list[0];
  if (!user) {
    return <p>User not found</p>;
  }

  const friends = user.friends || ([] as User[]);

  return (
    <>
      <UserRow>
        <UserImage src={user.picture} />
        <UserInfo>
          <Paragraph>{`name: ${user.name}`}</Paragraph>
          <Paragraph>{`age: ${user.age}`}</Paragraph>
          <Paragraph>{`email: ${user.email}`}</Paragraph>
        </UserInfo>
      </UserRow>
      <h1>Friends</h1>
      <CardsDisplayer>
        {friends.map((friend) => (
          <UserCard key={friend._id} user={friend} />
        ))}
      </CardsDisplayer>
    </>
  );
}

export default UserPage;
