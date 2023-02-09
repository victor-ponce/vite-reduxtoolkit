import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import User from './features/User';
import { CssBaseline, PaletteMode } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

  export enum themePalette {
    DBG = '#12181b',
    LIME = '#C8FA5F',
    PURPLE = '#9c27b0',
    Black = '#000000',
    WBG= '#ffff'
    
  }

   const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            background: {
              default: themePalette.WBG
            },
            primary: {
              main: themePalette.PURPLE
            },
          }
        : {
            // palette values for dark mode
            background: {
              default: themePalette.DBG
            },
            primary: {
              main: themePalette.LIME
            },
          }),
    },
  });

function MyApp() {

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
    <User />
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

