import { Link } from 'react-router-dom';

export const DashboardScreen = () => {
  return (
    <div>
      Should be productList
      <p>src/screens/dashboard.tsx</p>
      <Link to="/order">Go to test order page</Link>
    </div>
  );
};
