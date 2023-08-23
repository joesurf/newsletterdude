import React, { useContext } from 'react';
import './Header.css';
import { Paper, Box, IconButton, Link, Toolbar, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../../../theme';
import logo from '../../../../assets/NewsletterDudeLogo.png';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


function Header() {
  const theme = useTheme();
  // eslint-disable-next-line
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Paper>
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box display="flex">
        <Toolbar>
            <Link href="/">
                <img src={ logo } alt="logo" style={{ height: "40px", paddingRight: "20px" }}></img>
            </Link>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                <Link href='/' underline="none" sx={{ padding: "15px", paddingLeft: "0px", color: colors.grey[100] }}>NewsletterDude</Link>
                <Link href='/blog' underline="none" sx={{ padding: "15px", color: colors.grey[100] }}>Blog</Link>
                <Link href='/tools' underline="none" sx={{ padding: "15px", color: colors.grey[100] }}>Tools</Link>
            </Typography>
        </Toolbar>
        {/* <Link href="/">
            <img src={ logo } alt="logo" style={{ height: "40px", paddingRight: "20px" }}></img>
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href='/' underline="none" sx={{ padding: "15px", paddingLeft: "0px", color: 'black' }}>NewsletterDude</Link>
            <Link href='/blog' underline="none" sx={{ padding: "15px", color: 'black' }}>Blog</Link>
            <Link href='/tools' underline="none" sx={{ padding: "15px", color: 'black' }}>Tools</Link>
        </Typography> */}
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark'
            ? <DarkModeOutlinedIcon />
            : <LightModeOutlinedIcon />
          }
        </IconButton>
      </Box>
    </Box>
    </Paper>
  )
}

export default Header