import { Typography, Box, Grid, List, ListItem, ListItemText, useTheme } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { tokens } from "../../../theme";
import VideoGrid from "../ImageGrid/VideoGrid";


const TextImage = (props) => {
  // TODO: Adjust responsive alignment of text relative to image
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

    return (      
      <Grid
        container
        spacing={6}
        sx={{ my: "3rem" }}
        direction={props.isReverse ? "row" : "row-reverse"}
        justifyContent="center"
        alignItems="center"
        textAlign={{ xs: "center", lg: "left" }}
      >
        <VideoGrid
          gridSize={6}
          video_id={props.video_id}
        />
        <Grid item lg={6}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            {props.header}
          </Typography>
          <Typography variant="h5" sx={{ mt: "1rem", mb: "1rem" }}>
            {props.paragraph}
          </Typography>
          <Box width="90%" margin="auto">
            <List>
              {props.benefits.map((benefit, i) => {
                return (
                  <ListItem key={i}>
                    <CheckCircleIcon sx={{ color: colors.blueAccent[800] }} />
                    <ListItemText sx={{ paddingLeft: "5px" }}>
                      <Typography variant="h4">
                        {benefit}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Grid>
      </Grid>
    );
};

export default TextImage;
