import { BASE_URL, NUM_TO_REQUEST } from "../constants";
import { City } from "../components/Table";

interface fetchParams {
  filter: string;
  from?: number;
  setCities: (value: React.SetStateAction<City[] | null>) => void;
  setHasMoreData: (value: React.SetStateAction<boolean>) => void;
  initial?: boolean;
}

export const fetchCities = async ({
  filter,
  setCities,
  setHasMoreData,
  initial = false,
  from = 0,
}: fetchParams) => {
  const response = await fetch(
    `${BASE_URL}/cities?from=${from}&limit=${NUM_TO_REQUEST}${filter}`
  );
  const data = await response.json();
  initial
    ? setCities(data)
    : setCities((cities) => (cities ? [...cities, ...data] : cities));
  if (data.length < NUM_TO_REQUEST) {
    setHasMoreData(false);
  }
};
