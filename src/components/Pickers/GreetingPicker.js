import React from "react";
import Select from "react-select";

const options = [
  {
    value: "firstGreet",
    label: "First time",
    name: "greeter"
  },
  { value: "normalGreet", label: "Simple Hello", name: "greeter" },
  { value: "enthuzedGreet", label: "Enthusiastic", name: "greeter" }
];

const GreetingPicker = props => (
  <Select
    value={props.tag}
    onChange={props.updateTags}
    options={options}
    placeholder="Greeting Select"
    id="greeter"
  />
);

export default GreetingPicker;
