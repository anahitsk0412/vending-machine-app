import { FormControl, Box, TextField, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { loginUser, userSelector } from '../../features/userSlice';
import { useAppDispatch, useAppSelector } from '../../utils/Reduxhooks';
import useAuth from '../../utils/useAuth';

export const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const authUser = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  // @ts-ignore
  const { setAuth } = useAuth();

  useEffect(() => {
    setLoading(authUser.loading);
    setError(authUser.error);
  }, [authUser]);

  const handleLogin = () => {
    dispatch(loginUser({ username, password }));
  };

  useEffect(() => {
    if (authUser.user) {
      setAuth(authUser.user);
      localStorage.setItem('vendymaUser', JSON.stringify(authUser.user));
      navigate('/dashboard');
    }
  }, [authUser]);

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        height: '80vh',
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
        <Box>
          <Typography ml={2} variant={'h5'}>
            Login
          </Typography>
        </Box>
        <FormControl>
          <TextField
            required
            id="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box sx={{ mt: 1, pl: 1 }}>
            <Link color="inherit" to={'/register'}>
              Not a customer? Register now!
            </Link>
          </Box>
          <Button
            component="label"
            variant="contained"
            sx={{ mt: 1 }}
            onClick={() => {
              handleLogin();
            }}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};
