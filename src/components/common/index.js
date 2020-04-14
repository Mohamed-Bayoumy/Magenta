import React from "react";
import "../common/navigation/navigation.scss";
const inputField = ({
    name,
    label,
    value,
    onChange,
    inputClass,
    hasError
  }) => {
    return ( <
      div className = "form-group" >
      <
      label htmlFor = {
        name
      }
      className = "col-sm-2" > {
        label
      } <
      /label> <
      input className = {
        inputClass ? inputClass : "col-sm-2"
      }
      id = {
        name
      }
      name = {
        name
      }
      value = {
        value
      }
      onChange = {
        onChange
      }
      /> {
        hasError.value ? null : < p className = "errorClass" > {
            hasError.message
          } < /p>} <
          /div>
      );
    };

    export default inputField;