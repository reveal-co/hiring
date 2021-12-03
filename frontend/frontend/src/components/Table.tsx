import { useEffect, useState } from 'react';
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
import useSwr from 'swr';
import fetcher from '../utils/fetcher';

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
  filterBy: string | null
}

// const doFetch = (args: any) => {
//   console.log(args);
//   const url = `/api/cities?country=`;
//   return fetcher(url);
// }

const STEP = 500;

export const Table = ({ filterBy }: TableProps) => {
  const [cities, setCities] = useState<City[] | null>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const { data, isValidating, error } = useSwr(
    filterBy ? `/api/cities?country=${filterBy}` : `api/cities`,
    fetcher
  );

  useEffect(() => {
    setCities(data);
    // console.log(filterBy);
  }, [data, filterBy]);

  return (
    <Box id='cities-table-wrapper' sx={{ height: '100%', flexGrow: 1, overflowY: 'scroll' }}>
      <TableContainer sx={{ maxHeight: '100%' }}>
        <MuiTable stickyHeader>
          <TableHeader />
          <TableBody>
            {
              error && (
                <Box component='tr' sx={{ display: 'inline-flex' }}>
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
                      <Link href={`https://www.geonames.org/${geonameid}/`} target='_blank'>
                        <Typography noWrap textOverflow='ellipsis'>
                         {`https://www.geonames.org/${geonameid}/`}
                        </Typography>
                      </Link>
                    </TableCell>
                  </TableRow>
              )
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </Box>
  );
};
