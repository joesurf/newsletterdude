import "./HeroBanner.css";

import { Typography, Box } from "@mui/material";
import RatingAvatar from "../../UI/RatingAvatar/RatingAvatar";
import CommunityJoinButton from "./CommunityJoinButton";


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
          Join the private network for newsletter builders across the world.
      </Typography>

      <Typography
        variant="h4"
        sx={{ my: "2rem", maxWidth: "1000px", mx: "auto" }}
      >
          Our community is an online mastermind community for newsletter builders looking 
          to participate in deep dive discussions on building their newsletters.
      </Typography>
      <CommunityJoinButton />
      <RatingAvatar testimonials={TESTIMONIALS} />

    </Box>
  );
};

export default HeroBanner;
