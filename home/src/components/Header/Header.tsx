import * as React from "react";
import {
  StyledHeader,
  searchBoxStyles,
  searchBoxStylesDark,
  searchBoxStylesLight,
  styles,
} from "./Header.css";
import { ThemeNames, classNames } from "../../utils/constants";
import { Dropdown, Icon, SearchBox } from "@fluentui/react";
import {
  GlobalContext,
  GlobalContextProps,
} from "shared/GlobalContextProvider";
import { SearchBar } from "../Search/SearchBar";
import { Link } from "react-router-dom";

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

  const mode = React.useMemo(() => {
    return themeName === ThemeNames.Light ? "Light" : "Dark";
  }, [themeName]);

  const iconClass = React.useMemo(() => {
    return themeName === ThemeNames.Light ? styles.iconLight : styles.iconDark;
  }, [themeName]);

  return (
    <StyledHeader className={classNames.HeaderContainer} theme={context.theme}>
      <div className={styles.headerText}>
        <Link className={styles.headerLink} to="/"> Where in the world?</Link>
      </div>
      <div className={styles.toggleContainer} onClick={onThemeToggleClicked}>
        <Icon className={iconClass} iconName={"dark-mode"} />
        <span className={styles.label}>{mode} Mode</span>
      </div>
    </StyledHeader>
  );
};

export default Header;
