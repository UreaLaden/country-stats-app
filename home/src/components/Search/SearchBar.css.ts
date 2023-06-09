import {
  IDropdownStyles,
  ISearchBoxStyles,
  mergeStyleSets,
} from "@fluentui/react";

export const styles = mergeStyleSets({
  searchContainer: {
    width: "100%",
    display: "flex",
    flexBasis: "100%",
    justifyContent: "space-between",
    padding: "5% 5%",
    position: "relative",
    marginTop: "10%",
  },
  errorContainer: {
    position: "absolute",
    bottom: 35,
    color: "red",
    opacity: 0,
    transition: "opacity 250ms ease",
  },
  visible: {
    opacity: 1,
  },
  invisible: {
    opacity: 0,
  },
});

export const searchBoxStylesLight: Partial<ISearchBoxStyles> = {
  icon: {
    transform: "scaleX(-1)",
    color: "#2B3844",
    transition: "color .3s ease",
  },
  root: {
    backgroundColor: "#FFFFFF",
    transition: "background-color .3s ease",
    border: "none",
    width: "40%",
    height: "56px",
    "box-shadow": " 0 0 15px rgba(0,0,0,0.1)",
    input: {
      "::placeholder": {
        color: "#2B3844",
      },
    },
  },
};

export const searchBoxStylesDark: Partial<ISearchBoxStyles> = {
  icon: {
    transform: "scaleX(-1)",
    color: "#FFFFFF",
    transition: "color .3s ease",
  },
  root: {
    backgroundColor: "#2B3844",
    transition: "background-color .3s ease",
    width: "40%",
    height: "56px",
    border: "none",
    "box-shadow": " 0 0 15px rgba(0,0,0,0.1)",
    input: {
      "::placeholder": {
        color: "#FFFFFF",
      },
      color: "#FFFFFF",
    },
  },
};

export const regionFilterStylesLight: Partial<IDropdownStyles> = {
  title: {
    height: "56px",
    border: "none",
    padding: "12px 0 0 32px",
    color: "#202C36",
    backgroundColor: "#FFFFFF",
    transition: "background-color .3s ease",
  },
  root: {
    width: "20%",
  },
  caretDown: {
    padding: "14px 0 0 0",
    color: "#202C36",
    transition: "color .3s ease",
  },
  dropdownItemsWrapper: {},
};
export const regionFilterStylesDark: Partial<IDropdownStyles> = {
  title: {
    height: "56px",
    border: "none",
    padding: "12px 0 0 32px",
    color: "#FFFFFF",
    backgroundColor: "#2B3844",
    transition: "background-color .3s ease",
    ":hover": {
      color: "#FFFFFF !important",
      backgroundColor: "#2B3844 !important",
      border:'none'
    },
    ":not(:focus)":{
      color: "#FFFFFF !important",
      backgroundColor: "#2B3844 !important",
      border:'none'
    },
  },
  root: {
    width: "20%",
  },
  caretDown: {
    padding: "14px 0 0 0",
    color: "#FFFFFF !important",
    transition: "color .3s ease",
  },
  dropdownItemSelected: {
    backgroundColor: "#111517",
    color: "#FFFFFF",
    ":hover": {
      backgroundColor: "#111517",
      color: "#FFFFFF",
    },
  },
  dropdownItem: {
    color: "#FFFFFF",
    backgroundColor: "#202C36",
    ":hover": {
      backgroundColor: "#111517",
      color: "#FFFFFF",
    },
  },
};
