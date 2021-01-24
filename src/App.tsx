import React from "react";
import { AppLayout } from "./layouts";
import Router from "./router";
import { ApolloProvider } from "./providers";

function App() {
  return (
    <ApolloProvider>
      <AppLayout>
        <Router />
      </AppLayout>
    </ApolloProvider>
  );
}

export default App;
