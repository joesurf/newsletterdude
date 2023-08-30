import React from 'react'
import TextImage from '../../../UI/TextImage/TextImage'
import { Box, Typography, useTheme } from '@mui/material';

import NewsletterDudeRoadmap from "../../../../assets/HomePage/NewsletterDudeRoadmap.png";
import NewsletterDudeTools from "../../../../assets/HomePage/NewsletterDudeTools.png";
import { tokens } from '../../../../theme';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const FEATURES = [
    {
        header: "Identify where you are",
        paragraph: "Determine the step you are currently at with our comprehensive building roadmap, made by analysing the most successful newsletters.",
        src: NewsletterDudeRoadmap,
        alt: "feature screenshot",
        maxWidth: "500px",
        benefits: [
            "Get a bird's eye view of the entire process",
            "Identify where you are and where you want to go",
            "Relate your own newsletter goals and needs to the roadmap",
        ],
        video_id: 1
    },
    {
        header: "Read the article for an in-depth understanding",
        paragraph: "A detailed article with a clear framework provided for every single step of the newsletter building process.",
        src: NewsletterDudeTools,
        alt: "feature screenshot",
        maxWidth: "500px",
        benefits: [
            "Clear framework provided in every article",
            "In-depth discussion with examples of real newsletters",
            "Driven towards an action to be taken by the reader",
        ],
        video_id: 2
    },
    {
        header: "Find the tool that fits your needs",
        paragraph: "Tools make your work easier. Find the one you need by filtering with our index of over 50+ tools.",
        src: NewsletterDudeTools,
        alt: "feature screenshot",
        maxWidth: "500px",
        benefits: [
            "Search for tools based on your needs",
            "Learn more about each tool, their features and use cases",
            "Compare across tools in similar categories to find the most suitable one",
        ],
        video_id: 3
    },
]


function Features() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{
        width: { xs: "90%", sm: "80%", xl: "65%" },
        mx: "auto"
    }}>
        <Box textAlign="center">
            <Typography variant="h6" color={colors.blueAccent[300]} fontWeight="bold">
                How it works
            </Typography>
            <Typography variant="h3" fontWeight="bold" mt="15px">
                Write your first article<KeyboardArrowRightIcon fontSize="large" sx={{ paddingTop: "15px", paddingBottom: "-20px", fontWeight: "bold" }} />Get your first subscriber
            </Typography>
            <Typography variant="h5" mt="15px">
                Follow our step-by-step roadmap built from an analysis of successful newsletters, updated regularly with the latest methods and tools
            </Typography>
        </Box>
        {FEATURES.map((feature, i) => {
            return (
                <TextImage 
                    key={i}
                    isReverse={i % 2 ? true : false}
                    src={feature.src} 
                    alt={feature.alt} 
                    maxWidth={feature.maxWidth} 
                    header={feature.header} 
                    paragraph={feature.paragraph}
                    benefits={feature.benefits}
                    video_id={feature.video_id}
                />
            )
        })}
    </Box>
  )
}

export default Features