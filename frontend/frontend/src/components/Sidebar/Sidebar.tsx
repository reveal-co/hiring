import React from "react";
import { Typography } from "@mui/material";

import { CountriesListProps } from "../../types";
import { CountriesList } from "./components";

import "./Sidebar.css";

export const Sidebar = ({
  selectedCountry,
  handleSelect,
}: CountriesListProps) => {
  return (
    <div id="sidebar">
      <Typography variant="h6">Cities App</Typography>
      <CountriesList
        selectedCountry={selectedCountry}
        handleSelect={handleSelect}
      />
    </div>
  );
};
