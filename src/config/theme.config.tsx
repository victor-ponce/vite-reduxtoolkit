import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from 'react';

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  DBG = '#12181b',
  LIME = '#C8FA5F'
  
}

const theme = createTheme({
  palette: {
    mode:'dark',
    background: {
      default:themePalette.DBG,
    },
    primary: {
      main: themePalette.LIME,
    },
  }
})

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};