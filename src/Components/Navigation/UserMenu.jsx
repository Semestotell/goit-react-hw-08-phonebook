import { AccountCircle } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperiation from 'redux/auth/auth-operation';
import authSelectors from 'redux/auth/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const name = useSelector(authSelectors.getUserName);
  const logoutUser = authOperiation.logout();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography component="h4">Welcome {name}!</Typography>
      {isLoggedIn && (
        <div>
          <IconButton
            size="medium"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="primary"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => dispatch(logoutUser)}>Log out</MenuItem>
          </Menu>
        </div>
      )}
    </Box>
  );
};
