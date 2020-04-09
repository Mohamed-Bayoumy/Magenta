import React from "react";
import { Data } from "../../data";
const selectionFields = () => {
  const { Roles, labsLocation, CropGroups } = Data;
  return (
    <div className="form-row">
      <div className="formClassChild col-md-12 col-lg-6">
        <div className="selectform">
          <p>Roles</p>
          <select size={Roles.length} multiple>
            {Roles.map((element) => (
              <option key={element}>{element}</option>
            ))}
          </select>
        </div>
        <select required className="autoScoring">
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
        <select size={labsLocation.length} multiple>
          {labsLocation.map((element) => (
            <option key={element}>{element}</option>
          ))}
        </select>
      </div>
      <div className="selectform col-md-2">
        <p>Crop Groups</p>
        <select size={CropGroups.length} multiple>
          {CropGroups.map((element) => (
            <option key={element}>{element}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default selectionFields;
