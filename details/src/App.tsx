import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Card from "./components/Card";

const App = () => (
  <div>
    <Card>Country 1 - Details</Card>
    <Card>Country 2 - Details</Card>
    <Card>Country 3 - Details</Card>
    <Card>Country 4 - Details</Card>
    <Card>Country 5 - Details</Card>
    <Card>Country 6 - Details</Card>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
