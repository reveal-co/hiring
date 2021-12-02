import './App.css';
import { Table } from './components/Table';
import { Sidebar } from './components/Sidebar';
import { Paper, Grid } from '@mui/material';

export default function App() {
  return (
    <div className='App'>
      <Grid container direction='row' component={Paper}>
        <Sidebar />
        <Table />
      </Grid>
    </div>
  );
}
