import * as React from "react";
import { StyledContainer } from "./ContentContainer.css";
import { classNames } from "../../utils/constants";
import Card from "details/Card";
import {
  GlobalContext,
  GlobalContextProps,
  Theme,
} from "shared/GlobalContextProvider";
import { Country } from "shared/CountryTypes";
import { SearchBar } from "../Search/SearchBar";
import { loadThemeFromStorage } from "../../utils/helpers";

export const Content = () => {
  const [countries, setCountries] = React.useState<Country[]>();
  const context = React.useContext<GlobalContextProps>(GlobalContext);
  const [theme, setTheme] = React.useState<Theme>(
    loadThemeFromStorage(context.theme)
  );

  React.useEffect(() => {
    context.populateCountries("all", false);
    setCountries(() =>
      context.filteredCountries.length > 0
        ? context.filteredCountries
        : context.countries
    );
    context.setState({ ...context });
  }, [context.currentCountry, context.filteredCountries]);

  return (
    <>
      <StyledContainer className={classNames.ContentContainer}>
        <SearchBar />
        {countries?.map((value: Country, index: number) => {
          return (
            <Card
              key={value.id}
              name={value.name.common}
              population={value.population}
              flag={value.flag.svg}
              region={value.region}
              capital={value.capital}
              theme={theme}
              onCardClicked={() => {
                context.setCurrentCountry(value);
              }}
            />
          );
        })}
      </StyledContainer>
    </>
  );
};
