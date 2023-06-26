import * as React from "react";
import {
  Country,
  GlobalContextProps,
  GlobalContextProviderProps,
  Theme,
  ThemeName,
  Themes,
  isApiError,
} from "../utils/types";
import countryApiClient from "./country-api-client";
import { loadStateFromStorage } from "../utils/helpers";
export * as types from "../utils/types";

export const GlobalContext = React.createContext<GlobalContextProps>({
  countries: [],
  currentCountry: undefined,
  theme: Themes.LIGHT,
  allThemes:Themes,
  regions: [],
  countryNames: [],
  filteredCountries: [],
  setState: () => {},
  getState: () => null,
  delay: () => {},
  setFilteredCountries: () => {},
  setTheme: () => {},
  populateCountries: () => {},
  setCurrentCountry: () => {},
  findCountryByName: () => {},
  getCountryByName:() => undefined,
  fetchCountry: () => {},
});

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = (
  props: GlobalContextProviderProps
) => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [regions, setRegions] = React.useState<string[]>([]);
  const [currentCountry, setCurrentCountry] = React.useState<
    Country | undefined
  >(undefined);
  const [themes,setThemes] = React.useState<Record<string,Theme>>(Themes);
  const [theme, setActiveTheme] = React.useState<Theme>(Themes.LIGHT);
  const [countryNames, setCountryNames] = React.useState<string[]>([]);
  const [filteredCountries, setFilteredCountries] = React.useState<Country[]>(
    []
  );
  const [countryIndex,setCountryIndex] = React.useState<Record<string,Country>>({})

  React.useEffect(() => {
    setThemes(Themes);
  },[])

  React.useEffect(() => {
    saveThemeToStorage({...theme});
  }, [theme.name]);
  
  const saveStateToStorage = (state: GlobalContextProps) => {
    const dataString = JSON.stringify(state);
    sessionStorage.setItem("context", dataString);
  };
  
  const saveThemeToStorage = (theme: Theme) => {
    const dataString = JSON.stringify(theme);
    sessionStorage.setItem("theme", dataString);
  };

  const updateStateHandler = (newState: GlobalContextProps) => {
    saveStateToStorage(newState);
  };

  const fetchCountryHandler = async (name: string) => {
    const country = await countryApiClient.getCountryByName(name);
    if (!isApiError(country)) {
      setCurrentCountry(country);
      updateStateHandler({ ...context });
    }
  };

  React.useEffect(() => {
    if (!currentCountry) {
      setCurrentCountryHandler(countries[0]);
      setRegionsHandler();
      setCountryNamesHandler();
      updateStateHandler({ ...context });
      
      const index: Record<string,Country> = {};
      countries.forEach((country) => {
        index[country.name.common] = country;
      });
      setCountryIndex(index);
    }
  }, [countries]);

  const setThemeHandler = (theme: Theme) => {
    saveThemeToStorage(theme);
    setActiveTheme(theme);
  };

  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
          setFilteredCountries(data);
        }
      });
    }
  };

  const setFilteredCountriesHandler = (countries: Country[]) => {
    setFilteredCountries(countries);
  };

  const findCountryByName = (name: string) => {
    countryApiClient.getCountryByName(name).then((data) => {
      if (isApiError(data)) {
        //Do something
      } else {
        setCountries([data]);
      }
    });
  };

  const setCountryNamesHandler = () => {
    const names = countries.map((value) => value.name.common);
    setCountryNames(names);
  };

  const setRegionsHandler = () => {
    const regions = countries.map((country) => country.region);
    const regionSet = [...new Set(regions)];
    setRegions(regionSet);
  };

  const setCurrentCountryHandler = (country?: Country) => {
    if (country) {
      setCurrentCountry(country);
    } else {
      setCurrentCountry(countries[0]);
    }
  };
  const getCountryByNameHandler = (name:string):Country | undefined => {
    return countryIndex[name];
  }

  const context: GlobalContextProps = {
    countries: countries,
    currentCountry: currentCountry,
    theme: theme,
    allThemes:themes,
    regions: regions,
    countryNames: countryNames,
    filteredCountries: filteredCountries,
    getState: loadStateFromStorage,
    setState: updateStateHandler,
    delay: delay,
    setFilteredCountries: setFilteredCountriesHandler,
    findCountryByName: findCountryByName,
    getCountryByName:getCountryByNameHandler,
    setTheme: setThemeHandler,
    populateCountries: setCountriesHandler,
    setCurrentCountry: setCurrentCountryHandler,
    fetchCountry: fetchCountryHandler,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
};
