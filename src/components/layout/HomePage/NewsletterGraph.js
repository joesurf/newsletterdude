import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import MyResponsiveScatterPlot from '../../UI/ScatterPlot/ScatterPlot'
import { fetchnewsletterdata } from './NewsletterGraphData'


function NewsletterGraph() {
    const [newsletterdata, setNewsletterdata] = useState([])

    useEffect(() => {
        const getNewsletterData = async () => {
            setNewsletterdata(await fetchnewsletterdata())
        }
        getNewsletterData()
    }, [newsletterdata])
  return (
    <Box display="flex" flexDirection="column">
        <Box
            sx={{
                mt: { xs: "2rem" },
                mx: "auto",
                textAlign: "center",
                width: { xs: "90%", sm: "80%" },
            }}
        >      
            <Typography
                variant="h2"
                sx={{
                    fontWeight: "bold",
                    maxWidth: "1400px",
                    mx: "auto",
                }}
            >
                Based on the world's most successful newsletters
            </Typography>
            <Typography
                variant="h4"
                sx={{ mt: "2rem", maxWidth: "1000px", mx: "auto" }}
            >
                Learn from the best by taking what they did right and investigating what 
                could have been done better 
            </Typography>
        </Box>
        <Box width="90%" height="500px" margin="auto">
            {newsletterdata ? <MyResponsiveScatterPlot data={newsletterdata} /> : <></>}
        </Box>
    </Box>
  )
}

export default NewsletterGraph