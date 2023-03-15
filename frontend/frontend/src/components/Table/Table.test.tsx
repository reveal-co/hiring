import React from 'react'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CITIES } from '../../test/mockedCitiesData'
import { Table } from './Table'

it("renders cities", async () => {
  const selectedCountry = CITIES[0].country;
  const count = CITIES.length;
  await act(async () => {
    render(<Table country={selectedCountry} />);
  })

  const firstCity = (await screen.findByText(CITIES[0].name));
  expect(firstCity).toBeInTheDocument();

  const showedCities = (await screen.findAllByText(selectedCountry));
  expect(showedCities.length).toBe(count);
})
