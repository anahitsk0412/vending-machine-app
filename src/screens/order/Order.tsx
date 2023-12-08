import { Cabin } from '@mui/icons-material';
import { Divider, Card, Typography, CardHeader, CardContent, CardActions } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ChangeList } from '../../components/manageBalance/ChangeList';
import { Order } from '../../features/orderSlice';

export const OrderProductScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    if (location.state) {
      setOrder(location.state);
    }
  }, [location.state]);

  const handleDoneChange = () => {
    navigate('/dashboard');
  };

  return (
    <Card sx={{ marginTop: '20px' }}>
      <CardHeader>
        <Typography gutterBottom variant="h4" component="div">
          Order details:
        </Typography>
      </CardHeader>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product name: {order?.productName}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          Quantity: {order?.quantity}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          Total Price: {order?.price}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <ChangeList change={order?.change ?? []} handleDoneChange={handleDoneChange} />
      </CardActions>
    </Card>
  );
};
