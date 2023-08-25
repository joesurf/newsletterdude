import "./HeroBanner.css";

import { Typography, Link, Box } from "@mui/material";
import GhostEmbeddablePricingButton from "../Pricing/Pricing";


const HeroBanner = (props) => {
  // function gtag_report_conversion(url) {
  //   var callback = function () {
  //     if (typeof url != "undefined") {
  //       window.location = url;
  //     }
  //   };
  //   // eslint-disable-next-line no-undef
  //   gtag("event", "conversion", {
  //     send_to: "AW-11121365082/jd1sCLjPwr0YENqgircp",
  //     event_callback: callback,
  //   });
  //   return false;
  // }

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
      <Link
        key={1}
        href=""
        onClick={() => {
          // gtag_report_conversion();
          // window.lintrk("track", { conversion_id: 13351812 });
        }}
        sx={{
          textDecoration: "none",
        }}
      >
        <GhostEmbeddablePricingButton />
      </Link>
    </Box>
  );
};

export default HeroBanner;
