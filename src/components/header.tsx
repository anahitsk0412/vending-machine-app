import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { ReactNode } from 'react';


export interface HeaderProps {
  username?: string;
  homeLink?: string;
  logoURL: string;
  avatar?: string;
  titleText?: ReactNode;
  onLogout: () => void;
}

export const Header = ({
  username,
  onLogout,
  logoURL,
  homeLink = './',
  avatar = 'static/user.png',
  titleText,
}: HeaderProps) => (
  <AppBar position="static">
    <Toolbar>
      <Stack justifyContent="space-between" direction="row" flex={1} alignItems="center">
        <Box display="flex">
          <a href={homeLink}>
            <img src={logoURL} alt="vendyma logo" height="30" />
          </a>

          {titleText && (
            <Box ml={2}>
              <Typography variant="h6" sx={{ color: 'white' }}>
                {titleText}
              </Typography>
            </Box>
          )}
        </Box>

        {username && (
          <Stack direction="row" alignItems="center" mt={-1}>
            <Typography variant="subtitle2" sx={{ color: 'white' }}>
              {`Welcome, ${username}!`}
            </Typography>

            <IconButton onClick={() => {}} sx={{ p: 0, pl: 1 }}>
              <img src={avatar} alt="user" width="40" height="40" />
            </IconButton>
          </Stack>
        )}
      </Stack>
    </Toolbar>
  </AppBar>
);
