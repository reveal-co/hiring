import { Box, Typography, List, ListItemButton } from '@mui/material';
import { useCallback, useState } from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import useSwr from 'swr';
import fetcher from '../utils/fetcher';

const ITEM_HEIGHT = 40;
const MENU_WIDTH = 250;

type Country = {
  name: string
  count: number
};

interface SidebarProps {
  onChange: (value: string) => void
}

export const Sidebar = ({ onChange }: SidebarProps) => {
  const [selected, setSelected] = useState<string>('');
  const handleChange = useCallback((value) => {
    setSelected(value);
    onChange(value);
  }, []);

  const { data, isValidating, error } = useSwr(
    `/api/countries`,
    fetcher,
    { revalidateOnFocus: false }
  );

  if (error) {
    return (
      <Box sx={{ display: 'inline-flex' }}>
        <ErrorIcon sx={{ mr:1 }} />
        <Typography>Couldn't not load data</Typography>
      </Box>
    );
  }

  return (
    <Box id='sidebar' sx={{ width: MENU_WIDTH, height: '100%', overflowY: 'scroll' }}>
      <List>
        {
          data
            && (
              <>
                <ListItemButton
                  disabled={isValidating}
                  onClick={() => { handleChange('') }}
                  selected={selected === ''}
                >
                  <Typography fontWeight='bold' noWrap textOverflow='ellipsis' align='center'>
                    (all cities)
                  </Typography>
                </ListItemButton>
                {
                  data?.map(({name, count}: Country, index: number) => (
                    <ListItemButton
                      key={index}
                      disabled={isValidating}
                      onClick={() => { handleChange(name) }}
                      selected={selected === name}
                      sx={{ height: ITEM_HEIGHT, justifyContent: 'space-between' }}
                    >
                      <Typography fontWeight='bold' noWrap textOverflow='ellipsis'>
                        {name}
                      </Typography>
                      <Typography sx={{ ml: 1 }} align='right'>
                        {`(${count})`}
                      </Typography>
                    </ListItemButton>
                  ))
                }
              </>
            )
          }
      </List>
    </Box>
  );
};
