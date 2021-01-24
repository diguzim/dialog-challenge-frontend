import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

function TopBar() {
  return (
    <Row>
      <h1>MySocial</h1>
      <input placeholder="search" />
    </Row>
  );
}

export default TopBar;
