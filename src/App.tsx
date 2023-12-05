import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './utils/AuthProvider';
import { store } from './utils/Store';
import { VendyMaTheme } from './utils/Theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={VendyMaTheme}>
        <AuthProvider>
          <AppRoutes />
          <CssBaseline />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
