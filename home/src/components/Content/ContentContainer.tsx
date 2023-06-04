import * as React from "react";
import { StyledContainer } from "./ContentContainer.css";
import { classNames } from "../../utils/constants";
import Card from "details/Card";

export const Content = () => {
  return (
    <StyledContainer className={classNames.ContentContainer}>
      <Card>Country - 1 Home</Card>
      <Card>Country - 2 Home</Card>
      <Card>Country - 3 Home</Card>
      <Card>Country - 4 Home</Card>
      <Card>Country - 5 Home</Card>
      <Card>Country - 6 Home</Card>
    </StyledContainer>
  );
};
