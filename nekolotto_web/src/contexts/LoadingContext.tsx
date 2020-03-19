import React, { Component, createContext } from "react";
import styles from "./LoadingContext.module.css";

const LoadingContext = createContext<{ [key: string]: any }>({});

export class LoadingProvider extends Component {
  readonly state = {
    isLoadingScreen: false
  };

  showLoading = () => {
    this.setState({ isLoadingScreen: true });
  };

  hideLoading = () => {
    this.setState({ isLoadingScreen: false });
  };

  render() {
    const { children } = this.props;

    return (
      <LoadingContext.Provider
        value={{
          isLoadingScreen: this.state.isLoadingScreen,
          showLoading: this.showLoading,
          hideLoading: this.hideLoading
        }}
      >
        <>
          {children}
          <div
            id="loadingScreen"
            className={
              this.state.isLoadingScreen
                ? `${styles.container} ${styles.show}`
                : `${styles.container}`
            }
          >
            <p className={styles.animate}>Loading</p>
          </div>
        </>
      </LoadingContext.Provider>
    );
  }
}

export default LoadingContext;
