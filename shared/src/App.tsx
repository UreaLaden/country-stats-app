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
    countryApiClient.getCountriesByRegion("Asia").then((data) => {
      if (Array.isArray(data)) {
        setCountries([...data]);
      }
    });
  }, []);

  return (
    <div className="container">
      {countries.map((data, idx) => {
        return (
          <div>
            <img src={data?.flag.png} />
            <div>Name: {data?.name.common}</div>
            <div>Code: {data?.code}</div>
            <div>Language: {data?.languages.toString()}</div>
            <div>Population: {data?.population}</div>
          </div>
        );
      })}
    </div>
  );
};
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
