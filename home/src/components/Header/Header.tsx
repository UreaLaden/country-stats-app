import * as React from "react";
import { StyledHeader, styles } from "./Header.css";
import { classNames } from "../../utils/constants";
import { Icon } from "@fluentui/react";


export const Header = () => {
  return (
    <StyledHeader className={classNames.HeaderContainer}>
      <div className={styles.headerText}>Where in the world?</div>      
      <div className={styles.toggleContainer}>
        <Icon className={styles.icon} iconName={"dark-mode"}/>
        <span className={styles.label}>Dark Mode</span>
      </div>
    </StyledHeader>
  );
};

export default Header;
