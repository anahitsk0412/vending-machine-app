import { FormControl, Box, TextField, Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen: React.FC = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {
            m: 1,
            width: '300px',
            flexDirection: 'column',
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
          <img src={'vendyma-logo.png'} width={'75px'} height={'75px'} alt={'vendyma logo'} />
        </Box>
        <FormControl>
          <TextField required id="username" label="Username" />
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Box sx={{ mt: 1, pl: 1 }}>
            <Link color="inherit" to={'/register'}>
              Not a customer? Register now!
            </Link>
          </Box>
          <Button component="label" variant="contained" sx={{ mt: 1 }}>
            Login
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};
