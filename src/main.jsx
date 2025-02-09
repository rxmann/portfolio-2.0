import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body3"
          },
          style: {
            fontSize: 16,
            color: "#ccc"
          }
        }
      ]
    }
  },
  typography: {
    fontFamily: "Roboto, serif"
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);

