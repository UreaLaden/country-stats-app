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
  regions: string[];
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
  name: string;
  foreground: string;
  background: string;
  background_secondary: string;
};

export const enum Colors {
  WHITE = "#FFFFFF",
  WHITE_OFF = "#F2F2F2",
  GRAY_DARK = "#2B3844",
  GRAY_LIGHT = "#808080",
  GRAY_STROKE = "#979797",
  GRAY_VERYDARK = "#111517",
  GRAY_MAINBG = "#202C36",
}

export const Themes: Record<string, Theme> = {
  LIGHT: {
    name: "LIGHT",
    foreground: Colors.GRAY_VERYDARK,
    background: Colors.WHITE_OFF,
    background_secondary: Colors.WHITE,
  },
  DARK: {
    name: "DARK",
    foreground: Colors.WHITE,
    background: Colors.GRAY_MAINBG,
    background_secondary: Colors.GRAY_DARK,
  },
};

export type ApiError = {
  message: string;
  isError: true;
  error: Object;
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
