import React from "react";
import ReactDOM from "react-dom";
import store from "./lib";
import { Provider } from "react-redux";
import HomeScreen from "./containers/HomeScreen";
import "./styles/styles.css";
import Theme from "./styles/theme";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Theme>
          <HomeScreen />
        </Theme>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
