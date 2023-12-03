import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { VendyMaTheme } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={VendyMaTheme}>
      <RouterProvider router={router} />

      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
