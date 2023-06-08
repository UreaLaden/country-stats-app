import { ISearchBoxStyles, mergeStyleSets } from "@fluentui/react";
import styled from "styled-components";

export const StyledHeader = styled.div`
    display:flex;
    height:20%;
    border-radius:4px;
    background-color: ${(props) => props.theme.background_secondary};
    color: ${(props) => props.theme.foreground}
    transition:background-color .3s ease, color .3s ease;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    padding:2% 3%;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export const styles = mergeStyleSets({
  toggleContainer: {
    ":hover": {
      cursor: "pointer",
    },
    display: "flex",
  },
  headerText: {
    fontWeight:800,
    fontSize:'1.2rem'
  },
  iconLight: {
    svg: {
      height: "24px",
      path: {
        fill: "#2B3844",
        transition: "fill .3s ease",
      },
    },
  },
  label: {
    fontWeight:600
  },
  iconDark: {
    svg: {
      height: "24px",
      path: {
        fill: "#FFFFFF",
        transition: "fill .3s ease",
      },
    },
  },
  searchContainer: {
    width: "100%",
    display: "flex",
    flexBasis: "100%",
    justifyContent: "space-between",
  },
});

