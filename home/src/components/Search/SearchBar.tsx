import * as React from "react";
import { Dropdown, SearchBox } from "@fluentui/react";
import {
  regionFilterStylesDark,
  regionFilterStylesLight,
  searchBoxStylesDark,
  searchBoxStylesLight,
  styles,
} from "./SearchBar.css";
import { ThemeNames } from "../../utils/constants";
import {
  GlobalContext,
  GlobalContextProps,
  Theme,
} from "shared/GlobalContextProvider";
import { Country } from "shared/CountryTypes";
import { Trie } from "../../utils/TrieSearch";
import {
  loadCountryNamesFromStorage,
  loadThemeFromStorage,
} from "../../utils/helpers";

export const SearchBar = () => {
  const context = React.useContext<GlobalContextProps>(GlobalContext);
  const [theme, setTheme] = React.useState<Theme>(
    loadThemeFromStorage(context.theme)
  );
  const [trie, setTrie] = React.useState<Trie>(new Trie());
  const [enableError, setEnableError] = React.useState<boolean>(false);

  React.useEffect(() => {
    trie.compileNodes(loadCountryNamesFromStorage(context.countryNames));
  }, [context.countryNames]);

  React.useEffect(() => {
    setTheme((prevTheme: Theme) => loadThemeFromStorage(context.theme));
  }, [context.theme]);

  const SearchInputHandler = (newValue: string) => {
    if (trie?.search(newValue)) {
      context.findCountryByName(newValue);
      console.log("SearchBox onSearch fired: " + newValue);
    } else {
      setEnableError(true);
      setTimeout(() => {
        setEnableError(false);
      }, 2500);
    }
  };

  const getRelativeCountries = (value: string): string[] => {
    return trie!.selectCountriesWithPrefix(value, trie!);
  };

  const OnSearchInputChanged = (_: any, newValue?: string) => {
    //Should filter the currently displayed cards
    if (newValue) {
      const relatedCountries = getRelativeCountries(newValue);
      const filteredCountries: Country[] = relatedCountries.map((value) =>
        context.countries.find(
          (item: Country) => item.name.common.toLowerCase() === value
        )
      );
      context.delay(3000);
      context.setFilteredCountries(filteredCountries);
    }
  };

  const searchBoxClass = React.useMemo(() => {
    return theme.name === ThemeNames.Light
      ? searchBoxStylesLight
      : searchBoxStylesDark;
  }, [theme]);

  const dropDownOptions = context.regions.map((region: string) => {
    return { key: region, text: region };
  });

  const regionFilterClass = React.useMemo(() => {
    return theme.name === ThemeNames.Light
      ? regionFilterStylesLight
      : regionFilterStylesDark;
  }, [theme]);

  return (
    <div className={styles.searchContainer}>
      <SearchBox
        styles={searchBoxClass}
        placeholder="Search for a country..."
        onEscape={(ev) => {
          console.log("Custom onEscape Called");
        }}
        onClear={(ev) => {
          context.setFilteredCountries([]);
        }}
        onChange={OnSearchInputChanged}
        onSearch={SearchInputHandler}
      />
      <Dropdown
        // componentRef={dropdownRef}
        styles={regionFilterClass}
        placeholder="Filter by Region"
        options={dropDownOptions}
        onChange={(_ev: any, option: any) =>
          context.populateCountries(option.text, true)
        }
      />
      <div
        className={`${styles.errorContainer} ${
          enableError ? styles.visible : styles.invisible
        }`}
      >
        Sorry I couldn't find any country with that name :(
      </div>
    </div>
  );
};
