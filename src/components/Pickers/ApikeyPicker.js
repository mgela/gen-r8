import React from "react";
import Select from "react-select";

const options = [
  { value: true, label: "Yes API key", name: "apikey" },
  { value: false, label: "No API key", name: "apikey" }
];

const ApikeyPicker = props => (
  <Select
    value={props.tag}
    onChange={props.updateTags}
    options={options}
    placeholder="API key"
  />
);

export default ApikeyPicker;
