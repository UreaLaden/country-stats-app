import { GlobalContextProps } from "./types";

export const loadStateFromStorage = (): GlobalContextProps | null => {
  const dataString = sessionStorage.getItem("context");
  if (dataString) {
    const state = JSON.parse(dataString);
    return state;
  }
  return null;
};
