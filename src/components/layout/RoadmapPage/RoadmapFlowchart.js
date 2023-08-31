import React from 'react'
import Flowchart from '../../UI/Flowchart/Flowchart'
import { Box } from '@mui/material';

import { initialNodes, initialEdges } from './FetchRoadmapData';


function RoadmapFlowchart() {
    // TODO: Options to change layout from table to flow chart + include advance steps
  return (
    <Box>
      <Flowchart initialNodes={initialNodes} initialEdges={initialEdges} />
    </Box> 
  )
}

export default RoadmapFlowchart