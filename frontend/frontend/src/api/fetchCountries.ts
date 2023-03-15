import { BASE_URL } from "../constants";
import { Country } from "../types";

interface fetchCountriesParams {
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  setIsLoading: (value: React.SetStateAction<boolean>) => void;
}
export const fetchCountries = ({
  setCountries,
  setIsLoading,
}: fetchCountriesParams) => {
  fetch(`${BASE_URL}/countries`)
    .then((response) => response.json())
    .catch((reason) => console.warn(reason))
    .then(setCountries)
    .finally(() => setIsLoading(false));
};
