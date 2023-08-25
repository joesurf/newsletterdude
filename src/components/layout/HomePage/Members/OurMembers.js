// import css from "./OurMembers.module.css";
import { Balancer } from "react-wrap-balancer";
import MemberCard from "../../../UI/MemberCard/MemberCard";
import Marquee from "react-fast-marquee";

import Logo from "../../../../assets/NewsletterDudeLogo.png";


import { Typography, Box } from "@mui/material";

const memberList1 = [
  {
    image: Logo,
    name: "Elson Ee",
    title: "Co-Founder of GetSpaces",
    description:
      "GetSpaces improves the commercial leasing journey by connecting spaces with businesses. They offer the most flexible commercial lease solution in the market, from rentals as short as an hour to as long as a few years.",
  },
  {
    image: Logo,
    name: "Srikanth Katikala",
    title: "Co-Founder of Just Dabao",
    description:
      "Just Dabao is a Singapore-based social enterprise reducing food waste via a marketplace for surplus food, with a community of over 550 food businesses who list their surplus food and 30,000 consumers.",
  },

  {
    image: Logo,
    name: "Ho Zhi Hui ",
    title: "Co-Founder of Skilio",
    description:
      "Skilio is Southeast Asia's first skills-based hiring talent community. They help Gen Zs in Southeast Asia upskill & secure jobs with their skills, while empowering businesses with access to quality talent.",
  },
  {
    image: Logo,
    name: "Laurent Misso",
    title: "Founder of GoBike",
    description:
      "GoBike offers unique cycling experiences to our local communities. They are a full-fledged platform as a one-stop shop for all levels of cyclists, offering, a richer experience in your cycling adventures.",
  },
  {
    image: Logo,
    name: "Lenard Tan",
    title: "Founder of Ailytics",
    description:
      "Ailytics is a leading video analytics company in Southeast Asia that enhances safety and productivity for any operation within the construction and manufacturing industries.",
  },
  {
    image: Logo,
    name: "Bentley Woon",
    title: "Founder of The Chiro Lab",
    description:
      "The Chiro Lab offers high-quality, personalised Chiropractic care. The mission is to get people out of pain and optimise their body’s function, allowing them to do whatever they want to do without fear of pain or injury.",
  },
];

const memberList2 = [
  {
    image: Logo,
    name: "Constant Tong",
    title: "Founder of Ketomei",
    description:
      "Ketomei helps customers hit  health goals with delicious & functional food, technologies and services. They operate multiple brand such as Ketomei, Fit Fresh and InsaneMeals and achieved 7 figure ARR in 12 months.",
  },
  {
    image: Logo,
    name: "Jeshua Soh",
    title: "Founder of Crossworks Myanmar",
    description:
      "Crossworks Myanmar helps you hire and manage the best and brightest remote talent & teams from Myanmar. Their HR as a Service model extends your Company's HR function so that your team can focus on the work at hand.",
  },
  {
    image: Logo,
    name: "Phang Wei Jun",
    title: "Co-Founder of Lalia",
    description:
      "Lalia develops English and critical thinking skills using your favourite topics. They enable learners to take charge of their learning through our Interest-Driven English Activities.",
  },
  {
    image: Logo,
    name: "Jeremy Lim",
    title: "Co-Founder of Zerest Audio",
    description:
      "Zerest Audio is a home-grown brand aimed at bringing innovative earphones, superior sound quality, coupled with lasting build quality. They provide excellent sounding earphoneswith a price that is not out of reach to the local folk.",
  },
  {
    image: Logo,
    name: "Sameera Nilupul",
    title: "Co-Founder of Kaiju Labs",
    description:
      "Kaiju Labs helps game developers create web3 games with zero blockchain knowledge and let their players sign up in one-click and play like a regular game.",
  },

  {
    image: Logo,
    name: "Brandon Tan",
    title: "Co-Founder at Re:noun",
    description:
      "Re:noun is a Facebook Ads & Growth Agency For eCommerce Brands. They help businesses identify and reach their goals no matter the scale.",
  },
  {
    image: Logo,
    name: "Pranav Krishna Prasad",
    title: "Co-Founder of Flint",
    description:
      "Flint offers a range of sustainable lifestyle tech products designed to promote eco-friendly practices. Their groundbreaking Paper Batteries harness renewable energy sources and transform them into clean, efficient power.",
  },
];

const OurMembers = (props) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: "bold",
          width: { xs: "90%", sm: "60%" },
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Balancer>
          Members of The 100 Club run the fastest growing businesses in
          Southeast Asia, across a wide array of industries.
        </Balancer>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          width: { xs: "90%", sm: "60%" },
          maxWidth: "1200px",
          my: "1.2rem",
          mx: "auto",
          mb: "3rem",
        }}
      >
        {" "}
        <Balancer>
          Some are bootstrapped, others venture-backed. But all our members seek
          belonging, support, and connection with a selective group of their
          peers.
        </Balancer>
      </Typography>
      <Marquee className="pb-6">
        {memberList1.map((member, index) => {
          return (
            <div className="col-span-9 lg:col-span-3" key={index}>
              <MemberCard
                image={member.image}
                name={member.name}
                title={member.title}
                description={member.description}
              />
            </div>
          );
        })}
      </Marquee>
      <Marquee direction="right" className="pb-6">
        {memberList2.map((member, index) => {
          return (
            <div className="col-span-9 lg:col-span-3" key={index}>
              <MemberCard
                image={member.image}
                name={member.name}
                title={member.title}
                description={member.description}
              />
            </div>
          );
        })}
      </Marquee>
    </Box>
  );
};

export default OurMembers;
