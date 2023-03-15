import React, { useEffect, useState, useRef, useMemo } from 'react'
import {
  Table as MUITable,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow as MUITableRow,
} from '@mui/material'
import Paper from '@mui/material/Paper'

import { fetchCities } from '../../api'
import { throttle } from '../../utils/throttle'
import { TableRow } from './TableRow'

import './Table.css'

export type City = {
  name: string
  country: string
  subcountry: string
  geonameid: number
}

interface CityTableProps {
  country: string | null
}

export const Table = ({ country }: CityTableProps) => {
  const [cities, setCities] = useState<City[] | null>(null)
  const [hasMoreData, setHasMoreData] = useState(true)

  const tableRef = useRef<HTMLTableElement | null>(null);
  const filter = useMemo(() => country ? `&country=${country}` : '', [country]);

  useEffect(() => {
    setHasMoreData(true)
    fetchCities({
      filter,
      setCities,
      setHasMoreData,
      initial: true
    })
    if (tableRef.current) {
      // update scroll position when new country was selected
      tableRef.current.scrollIntoView()
    }
  }, [country, filter])

  const fetchMore = (from: number) => {
    if (!hasMoreData) return
    fetchCities({
      filter,
      from,
      setCities,
      setHasMoreData
    })
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const target = e.currentTarget;
    const isAtEnd =
      target.scrollHeight - Math.ceil(target.scrollTop) <=
      target.clientHeight
    if (isAtEnd || !cities) return
    fetchMore(cities.length)
  }

  return (
    <TableContainer component={Paper} onScroll={throttle(handleScroll, 100)}>
      <MUITable sx={{ minWidth: 650 }} size="small" aria-label="cities table" ref={tableRef} stickyHeader>
        <TableHead>
          <MUITableRow>
            <TableCell align="left">Country</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Subcountry</TableCell>
          </MUITableRow>
        </TableHead>
        <TableBody>
          {cities?.map((city) => (
            <TableRow
              key={city.geonameid}
              country={city.country}
              name={city.name}
              geonameid={city.geonameid}
              subcountry={city.subcountry}
            />
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  )
}
