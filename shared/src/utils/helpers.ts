import { GlobalContextProps, Theme } from "./types";

export const loadStateFromStorage = (): GlobalContextProps | null => {
  const dataString = sessionStorage.getItem("context");
  if (dataString) {
    const state = JSON.parse(dataString);
    return state;
  }
  return null;
};

export const loadThemeFromStorage = (defaultTheme:Theme): Theme => {
  const dataString = sessionStorage.getItem("theme");
  
  if (dataString) {
    try {
      const theme = JSON.parse(dataString);
      return theme || defaultTheme;
    } catch (error) {
      return defaultTheme
    }
  }
};
