import { TextField, Button, Typography, Card, Divider, styled } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';

import { createProduct, productSelector, updateProduct } from '../../features/productSlice';
import { useAppDispatch, useAppSelector } from '../../utils/Reduxhooks';

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Product name should be of minimum 2 characters length')
    .required('Product name is required'),
  cost: yup.number().required('Cost is required'),
  amountAvailable: yup.number().required('amountAvailable is required'),
});

export const CreateUpdateProductScreen: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const productData = useAppSelector(productSelector);
  //TODO: handle error and loading states
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const dispatch = useAppDispatch();

  const initialData = () => {
    if (id) {
      const matchedProduct = productData.products.filter((item) => item.id === Number(id))[0];
      return {
        name: matchedProduct.name,
        cost: matchedProduct.cost,
        amountAvailable: matchedProduct.amountAvailable,
      };
    }
    return {
      name: '',
      cost: '',
      amountAvailable: '',
    };
  };

  const formik = useFormik({
    initialValues: initialData(),
    validationSchema: validationSchema,
    onSubmit: (values) => {
      !id
        ? dispatch(
            createProduct({
              name: values.name,
              cost: Number(values.cost),
              amountAvailable: Number(values.amountAvailable),
            })
          )
        : dispatch(
            updateProduct({
              productId: id,
              body: {
                name: values.name,
                cost: Number(values.cost),
                amountAvailable: Number(values.amountAvailable),
              },
            })
          );
      navigate('/dashboard');
    },
  });

  return (
    <StyledCard>
      <Typography gutterBottom variant="h5" component="div">
        Create / Edit Product
      </Typography>
      <Divider />
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          required
          fullWidth
          id="name"
          label="Product name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          required
          fullWidth
          id="amountAvailable"
          label="Available amount"
          value={formik.values.amountAvailable}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.amountAvailable && Boolean(formik.errors.amountAvailable)}
          helperText={formik.touched.amountAvailable && formik.errors.amountAvailable}
        />
        <TextField
          required
          fullWidth
          id="cost"
          label="Product cost"
          value={formik.values.cost}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.cost && Boolean(formik.errors.cost)}
          helperText={formik.touched.cost && formik.errors.cost}
        />
        <Button variant="contained" sx={{ mt: 1 }} type="submit" disabled={!formik.isValid}>
          Submit
        </Button>
      </form>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(4),
  '& .MuiTextField-root': {
    marginTop: theme.spacing(2),
  },
}));
