import React from "react";
import { Data } from "./data";
const selectionFields = (props) => {
  const { Roles, labsLocation, CropGroups } = Data;
  return (
    <div className="form-row">
      <div className="formClassChild col-md-12 col-lg-6">
        <div className="selectform">
          <p>Roles</p>
          <select
            onChange={props.onChange}
            name="roles"
            size={Roles.length}
            multiple
          >
            {Roles.map((element) => (
              <option key={element}>{element}</option>
            ))}
          </select>
        </div>
        <select
          onChange={props.onChange}
          name="noAutoScoringRoles"
          required
          className="autoScoring"
        >
          <option defaultValue="" className="disabled">
            No AutoScoring roles
          </option>
          {Roles.map((item) => (
            <option key={item}> {item}</option>
          ))}
        </select>
      </div>
      <div className="selectform col-md-2">
        <p>labs</p>
        <select
          onChange={props.onChange}
          name="labs"
          size={labsLocation.length}
          multiple
        >
          {labsLocation.map((element) => (
            <option key={element}>{element}</option>
          ))}
        </select>
      </div>
      <div className="selectform col-md-2">
        <p>Crop Groups</p>
        <select
          onChange={props.onChange}
          name="cropGroups"
          size={CropGroups.length}
          multiple
        >
          {CropGroups.map((element) => (
            <option key={element}>{element}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default selectionFields;
