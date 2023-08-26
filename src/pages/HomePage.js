import { Fragment } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/layout/HomePage/HeroBanner/HeroBanner";
import Headline from "../components/layout/HomePage/Headline/Headline";
// import OurMembers from "../components/layout/HomePage/Members/OurMembers";
import Pillars from "../components/layout/HomePage/Pillars/Pillars";
import ArticleMarquee from "../components/layout/HomePage/ArticleMarquee/ArticleMarquee";
import ThreeTierPricing from "../components/layout/HomePage/Pricing/ThreeTierPricing";
import Features from "../components/layout/HomePage/Features/Features";

import CTA from "../components/layout/HomePage/CTA/cta";
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
      <Box sx={styles.container}>
        <HeroBanner />
      </Box>
      <ArticleMarquee />

      {/* <OurMembers /> */}
      <Box sx={styles.container}>
        <Headline />
        <Pillars />
        <Features />
        <ThreeTierPricing />
        {/* <Testimonials /> */}
      </Box>
      <CTA />
      <FAQ />
    </Fragment>
  );
};

export default HomePage;
