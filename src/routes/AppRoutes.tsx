import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// unprotectedRoutes
// protectedRoutes

import { adminRoutes } from './AdminRoutes';
import { buyerRoutes } from './BuyerRoutes';
import { commonRoutes } from './GeneralRoutes';
import { RoutesInterface } from './RoutesInterface';
import { sellerRoutes } from './SellerRoutes';
import { authRoutes } from './UnprotectedRoutes';
import { LayoutComponent } from '../components/layout/Layout';
import RequireAuth from '../utils/RequireAuth';

const AppRoutes = () => {
  const protectedRoutes: RoutesInterface[] = [
    ...adminRoutes,
    ...sellerRoutes,
    ...buyerRoutes,
    ...commonRoutes,
  ];

  const unprotectedRoutes: RoutesInterface[] = [...authRoutes];

  return (
    <BrowserRouter>
      <Routes>
        {unprotectedRoutes.map((e) => {
          return <Route key={e.path} path={e.path} element={e.ele} />;
        })}

        {protectedRoutes.map((e) => {
          return (
            <Route
              key={e.path}
              path={e.path}
              element={
                <RequireAuth userRoles={e?.availability}>
                  <LayoutComponent>{e.ele}</LayoutComponent>
                </RequireAuth>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
