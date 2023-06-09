import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./components/Card";
import {GlobalContextProvider,GlobalContext} from "shared/GlobalContextProvider";

const App = () => (  
  <GlobalContextProvider>
    <div>
      <Card
        name={"Bahamas"}
        population ={393248}
        flag={"https://flagcdn.com/bs.svg"}
        region ={"Americas"}
        capital={"Nassau"}
      />
    </div>
  </GlobalContextProvider>
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
