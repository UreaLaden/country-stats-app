import * as React from "react";
import ReactDOM from "react-dom/client";
import { AppContainer } from "./App.css";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/ContentContainer";
import { GlobalContextProvider } from "shared/GlobalContextProvider";
import "./index.css";

const App = () => (
  <GlobalContextProvider>
    <AppContainer>
      <Header></Header>
      <Content />
    </AppContainer>
  </GlobalContextProvider>
);
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App/>);
