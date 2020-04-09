import React from "react";
import Navigation from "./components/common/navigation/navigation";
import InputForm from "./components/inputForm/inputForm";
import {
  Route
} from 'react-router-dom';

function App() {
  return ( < div className = "container-fluid" >
    <
    div className = "row" >
    <
    Navigation / >
    <
    Route path = "/User"
    component = {
      InputForm
    }
    /> < /
    div > <
    /div>
  );
}

export default App;