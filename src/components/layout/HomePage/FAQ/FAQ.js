import { Typography, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = (props) => {
  return (
    <Box sx={{ width: { xs: "90%", sm: "80%" }, mx: "auto", mt: "3rem" }}>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", mb: "2rem" }}
      >
        Frequently Asked Questions
      </Typography>
      <div>
        <Accordion sx={{ boxShadow: "0px 5px 25px rgba(0,0,0,0.15)" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              What is NewsletterDude?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We are a community of newsletter builders, designing the ultimate newsletter 
              building guide, and sharing our learnings with one another.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ boxShadow: "0px 5px 25px rgba(0,0,0,0.15)" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              What are the requirements for membership?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              There are no requirements. Anyone interested in building a newsletter, or 
              connecting with like-minded people can join.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ boxShadow: "0px 5px 25px rgba(0,0,0,0.15)" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>How can I join?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Click on the "Join the newsletter community" buttons above and you will 
              be redirected to our blog for signup.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
};

export default FAQ;
