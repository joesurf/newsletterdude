import { Fragment } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/layout/HomePage/HeroBanner/HeroBanner";
import ArticleMarquee from "../components/layout/HomePage/ArticleMarquee/ArticleMarquee";
import ThreeTierPricing from "../components/layout/HomePage/Pricing/ThreeTierPricing";
import Features from "../components/layout/HomePage/Features/Features";
import Benefits from "../components/layout/HomePage/Benefits";
import NewsletterGraph from "../components/layout/HomePage/NewsletterGraph";
import FAQ from "../components/layout/HomePage/FAQ/FAQ";


const styles = {
  container: {
    width: { xs: "90%", sm: "80%" },
    maxWidth: "1300px",
    margin: "2.5rem auto",
  },
};


const HomePage = () => {
  return (
    <Fragment>
      <Box sx={{
        width: { xs: "90%", sm: "80%" },
        margin: "2.5rem auto",
      }}>
        <HeroBanner />
      </Box>
      <ArticleMarquee />

      <Box sx={styles.container}>
        <Features />
        <NewsletterGraph />
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
