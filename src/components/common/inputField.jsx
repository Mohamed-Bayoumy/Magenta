import React from "react";

const inputField = ({ name, label, value, onChange, inputClass }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="col-sm-2">
        {label}
      </label>
      <input
        className={inputClass ? inputClass : "col-sm-2"}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default inputField;
