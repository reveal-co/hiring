import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Chip,
  Grid,
  OutlinedInput,
  FormControl,
  Checkbox,
  FormLabel
} from '@mui/material';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import useSwr from 'swr';
import fetcher from '../utils/fetcher';

type TCountry = {
  name: string
  count: number
};

interface IFilterSelect {
  criteria: string,
  title: string | ReactNode
}

const FilterSelect = ({ criteria, title }: IFilterSelect) => {
  const [selectData, setSelectData] = useState<TCountry[] | null>(null);
  const [selected, setSelected] = useState<String[]>([]);

  const handleChange = useCallback((event: SelectChangeEvent<typeof selected>) => {
    const { target: { value } } = event;
    setSelected(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  }, []);

  const { data, isValidating } = useSwr(`http://localhost:3001/api/${criteria}`, fetcher) ;

  useEffect(() => {
    console.log(selected)
  }, [selected]);

  useEffect(() => {
    setSelectData(data);
  }, [data]);

  return (
    <>
      <FormControl>
        <FormLabel>
          <Typography fontWeight='bold' align='left'>
            {title}
          </Typography>
        </FormLabel>
        <Select
          id={`${criteria}-select`}
          multiple
          fullWidth
          value={isValidating ? ['...'] : []}
          onChange={handleChange}
          input={<OutlinedInput id='select-multiple-countries' />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.25 }}>
              {selected.map((value) => (<Chip key={value} label={value} />))}
            </Box>
          )}
        >
          {
            data?.map(({ name, count }: TCountry, index: number) => (
              <MenuItem key={index} value={name}>
                <Checkbox checked={selected.indexOf(name) > -1} />
                <span><strong>{name}</strong>&nbsp;{`(${count})`}</span>
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </>
  )
}

export const Sidebar = () => {
  // const [countries, setCountries] = useState<TCountry[] | null>(null);

  // const { data, isValidating } = useSwr('http://localhost:3001/api/countries') ;

  // useEffect(() => {
  //   setCountries(data);
  //   console.log(data);
  // }, [data]);

  return (
    <Box id='sidebar' sx={{ width: 200 }}>
      <Grid container margin={2}>
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
