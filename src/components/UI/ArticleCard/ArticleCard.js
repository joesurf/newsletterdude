import { Box, Typography } from "@mui/material";


export default function ArticleCard({ icon, title }) {
  return (
    <div style={{"display":"flex","paddingTop":"2rem","paddingBottom":"2rem","paddingLeft":"2.5rem","paddingRight":"2.5rem","justifyContent":"center","borderWidth":"2px","borderColor":"#D1D5DB","height":"7rem", flexDirection: "column"}}>
      {/* <img src={image} alt={"temp"} style={{ objectFit: "contain" }} /> */}
      <Box display="flex" margin="auto">
        {icon}
      </Box>
      <Typography>
        {title}
      </Typography>
    </div>
  );
}
