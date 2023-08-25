import React from "react";
import './Pillars.css';

import Logo from "../../../../assets/NewsletterDudeLogo.png";

import { Typography, Box } from "@mui/material";


const PILLARS = [
  {
    title: "Newsletter Build Roadmap",
    description: "A comprehensive roadmap to building a newsletter for both beginners and experts, with detailed articles on each step of the way, and updates every month."
  },
  {
    title: "Monthly Masterminds",
    description: "A group of 8 founders with an executive facilitator, who leads discussion where advice and critical feedback is shared to help accelerate your business growth."
  },
  {
    title: "Digital Community",
    description: "Access to a digital and highly engaged community of founders who provide helpful advice, a dedicated digital concierge, and weekly newsletter."
  },
  {
    title: "Interviews and Case Studies",
    description: "Deep analysis on successful newsletters, with focused interviews on newsletter owners and how they started and stayed competitive."
  },
  {
    title: "Tools and Analytics",
    description: "Exclusive discounts with the most relevant software companies, tools, and apps. We also have a robust preferred vendor database."
  },
]


const Pillars = () => {
  return (
    <Box
      sx={{
        mt: "6rem",
        textAlign: "center",
        width: { xs: "90%", sm: "80%", xl: "65%" },
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          maxWidth: { xs: "100%", sm: "60%" },
          mx: "auto",
          mb: "2rem",
        }}
      >
        Member Benefits
      </Typography>
      <Box className="container__grid">
        {/* 1st item */}
        <Box sx={{"display":"flex","position":"relative","padding":"2.5rem","flexDirection":"column","justifyContent":"center","alignItems":"center","borderRadius":"0.25rem","height":"100%","boxShadow":"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"}}>
          <img
            src={Logo}
            alt={"logo"}
            style={{ maxWidth: "70%", maxHeight: "200px" }}
          />
        </Box>
        {/* 2nd item */}
        {PILLARS.map((pillar, i) => {
          return (
            <Box key={i} sx={{"display":"flex","position":"relative","padding":"2rem","flexDirection":"column","borderRadius":"0.25rem","height":"100%","textAlign":"left","backgroundColor":"#ffffff","boxShadow":"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"}}>
              <Typography sx={{"marginBottom":"0.25rem","fontSize":"1.5rem","lineHeight":"2rem","fontWeight":700}} >
                {pillar.title}
              </Typography>
              <Typography sx={{"fontSize":"1.125rem","lineHeight":["1.75rem",1.375]}}>
                {pillar.description}
              </Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  );
};

export default Pillars;
