import * as React from "react";
import ReactDOM from "react-dom/client";
import { AppContainer } from "./components/AppParent/App.css";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/ContentContainer";
import { GlobalContextProvider } from "shared/GlobalContextProvider";
import "./index.css";
import { registerIcons, initializeIcons } from "@fluentui/react";
import { svgIcons } from "./utils/SVGIcons";
import AppContainerParent from "./components/AppParent/AppContainerParent";

initializeIcons();
registerIcons(svgIcons);

const App = () => (
  <GlobalContextProvider>
    <AppContainerParent />
  </GlobalContextProvider>
);
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
