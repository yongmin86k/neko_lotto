import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Main, Result } from "../pages";
import { Footer } from "../components";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/result" component={Result} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
