import { GlobalContextProps } from "shared/GlobalContextProvider";

export const loadStateFromStorage = (): GlobalContextProps => {
  const dataString = sessionStorage.getItem("context");
  if (dataString) {
    const state = JSON.parse(dataString);
    return state;
  }
  return null;
};
