import { Box, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../../theme'

import EditIcon from '@mui/icons-material/Edit';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ExpandIcon from '@mui/icons-material/Expand';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';

import './Benefits.css';


const BENEFITS = [
    {
        title: "Focus on content",
        icon: <EditIcon fontSize="large" />,
        description: "Spend more time on what matters most - your content and your engagement."
    },
    {
        title: "Accelerate your workflow",
        icon: <PrecisionManufacturingIcon fontSize="large" />,
        description: "Find the right tool that helps you save time by automating tasks and improve the quality of your work."
    },
    {
        title: "Plan ahead",
        icon: <PsychologyIcon fontSize="large" />,
        description: "Stop worrying about or wasting time figuring out what to do next - get ready for the next step as it comes."
    },
    {
        title: "Improve your skills",
        icon: <ExpandIcon fontSize="large" />, 
        description: "Get better at the essential skills of building a newsletter: writing, engaging, and optimising."
    },
    {
        title: "Grow with others",
        icon: <PeopleIcon fontSize="large" />,
        description: "Building a newsletter alone may be lonely. Talk with others about the journey, and get ideas from their experiences."
    },
    {
        title: "Learn from successful newsletters",
        icon: <StarIcon fontSize="large" />,
        description: "Get in-depth analysis for the world's best newsletters and how you can learn from them."
    },
]


function Benefits() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{
        backgroundImage: `linear-gradient(to bottom right, ${colors.redAccent[900]}, ${colors.blueAccent[900]})`,
        py: "60px",
    }}>
        <Typography variant="h2" textAlign="center" fontWeight="bold" pb="40px" mx="auto" width="80%">
            With{" "}
            <span className="curve__underline gradient__word">NewsletterDude,</span> 
            anyone can build a profitable newsletter.
        </Typography>
        <Grid container spacing={6} paddingLeft="20px" paddingRight="20px">
            {BENEFITS.map((benefit, i) => {
                return (
                    <Grid key={i} item xs={12} sm={6} lg={4}>
                        {benefit.icon}
                        <Typography variant="h3" fontWeight="bold" paddingY="10px" className="gradient__word">
                            {benefit.title}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 500 }}>
                            {benefit.description}
                        </Typography>
                    </Grid>
                )
            })}
        </Grid>
    </Box>
  )
}

export default Benefits