import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  TableBody,
  Table as MuiTable,
  TableCell as MuiTableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Tooltip
} from '@mui/material';
import LinkIcon  from '@mui/icons-material/Link';
import LoopIcon  from '@mui/icons-material/Loop';
import ErrorIcon from '@mui/icons-material/Error';
import { styled } from '@mui/system';
import useSwr from 'swr';
import fetcher from '../utils/fetcher';

const TableHeader = () => (
  <TableHead>
    <TableRow>
    {['Name', 'Country', 'Subcountry', 'Link'].map(value => (
      <TableCell key={value}>
        <Typography fontWeight='bold'>{value}</Typography>
      </TableCell>
    ))}
    </TableRow>
  </TableHead>
);

const TableCell =styled(MuiTableCell)(({ theme }) => (`
  padding: ${theme.spacing(1, 3)};
`));

type TCity = {
  name: string;
  country?: string;
  subcountry?: string;
  geonameid?: number;
};

export const Table = () => {
  const [cities, setCities] = useState<TCity[] | null>(null);

  const { data, isValidating, error } = useSwr(`http://localhost:3001/api/cities`, fetcher) ;

  useEffect(() => {
    setCities(data);
  }, [data]);

  return (
    <Box id="cities-table-wrapper" sx={{
      height: '100%',
      flexGrow: 1,
      overflowY: 'scroll',
      pl: 4
    }}>
      <TableContainer sx={{ maxHeight: '100%' }}>
        <MuiTable stickyHeader>
          <TableHeader />
          <TableBody>
            {
              error && (
                <Box component='tr' sx={{ display: "inline-flex", mx: 'auto' }}>
                  <td><ErrorIcon sx={{ mr:1 }} />Couldn't not load data</td>
                </Box>
              )
            }
            {
              isValidating ? (
                <tr><td><LoopIcon fontSize='large' className='App-logo' /></td></tr>
              ) : (
                cities?.map(({ name, country, subcountry, geonameid }) => (
                  <TableRow key={geonameid}>
                    <TableCell>{name}</TableCell>
                    <TableCell>{country}</TableCell>
                    <TableCell>{subcountry}</TableCell>
                    <TableCell>
                      <Tooltip title='External Link'>
                        <IconButton href={`https://www.geonames.org/${geonameid}/`} target='_blank'>
                          <LinkIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
              )
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
};
