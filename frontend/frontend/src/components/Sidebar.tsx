import {
  Box,
  Typography,
  List,
  ListItem,
  ButtonBase
} from '@mui/material';
import { useCallback, useState } from 'react';
import useSwr from 'swr';
import fetcher from '../utils/fetcher';

const ITEM_HEIGHT = 40;
const MENU_WIDTH = 250;

type TCountry = {
  name: string
  count: number
};

const CountryList = () => {
  const [selected, setSelected] = useState<string>('');
  const handleChange = useCallback((event: any) => {
    const { target: { value } } = event;
    setSelected(value);
  }, []);

  const { data, isValidating, error } = useSwr(`http://localhost:3001/api/countries`, fetcher) ;

  return (
    <>
      <List component='div'>
        {
          data?.map(({name, count}: TCountry, index: number) => (
            <ListItem
              component={ButtonBase}
              key={index} value={name} sx={{ height: ITEM_HEIGHT, justifyContent: 'space-between' }}>
              <Typography fontWeight='bold' noWrap textOverflow='ellipsis'>
                {name}
              </Typography>
              <Typography sx={{ ml: 1 }} align='right'>
                {`(${count})`}
              </Typography>
            </ListItem>
          ))
        }
      </List>
    </>
  )
}

export const Sidebar = () => {
  return (
    <Box id='sidebar' sx={{ width: MENU_WIDTH, height: '100%', overflowY: 'scroll' }}>
      <Typography sx={{ position: 'absolute' }} component='h2' variant='h4' align='left' paragraph>
        Cities App
      </Typography>
      <CountryList />
    </Box>
  );
};
