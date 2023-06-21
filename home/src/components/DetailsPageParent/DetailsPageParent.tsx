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
import { Country, Theme } from "shared/CountryTypes";
import { loadStateFromStorage } from "../../utils/helpers";

export const DetailsContainerParent = () => {
  const context = React.useContext<GlobalContextProps>(GlobalContext);
  const [state, setState] = React.useState<Country>(context?.state);
  const [theme,setTheme] = React.useState<Theme>({})

  React.useEffect(() => {
    // let currentState;
    // currentState = context.state;
    // if (!context.state) {
    //   currentState = loadStateFromStorage();
    //   console.log("State Change");
    //   context.setState(currentState);
    // }
    setState(context.currentCountry);

    const handleBeforeUnload = (_event: any) => {
      const newState = { ...context };
      context.setState(newState);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [context.currentCountry]);

  const currency = React.useMemo(() => {
    if (!state) return;
    console.log(state);
    const key = Object.keys(state.currencies); //Why is this not working.......
    const currencies = key.map((value) => {
      return state.currencies[value]?.name;
    });
    return currencies.join(", ");
  }, [state?.currentCountry]);

  React.useEffect(() => {
    setTheme(context.theme);
  },[context.theme])

  const borders = React.useMemo(() => {
    if (!state) return;
    const names: string[] = state.borders?.map(
      (value: string) => {
        return context?.countries.find(
          (country: Country) =>
            country.code.toUpperCase() === value.toUpperCase()
        ).name?.common;
      }
    );
    return names;
  }, [state, context?.countryNames]);

  const languages = React.useMemo(() => {
    if (!state) return;
    const keys = Object.keys(state.languages);
    const compiledLanguages = keys.map(
      (value) => state.languages[value]
    );
    return compiledLanguages.join(", ");
  }, []);

  const imageUrl = React.useMemo(() => {
    return state?.flag?.svg;
  }, [state]);

  return (
    <AppContainer
      theme={context.theme}
      className={classNames.AppContainerParent}
    >
      <Header />
      <DetailsContainer className={"details-container"}>
        <div
          className={
            theme?.name === "LIGHT"
              ? styles.backgroundLight
              : styles.backgroundDark
          }
        ></div>
        <div className={styles.backButtonContainer}>
          <Link className={styles.backButton} to="/">
            Back
          </Link>
        </div>
        {state && (
          <div className={styles.detailsContainerWrapper}>
            <div className={styles.detailsImageContainer}>
              <div
                className={styles.detailsImage}
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
            </div>
            <div className={styles.innerDetailsContainer}>
              <div className={styles.detailsHeader}>
                {state.name?.common}
              </div>
              <div className={styles.contentPrimary}>
                <div className={styles.subHeader}>
                  Native Name:{" "}
                  <span className={styles.subContent}>
                    {state.name?.common}
                  </span>
                </div>
                <div className={styles.subHeader}>
                  Population:{" "}
                  <span className={styles.subContent}>
                    {state.population}
                  </span>
                </div>
                <div className={styles.subHeader}>
                  Region:{" "}
                  <span className={styles.subContent}>
                    {state.region}
                  </span>
                </div>
                <div className={styles.subHeader}>
                  Sub Region:{" "}
                  <span className={styles.subContent}>
                    {state.subregion}
                  </span>
                </div>
                <div className={styles.subHeader}>
                  Capital:{" "}
                  <span className={styles.subContent}>
                    {state.capital}
                  </span>
                </div>
              </div>
              <div className={styles.contentSecondary}>
                <div className={styles.subHeader}>
                  Top Level Domain:{" "}
                  <span className={styles.subContent}>
                    {state.topLevelDomain}
                  </span>
                </div>
                <div className={styles.subHeader}>
                  Currencies:{" "}
                  <span className={styles.subContent}>{currency}</span>
                </div>
                <div className={styles.subHeader}>
                  Languages:{" "}
                  <span className={styles.subContent}>{languages}</span>
                </div>
              </div>
              <div className={styles.contentBorder}>
                Border Countries:{" "}
                {borders?.map((value: string, idx: number) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        context.fetchCountry(value);
                        const newState = { ...context, currentCountry: value };
                        context.setState(newState);
                      }}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </DetailsContainer>
    </AppContainer>
  );
};

export default DetailsContainerParent;
