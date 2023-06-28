import { mergeStyleSets } from "@fluentui/react";
import styled from "styled-components";

export const styles = mergeStyleSets({
  backButtonContainer: {
    margin: "6rem 0 0 8rem",
    gridArea: "2 / 1 / 3 / -1",
    display: "flex",
    "align-items": "center",
    "justify-content": "start",
    "@media (max-width: 768px)": {
      padding: "2rem 0 0 0",
      margin:0
    },
  },
  detailsContainerWrapper: {
    margin: "0 8rem",
    gridArea: "3 / 1 / -1 / -1",
    display: "grid",
    "grid-template-rows": "repeat(10,1fr)",
    "grid-template-columns": "repeat(10,1fr)",
    "@media (max-width:480px)":{
        gridArea:"3 / 1 / -1 / -1",
        margin:0,
        "grid-template-columns":"1fr",
        backgroundColor:'inherit',
        overflowY:'scroll'
    }
  },
  detailsImageContainer: {
    gridArea: "1 / 1 / 7 / 6",
    display: "grid",
    "grid-template-columns": "repeat(10,1fr)",
    "grid-template-rows": "repeat(10,1fr)",
    '@media (max-width:480px)':{
        gridArea:'1 / 1 / 4 / -1',
        backgroundColor:'inherit',
    }
  },
  detailsImage: {
    height: "100%",
    gridArea: "3 / 2 / 9 / -2",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "10px",
    boxShadow: "0 0 2px 2px rgba(0,0,0,0.1)",
    '@media (max-width:480px)':{
        gridArea: "2 / 1 / 10 / -1",
    }
  },
  innerDetailsContainer: {
    gridArea: "1 / 6 / 7 / -1",
    display: "grid",
    "grid-template-rows": "repeat(7,1fr)",
    "grid-template-columns": "repeat(7,1fr)",
    '@media (max-width:480px)':{
        gridArea: "4 / 1 / -1 / -1",
        "z-index":3
    }
  },
  detailsHeader: {
    display: "flex",
    alignItems: "end",
    fontWeight: "700",
    fontSize: "2rem",
    gridArea: "2 / 1 / span 1 / -1",
    '@media (max-width:480px)':{
        gridArea:'1 / 1 / 2 / -1',
        alignItems:'center',
        fontSize:'7vw'
    }
  },
  contentPrimary: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "5% 0 20% 0",
    gridArea: "3 / 1 / 6 / 5",
    '@media (max-width:480px)':{
        gridArea:'2 / 1 / 4 / -1',
        justifyContent:'center',
        padding:0,
        lineHeight:'2rem'
    }
  },
  contentSecondary: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "10% 0 70% 0",
    gridArea: "3 / 5 / 6 / -1",
    '@media (max-width:480px)':{
        gridArea:'4 / 1 / 6 / -1',
        padding:0,
        justifyContent:'center',
        lineHeight:'2rem'
    }
  },
  contentBorderContainer: {
    flex: 1,
    display: "flex",
    flexFlow: "row wrap",
    columnGap: "8px",
    marginLeft: "8px",
    "@media (max-width:480px)":{
        margin:0,
        paddingTop:'1rem'
    }
  },
  contentBorder: {
    display: "flex",
    flexDirection: "row",
    gridArea: "6 / 1 / span 1 / -1",
    fontWeight: "bold",
    "@media (max-width:480px)":{
        flexDirection:'column',
        justifyContent:'center',
        gridArea:"6 / 1 / span 2 / -1",
        lineHeight:'2rem'
    }
  },
  backButton: {
    paddingLeft: "4%",
    color: "inherit",
    "text-decoration": "none",
    "@media (max-width:480px)":{
        boxShadow:"0 0 2px 2px rgba(0,0,0,0.1)",
        padding:"1% 4% 1% 4%",
        width:'20%',
        borderRadius:"2px"
    }
  },
  subHeader: {
    fontWeight: "700",
  },
  subContent: {
    fontWeight: "100",
    color: "rgba(inherit,inherit,inherit,0.8)",
  },
  backgroundLight: {
    background: "#FFF",
    transition: "background 0.3s ease",
    gridArea: "2 / 1 / -1 / -1",
  },
  backgroundDark: {
    background: "#202C36",
    transition: "background 0.3s ease",
    gridArea: "2 / 1 / -1 / -1",
  },
});

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-rows: 6.23% repeat(9, auto);
  grid-template-columns: repeat(14, auto);
  height: 100vh;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows:5% repeat(9,auto);
    padding:0 1rem;
    height:max-content;
  }
`;
