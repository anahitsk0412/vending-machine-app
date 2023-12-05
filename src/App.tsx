import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import AppRoutes from './routes/AppRoutes';
import { VendyMaTheme } from './utils/Theme';

function App() {
  return (
    <ThemeProvider theme={VendyMaTheme}>
      <AppRoutes />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
