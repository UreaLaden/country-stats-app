import * as React from "react";
import { StyledHeader } from "./Header.css";
import { classNames } from "../../utils/constants";
import Toggle from "react-toggle";
import "react-toggle/style.css"

export const Header = () => {
  return (
    <StyledHeader className={classNames.HeaderContainer}>
      <div>Where in the world?</div>
      <label>
        <Toggle
          defaultChecked={false}
          onChange={() => console.log("Toggled Theme")}
        />
        <span>Dark Mode</span>
      </label>
    </StyledHeader>
  );
};

export default Header;
