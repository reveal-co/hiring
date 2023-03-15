export interface Country {
  name: string;
  count: number;
}

export interface CountriesListProps {
  selectedCountry: string | null;
  handleSelect: (name: string | null) => () => void;
}
