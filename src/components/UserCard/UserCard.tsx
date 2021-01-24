import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Paragraph } from "..";
import { User } from "../../models";

const Card = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  width: 220px;
  overflow: hidden;
`;

const CardImage = styled.img`
  max-width: 200px;

  &:hover {
    cursor: pointer;
  }
`;

export interface UserCardProps {
  user: User;
}

function UserCard(props: UserCardProps) {
  const { user } = props;
  const history = useHistory();

  function navigateToUserDetails() {
    history.push(`/${user._id}`);
  }

  return (
    <Card>
      <CardImage
        src={user.picture}
        alt="avatar, click to navigate"
        onClick={navigateToUserDetails}
      />
      <Paragraph>{`name: ${user.name}`}</Paragraph>
      <Paragraph>{`age: ${user.age}`}</Paragraph>
      <Paragraph>{`eyeColor: ${user.eyeColor}`}</Paragraph>
      <Paragraph>{`company: ${user.company}`}</Paragraph>
      <Paragraph>{`email: ${user.email}`}</Paragraph>
    </Card>
  );
}

export default UserCard;
