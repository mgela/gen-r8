import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { trying } from "../actions";
import { withTheme } from "styled-components";
import styled from "styled-components";
import { Button } from "../components/styledComponents";
import GreetingPicker from "../components/Pickers/GreetingPicker";
import ConclusivePicker from "../components/Pickers/ConclusivePicker";
import ApikeyPicker from "../components/Pickers/ApikeyPicker";
import ConsolePicker from "../components/Pickers/ConsolePicker";

class HomeScreen extends React.Component {
  state = {
    name: null,
    greeter: null,
    conclusive: null,
    apikey: null,
    gcc: []
  };

  updateName = event => {
    this.setState({
      name: event.target.value
    });
  };

  updateTags = event => {
    this.setState({
      [event.name]: event
    });
  };
  updateConsole = event => {
    this.setState(prevState => ({
      gcc: event
    }));
  };

  fireAction = () => {
    this.props.trying(this.state.name);
  };

  render() {
    return (
      <div className="App">
        <h3>Name: {this.props.user.user} </h3>
        <input onChange={this.updateName} placeholder="Enter customer name" />
        <GreetingPicker tag={this.state.greeter} updateTags={this.updateTags} />
        <ConclusivePicker
          tag={this.state.conclusive}
          updateTags={this.updateTags}
        />
        <ApikeyPicker updateTags={this.updateTags} tag={this.state.apikey} />
        <ConsolePicker updateTags={this.updateConsole} tag={this.state.gcc} />
        <Button onClick={() => console.log(this.state)}>Generate</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  trying: data => dispatch(trying(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
