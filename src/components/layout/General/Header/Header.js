import React from 'react';
import './Header.css';
import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import logo from '../../../../assets/NewsletterDudeLogo.png';


function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgba(0, 0, 0, 0)", width: "100%", display: "flex" }}>
        <Toolbar>
            <Link href="/">
                <img src={ logo } alt="logo" style={{ height: "40px", paddingRight: "20px" }}></img>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href='/' underline="none" sx={{ padding: "15px", paddingLeft: "0px", color: 'black' }}>NewsletterDude</Link>
                {/* <Link href='/tools' underline="none" sx={{ padding: "15px", color: 'black' }}>Tools</Link>
                <Link href='/challenges' underline="none" sx={{ padding: "15px", color: 'black' }}>Challenges</Link> */}
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header