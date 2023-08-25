import React from 'react'
import Introduction from '../components/layout/ToolsPage/Introduction'
import SearchSection from '../components/layout/ToolsPage/SearchSection'
import { Box } from '@mui/material'


const styles = {
  container: {
    width: { xs: "90%", sm: "80%" },
    maxWidth: "1300px",
    margin: "2.5rem auto",
  },
};


function ToolsPage() {
  return (
    <Box sx={styles.container}>
        <Introduction />
        <SearchSection />
    </Box>
  )
}

export default ToolsPage