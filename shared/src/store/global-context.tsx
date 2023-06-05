import * as React from "react";
import {
  Country,
  GlobalContextProps,
  GlobalContextProviderProps,
  Theme,
  ThemeName,
  Themes,
} from "../utils/types";
import countryApiClient from "./country-api-client";
export * as types from "../utils/types";

export const GlobalContext = React.createContext<GlobalContextProps>({
  countries: [],
  currentCountry: undefined,
  theme: Themes.LIGHT,
  setTheme: () => {},
  populateCountries: () => {},
});

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = (
  props: GlobalContextProviderProps
) => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [currentCountry, setCurrentCountry] = React.useState<
    Country | undefined
  >(undefined);
  const [theme, setActiveTheme] = React.useState<Theme>(Themes.LIGHT);

  const setThemeHandler = (themeName: ThemeName) => {
    setActiveTheme(Themes[themeName] as Theme);
  };

  const setCountriesHandler = (region = "", byRegion = true) => {
    if (byRegion === false) {
      countryApiClient.getAllCountries().then((data) => {
        if (Array.isArray(data)) {
          setCountries(data);
        }
      });
    } else {
      countryApiClient.getCountriesByRegion(region).then((data) => {
        if (Array.isArray(data)) {
          setCountries(data);
        }
      });
    }
  };

  const context: GlobalContextProps = {
    countries: countries,
    currentCountry: currentCountry,
    theme: theme,
    setTheme: setThemeHandler,
    populateCountries: setCountriesHandler,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
};
