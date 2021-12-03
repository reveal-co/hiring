import { Table } from './Table';
import { Sidebar } from './Sidebar';
import { Paper, Grid, AppBar, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function CountryFilter() {
	const [filter, setFilter] = useState<string | null>(null);

	const handleFilterChange = (value: string) => {
		console.log(value)
		setFilter(value);
	}

	useEffect(() => {
		console.log({filter});
	}, [filter]);

  return (
    <Grid container direction='row' component={Paper} sx={{ marginTop: 7 }}>
			<AppBar color='transparent' elevation={0} sx={{ padding: 1}}>
				<Typography component='h2' variant='h4' align='left'>
          Cities App
        </Typography>
			</AppBar>
			<Sidebar onChange={handleFilterChange} />
			<Table filterBy={filter} />
		</Grid>
  );
}

