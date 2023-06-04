import * as React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "./App.css";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/ContentContainer";
import "./index.css";

const App = () => (
  <AppContainer>
    <Header></Header>
    <Content />
  </AppContainer>
);
ReactDOM.render(<App />, document.getElementById("app"));
