import { useState } from 'react';
import { Paper, Grid } from '@mui/material';
import { Table } from './Table';
import { Sidebar } from './Sidebar';

export default function CountryFilter() {
  const [filter, setFilter] = useState<string | null>(null);
  const handleFilterChange = (value: string) => setFilter(value);
  return (
    <Grid container direction='row' component={Paper} sx={{ marginTop: 7 }}>
      <Sidebar onChange={handleFilterChange} />
      <Table filterBy={filter} />
    </Grid>
  );
}

