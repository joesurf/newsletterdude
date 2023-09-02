import css from "./ImageGrid.module.css";
import { Grid } from "@mui/material";


const ImageGrid = (props) => {
  return (
    <Grid item lg={props.gridSize} className={css.imgContainer}>
      <img src={props.src} alt={props.alt} style={{ maxWidth: props.maxWidth, width: props.width }} />
    </Grid>
  );
};

export default ImageGrid;
