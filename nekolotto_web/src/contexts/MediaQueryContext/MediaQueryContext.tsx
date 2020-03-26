import React, { Component, createContext } from "react";

const MediaQueryContext = createContext<{ [key: string]: any }>({});

export class MediaQueryProvider extends Component {
  readonly state = {
    screenWidth: window.screen.width,
    device:
      window.screen.width < 768
        ? "mobile"
        : window.screen.width < 992
        ? "tablet"
        : "desktop"
  };

  componentDidMount() {
    window.addEventListener("resize", this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  resizeHandler = () => {
    const newWidth = window.screen.width;

    this.setState({ screenWidth: newWidth });

    this.setState({
      device: newWidth < 768 ? "mobile" : newWidth < 992 ? "tablet" : "desktop"
    });
  };

  render() {
    return (
      <MediaQueryContext.Provider value={{ device: this.state.device }}>
        {this.props.children}
      </MediaQueryContext.Provider>
    );
  }
}

export default MediaQueryContext;
