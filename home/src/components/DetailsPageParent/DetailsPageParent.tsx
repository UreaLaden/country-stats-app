import * as React from "react";
import {
  GlobalContext,
  GlobalContextProps,
} from "shared/GlobalContextProvider";
import Header from "../Header/Header";
import { classNames } from "../../utils/constants";
import { AppContainer } from "../AppParent/App.css";
import { DetailsContainer, styles } from "./DetailsPageParent.css";
import { Link } from "react-router-dom";
import { Country } from "shared/CountryTypes";

export const DetailsContainerParent = () => {
  const context = React.useContext<GlobalContextProps>(GlobalContext);
  const [country, setCountry] = React.useState<Country>();

  React.useEffect(() => {
    setCountry(context.currentCountry);
  }, [context.currentCountry]);

  const currency = React.useMemo(() => {
    const key = Object.keys(context.currentCountry.currencies);
    const currencies = key.map((value) => {
      return context.currentCountry.currencies[value]?.name;
    })
    return currencies.join(", ");
  }, [context.currentCountry]);

  const borders = React.useMemo(() => {
    const names: string[] = context.currentCountry.borders.map(
      (value: string) => {
        return context.countries.find(
          (country: Country) =>
            country.code.toUpperCase() === value.toUpperCase()
        ).name.common;
      }
    );
    console.log(names)
    return names;
  }, [context.currentCountry, context.countryNames]);

  const languages = React.useMemo(() => {
    const keys = Object.keys(context.currentCountry.languages);
    const compiledLanguages = keys.map((value) => context.currentCountry.languages[value])
    return compiledLanguages.join(', ');
  }, []);

  return (
    <AppContainer
      theme={context.theme}
      className={classNames.AppContainerParent}
    >
      <Header />
      <DetailsContainer>
        <Link to="/">Back</Link>
        {context.currentCountry && (
          <>
            <img
              src={context.currentCountry.flag.svg}
              alt={context.currentCountry.name.common}
            />
            <div>{context.currentCountry.name.common}</div>
            <div>
              <div>Population: {context.currentCountry.population}</div>
              <div>Region: {context.currentCountry.region}</div>
              <div>Sub Region: {context.currentCountry.subregion}</div>
              <div>Capital: {context.currentCountry.capital}</div>
              <div>
                Top Level Domain: {context.currentCountry.topLevelDomain}
              </div>
              <div>Currencies: {currency}</div>
              <div>Languages: {languages}</div>
              <div>
                Border Countries:{" "}
                {borders.map((value: string, idx: number) => {
                  return <button key={idx}>{value}</button>;
                })}
              </div>
            </div>
          </>
        )}
      </DetailsContainer>
    </AppContainer>
  );
};

export default DetailsContainerParent;
