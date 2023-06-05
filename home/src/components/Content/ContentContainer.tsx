import * as React from "react";
import { StyledContainer } from "./ContentContainer.css";
import { classNames } from "../../utils/constants";
import Card from "details/Card";
import {
  GlobalContext,
  GlobalContextProps,
} from "shared/GlobalContextProvider";
import { Country } from "shared/CountryTypes";

export const Content = () => {
  const [countries, setCountries] = React.useState<Country[]>();
  const context = React.useContext<GlobalContextProps>(GlobalContext);

  React.useEffect(() => {
    context.populateCountries("all", false);
    setCountries(context.countries);
  }, [context.countries]);

  return (
    <StyledContainer className={classNames.ContentContainer}>
      {countries?.map((value: Country) => {
        return (
          <Card
            key={value.id}
            name={value.name.official}
            population={value.population}
            flag={value.flag.svg}
            region={value.region}
            capital={value.capital}
          />
        );
      })}
    </StyledContainer>
  );
};
