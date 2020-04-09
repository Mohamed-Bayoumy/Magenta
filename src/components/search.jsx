import axios from "axios";
import React, { Component } from "react";
export let User = "";
class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idValue: "",
    };
  }

  // componentDidUpdate() {
  //   const magentaBackEndUrl = "";
  //   axios
  //     .post(magentaBackEndUrl, { data: this.state.idValue })
  //     .then((res) => {
  //       axios
  //         .get(magentaBackEndUrl, {})
  //         .then((res) => {
  //           User = res.data;
  //         })
  //         .catch((error) => {
  //           console.log("There is no info belongs to this user");
  //         });
  //     })
  //     .catch((error) => {
  //       console.log("couldn't post the your id");
  //     });
  // }
  handleChange = (event) => this.setState({ idValue: event.target.value });
  render() {
    return (
      <div>
        <label className="col-sm-2">XRD Search :</label>
        <input
          type="search"
          className="col-sm-6"
          value={this.state.idValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default search;
