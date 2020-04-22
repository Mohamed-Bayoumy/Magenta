import React from "react";
import "./search.scss";
const search = ({ value, onChange, formerUser, searchResult }) => {
  return (
    <div className="search">
      <label className="col-sm-2">XRD Search :</label>
      <div className="searchBox col-sm-6">
        <input type="search" value={value} onChange={onChange} />

        <ul className="searchList">
          {formerUser.map((element) => (
            <li key={element.id} id={element.id} onClick={searchResult}>
              <a>{element.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default search;
