import * as React from "react";
import { StyledHeader, styles } from "./Header.css";
import { ThemeNames, classNames } from "../../utils/constants";
import { Dropdown, Icon, SearchBox } from "@fluentui/react";
import {
  GlobalContext,
  GlobalContextProps,
  Theme,
  Themes,
} from "shared/GlobalContextProvider";
import { SearchBar } from "../Search/SearchBar";
import { Link } from "react-router-dom";
import { loadThemeFromStorage } from "../../utils/helpers";

export const Header = () => {
  const context = React.useContext<GlobalContextProps>(GlobalContext);
  const [stateTheme, setStateTheme] = React.useState<Theme>(
    loadThemeFromStorage(context.theme)
  );
  const [themeChanged, setThemeChanged] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState<Theme>(stateTheme);

  React.useEffect(() => {
    if (themeChanged) {
      setTheme(() =>
        theme.name === ThemeNames.Light
          ? context.allThemes[ThemeNames.Dark]
          : context.allThemes[ThemeNames.Light]
      );
      setThemeChanged(false);
    }
  }, [themeChanged]);

  React.useEffect(() => {
    context.setTheme(theme);
  }, [theme]);

  const onThemeToggleClicked = React.useCallback(() => {
    setThemeChanged(true);
  }, []);

  const formattedThemeName: string = React.useMemo(
    () =>
      theme?.name.charAt(0).toUpperCase() + theme?.name.slice(1).toLowerCase(),
    [theme?.name]
  );

  const iconClass = React.useMemo(() => {
    return theme?.name === ThemeNames.Light ? styles.iconLight : styles.iconDark;
  }, [theme?.name]);

  return (
    <StyledHeader className={classNames.HeaderContainer} theme={theme}>
      <div className={styles.headerText}>
        <Link className={styles.headerLink} to="/">
          {" "}
          Where in the world?
        </Link>
      </div>
      <div className={styles.toggleContainer} onClick={onThemeToggleClicked}>
        <Icon className={iconClass} iconName={"dark-mode"} />
        <span className={styles.label}>{formattedThemeName} Mode</span>
      </div>
    </StyledHeader>
  );
};

export default Header;
