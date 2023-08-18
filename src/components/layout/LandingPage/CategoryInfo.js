import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';


const CATEGORY_INFO = {
    "thedude": {
        "heading": "THE",
        "description": "Building a personal brand by sharing what I've learnt and building in public",
        "link": "https://joesurf.io"
    },
    "notiondude": {
        "heading": "NOTION",
        "description": "An actionable knowledge database for daily life",
        "link": "https://notiondude.com"
    },
    "newsletterdude": {
        "heading": "NEWSLETTER",
        "description": "A newsletter teaching how to build a newsletter - the foundation of digital business",
        "link": "https://newsletterdude.com"
    },
    "thoughtsofadude": {
        "heading": "THOUGHTS OF A",
        "description": "Just a moment of reflection, vulnerability, and reminiscing"
    },
    "the100club": {
        "heading": "THE100CLUB",
        "description": "A private founder community in Southeast Asia",
        "link": "https://the100club.io"
    }
}


function CategoryInfo({ category }) {
    const handleClick = () => {
        window.open(CATEGORY_INFO[category]["link"], '_blank');
    }

  return (
    <Box sx={{ marginTop: "20px" }}>
        {category && <Box>
            <Divider sx={{ width: "20%", margin: "auto", marginBottom: "5px" }} />
            <Typography variant="h5" sx={{ width: "100%", margin: "auto", textAlign: "center", marginBottom: "4px", fontWeight: "bold" }}>
                <span style={{ color: "grey" }}> 
                    {CATEGORY_INFO[category]["heading"]}{" "}
                </span>
                <span>
                    {category.slice(-4) === "dude" ? "DUDE" : ""}
                </span> 
            </Typography>
            <Typography variant="body1" sx={{ width: "100%", margin: "auto", textAlign: "center" }}>
                {CATEGORY_INFO[category]["description"]}
            </Typography>
            <Box sx={{ display: "flex" }}>
                {CATEGORY_INFO[category]["link"] ? 
                    <OpenInBrowserIcon 
                        onClick={handleClick} 
                        sx={{ 
                            margin: "auto", 
                            marginTop: "0px", 
                            marginBottom: "5px",
                            "&:hover": { transform: "scale3d(1.03, 1.03, 1)", zIndex: 1, cursor: "pointer" }, 
                        }} 
                    />
                : ""}
            </Box>
            <Divider sx={{ width: "20%", margin: "auto", marginBottom: "5px" }} />
        </Box>}
    </Box>
  )
}

export default CategoryInfo