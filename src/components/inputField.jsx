import React from "react";

const inputField = props => {
  return (
    <div>
      <label className="col-sm-2">{props.label}</label>
      <input
        type={props.type ? props.type : "text"}
        className={props.styleClass ? props.styleClass : "col-sm-2"}
      />
    </div>
  );
};

export default inputField;
