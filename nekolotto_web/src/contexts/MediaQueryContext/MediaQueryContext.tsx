import React, { Component, createContext } from "react";
import { themes } from "../../config/themes";

const MediaQueryContext = createContext<{ [key: string]: any }>({});

export class MediaQueryProvider extends Component {
  readonly state = {
    windowScreen: {
      width: window.screen.width,
      height: window.screen.height
    },
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
    const newHeight = window.screen.height;

    this.setState({ windowScreen: { width: newWidth, height: newHeight } });

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
      <MediaQueryContext.Provider
        value={{
          windowScreen: this.state.windowScreen,
          device: this.state.device
        }}
      >
        {this.props.children}
      </MediaQueryContext.Provider>
    );
  }
}

export default MediaQueryContext;
