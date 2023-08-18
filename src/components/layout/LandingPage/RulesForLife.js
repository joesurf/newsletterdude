import React from 'react'
import { Box } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


function RulesForLife() {
  return (
    <Box sx={{ marginBottom: "15px" }}>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                    paddingTop: "-15px",
                    paddingBottom: "-15px"
                }}
            >
                <h2><span style={{ color: "grey" }}>RULES FOR </span>LIFE</h2>
            </AccordionSummary>
            <AccordionDetails sx={{ marginTop: "-30px" }}>
            <div>
                <ol>
                    <li style={{ marginBottom: "10px" }}>Learn and master a profitable skill: <span style={{ color: "grey" }}>
                    Application of software for personal adventures and business building
                    </span></li>
                    <li style={{ marginBottom: "10px" }}>Get in the best shape of your life: <span style={{ color: "grey" }}>
                    75 Hard, Physique Secrets
                    </span></li>
                    <li style={{ marginBottom: "10px" }}>Build something slowly: <span style={{ color: "grey" }}>
                    The Dude
                    </span></li>
                </ol>
            </div>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default RulesForLife