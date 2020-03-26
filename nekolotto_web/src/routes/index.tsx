import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LoadingContext } from "../contexts";
import { Main, Result } from "../pages";
import { Footer } from "../components";

const Routes = () => {
  return (
    <LoadingContext.Consumer>
      {contextProps => {
        return (
          <>
            <Switch>
              <Route
                exact
                path="/"
                render={routeProps => (
                  <Main routeProps={routeProps} contextProps={contextProps} />
                )}
              />
              <Route
                exact
                path="/result"
                render={routeProps => (
                  <Result routeProps={routeProps} contextProps={contextProps} />
                )}
              />
              <Redirect from="*" to="/" />
            </Switch>

            <Footer />
          </>
        );
      }}
    </LoadingContext.Consumer>
  );
};

export default Routes;
