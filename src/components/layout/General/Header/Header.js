import React, { useContext, useState, useEffect } from 'react';
import './Header.css';
import { Paper, Box, IconButton, Link, Toolbar, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../../../theme';
import logo from '../../../../assets/NewsletterDudeLogo.png';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  const theme = useTheme();
  // eslint-disable-next-line
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    } 

    window.addEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    console.log("open/close")
  }

  return (
    <Paper>
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Link href="/">
              <img src={ logo } alt="logo" style={{ height: "40px", paddingLeft: "5px" }}></img>
          </Link>
        </Box>
        <Toolbar>
          {windowWidth < 450 
            ? 
            <Box display="flex">
              <IconButton onClick={toggleMenu}>
                <MenuIcon />
              </IconButton>
            </Box>
            
            : (
            <Box display="flex">
              <Link href='/' underline="none" sx={{ padding: "15px", color: colors.grey[100] }}>
                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                  NewsletterDude
                </Typography>
              </Link>
              <Link href='/blog' underline="none" sx={{ padding: "15px", color: colors.grey[100] }}>
                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                  Blog
                </Typography>
              </Link>
              <Link href='/tools' underline="none">
                <Typography variant="h4" sx={{ flexGrow: 1, padding: "15px", color: colors.grey[100] }}>
                  Tools
                </Typography>
              </Link>
            </Box>
          )}
        </Toolbar>
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