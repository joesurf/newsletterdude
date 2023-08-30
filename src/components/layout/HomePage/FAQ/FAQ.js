import { Typography, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const questionResponses = [
  {
    question: "Is this for me?",
    response: "NewsletterDude is for you if you are an individual looking to build a personal brand, or a business seeking to increase engagement through newsletters, or an individual looking to build a business by sharing your expertise and passion through newsletters."
  },
  {
    question: "Why is this a monthly subscription?",
    response: "NewsletterDude is not only updated regularly with new steps where sensible, but also constantly upgraded with the latest learnings and introduction of new tools in the market. Our goal is to make our articles timeless so you never have to look elsewhere again."
  },
  {
    question: "How do I know if this has worked for me?",
    response: "NewsletterDude strives to be your companion throughout the entire process of building a newsletter with the backing of a community. If you are not working on your newsletter by putting in consistent work, or are unable to achieve your goals, please reach out to the team to see if we can help."
  }
]


const FAQ = (props) => {
  return (
    <Box sx={{ width: { xs: "90%", sm: "80%" }, mx: "auto", mt: "3rem" }}>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", mb: "2rem" }}
      >
        Frequently Asked Questions
      </Typography>
      <Box>
        {questionResponses.map((questionResponse, i) => {
          return (
          <Accordion sx={{ boxShadow: "0px 5px 25px rgba(0,0,0,0.15)" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {questionResponse.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h5">
                {questionResponse.response}
              </Typography>
            </AccordionDetails>
          </Accordion>
          )
        })}
      </Box>
    </Box>
  );
};

export default FAQ;
