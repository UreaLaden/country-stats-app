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
  regions:[],
  setTheme: () => {},
  populateCountries: () => {},
  setCurrentCountry: () => {}
});

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = (
  props: GlobalContextProviderProps
) => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [regions,setRegions] = React.useState<string[]>([]);
  const [currentCountry, setCurrentCountry] = React.useState<
    Country | undefined
  >(undefined);
  const [theme, setActiveTheme] = React.useState<Theme>(Themes.LIGHT);


  React.useEffect(() => {
    if(!currentCountry){
        setCurrentCountryHandler(countries[0]);
        setRegionsHandler();
    }
  },[countries])

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

  const setRegionsHandler = () => {
    const regions = countries.map((country) => country.region);
    setRegions([...new Set(regions)]);
  }

  const setCurrentCountryHandler = (country?:Country) => {
    if(country){
        setCurrentCountry(country);
    }else{
        setCurrentCountry(countries[0]);
    }
  }

  const context: GlobalContextProps = {
    countries: countries,
    currentCountry: currentCountry,
    theme: theme,
    regions:regions,
    setTheme: setThemeHandler,
    populateCountries: setCountriesHandler,
    setCurrentCountry:setCurrentCountryHandler
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
};
