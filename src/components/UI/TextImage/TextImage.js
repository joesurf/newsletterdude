import css from "./TextImage.module.css";

import ImageGrid from "../../UI/ImageGrid/ImageGrid";

import { Typography, Grid } from "@mui/material";


const TextImage = (props) => {

  // TODO: Adjust responsive alignment of text relative to image

  if (props.imageThenText) {
    return (
      <Grid
        container
        spacing={6}
        sx={{ my: "3rem" }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <ImageGrid
          gridSize={6}
          src={props.src}
          alt={props.alt}
          maxWidth={props.maxWidth}
        />
        <Grid item lg={6} className={css.textContainer}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {props.header}
          </Typography>
          <Typography variant="h4" sx={{ mt: "1.2rem" }}>
            {props.paragraph}
          </Typography>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        spacing={6}
        sx={{ my: "3rem" }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={6}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {props.header}
          </Typography>
          <Typography variant="h4" sx={{ mt: "1.2rem" }}>
            {props.paragraph}
          </Typography>
        </Grid>
        <ImageGrid
          gridSize={6}
          src={props.src}
          alt={props.alt}
          maxWidth={props.maxWidth}
        />
      </Grid>
    );
  }
};

export default TextImage;
