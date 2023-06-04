import * as React from "react";
import { StyledCardContainer } from "./Card.css";

const Card = (props: any) => {
  return <StyledCardContainer>{props.children}</StyledCardContainer>;
};

export default Card;
