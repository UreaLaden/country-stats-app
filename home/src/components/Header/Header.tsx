import * as React from "react";
import { StyledHeader } from "./Header.css";
import { classNames } from "../../utils/constants";

export const Header = () => {
  return (
    <StyledHeader className={classNames.HeaderContainer}>
      Where in the world?
    </StyledHeader>
  );
};
