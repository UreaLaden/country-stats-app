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
}

const Card = (props: CountryCardProps) => {
  const context = React.useContext(GlobalContext);
  return (
    <StyledCardContainer className={"card-container"}>
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
