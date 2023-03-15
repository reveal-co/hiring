import { BASE_URL, NUM_TO_REQUEST } from '../constants'
import { City } from '../components/Table'

interface fetchParams {
  filter: string
  from?: number
  setCities: (value: React.SetStateAction<City[] | null>) => void
  setHasMoreData: (value: React.SetStateAction<boolean>) => void
  initial?: boolean
}

export const fetchCities = ({
  filter,
  setCities,
  setHasMoreData,
  initial = false,
  from = 0,
}: fetchParams) => {
  fetch(`${BASE_URL}/cities?from=${from}&limit=${NUM_TO_REQUEST}${filter}`)
    .then((response) => response.json())
    .then((data) => {
      initial
        ? setCities(data)
        : setCities((cities) =>
            cities && data ? [...cities, ...data] : cities,
          )
      if (data.length < NUM_TO_REQUEST) {
        setHasMoreData(false)
      }
    })
}
