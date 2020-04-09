import React, { Component } from "react";
import InputField from "../common/inputField";
import Search from "../search";
import { Data } from "../../data.js";
import SelectionFields from "./selectionFields";
import Joi from "joi-browser";
import "./inputForm.scss";

class inputForm extends Component {
  state = {
    account: {
      userName: "",
      password: "",
      xrdSid: "",
      xrdOid: "",
      xrdCode: "",
      xrdContent: "",
      email: "",
    },
    errors: {},
  };

  schema = {
    userName: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors });
    if (errors) return;
  };
  render() {
    const { account } = this.state;
    return (
      <div className=" col Form">
        <h3>User Input</h3>
        <div>
          <form onSubmit={this.handleSubmit} className="input-form">
            <InputField
              label={"Name :"}
              name="userName"
              onChange={this.handleChange}
              value={account.userName}
            />
            <InputField
              label={"Login :"}
              name="password"
              onChange={this.handleChange}
              value={account.password}
            />

            <label className="col-sm-2">Reference lab:</label>
            <select required className="col-sm-2">
              <option defaultValue="" className="disabled">
                Select a lab
              </option>
              {Data.labsLocation.map((item) => (
                <option key={item}> {item}</option>
              ))}
            </select>
            <br />
            <Search />

            <InputField
              label={"XRD SID :"}
              name="xrdSid"
              onChange={this.handleChange}
              value={account.xrdSid}
            />
            <InputField
              label={"XRD OID :"}
              name="xrdOid"
              onChange={this.handleChange}
              value={account.xrdOid}
            />

            <InputField
              label={"XRD Code :"}
              name="xrdCode"
              onChange={this.handleChange}
              value={account.xrdCode}
            />

            <InputField
              label={"XRD Content :"}
              name="xrdContent"
              onChange={this.handleChange}
              value={account.xrdContent}
              inputClass={"col-sm-4"}
            />

            <InputField
              label={"e-mail :"}
              name="email"
              onChange={this.handleChange}
              value={account.email}
              inputClass={"col-sm-4"}
            />

            <SelectionFields />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default inputForm;
