import React, { Component } from "react";
import InputField from "../common/inputField";
import Search, { formerUser } from "../search";
import { Data } from "../../data.js";
import SelectionFields from "./selectionFields";
import "./inputForm.scss";
import axios from "axios";

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
    errors: {
      userName: {
        message: "User Name is required",
        value: false,
      },
      password: {
        message: "password is required",
        value: false,
      },
      xrdSid: {
        message: "Xrd Sid is required",
        value: false,
      },
      xrdOid: {
        message: "Xrd Oid is required",
        value: false,
      },
      xrdCode: {
        message: "Xrd Code is required",
        value: false,
      },
      xrdContent: {
        message: "Xrd Content is required",
        value: false,
      },
      email: {
        message: "Email isn't Valid",
        value: false,
      },
    },
    disableSubmit: false,
    data: "",
    idValue: "",
  };

  // handleSubmit =async () => {
  //   await axios.post(,this.state.account)
  // };
  async componentDidMount() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ data: data });
  }
  handleSearchChange = (event) => {
    this.setState({ idValue: event.target.value }, () => {
      const { data, idValue, account, errors } = { ...this.state };
      const formerUser = data.find(
        (element) => element.id.toString() === idValue
      );
      console.log(formerUser);
      if (formerUser) {
        account.userName = formerUser.name;
        errors.userName.value = true;
        account.email = formerUser.email;
        errors.email.value = true;
        this.setState({ account });
      }
    });
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const account = { ...this.state.account };
    let disableSubmit = { ...this.state.disableSubmit };
    const index = input.name;
    account[index] = input.value;
    if (index === "email") {
      this.setState({ account });
      this.validateEmail(index);
    } else if (account[index]) {
      errors[index].value = true;
    } else {
      errors[index].value = false;
    }

    for (let key in errors) {
      if (errors[key].value === false) {
        disableSubmit = false;
        break;
      } else {
        disableSubmit = true;
      }
    }
    this.setState({ account, errors, disableSubmit });
  };
  validateEmail(index) {
    const errors = { ...this.state.errors };
    if (/\S+@\S+\.\S+/.test(this.state.account.email)) {
      errors[index].message = "this Email is valid";
      errors[index].value = true;
    }
    this.setState({ errors });
  }

  render() {
    const { account, errors } = this.state;
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
              hasError={errors.userName}
            />
            <InputField
              label={"Login :"}
              name="password"
              onChange={this.handleChange}
              value={account.password}
              hasError={errors.password}
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
            <Search
              onChange={this.handleSearchChange}
              value={this.state.idValue}
            />

            <InputField
              label={"XRD SID :"}
              name="xrdSid"
              onChange={this.handleChange}
              value={account.xrdSid}
              hasError={errors.xrdSid}
            />
            <InputField
              label={"XRD OID :"}
              name="xrdOid"
              onChange={this.handleChange}
              value={account.xrdOid}
              hasError={errors.xrdOid}
            />

            <InputField
              label={"XRD Code :"}
              name="xrdCode"
              onChange={this.handleChange}
              value={account.xrdCode}
              hasError={errors.xrdCode}
            />

            <InputField
              label={"XRD Content :"}
              name="xrdContent"
              onChange={this.handleChange}
              value={account.xrdContent}
              inputClass={"col-sm-4"}
              hasError={errors.xrdContent}
            />

            <InputField
              label={"e-mail :"}
              name="email"
              onChange={this.handleChange}
              value={account.email}
              inputClass={"col-sm-4"}
              hasError={errors.email}
            />

            <SelectionFields />
            <button
              type="submit"
              onClick={this.handleSubmit}
              disabled={!this.state.disableSubmit}
            >
              Create
            </button>
            <button>Back</button>
          </form>
        </div>
      </div>
    );
  }
}

export default inputForm;
