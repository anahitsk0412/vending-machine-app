import { Divider, Card, Typography, CardHeader, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ChangeList } from '../../components/manageBalance/ChangeList';
import { resetOrder, orderSelector } from '../../features/orderSlice';
import { useAppDispatch, useAppSelector } from '../../utils/Reduxhooks';

export const OrderProductScreen = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { order, loading } = useAppSelector(orderSelector);

  const handleDoneChange = () => {
    dispatch(resetOrder());
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <Typography gutterBottom variant="subtitle2" component="div">
        Loading....
      </Typography>
    );
  }

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
