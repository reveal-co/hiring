import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Grid,
  FormControl,
  FormLabel,
  Tooltip
} from '@mui/material';
import { ReactNode, useCallback, useState } from 'react';
import useSwr from 'swr';
import fetcher from '../utils/fetcher';

const ITEM_HEIGHT = 40;
const MENU_HEIGHT = ITEM_HEIGHT * 6;
const MENU_WIDTH = 250;

type TCountry = {
  name: string
  count: number
};

interface IFilterSelect {
  criteria: string,
  title: string | ReactNode
}

const FilterSelect = ({ criteria, title }: IFilterSelect) => {
  const [selected, setSelected] = useState<string>('');
  const handleChange = useCallback((event: SelectChangeEvent<typeof selected>) => {
    const { target: { value } } = event;
    setSelected(value);
  }, []);

  const { data, isValidating, error } = useSwr(`http://localhost:3001/api/${criteria}`, fetcher) ;

  return (
    <>
      <FormControl>
        <FormLabel>
          <Typography fontWeight='bold' align='left'>
            {title}
          </Typography>
        </FormLabel>
        <Select
          sx={{ width: MENU_WIDTH }}
          id={`${criteria}-select`}
          disabled={isValidating || !!error}
          value={selected}
          renderValue={(selected) => (
            <Tooltip title={selected}>
              <Typography noWrap textOverflow='ellipsis' fontWeight='bold' align='left'>
                {selected}
              </Typography>
            </Tooltip>
          )}
          onChange={handleChange}
          MenuProps={{ sx: { height: MENU_HEIGHT, maxWidth: MENU_WIDTH }}}
        >
          {
            data?.map(({name, count}: TCountry, index: number) => (
              <MenuItem key={index} value={name} sx={{ height: ITEM_HEIGHT, justifyContent: 'space-between' }}>
                <Typography fontWeight='bold' noWrap textOverflow='ellipsis'>
                  {name}
                </Typography>
                <Typography sx={{ ml: 1 }} align='right'>
                  {`(${count})`}
                </Typography>
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </>
  )
}

export const Sidebar = () => {
  return (
    <Box id='sidebar' sx={{ width: MENU_WIDTH }}>
      <Grid container padding={2}>
        <Grid item xs={12}>
          <Typography component='h2' variant='h4' align='left' paragraph>
            Cities App
          </Typography>
        </Grid>
        <Grid item>
          <FilterSelect criteria='countries' title='Filter By Country' />
        </Grid>
      </Grid>
    </Box>
  );
};
