import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar";

const Spacer = styled.div`
  padding: 10px;
`;

interface AppLayoutProps {
  children: JSX.Element;
}

function AppLayout(props: AppLayoutProps) {
  const { children } = props;

  return (
    <Spacer>
      <TopBar />
      {children}
    </Spacer>
  );
}

export default AppLayout;
