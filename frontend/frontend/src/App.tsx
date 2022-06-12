import './App.css';
import CountryFilter from './components/CountryFilter';
import { AppBar, Typography } from '@mui/material';
export default function App() {
  return (
    <div className='App'>
      <AppBar color='transparent' elevation={0} sx={{ padding: 1}}>
        <Typography component='h2' variant='h4' align='left'>
          Cities App
        </Typography>
      </AppBar>
      <CountryFilter />
    </div>
  );
}
