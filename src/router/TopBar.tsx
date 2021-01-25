import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { TextInput } from "../components";

const ClickableHeader = styled.h1`
  &:hover {
    cursor: pointer;
  }
`;

const TextInputSpaced = styled(TextInput)`
  margin-left: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  align-items: center;
`;

function TopBar() {
  const history = useHistory();

  function navigateToHome() {
    history.push("/");
  }

  function searchUser(searchTerm: string) {
    history.push(`/search/${searchTerm}`);
  }

  return (
    <Row>
      <ClickableHeader onClick={navigateToHome}>MySocial</ClickableHeader>
      <TextInputSpaced placeholder="search" onEnterPressed={searchUser} />
    </Row>
  );
}

export default TopBar;
