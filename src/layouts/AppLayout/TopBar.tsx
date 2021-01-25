import React from "react";
import styled from "styled-components";
import { TextInput } from "../../components";

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
  function searchUser(searchTerm: string) {
    console.log("searchTerm", searchTerm);
  }

  return (
    <Row>
      <h1>MySocial</h1>
      <TextInputSpaced placeholder="search" onEnterPressed={searchUser} />
    </Row>
  );
}

export default TopBar;
