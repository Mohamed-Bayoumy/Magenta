import React from "react";
const search = ({ value, onChange }) => {
  return (
    <div>
      <label className="col-sm-2">XRD Search :</label>
      <input
        type="search"
        className="col-sm-6"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default search;
