import { Fragment } from "react";
import { Box, useTheme } from "@mui/material";

import HeroBanner from "../components/layout/HomePage/HeroBanner/HeroBanner";
// import Headline from "../components/layout/HomePage/Headline/Headline";
// import OurMembers from "../components/layout/HomePage/Members/OurMembers";
// import Pillars from "../components/layout/HomePage/Pillars/Pillars";
import ArticleMarquee from "../components/layout/HomePage/ArticleMarquee/ArticleMarquee";
import ThreeTierPricing from "../components/layout/HomePage/Pricing/ThreeTierPricing";
import Features from "../components/layout/HomePage/Features/Features";

import Benefits from "../components/layout/HomePage/Benefits";
import NewsletterGraph from "../components/layout/HomePage/NewsletterGraph";

// import CTA from "../components/layout/HomePage/CTA/cta";
import FAQ from "../components/layout/HomePage/FAQ/FAQ";
import { tokens } from "../theme";


const styles = {
  container: {
    width: { xs: "90%", sm: "80%" },
    maxWidth: "1300px",
    margin: "2.5rem auto",
  },
};


const HomePage = () => {
  // TODO: tell them what they can get, not what they can do
  // TODO: too much text, quickly show your cards

  // Change post headings to more clearer goal based
  // Change header fonts to sth else
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Fragment>
      <Box sx={{
        backgroundImage: `linear-gradient(to bottom right, ${colors.redAccent[800]}, ${colors.blueAccent[800]})`,
        paddingTop: "20px",
      }}>
        <HeroBanner />
        <ArticleMarquee />
      </Box>

      {/* <OurMembers /> */}
      <Box sx={styles.container}>
        {/* <Headline /> */}
        {/* <Pillars /> */}
        <Features />
        <NewsletterGraph />

      {/* TODO: Who is this for page: individuals, businesses, individuals building a business */}
      </Box>

      <Benefits />
      {/* <Testimonials /> */}
      <Box sx={styles.container}>
        <ThreeTierPricing />
      </Box>

      <FAQ />
    </Fragment>
  );
};

export default HomePage;
