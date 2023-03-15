import React from 'react'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'

import { COUNTRIES } from '../../test/mockedCountriesData'
import { Sidebar } from './Sidebar'

it("shows countries and highlight selected item", async () => {
  const selectedCountry = COUNTRIES[1].name;
  await act(async () => {
    render(<Sidebar handleSelect={jest.fn()} selectedCountry={selectedCountry} />);
  })

  const firstCountry = (await screen.findByTestId(COUNTRIES[0].name));
  expect(firstCountry).toBeInTheDocument();

  const selectedElement = (await screen.findByTestId(selectedCountry));
  expect(selectedElement).toHaveClass('selected');
})
