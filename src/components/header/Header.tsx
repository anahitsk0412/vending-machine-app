import { AppBar, Box, IconButton, Stack, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import { ReactNode, useState, MouseEvent } from 'react';

interface MenuItemInterface {
  menuItemText: string;
  menuItemHandler: () => void;
}

export interface HeaderProps {
  username?: string;
  deposit?: number;
  homeLink?: string;
  logoURL: string;
  avatar?: string;
  titleText?: ReactNode;
  menuItems?: MenuItemInterface[];
}

export const Header = ({
  username,
  logoURL,
  homeLink = '/dashboard',
  avatar = 'user.png',
  titleText,
  menuItems,
}: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Stack justifyContent="space-between" direction="row" flex={1} alignItems="center">
          <Box display="flex">
            <a href={homeLink}>
              <img src={logoURL} alt="vendyma logo" height="50" />
            </a>

            {titleText && (
              <Box ml={2} mt={1}>
                <Typography variant="h4">{titleText}</Typography>
              </Box>
            )}
          </Box>

          {username && (
            <Stack direction="row" alignItems="center">
              <Typography variant="subtitle2" sx={{ color: 'white' }}>
                {username}
              </Typography>

              <IconButton onClick={handleClick} sx={{ p: 0, pl: 1 }}>
                <img src={avatar} alt="user" width="40" height="40" />
              </IconButton>
              {menuItems && (
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  sx={{ mt: 1.5 }}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {menuItems.map((menuItem) => (
                    <MenuItem key={menuItem.menuItemText} onClick={menuItem.menuItemHandler}>
                      {menuItem.menuItemText}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </Stack>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
