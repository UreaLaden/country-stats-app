import * as React from "react";
import { StyledHeader, styles } from "./Header.css";
import { ThemeNames, classNames } from "../../utils/constants";
import { Dropdown, Icon, SearchBox } from "@fluentui/react";
import {
  GlobalContext,
  GlobalContextProps,
} from "shared/GlobalContextProvider";

export const Header = () => {
  const context = React.useContext<GlobalContextProps>(GlobalContext);
  const [themeName, setThemeName] = React.useState<ThemeNames>(
    ThemeNames.Light
  );

  React.useEffect(() => {
    context.setTheme(themeName);
  }, [themeName]);

  const onThemeToggleClicked = React.useCallback(() => {
    setThemeName((themeName) =>
      themeName === ThemeNames.Light ? ThemeNames.Dark : ThemeNames.Light
    );
  }, []);

  const iconClass = React.useMemo(() => {
    return themeName === ThemeNames.Light ? styles.iconLight : styles.iconDark;
  }, [themeName]);

  return (
    <StyledHeader className={classNames.HeaderContainer} theme={context.theme}>
      <div className={styles.headerText}>Where in the world?</div>
      <div className={styles.toggleContainer} onClick={onThemeToggleClicked}>
        <Icon className={iconClass} iconName={"dark-mode"} />
        <span className={styles.label}>Dark Mode</span>
      </div>
      <div className={styles.searchContainer}>
        <SearchBox
          // styles={searchBoxStyles}
          placeholder="Search"
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
          placeholder="Select an option"
          options={[
            { key: "A", text: "Option a", title: "I am option a." },
            { key: "B", text: "Option b" },
            { key: "D", text: "Option d" },
            { key: "E", text: "Option e" },
          ]}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
