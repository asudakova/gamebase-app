import React from 'react';
import { AppBar, Toolbar, Link } from '@mui/material';
import pic from '/freetogame-logo.png';

const Header: React.FC = () => {
  return (
    <AppBar position="relative">
        <Toolbar sx={{ bgcolor: 'background.default' }}>
          <Link href="https://www.freetogame.com/" target="_blank" width="165px" height="45px">
            <img src={pic} alt="FreeToGame's logo" />
          </Link>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
