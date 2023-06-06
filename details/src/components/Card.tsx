import * as React from "react";
import { StyledCardContainer, StyledImage } from "./Card.css";
import { GlobalContext } from "shared/GlobalContextProvider";
import { Country } from "shared/CountryTypes";

export interface CountryCardProps {
  name: string;
  population: number;
  flag: string;
  region: string;
  capital: string;
  theme: {
    foreground: string;
    background: string;
    background_secondary: string;
  };
}

const Card = (props: CountryCardProps) => {
  return (
    <StyledCardContainer className={"card-container"} theme={props.theme}>
      <StyledImage imageSource={props.flag} />
      <div>
        <div>{props.name}</div>
        <div>Population: {props.population}</div>
        <div>Region: {props.region} </div>
        <div>Capital: {props.capital}</div>
      </div>
    </StyledCardContainer>
  );
};

export default Card;
