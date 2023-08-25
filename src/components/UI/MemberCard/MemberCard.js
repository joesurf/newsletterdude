import { Box, Typography } from "@mui/material";


export default function MemberCard({ image, name, title, description }) {
  return (
    <Box sx={{ display: "flex","overflow":"hidden","marginLeft":"0.5rem","marginRight":"0.5rem","borderRadius":"1rem","maxWidth":"28rem","height":"100%","dropShadow":"drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))","@media (min-width: 768px)":{"maxWidth":"36rem"}}}>
      <img
        src={image}
        alt={"temp"}
        style={{"objectFit":"cover","width":"140px","height":"240px","@media (min-width: 768px)":{"width":"200px","height":"280px"}}}
      />

      <Box sx={{"padding":"1rem","textAlign":"left","backgroundColor":"#ffffff","@media (min-width: 768px)":{"padding":"2rem"}}}>
        <Typography variant="h2" sx={{"marginBottom":"0.25rem","fontSize":"1.125rem","lineHeight":"1.75rem","fontWeight":700,"@media (min-width: 768px)":{"fontSize":"1.5rem","lineHeight":"2rem"}}}>{name}</Typography>
        <Typography sx={{"marginBottom":"1rem","fontSize":"0.875rem","lineHeight":"1.25rem","fontWeight":500,"@media (min-width: 768px)":{"fontSize":"1.125rem","lineHeight":"1.75rem"}}}>
          {title}
        </Typography>
        <Typography sx={{"fontSize":"0.75rem","lineHeight":"1rem","@media (min-width: 768px)":{"fontSize":"0.875rem","lineHeight":"1.25rem"}}}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
