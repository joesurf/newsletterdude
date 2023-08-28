import React from 'react'
import TextImage from '../../../UI/TextImage/TextImage'
import { Box } from '@mui/material';

import NewsletterDudeRoadmap from "../../../../assets/HomePage/NewsletterDudeRoadmap.png";
import NewsletterDudeTools from "../../../../assets/HomePage/NewsletterDudeTools.png";


const FEATURES = [
    {
        header: "Newsletter Building Roadmap",
        paragraph: "The roadmap shares a step-by-step guide to building a newsletter, from zero-to-one, beginners to business owners, and also identifies the advanced steps to go further from 0 to 100. In addition, articles are updated regularly to keep in line with new tools and methods. Same articles, forever relevant.",
        src: NewsletterDudeRoadmap,
        alt: "feature screenshot",
        maxWidth: "400px",
        imageThenText: true
    },
    {
        header: "Software Tools Index",
        paragraph: "A convenient place to find all the tools you will ever need for your newsletter, from email marketing to internal management. Exclusive discounts on the way.",
        src: NewsletterDudeTools,
        alt: "feature screenshot",
        maxWidth: "400px",
        imageThenText: false
      },
]


function Features() {
  return (
    <Box sx={{
        width: { xs: "90%", sm: "80%", xl: "65%" },
        mx: "auto"
    }}>
        {FEATURES.map((feature, i) => {
            return (
                <TextImage 
                    key={i}
                    src={feature.src} 
                    alt={feature.alt} 
                    maxWidth={feature.maxWidth} 
                    header={feature.header} 
                    paragraph={feature.paragraph}
                    imageThenText={feature.imageThenText}
                />
            )
        })}
    </Box>
  )
}

export default Features