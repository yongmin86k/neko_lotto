import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { LoadingProvider } from "./contexts";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { ScrollToTop } from "./components";

const App = () => {
  return (
    <LoadingProvider>
      <Router>
        <ScrollToTop />
        <Routes />
      </Router>
    </LoadingProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
