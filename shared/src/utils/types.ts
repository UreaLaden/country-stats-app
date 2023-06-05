export interface Country {
  id: string;
  code: string;
  name: CountryName;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  topLevelDomain: string[];
  currencies: Currency[];
  languages: string[];
  borders: string[];
  flag: Flag;
}

export interface Currency {
  [code: string]: { name: string; symbol: string };
}

export interface Language {
  [code: string]: string;
}

export interface Flag {
  code: string;
  png: string;
  svg: string;
  altText: string;
}

export interface CountryName {
  common: string;
  native: string;
}

export interface GlobalContextProps {
  countries: Country[];
  currentCountry?: Country;
  theme: Theme;
  setTheme: (themeName: ThemeName) => void;
  populateCountries: (region: string, byRegion: boolean) => void;
  setCurrentCountry: (country?: Country) => void;
}

export interface GlobalContextProviderProps {
  children?: React.ReactNode;
}

export enum ThemeName {
  LIGHT = "light",
  DARK = "dark",
}

export type Theme = {
  foreground: string;
  background: string;
  background_secondary: string;
};

export const Themes: Record<string, Theme> = {
  LIGHT: {
    foreground: "#2D3436",
    background: "#DFE6E9",
    background_secondary: "#FFFFFF",
  },
  DARK: {
    foreground: "#DFE6E9",
    background: "#2D3436",
    background_secondary: "#636E72",
  },
};

export type ApiError = {
  message: string;
  isError: true;
  error:Object
};

export type ApiResponse = {
  ccn3: string;
  cca3: string;
  name: CountryName;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: Currency[];
  languages: string[];
  borders: string[];
  flag: Flag;
  flags: { png: string; svg: string; altText: string };
};

export type ApiResponseGeneric<T> = ApiError | ApiResponse | Country;

export function isApiError<T>(data: ApiResponseGeneric<T>): data is ApiError {
  return (data as ApiError).isError;
}
