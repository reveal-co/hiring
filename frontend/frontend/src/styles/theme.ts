import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
	typography: {
		fontFamily: 'Fkgroteskneue, sans-serif',
		htmlFontSize: 16
	},
	components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  },
  palette: {
		background: {
			paper: '#f6f2e8'
		},
		text: {
			primary: '#0a151b'
		},
    primary: {
      main: '#7e64ff',
			contrastText: 'black'
    },
    secondary: {
      main: '#3EE6B4'
    },
    error: {
      main: '#ea384c'
    }
  }
});

export default theme;
