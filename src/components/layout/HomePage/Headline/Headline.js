import React from "react";

import { Typography, Box, Grid } from "@mui/material";


const Headline = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "80%", xl: "65%" },
        mx: "auto",
        maxWidth: "1200px",
      }}
    >
      <Grid
        container
        spacing={6}
        sx={{
          mt: "1rem",
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={6}>
          <Typography variant="h2" component="h2" sx={{ fontWeight: "bold" }}>
            Starting a newsletter is tough, and sometimes lonely.
          </Typography>
          <Typography variant="h4" sx={{ mt: "1.2rem" }}>
            There's so many things to consider: the content, the technology, the costs, 
            the decisions, and the uncertainty.
          </Typography>
          <Typography variant="h4" sx={{ mt: "1.2rem" }}>
            In our experience, the best way to overcome the challenges is to
            learn from the wins and mistakes of others, and to surround yourself
            with newsletter owners who’ve been there, done that.
          </Typography>
          <Typography variant="h4" sx={{ mt: "1.2rem" }}>
            Whether you're writing about finance, or sharing your travel diaries, 
            or simply want to talk to someone in your shoes, there's always someone 
            you can learn from.
          </Typography>
          <Typography variant="h4" sx={{ mt: "1.2rem" }}>
            It's not about how big your network is, but about finding that one or two 
            people you can grow with that maximises your ROI from joining.
          </Typography>
          <Typography variant="h4" sx={{ mt: "1.2rem" }}>
            And that’s what NewsletterDude is about.
          </Typography>
          <Typography variant="h4" sx={{ mt: "1.2rem" }}>
            Joining NewsletterDude gives you immediate access to a tribe of
            newsletter owners and content creators who are going through the same things as
            you. 
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Headline;
