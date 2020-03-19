import React, { Component } from "react";
import Result from "./Result";

class ResultContainer extends Component<any> {
  readonly state = {
    lottoResult: null
  };

  componentDidMount() {
    const { contextProps } = this.props;

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl =
      "https://www.playnow.com/services2/lotto/draw/lmax/2020-03-17";

    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(json => {
        this.setState({ lottoResult: json });

        if (contextProps.isLoadingScreen) {
          setTimeout(() => {
            contextProps.hideLoading();
          }, 400);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { routeProps } = this.props;

    return (
      <Result lottoResult={this.state.lottoResult} navigation={routeProps} />
    );
  }
}

export default ResultContainer;
