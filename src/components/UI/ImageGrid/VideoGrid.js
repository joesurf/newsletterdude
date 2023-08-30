import { tokens } from "../../../theme";
import css from "./ImageGrid.module.css";

import { Grid, Box, useTheme } from "@mui/material";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";


const VideoGrid = (props) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    } 

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <Grid item lg={props.gridSize} className={css.imgContainer}>
      <Box sx={{
        backgroundImage: `linear-gradient(to bottom right, ${colors.redAccent[800]}, ${colors.blueAccent[800]})`,
        width: "100%",
        height: windowWidth * 0.8 * 0.85,
        maxHeight: "350px",
        borderRadius: "10px",
        display: "flex"
      }}>
        {props.video_id 
        ?
          <video autoPlay loop muted style={{
            borderRadius: "10px",
            margin: "auto",
            width: "90%",
            height: "auto"
          }}>
            <source
              src={`${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/NewsletterDude/NewsletterDudeLandingPageVideo${props.video_id}.mp4`}
              type="video/mp4"
            />
          </video>
        : 
          <Box margin="auto">
            <Loader />
          </Box>
        }
      </Box>
    </Grid>
  );
};

export default VideoGrid;
