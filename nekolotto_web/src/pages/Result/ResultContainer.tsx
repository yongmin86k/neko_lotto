import React, { Component } from "react";
import moment from "moment";
import Result from "./Result";

class ResultContainer extends Component<any> {
  readonly state = {
    lottoResult: null
  };

  render() {
    const { contextProps, routeProps } = this.props;
    const checkDate = routeProps.location.state
      ? moment(routeProps.location.state.date).format("YYYY-MM-DD")
      : null;

    if (!this.state.lottoResult && checkDate) {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl = `https://www.playnow.com/services2/lotto/draw/lmax/${checkDate}`;

      fetch(
        process.env.NODE_ENV || process.env.NODE_ENV === "development"
          ? proxyUrl + targetUrl
          : targetUrl,
        {
          headers: {
            "Content-Type": "application/json"
          },
          method: "GET",
          mode: "cors",
          credentials: "same-origin",
          cache: "default"
        }
      )
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
          console.warn(error);
        });
    }

    return (
      <Result lottoResult={this.state.lottoResult} navigation={routeProps} />
    );
  }
}

export default ResultContainer;
