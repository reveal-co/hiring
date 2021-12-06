import { useCallback, useEffect, useState } from 'react';
import useSwr from 'swr';
import {
  Box,
  TableBody,
  Table as MuiTable,
  TableCell as MuiTableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Link
} from '@mui/material';
import LoopIcon  from '@mui/icons-material/Loop';
import ErrorIcon from '@mui/icons-material/Error';
import { styled } from '@mui/system';
import fetcher from '../utils/fetcher';

const doFetch = (params: any) => fetcher('/api/cities', params);

const TableHeader = () => (
  <TableHead>
    <TableRow>
    {['Name', 'Country', 'Sub-country', 'Link to geoname page'].map(value => (
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

type City = {
  name: string;
  country?: string;
  subcountry?: string;
  geonameid?: number;
};

interface TableProps {
  filterBy?: string | null
}

export const Table = ({ filterBy }: TableProps) => {
  const [cities, setCities] = useState<City[] | null>(null);
  const { data, isValidating, error } = useSwr(
    [filterBy ? { country: filterBy } : ''],
    doFetch,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  useEffect(() => {
    setCities(data);
  }, [data, filterBy]);

  if (error) {
    return (
      <Box sx={{ display: 'inline-flex' }}>
        <ErrorIcon sx={{ mr:1 }} />
        <Typography>Couldn't not load data</Typography>
      </Box>
    );
  }

  return (
    <Box id='cities-table-wrapper' sx={{ height: '100%', flexGrow: 1, overflowY: 'scroll' }}>
      <TableContainer sx={{ maxHeight: '100%' }}>
        <MuiTable stickyHeader>
          <TableHeader />
          <TableBody>
            {
              isValidating
                ? <tr><td><LoopIcon fontSize='large' className='App-logo' /></td></tr>
                : <TableContent data={cities} />
            }
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
};

interface TableContentProps {
  data: City[] | null
}

export function TableContent ({ data }: TableContentProps) {
  const [rows, setRows] = useState(data);

  useEffect(() => {
    data && setRows(data);
  }, [data]);

  return (
    <>
      {rows?.map(({ name, country, subcountry, geonameid }) => (
        <TableRow key={geonameid} sx={{ ':hover': { backgroundColor: 'grey.200' }}}>
          <TableCell>{name}</TableCell>
          <TableCell>{country}</TableCell>
          <TableCell>{subcountry}</TableCell>
          <TableCell>
            <Link href={`https://www.geonames.org/${geonameid}/`} target='_blank'>
              <Typography noWrap textOverflow='ellipsis'>
              {`https://www.geonames.org/${geonameid}/`}
              </Typography>
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
