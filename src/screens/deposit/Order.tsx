import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const OrderProductScreen = () => {
  const location = useLocation();
  const [order, setOrder] = useState();

  useEffect(() => {
    if (location.state) {
      setOrder(location.state);
    }
  }, [location.state]);
  return (
    <div>
      <p>src/screens/OrderProductScreen.tsx</p>
    </div>
  );
};
