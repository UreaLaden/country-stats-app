import { GlobalContextProps, Theme } from "shared/GlobalContextProvider";

export const loadStateFromStorage = (): GlobalContextProps => {
  const dataString = sessionStorage.getItem("context");
  if (dataString) {
    const state = JSON.parse(dataString);
    return state;
  }
  return null;
};

export const loadThemeFromStorage = (defaultTheme: Theme): Theme => {
  const dataString = sessionStorage.getItem("theme");

  if (dataString) {
    try {
      const theme = JSON.parse(dataString);
      return theme || defaultTheme;
    } catch (error) {
      return defaultTheme;
    }
  }
};

export const loadCountryNamesFromStorage = (
  defaultNames: string[]
): string[] => {
  const dataString = sessionStorage.getItem("context");

  if (dataString) {
    try {
      const storedContext = JSON.parse(dataString);
      return storedContext.countryNames;
    } catch (error) {
      return defaultNames;
    }
  }
  return defaultNames;
};

export const DEFAULT_THEME = {
  name: "LIGHT",
  foreground: "#111517",
  background: "#F2F2F2",
  background_secondary: "#FFFFFF",
}

export const enum Colors {
  WHITE = "#FFFFFF",
  WHITE_OFF = "#F2F2F2",
  GRAY_DARK = "#2B3844",
  GRAY_LIGHT = "#808080",
  GRAY_STROKE = "#979797",
  GRAY_VERYDARK = "#111517",
  GRAY_MAINBG = "#202C36",
}