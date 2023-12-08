import { Button, Grid, Paper, styled, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ManageBalance } from '../../components/manageBalance/ManageBalance';
import { ProductDetails } from '../../components/productDetails/ProductDetails';
import { createOrder, orderSelector } from '../../features/orderSlice';
import { Product, productSelector } from '../../features/productSlice';
import { userSelector, addUserDeposit, withdrawBalance } from '../../features/userSlice';
import { useAppDispatch, useAppSelector } from '../../utils/Reduxhooks';

export const SelectedProductScreen = () => {
  const productData = useAppSelector(productSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [total, setTotal] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const { user } = useAppSelector(userSelector);
  const { order } = useAppSelector(orderSelector);
  const [change, setChange] = useState<number[]>([]);

  useEffect(() => {
    const product = productData.products.filter((item) => item.id === parseInt(id!));
    if (product.length) {
      setSelectedProduct(product[0]);
      setTotal(product[0].cost);
    }
  }, []);
  const handleQuantityChange = (e: EventTarget, val: number | undefined) => {
    setQuantity(val!);
    const totalCost = val! * (selectedProduct?.cost || 0);
    setTotal(totalCost);
  };

  useEffect(() => {
    if (user?.change?.length) {
      setChange(user.change);
    }
  }, [user]);

  const handleOrder = () => {
    dispatch(createOrder({ productId: parseInt(id!), quantity }));
    navigate(`/order`);
  };
  const addDeposit = (deposit: number) => {
    dispatch(addUserDeposit(deposit));
  };

  const handleWithdraw = () => {
    dispatch(withdrawBalance());
  };

  // @ts-ignore
  return (
    <Grid container spacing={2} mt={4} justifyContent={'space-between'}>
      <Grid item xs={12} md={7}>
        <Item>
          {selectedProduct && (
            <ProductDetails
              product={selectedProduct}
              handleQuantityChange={handleQuantityChange}
              total={total}
            />
          )}
        </Item>
      </Grid>
      <Grid item xs={12} md={4}>
        <Item>
          <ManageBalance
            deposit={user?.deposit ?? 0}
            addDeposit={addDeposit}
            withdrawDeposit={handleWithdraw}
            change={change}
          />
        </Item>
      </Grid>
      <Grid container justifyContent={'center'} mt={5}>
        <Button variant="contained" onClick={handleOrder} disabled={(user?.deposit ?? 0) < total}>
          Order
        </Button>
      </Grid>
    </Grid>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
