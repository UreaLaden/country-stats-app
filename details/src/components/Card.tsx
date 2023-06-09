import * as React from "react";
import {
  StyledCardContainer,
  StyledCardDetailsContainer,
  StyledCategorySpan,
  StyledCountryHeader,
  StyledImage,
} from "./Card.css";
import { GlobalContext } from "shared/GlobalContextProvider";
import { Country } from "shared/CountryTypes";
import { Link } from "react-router-dom";

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
  onCardClicked: () => void;
}

const Card = (props: CountryCardProps) => {
  return (
    <StyledCardContainer className={"card-container"} theme={props.theme}>
      <Link to="/details" onClick={() => props.onCardClicked()}>
        <StyledImage imageSource={props.flag} />
      </Link>
      <StyledCardDetailsContainer>
        <StyledCountryHeader>{props.name}</StyledCountryHeader>
        <div>
          <StyledCategorySpan>Population: </StyledCategorySpan>
          {props.population}
        </div>
        <div>
          <StyledCategorySpan>Region: </StyledCategorySpan> {props.region}{" "}
        </div>
        <div>
          <StyledCategorySpan>Capital: </StyledCategorySpan> {props.capital}
        </div>
      </StyledCardDetailsContainer>
    </StyledCardContainer>
  );
};

export default Card;
