import React, { Component, createContext } from "react";
import { themes } from "../../config/themes";

const MediaQueryContext = createContext<{ [key: string]: any }>({});

export class MediaQueryProvider extends Component {
  readonly state = {
    screenWidth: window.screen.width,
    device:
      window.screen.width < themes.breakpoints.tablet
        ? "mobile"
        : window.screen.width < themes.breakpoints.desktop
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
      device:
        newWidth < themes.breakpoints.tablet
          ? "mobile"
          : newWidth < themes.breakpoints.desktop
          ? "tablet"
          : "desktop"
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
