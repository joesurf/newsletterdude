import React from 'react';
import { Box, AppBar, Toolbar, Link, Typography } from '@mui/material';


function MiniHeader() {
  return (
    <Box>
        <AppBar position="static" sx={{ backgroundColor: "rgba(0, 0, 0, 0)", width: "100%", display: "flex" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href='/life' underline="none" sx={{ padding: "15px" }}>Life</Link>
                    <Link href='/notiondude' underline="none" sx={{ padding: "15px" }}>NotionDude</Link>
                    <Link href='/newsletterdude' underline="none" sx={{ padding: "15px" }}>NewsletterDude</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default MiniHeader