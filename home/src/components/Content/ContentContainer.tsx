import * as React from "react";
import { StyledContainer } from "./ContentContainer.css";
import { classNames } from "../../utils/constants";
import Card from "details/Card";
import {
  GlobalContext,
  GlobalContextProps,
} from "shared/GlobalContextProvider";
import { Country } from "shared/CountryTypes";
import { SearchBar } from "../Search/SearchBar";

export const Content = () => {
  const [countries, setCountries] = React.useState<Country[]>();
  const context = React.useContext<GlobalContextProps>(GlobalContext);

  React.useEffect(() => {
    context.populateCountries("all", false);
    setCountries(() =>
      context.filteredCountries.length > 0
        ? context.filteredCountries
        : context.countries
    );
  }, [context.currentCountry, context.filteredCountries]);

  return (
    <>
      <SearchBar />
      <StyledContainer className={classNames.ContentContainer}>
        {countries?.map((value: Country, index: number) => {
          return (
            <Card
              key={value.id}
              name={value.name.common}
              population={value.population}
              flag={value.flag.svg}
              region={value.region}
              capital={value.capital}
              theme={context.theme}
            />
          );
        })}
      </StyledContainer>
    </>
  );
};
