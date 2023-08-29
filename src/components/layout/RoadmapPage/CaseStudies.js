import { Box, Typography, Grid } from '@mui/material'

import Logo from '../../../assets/NewsletterDudeLogo.png'
import ListCard from './ListCard';


const CASE_STUDY_DATA = [
    {
        title: "MorningBrew",
        image: Logo,
        article_link: "https://blog.newsletterdude.com/morningbrew-an-analysis/",
        description: "The daily email newsletter covering the latest news from Wall St. to Silicon Valley. Informative, witty, and everything you need to start your day.",
        data: [
            {
                header: "Steps Involved",
                value: "80%"
            },
            {
                header: "Category",
                value: "Aggregator"
            },
            {
                header: "Revenue",
                value: "$10m"
            }
        ]
    },
    {
        title: "The Hustle",
        image: Logo,
        article_link: "",
        data: [
            {
                header: "Steps Involved",
                value: "85%"
            },
            {
                header: "Category",
                value: "Aggregator"
            },
            {
                header: "Revenue",
                value: "$10m"
            }
        ]
    },
    {
        title: "StarterStory",
        image: Logo,
        article_link: "",
        data: [
            {
                header: "Steps Involved",
                value: "80%"
            },
            {
                header: "Category",
                value: "Platform"
            },
            {
                header: "Revenue",
                value: "$1m"
            }
        ]
    },
    {
        title: "DollarsAndSense",
        image: Logo,
        article_link: "",
        data: [
            {
                header: "Steps Involved",
                value: "80%"
            },
            {
                header: "Category",
                value: "Niche"
            },
            {
                header: "Revenue",
                value: "$1.2m"
            }
        ]
    }
]



function CaseStudies() {
  return (
    <Box>
        <Box
        sx={{
            mt: { xs: "4rem", md: "4rem" },
            mb: "20px",
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
                sx={{ my: "2rem", maxWidth: "1000px", mx: "auto" }}
            >
                Learn from the best by taking what they did right and investigating what 
                could have been done better 
            </Typography>
        </Box>
        <Grid container spacing={2}>
            {CASE_STUDY_DATA.map((case_study, i) => {
                return (
                    <ListCard key={i} case_study={case_study} />
                )
            })}
        </Grid>
    </Box>
  )
}

export default CaseStudies