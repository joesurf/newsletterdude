import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";


export default function ArticleCard({ icon, title }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <div style={{"display":"flex","paddingTop":"2rem","paddingBottom":"2rem","paddingLeft":"2.5rem","paddingRight":"2.5rem","justifyContent":"center","borderWidth":"2px","borderColor":"#D1D5DB","height":"7rem", flexDirection: "column"}}>
      {/* <img src={image} alt={"temp"} style={{ objectFit: "contain" }} /> */}
      <Box display="flex" margin="auto">
        <span style={{ color: colors.grey[100] }}>{icon}</span>
      </Box>
      <Typography variant="h6" sx={{ color: colors.grey[100] }}>
        {title}
      </Typography>
    </div>
  );
}
