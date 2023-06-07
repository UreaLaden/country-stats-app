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

export const SearchBar = () => {
  const context = React.useContext<GlobalContextProps>(GlobalContext);

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
          console.log("Custom onClear Called");
        }}
        onChange={(_, newValue) =>
          console.log("SearchBox onChange fired: " + newValue)
        }
        onSearch={(newValue) =>
          console.log("SearchBox onSearch fired: " + newValue)
        }
      />
      <Dropdown
        // componentRef={dropdownRef}
        styles={regionFilterClass}
        placeholder="Filter by Region"
        options={dropDownOptions}
      />
    </div>
  );
};
