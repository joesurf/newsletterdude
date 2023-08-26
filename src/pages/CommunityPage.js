import React from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../components/layout/CommunityPage/HeroBanner';


const styles = {
  container: {
    width: { xs: "90%", sm: "80%" },
    maxWidth: "1300px",
    margin: "2.5rem auto",
  },
};


function CommunityPage() {
  return (
    <Box sx={styles.container}>
      <HeroBanner />
    </Box>
  )
}

export default CommunityPage