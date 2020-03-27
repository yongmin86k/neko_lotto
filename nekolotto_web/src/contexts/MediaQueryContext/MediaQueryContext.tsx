import React, { Component, createContext } from "react";
import { themes } from "../../config/themes";

const MediaQueryContext = createContext<{ [key: string]: any }>({});

export class MediaQueryProvider extends Component {
  readonly state = {
    windowScreen: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    device:
      window.innerWidth < themes.breakpoints.tablet
        ? "mobile"
        : window.innerWidth < themes.breakpoints.desktop
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
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

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
