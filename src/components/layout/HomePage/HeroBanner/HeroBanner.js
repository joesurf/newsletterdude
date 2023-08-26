import "./HeroBanner.css";

import { Typography, Box } from "@mui/material";
import ScrollToPricing from "../Pricing/ScrollToPricing";
import RatingAvatar from "../../../UI/RatingAvatar/RatingAvatar";


const TESTIMONIALS = [
  {
    name: "Joseph Long",
    rating: 4.5,
  },
  {
    name: "Nicholas Fo",
    rating: 4.2,
  },
]


const HeroBanner = (props) => {

  return (
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
        variant="h1"
        sx={{
          fontWeight: "bold",
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
          Everyone should and can build a newsletter.
      </Typography>

      <Typography
        variant="h4"
        sx={{ my: "2rem", maxWidth: "1000px", mx: "auto" }}
      >
          Learn how to build newsletters to share your personal adventures. Or build a sustainable 
          business through sharing your expertise and passion.
      </Typography>
      <ScrollToPricing />
      <RatingAvatar testimonials={TESTIMONIALS} />

    </Box>
  );
};

export default HeroBanner;
