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
    padding:"5% 5%",
    position:'relative'
  },
  errorContainer:{
    position:'absolute',
    bottom:35,
    color:'red'    
  }
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
    },
  },
};

export const regionFilterStylesLight: Partial<IDropdownStyles> = {
  title: {
    height: "56px",
    border: "none",
    padding: "12px 0 0 32px",
    color:"#202C36",
    backgroundColor:"#FFFFFF",
    transition: "background-color .3s ease",
  },
  root: {
    width: "20%",
  },
  caretDown: {
    padding: "14px 0 0 0",
    color:"#202C36",
    transition: "color .3s ease",
  },
};
export const regionFilterStylesDark: Partial<IDropdownStyles> = {
    title: {
        height: "56px",
        border: "none",
        padding: "12px 0 0 32px",
        color:"#FFFFFF",
        backgroundColor:"#2B3844",
        transition: "background-color .3s ease",
      },
      root: {
        width: "20%",
      },
      caretDown: {
        padding: "14px 0 0 0",
        color:"#FFFFFF",
        transition: "color .3s ease",
      },
};
