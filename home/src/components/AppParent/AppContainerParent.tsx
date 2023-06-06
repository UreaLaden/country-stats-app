import * as React from "react";
import {
  GlobalContext,
  GlobalContextProps,
} from "shared/GlobalContextProvider";
import { AppContainer } from "./App.css";
import Header from "../Header/Header";
import { Content } from "../Content/ContentContainer";
import { classNames } from "../../utils/constants";

export const AppContainerParent = () => {
  const context = React.useContext<GlobalContextProps>(GlobalContext);
  React.useEffect(() => {
    console.log(context.theme);
  },[context.theme])
  return (
    <AppContainer theme={context.theme} className={classNames.AppContainerParent}>
      <Header />
      <Content />
    </AppContainer>
  );
};

export default AppContainerParent;
