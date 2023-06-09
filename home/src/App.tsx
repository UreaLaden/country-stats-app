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
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import DetailsContainerParent from "./components/DetailsPageParent/DetailsPageParent";

initializeIcons();
registerIcons(svgIcons);


const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContainerParent />} />
          <Route path="/details" element={<DetailsContainerParent />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
