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
export * as types from "../utils/types";

export const GlobalContext = React.createContext<GlobalContextProps>({
  countries: [],
  currentCountry: undefined,
  theme: Themes.LIGHT,
  regions:[],
  countryNames:[],
  filteredCountries:[],
  delay: () => {},
  setFilteredCountries: () => {},
  setTheme: () => {},
  populateCountries: () => {},
  setCurrentCountry: () => {},
  findCountryByName: () => {},
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
  const [countryNames,setCountryNames] = React.useState<string[]>([]);
  const [filteredCountries,setFilteredCountries] = React.useState<Country[]>([]);

  React.useEffect(() => {
    if(!currentCountry){
        setCurrentCountryHandler(countries[0]);
        setRegionsHandler();
        setCountryNamesHandler();
    }
  },[countries])

  const setThemeHandler = (themeName: ThemeName) => {
    setActiveTheme(Themes[themeName] as Theme);
  };

  const delay = (ms:number) =>{
    return new Promise(resolve => setTimeout(resolve,ms));
}

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

  const setFilteredCountriesHandler = (countries:Country[]) => {
    setFilteredCountries(countries);
  }

  const findCountryByName = (name:string) => {
    countryApiClient.getCountryByName(name).then((data) => {
      if(isApiError(data)){
        //Do something
      }else{
        setCountries([data])
      }
    })
  }

  const setCountryNamesHandler = () => {
    setCountryNames(countries.map(value => value.name.common))
  }

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
    countryNames:countryNames,
    filteredCountries:filteredCountries,
    delay:delay,
    setFilteredCountries:setFilteredCountriesHandler,
    findCountryByName:findCountryByName,
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
