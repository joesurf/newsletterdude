import GhostEmbeddablePricingButton from "../Pricing/Pricing";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";


export default function Cta() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <section style={{"position":"relative"}}>
      <div style={{"paddingLeft":"1rem","paddingRight":"1rem","maxWidth":"72rem","@media (minWidth: 640px)":{"paddingLeft":"1.5rem","paddingRight":"1.5rem"}, backgroundColor: colors.grey[900]}}>
        {/* Hero content */}
        <div style={{"paddingBottom":"5rem","paddingTop":"8rem","@media (minWidth: 768px)":{"paddingBottom":"8rem","paddingTop":"13rem"}}}>
          {/* Section header */}
          <div style={{"paddingBottom":"3rem","textAlign":"center","@media (minWidth: 768px)":{"paddingBottom":"4rem"}}}>
            <Typography variant="h1" fontWeight="bold" marginBottom="10px">
              Think you're a fit?
            </Typography>
            <Typography variant="h3" marginBottom="20px">
              Let's find out.
            </Typography>
            <GhostEmbeddablePricingButton />
          </div>
        </div>
      </div>
    </section>
  );
}
