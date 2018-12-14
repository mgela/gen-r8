import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

const appTheme = {
  main: "coral",
  backgroundColor: "purple",
  textcolor: "black",
  buttons: "lime"
};

class Theme extends React.Component {
  render() {
    return (
      <ThemeProvider theme={appTheme}>{this.props.children}</ThemeProvider>
    );
  }
}

export default Theme;
