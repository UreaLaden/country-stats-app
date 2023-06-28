import * as React from "react";
import {
  GlobalContext,
  GlobalContextProps,
  Theme,
} from "shared/GlobalContextProvider";
import Header from "../Header/Header";
import { classNames } from "../../utils/constants";
import { AppContainer } from "../AppParent/App.css";
import { DetailsContainer, styles } from "./DetailsPageParent.css";
import { Link } from "react-router-dom";
import { Country } from "shared/CountryTypes";
import {
  loadStateFromStorage,
  loadThemeFromStorage,
} from "../../utils/helpers";
import { BorderButton } from "../BorderButton/BorderButton";

export const DetailsContainerParent = () => {
  const context = React.useContext<GlobalContextProps>(GlobalContext);
  const [state, setState] = React.useState<GlobalContextProps>(
    loadStateFromStorage()
  );
  const [country, setCountry] = React.useState<Country>(state?.currentCountry);

  
  React.useEffect(() => {
    setCountry(state?.currentCountry);
  }, [state?.currentCountry]);

 

  const currency = React.useMemo(() => {
    if (!country) return;
    const key = Object.keys(country?.currencies); //Why is this not working.......
    const currencies = key.map((value) => {
      return country.currencies[value]?.name;
    });
    return currencies.join(", ");
  }, [state?.currentCountry]);

  const borders = React.useMemo(() => {
    if (!country) return;
    const names: string[] = country.borders?.map((value: string) => {
      return state?.countries.find(
        (country: Country) => country.code.toUpperCase() === value.toUpperCase()
      ).name?.common;
    });
    return names;
  }, []);

  const languages = React.useMemo(() => {
    if (!country) return;
    const keys = Object.keys(country.languages);
    const compiledLanguages = keys.map((value) => country.languages[value]);
    return compiledLanguages.join(", ");
  }, []);

  const imageUrl = React.useMemo(() => {
    return country?.flag?.svg;
  }, [country?.flag?.svg]);

  const handleBorderCountryClick = (_event: any) => {
    const country = context.getCountryByName(_event.target.innerText);
    setCountry(country);
  };

  const theme = React.useMemo(() => context.theme, [context?.theme]);

  return (
    <AppContainer theme={theme} className={classNames.AppContainerParent}>
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
        {/*country && */(
          <div className={styles.detailsContainerWrapper}>
            <div className={styles.detailsImageContainer}>
              <div
                className={styles.detailsImage}
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
            </div>
            <div className={styles.innerDetailsContainer}>
              <div className={styles.detailsHeader}>{country?.name?.common}</div>
              <div className={styles.contentPrimary}>
                <div className={styles.subHeader}>
                  Native Name:{" "}
                  <span className={styles.subContent}>
                    {country?.name?.common}
                  </span>
                </div>
                <div className={styles.subHeader}>
                  Population:{" "}
                  <span className={styles.subContent}>
                    {country?.population}
                  </span>
                </div>
                <div className={styles.subHeader}>
                  Region:{" "}
                  <span className={styles.subContent}>{country?.region}</span>
                </div>
                <div className={styles.subHeader}>
                  Sub Region:{" "}
                  <span className={styles.subContent}>{country?.subregion}</span>
                </div>
                <div className={styles.subHeader}>
                  Capital:{" "}
                  <span className={styles.subContent}>{country?.capital}</span>
                </div>
              </div>
              <div className={styles.contentSecondary}>
                <div className={styles.subHeader}>
                  Top Level Domain:{" "}
                  <span className={styles.subContent}>
                    {country?.topLevelDomain}
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
                <div className={styles.contentBorderContainer}>
                  {borders?.map((value: string, idx: number) => {
                    return (
                      <BorderButton
                        text={value}
                        key={idx}
                        themeName={theme?.name}
                        onClick={handleBorderCountryClick}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </DetailsContainer>
    </AppContainer>
  );
};

export default DetailsContainerParent;
