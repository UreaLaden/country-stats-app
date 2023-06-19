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
import { loadStateFromStorage } from "../../utils/helpers";

export const DetailsContainerParent = () => {
  const context = React.useContext<GlobalContextProps>(GlobalContext);
  const [country, setCountry] = React.useState<Country>();
  const [state, setState] = React.useState<GlobalContextProps>(context?.state);

  React.useEffect(() => {
    const currentState = loadStateFromStorage();
    setState(currentState);
    context.setState(currentState);
    const handleBeforeUnload = (event: any) => {
      // event.preventDefault();

      const newState = { ...context };
      console.log(newState);
      context.setState(newState);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const currency = React.useMemo(() => {
    if (!state) return;
    console.log(state);
    const currencyArray = state?.currentCountry.currencies;
    const key = Object.keys(state!.currentCountry!.currencies); //Why is this not working.......
    const currencies = key.map((value) => {
      return state?.currentCountry?.currencies[value]?.name;
    });
    return currencies.join(", ");
  }, [state?.currentCountry]);

  const borders = React.useMemo(() => {
    if (!state) return;
    const names: string[] = state?.currentCountry?.borders.map(
      (value: string) => {
        return state?.countries.find(
          (country: Country) =>
            country.code.toUpperCase() === value.toUpperCase()
        ).name.common;
      }
    );
    return names;
  }, [state?.currentCountry, state?.countryNames]);

  const languages = React.useMemo(() => {
    if (!state) return;
    const keys = Object.keys(state?.currentCountry.languages);
    const compiledLanguages = keys.map(
      (value) => state?.currentCountry.languages[value]
    );
    return compiledLanguages.join(", ");
  }, []);

  const imageUrl = React.useMemo(() => {
    return state?.currentCountry.flag.svg
  },[state?.currentCountry])

  return (
    <AppContainer
      theme={context.theme}
      className={classNames.AppContainerParent}
    >
      <Header />
      <DetailsContainer className={"details-container"}>
        <div className={styles.backButtonContainer}>
          <Link className={styles.backButton} to="/">
            Back
          </Link>
        </div>
        {
          /*state?.currentCountry &&*/ <div
            className={styles.detailsContainerWrapper}
          >
            <div className={styles.detailsImageContainer}>
              <div className={styles.detailsImage} style={{backgroundImage:`url(${imageUrl})`}}>
              </div>
            </div>
            <div className={styles.innerDetailsContainer}>
              <div className={styles.detailsHeader}>
                {state?.currentCountry?.name.common}
              </div>
              <div className={styles.contentPrimary}>
                <div>Population: {state?.currentCountry?.population}</div>
                <div>Region: {state?.currentCountry?.region}</div>
                <div>Sub Region: {state?.currentCountry?.subregion}</div>
                <div>Capital: {state?.currentCountry?.capital}</div>
              </div>
              <div className={styles.contentSecondary}>
                <div>
                  Top Level Domain: {state?.currentCountry?.topLevelDomain}
                </div>
                <div>Currencies: {currency}</div>
                <div>Languages: {languages}</div>
              </div>
              <div className={styles.contentBorder}>
                Border Countries:{" "}
                {borders?.map((value: string, idx: number) => {
                  return <button key={idx}>{value}</button>;
                })}
              </div>
            </div>
          </div>
        }
      </DetailsContainer>
    </AppContainer>
  );
};

export default DetailsContainerParent;