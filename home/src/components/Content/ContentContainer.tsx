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
  }, [context.currentCountry]);

  return (
    <StyledContainer className={classNames.ContentContainer}>
      {/* {countries?.map((value: Country) => {
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
      })} */}
      {context.currentCountry && (
        <Card
          key={context.currentCountry.id}
          name={context.currentCountry.name.official}
          population={context.currentCountry.population}
          flag={context.currentCountry.flag.svg}
          region={context.currentCountry.region}
          capital={context.currentCountry.capital}
        />
      )}
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </StyledContainer>
  );
};
