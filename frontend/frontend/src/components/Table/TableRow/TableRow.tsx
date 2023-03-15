import React from 'react'
import { Button, TableCell, TableRow as MUITableRow } from '@mui/material'

import { GEO_BASE_URL } from '../../../constants'

interface RowProps {
  country: string
  geonameid: number
  name: string
  subcountry: string
}

export const TableRow = ({ country, geonameid, name, subcountry }: RowProps) => {
  return (
    <MUITableRow key={geonameid}>
      <TableCell align="left">{country}</TableCell>
      <TableCell align="left">
        <Button href={`${GEO_BASE_URL}/${geonameid}/`} target="_blank">
          {name}
        </Button>
      </TableCell>
      <TableCell align="left">{subcountry}</TableCell>
    </MUITableRow>
  )
}
