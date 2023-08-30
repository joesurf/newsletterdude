import { Box, Paper, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";


export default function ArticleCard({ icon, title }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Paper sx={{
      display: "flex",
      paddingY: "2rem",
      paddingX: "2.5rem",
      justifyContent: "center",
      borderWidth: "1px",
      height: "5rem", 
      flexDirection: "column"
    }}>
      <Box display="flex" margin="auto">
        <span style={{ color: colors.grey[100] }}>{icon}</span>
      </Box>
      <Typography variant="h6" sx={{ color: colors.grey[100] }}>
        {title}
      </Typography>
    </Paper>
  );
}
