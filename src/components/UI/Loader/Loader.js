import React from 'react'
import { Box, CircularProgress} from '@mui/material';


function Loader() {
  return (
    <Box sx={{ display: "flex" }}>
        <CircularProgress color="inherit" sx={{ margin: "auto", marginTop: "20px" }} /> 
    </Box> 
  )
}

export default Loader