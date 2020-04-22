import React from "react";
import Navigation from "./components/common/navigation/navigation";
import InputForm from "./components/adminUser/inputForm/inputForm";
import {
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return ( <
    div className = "container-fluid" >
    <
    div className = "row" >
    <
    Navigation / >
    <
    Switch > <
    Route path = "/User"
    component = {
      InputForm
    }
    /> <
    Route render = {
      () => < h1 > 404 Page Not Found < /h1>}

      /
      >
      <
      /Switch> < /
      div > < /
      div >
    );
  }

  export default App;