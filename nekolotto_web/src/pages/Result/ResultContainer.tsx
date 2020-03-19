import React, { Component } from "react";
import moment from "moment";
import Result from "./Result";

class ResultContainer extends Component<any> {
  readonly state = {
    lottoResult: null
  };

  componentDidMount() {
    const { contextProps, routeProps } = this.props;

    const checkDate = routeProps.location.state
      ? moment(routeProps.location.state.date).format("YYYY-MM-DD")
      : null;

    if (checkDate) {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl = `https://www.playnow.com/services2/lotto/draw/lmax/${checkDate}`;

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
  }

  render() {
    const { routeProps } = this.props;

    return (
      <Result lottoResult={this.state.lottoResult} navigation={routeProps} />
    );
  }
}

export default ResultContainer;
