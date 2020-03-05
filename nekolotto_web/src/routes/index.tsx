import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Main } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
