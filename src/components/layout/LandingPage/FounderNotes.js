import React from 'react';
import { Box, Typography } from '@mui/material';

import "./FounderNotes.css"


function FounderNotes() {
  return (
    <Box sx={{ mt: "20px" }}>
        <Typography variant="h5" sx={{ width: "100%", margin: "auto", textAlign: "left", marginBottom: "12px", fontWeight: "bold" }}>
            HERE'S{" "}
            <span style={{ color: "grey" }}> 
                MY{" "}
            </span>
            <span className="curve__underline">
                STORY
            </span> 
        </Typography>
        <Typography variant="body1" sx={{ width: "100%", margin: "auto", textAlign: "left", marginBottom: "12px" }}>
            Hey there, thanks for checking out my website. Here you can find my diary, where I share all of my learnings and 
            milestones in an attempt to build a brand of businesses. 
        </Typography>
        <Typography variant="body1" sx={{ width: "100%", margin: "auto", textAlign: "left", marginBottom: "12px" }}>
            Building in public is something that I've fallen into because of its value - personal reflections, business exposure, 
            and community following. I'm quite new to this game, so I thought it would be cool to share the process from start to end.
        </Typography>
        <Typography variant="body1" sx={{ width: "100%", margin: "auto", textAlign: "left", marginBottom: "12px" }}>
            There are two things you can find here: a diary for everything I'm building + a collection of thinking and building tools.
        </Typography>
        <Typography variant="body1" sx={{ width: "100%", margin: "auto", textAlign: "left", marginBottom: "12px" }}>
            If you're up for it, drop me an email to tell me about your journey as well. See you around!
        </Typography>
    </Box>
  )
}

export default FounderNotes