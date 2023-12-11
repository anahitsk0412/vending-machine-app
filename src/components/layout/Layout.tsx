import { Grid, styled } from '@mui/material';
import { ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../../features/userSlice';
import { useAppDispatch } from '../../utils/Reduxhooks';
import useAuth from '../../utils/useAuth';
import { Header } from '../header/Header';

interface LayoutProps {
  children: ReactNode;
}

export const LayoutComponent = (props: LayoutProps) => {
  const { children } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const menuItems = [
    {
      menuItemText: 'Logout',
      menuItemHandler: async () => {
        await dispatch(logoutUser());
        await localStorage.clear();
        await navigate('/login');
      },
    },
  ];

  // @ts-ignore
  const { auth } = useAuth();
  return (
    <Grid container>
      <Header
        logoURL={'vendyma-logo.png'}
        titleText={'VendyMa!'}
        username={auth?.username || ''}
        menuItems={menuItems}
      />
      <MainContainer container>
        <Grid item md={10}>
          {children}
        </Grid>
      </MainContainer>
    </Grid>
  );
};

const MainContainer = styled(Grid)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
});
