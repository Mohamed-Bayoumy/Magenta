import React from "react";
import InputField from "./inputField";
import { Roles, labsLocation, CropGroups } from "../data";
import Labs from "./labs";
const inputForm = () => {
  return (
    <div className=" col-sm-12 col-md-8 col-lg-10  Form">
      <h3>User Input</h3>
      <form className="input-form">
        <InputField label={"Name :"} />
        <InputField label={"Login :"} />
        <Labs label={"Reference lab:"} />
        <br />
        <InputField
          type={"search"}
          styleClass={"col-sm-6"}
          label={"XRD Search :"}
        />

        <InputField label={"XRD SID :"} />
        <InputField label={"XRD OID :"} />
        <InputField label={"XRD Code :"} />
        <InputField styleClass={"col-sm-4"} label={"XRD Content :"} />
        <InputField styleClass={"col-sm-4"} label={"e-mail :"} />
      </form>
      <div className="formClass">
        <form>
          <p>Roles</p>
          <select size={Roles.length} multiple>
            {Roles.map(element => (
              <option key={element}>{element}</option>
            ))}
          </select>
        </form>
        <form>
          <p>labs</p>
          <select size={labsLocation.length} multiple>
            {labsLocation.map(element => (
              <option key={element}>{element}</option>
            ))}
          </select>
        </form>
        <form>
          <p>Crop Groups</p>
          <select size={CropGroups.length} multiple>
            {CropGroups.map(element => (
              <option key={element}>{element}</option>
            ))}
          </select>
        </form>
        <div>
          <select required className="autoScoring">
            <option defaultValue="" className="disabled">
              No AutoScoring roles
            </option>
            {Roles.map(item => (
              <option key={item}> {item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default inputForm;
