import React from "react";
import Select from "react-select";

const options = [
  { value: true, label: "Yes proceed", name: "conclusive" },
  { value: false, label: "Not enough info", name: "conclusive" }
];

const ConclusivePicker = props => (
  <Select
    value={props.tag}
    onChange={props.updateTags}
    options={options}
    placeholder="Conclusive Issue"
  />
);

export default ConclusivePicker;
