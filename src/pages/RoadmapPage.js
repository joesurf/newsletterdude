import React, { Fragment } from 'react'
import { Box } from '@mui/material'

import MapHeader from '../components/layout/RoadmapPage/MapHeader'
import RoadmapFlowchart from '../components/layout/RoadmapPage/RoadmapFlowchart'


const styles = {
  container: {
    width: { xs: "90%", sm: "80%" },
    maxWidth: "1300px",
    margin: "2.5rem auto",
  },
};


function RoadmapPage() {
  return (
    <Fragment>
      <Box sx={styles.container}>
      <MapHeader />
      <RoadmapFlowchart />
      </Box>
    </Fragment>
  )
}

export default RoadmapPage