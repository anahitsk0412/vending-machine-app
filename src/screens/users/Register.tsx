import {
  FormControl,
  Box,
  TextField,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { AuthContainer } from '../../components/authContainer/AuthContainer';

import { loginUser, registerUser, userSelector } from '../../features/userSlice';
import { UserRole } from '../../models/UserRoles';
import { useAppDispatch, useAppSelector } from '../../utils/Reduxhooks';
import useAuth from '../../utils/useAuth';

const validationSchema = yup.object({
  username: yup
    .string()
    .min(2, 'Username should be of minimum 2 characters length')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password should be of minimum 5 characters length')
    .required('Password is required'),
  role: yup.mixed<UserRole>().oneOf(Object.values(UserRole)),
});

export const RegisterScreen: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const authUser = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  // @ts-ignore
  const { setAuth } = useAuth();

  useEffect(() => {
    setLoading(authUser.loading);
    setError(authUser.error);
  }, [authUser]);

  useEffect(() => {
    if (authUser.user) {
      setAuth(authUser.user);
      localStorage.setItem('vendymaUser', JSON.stringify(authUser.user));
      navigate('/dashboard');
    }
  }, [authUser]);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      role: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  return (
    <AuthContainer>
      <Box>
        <Typography ml={2} variant={'h5'}>
          Register
        </Typography>
      </Box>
      <FormControl>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <TextField
            required
            id="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <RadioGroup
            name="role-buttons-group"
            row
            value={formik.values.role.toString()}
            onChange={(event, value) => {
              formik.setFieldValue('role', value);
            }}
            onBlur={formik.handleBlur}
          >
            <FormControlLabel value="seller" control={<Radio />} label="Seller" />
            <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
          </RadioGroup>

          <Box sx={{ mt: 1, pl: 1 }}>
            <Link color="primary" to={'/login'}>
              Already a customer? Go to Login!
            </Link>
          </Box>
          <Button variant="contained" sx={{ mt: 1 }} type="submit">
            Submit
          </Button>
        </form>
      </FormControl>
    </AuthContainer>
  );
};
