import React from "react";
import { labsLocation } from "../data";
const labs = props => {
  return (
    <React.Fragment>
      <label className="col-sm-2">{props.label}</label>
      <select required className="col-sm-2">
        <option defaultValue="" className="disabled">
          Select a lab
        </option>
        {labsLocation.map(item => (
          <option key={item}> {item}</option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default labs;
