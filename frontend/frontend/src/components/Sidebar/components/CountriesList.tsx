import React, { useEffect, useState } from 'react'
import { List, ListItem, ListItemButton, ListItemText, LinearProgress } from '@mui/material'

import { fetchCountries } from '../../../api'
import { Country, CountriesListProps } from '../../../types'

import './CountriesList.css'

export const CountriesList = ({
  selectedCountry,
  handleSelect,
}: CountriesListProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    setIsLoading(true)
    fetchCountries({ setCountries, setIsLoading })
  }, [])

  const getClassName = (name: string | null) => {
    return name === selectedCountry ? 'selected' : ''
  }

  return isLoading ? (
    <LinearProgress />
  ) : (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem key={'all'} disablePadding className={getClassName(null)}>
          <ListItemButton role="button" onClick={handleSelect(null)} dense>
            <ListItemText id={'all'} primary={'All cities'} />
          </ListItemButton>
        </ListItem>
        {countries.map(({ name, count }) => {
          const labelId = `countries-list-label-${name}`
          return (
            <ListItem key={name} disablePadding className={getClassName(name)}>
              <ListItemButton role="button" onClick={handleSelect(name)} dense>
                <ListItemText id={labelId} primary={`${name} (${count})`} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    )
}
