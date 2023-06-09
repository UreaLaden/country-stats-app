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
} from "shared/GlobalContextProvider";
import { Country } from "shared/CountryTypes";
import { Trie } from "../../utils/TrieSearch";

export const SearchBar = () => {
  const context = React.useContext<GlobalContextProps>(GlobalContext);
  const [trie, setTrie] = React.useState<Trie>();
  const [searchCountries, setSearchCountries] = React.useState();
  const [enableError, setEnableError] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTrie(new Trie());
  }, []);

  React.useEffect(() => {
    trie?.compileNodes(context.countryNames);
  }, [context.countryNames]);

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
    return context.theme.name === ThemeNames.Light
      ? searchBoxStylesLight
      : searchBoxStylesDark;
  }, [context.theme]);

  const dropDownOptions = context.regions.map((region: string) => {
    return { key: region, text: region };
  });

  const regionFilterClass = React.useMemo(() => {
    return context.theme.name === ThemeNames.Light
      ? regionFilterStylesLight
      : regionFilterStylesDark;
  }, [context.theme]);

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
