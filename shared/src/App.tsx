import * as React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import countryApiClient from "./store/country-api-client";
import { ApiError, Country, isApiError } from "./utils/types";

const App = () => {
  const [countryData, setCountryData] = React.useState<Country>();
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [error, setFetchError] = React.useState<ApiError | null>();

  React.useEffect(() => {
    countryApiClient.getCountryByName("Hong Kong").then((data) => {
      if (isApiError(data)) {
        setFetchError(error);
      } else {
        console.log(data);
        setCountryData(data);
      }
    });
  }, []);

  return (
    <div className="container">
      {countryData && (
        <div>
          <img src={countryData?.flag.png} />
          <div>Name: {countryData?.name.common}</div>
          <div>Code: {countryData?.code}</div>
          <div>Language: {countryData?.languages.toString()}</div>
          <div>Population: {countryData?.population}</div>
        </div>
      )}
    </div>
  );
};
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
