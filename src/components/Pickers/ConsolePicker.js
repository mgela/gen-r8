import React from "react";
import Select from "react-select";

const options = [
  { value: "dsads", label: "Referrers", name: "gcc" },
  { value: "Hello", label: "Whitelist API", name: "gcc" },
  { value: "Hi!", label: "Quota", name: "gcc" }
];

const ConsolePicker = props => (
  <Select
    value={props.tag}
    onChange={props.updateTags}
    options={options}
    placeholder="Needs GCC?"
    isMulti={true}
  />
);

export default ConsolePicker;
