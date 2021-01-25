import React from "react";
import { HomePage, UserPage, SearchResultsPage } from "../views";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopBar from "./TopBar";

function Router() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/:userId">
          <UserPage />
        </Route>
        <Route path="/search/:searchTerm">
          <SearchResultsPage />
        </Route>
        <Route path="*">
          <p>Page not found</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
