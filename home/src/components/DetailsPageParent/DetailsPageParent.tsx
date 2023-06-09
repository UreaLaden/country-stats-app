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
    if(context.currentCountry){
      setCountry(context.currentCountry);
      console.log(country);
    }
  }, [context.currentCountry]);

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
            <img src={context.currentCountry.flag.svg} alt={context.currentCountry.name.common} />
            <div>{context.currentCountry.name.common}</div>
            <div>
              <div>Population: {context.currentCountry.population}</div>
              <div>Region: {context.currentCountry.region}</div>
              <div>Sub Region: {context.currentCountry.subregion}</div>
              <div>Capital: {context.currentCountry.capital}</div>
              <div>Top Level Domain: {context.currentCountry.topLevelDomain}</div>
              <div>Currencies: {context.currentCountry.currencies[context.currentCountry.code.toUpperCase()]?.toString()}</div>
              <div>Languages: {context.currentCountry.languages[0]}</div>
              {context.currentCountry.borders.map((value:string,idx:number) => {
                return <div key={idx}>{value}</div>
              })}
            </div>
          </>
        )}
      </DetailsContainer>
    </AppContainer>
  );
};

export default DetailsContainerParent;
