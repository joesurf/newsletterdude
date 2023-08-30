import "./HeroBanner.css";

import { Typography, Box } from "@mui/material";
import ScrollToPricing from "../Pricing/ScrollToPricing";
// import RatingAvatar from "../../../UI/RatingAvatar/RatingAvatar";


// const TESTIMONIALS = [
//   {
//     name: "Joseph Long",
//     rating: 4.5,
//   },
//   {
//     name: "Nicholas Fo",
//     rating: 4.2,
//   },
// ]


const HeroBanner = (props) => {

  return (
    <Box
      sx={{
        mt: { xs: "3rem" },
        mb: "60px",
        mx: "auto",
        textAlign: "center",
        width: { xs: "90%", lg: "80%" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          maxWidth: "1400px",
          mx: "auto",
          fontFamily: "Inter"
        }}
        className="gradient__word"
      >
          Learn how to build a newsletter that makes you money. 
      </Typography>

      <Typography
        variant="h4"
        sx={{ my: "2rem", maxWidth: "1000px", mx: "auto" }}
      >
          In-depth guides for you every step of the way. Updated with the latest research and methods, 
          based on analysis of successful newsletters. Find the tools you need all in one place.
      </Typography>
      <ScrollToPricing />
      {/* <RatingAvatar testimonials={TESTIMONIALS} /> */}

    </Box>
  );
};

export default HeroBanner;
