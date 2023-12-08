import { Button, Grid, styled } from '@mui/material';

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ProductCard } from '../../components/productCard/ProductCard';
import {
  getProductList,
  Product,
  productSelector,
  selectProduct,
} from '../../features/productSlice';
import { useAppDispatch, useAppSelector } from '../../utils/Reduxhooks';
export const DashboardScreen = () => {
  const productData = useAppSelector(productSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  const handleBuy = (product: Product) => {
    dispatch(selectProduct(product));
    navigate('/selected-product');
  };

  return (
    <Grid container justifyContent="center">
      {productData.products && (
        <Grid sx={{ mt: 2, mb: 2 }} container spacing={3}>
          {productData.products.map((product) => {
            return (
              <Grid item md={3} key={product.id} sx={{ minWidth: '200px' }}>
                <ProductCard
                  image={`${product.name.replace(' ', '-')}.png`}
                  content={product}
                  actionBar={
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleBuy(product);
                      }}
                    >
                      Buy
                    </Button>
                  }
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Grid>
  );
};
