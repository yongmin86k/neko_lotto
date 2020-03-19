import React, { Component } from "react";
import Main from "./Main";

class MainContainer extends Component<any> {
  componentDidMount() {
    const { contextProps } = this.props;

    if (contextProps.isLoadingScreen) {
      contextProps.hideLoading();
    }
  }

  render() {
    const { routeProps, contextProps } = this.props;

    return <Main navigation={routeProps} contextProps={contextProps} />;
  }
}

export default MainContainer;
