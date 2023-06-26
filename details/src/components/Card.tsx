import * as React from "react";
import {
  StyledCardContainer,
  StyledCardDetailsContainer,
  StyledCategorySpan,
  StyledCountryHeader,
  StyledImage,
} from "./Card.css";
import {
  GlobalContext,
  GlobalContextProps,
  Theme,
} from "shared/GlobalContextProvider";
import { Country } from "shared/CountryTypes";
import { Link, useNavigate } from "react-router-dom";
import { MouseEventHandler } from "react";
import { loadThemeFromStorage } from "../utils/helpers";

export interface CountryCardProps {
  name: string;
  population: number;
  flag: string;
  region: string;
  capital: string;
  theme?: {
    foreground: string;
    background: string;
    background_secondary: string;
  };
  onCardClicked: (event: MouseEventHandler<HTMLAnchorElement>) => void;
}

const Card = (props: CountryCardProps) => {
  const context = React.useContext<GlobalContextProps>(GlobalContext);
  const [currentState, setCurrentState] =
    React.useState<GlobalContextProps>(GlobalContext);
  const [theme, setTheme] = React.useState<Theme>(
    loadThemeFromStorage(context.theme)
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    setCurrentState(context);
  }, [context]);

  React.useEffect(() => {
    setTheme(loadThemeFromStorage(context.theme));
  }, [context.theme]);

  const handleClick = (event: any) => {
    props.onCardClicked(event);
    console.log(`Clicked ${props.name} Card`);
    context.setState({ ...currentState });
    navigate("/details");
  };

  return (
    <StyledCardContainer
      className={"card-container"}
      theme={theme}
      onClick={handleClick}
    >
      <StyledImage imageSource={props.flag} />
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
