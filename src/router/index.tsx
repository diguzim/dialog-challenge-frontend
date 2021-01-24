import React from "react";
import { HomePage, UserPage } from "../views";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/:userId">
          <UserPage />
        </Route>
        <Route path="*">
          <p>Page not found</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
