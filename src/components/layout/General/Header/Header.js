import React, { useContext, useState, useEffect } from 'react';
import './Header.css';
import { Paper, Box, Menu, MenuItem, IconButton, Link, Toolbar, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../../../theme';
import logo from '../../../../assets/logos/ND_Black_NOCOMPNG.png';

// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';


const MENUCOLLAPSEWIDTH = 600
const MENU_SECTIONS = [
  {
    "title": "Roadmap",
  },
  {
    "title": "Tools",
  },
  {
    "title": "Community",
  },
  {
    "title": "Blog",
  },
]


function Header() {
  const theme = useTheme();
  // eslint-disable-next-line
  const colors = tokens(theme.palette.mode);
  // eslint-disable-next-line
  const colorMode = useContext(ColorModeContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [menuState, setMenuState] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    } 

    window.addEventListener('resize', handleResize)
  }, [])

  const toggleMenu = (event) => {
    setMenuState(true)
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setMenuState(false)
    setAnchorEl(null);
  };

  return (
    <Paper>
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" width="20%">
          <Link href="/">
              <img src={ logo } alt="logo" style={{ height: "40px", paddingLeft: "5px" }}></img>
          </Link>
        </Box>
        <Toolbar width="60%">
          {windowWidth < MENUCOLLAPSEWIDTH 
            ? <Box display="flex">
              <IconButton onClick={toggleMenu}>
                <MenuIcon sx={{ transform: menuState ? "rotate(90deg)" : "" }} />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {MENU_SECTIONS.map((section, i) => {
                  return (
                    <MenuItem key={i} onClick={handleClose}>
                      <Link href={`/${section.title.toLowerCase()}`} underline="none" sx={{ color: colors.grey[100] }}>
                        <Typography variant="h6">
                          {section.title}
                        </Typography>
                      </Link>
                    </MenuItem>
                  )
                })}
              </Menu>
            </Box>
            : (
            <Box display="flex">
              {MENU_SECTIONS.map((section, i) => {
                return (
                  <Link key={i} href={`/${section.title.toLowerCase()}`} underline="none" sx={{ padding: "15px", color: colors.grey[100] }}>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                      {section.title}
                    </Typography>
                  </Link>
                )
              })}
            </Box>
          )}
        </Toolbar>
        <Box width="20%">
            {/* Empty box to position menu */}
        </Box>
      {/* <Box display="flex">
        <IconButton 
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark'
            ? <DarkModeOutlinedIcon />
            : <LightModeOutlinedIcon />
          }
        </IconButton>
      </Box> */}
    </Box>
    </Paper>
  )
}

export default Header