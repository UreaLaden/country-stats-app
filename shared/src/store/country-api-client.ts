import { ApiError, ApiResponse, Country, Language } from "../utils/types";

const baseApiUrl = "https://restcountries.com/v3.1";
const fieldAttributes = "?fields=";
const fields = [
  "ccn3",
  "name",
  "population",
  "region",
  "subregion",
  "capital",
  "tld",
  "currencies",
  "languages",
  "flags",
  "flag",
  "borders",
  "cca3",
];

class ApiClient {
  public apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async getCountryByAlphaCode(alphaCode: string): Promise<Country | ApiError> {
    try {
      const filters = fields.join(",");
      const url = `${this.apiUrl}/alpha/${alphaCode}${fieldAttributes}${filters}`;
      const response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin":"*"
        },
      });
      const data: ApiResponse = await response.json();
      return this.processCountryResponse(data);
    } catch (error) {
      console.error(error);
      return {
        message: "An error ocurred while fetching the data",
      } as ApiError;
    }
  }

  async getCountryByName(name: string): Promise<Country | ApiError> {
    try {
      const filters = fields.join(",");
      const url = `${this.apiUrl}/name/${name}${fieldAttributes}${filters}`;
      const response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin":"*"
        },
      });
      const data: ApiResponse = await response.json();
      return this.processCountryResponse(data);
    } catch (error) {
      console.error(error);
      return {
        message: "An error ocurred while fetching the data",
        error:error
      } as ApiError;
    }
  }

  async getCountriesByRegion(region: string): Promise<Country[] | ApiError> {
    try {
      const filters = fields.join(",");
      const url = `${this.apiUrl}/region/${region}${fieldAttributes}${filters}`;
      const response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin":"*"
        },
      });
      let result:ApiResponse[] = await response.json();
    //   const data: ApiResponse = await response.json();
      const countries:Country[] = result.map(value => this.processCountryResponse(value))
      return countries;
    } catch (error) {
      console.error(error);
      return {
        message: "An error ocurred while fetching the data",
      } as ApiError;
    }
  }

  async getAllCountries(): Promise<Country[] | ApiError> {
    try {
      const filters = fields.join(",");
      const url = `${this.apiUrl}/all${fieldAttributes}${filters}`;
      const response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin":"*"
        },
      });
      let result:ApiResponse[] = await response.json();
    //   const data: ApiResponse = await response.json();
      const countries:Country[] = result.map(value => this.processCountryResponse(value))
      return countries;
    } catch (error) {
      console.error(error);
      return {
        message: "An error ocurred while fetching the data",
      } as ApiError;
    }
  }

  private processCountryResponse(response: ApiResponse): Country {
    const data = Object.keys(response).length === 1 ? response['0'] : response;
    const country: Country = {
      id: data.ccn3,
      code: data.cca3.toLowerCase(),
      name: data.name,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      topLevelDomain: data.tld,
      currencies: data.currencies,
      languages: Object.values(data.languages),
      borders: data.borders,
      flag: {
        code: data.cca3,
        ...data.flags,
      },
    };
    return country;
  }
}

export default new ApiClient(baseApiUrl);
