import React, { useState } from "react";
import { Box, Button, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ConfirmDialog from "../../UI/ConfirmDialog/ConfirmDialog";


export const ItemCard = (props) => {
  const [infoOpen, setInfoOpen] = useState(false);

  const handleSubmit = (event) => {
      event.preventDefault();

      if (!infoOpen) setInfoOpen(true)
  }

  const handleClose = () => {
    setInfoOpen(false);
  }

  const findEarliestWord = (sentence) => {
    const sentenceArray = sentence.split(" ");
    return sentenceArray[0] ? sentenceArray[0] : ""
  }
  
  return (
    <Grid
      item
      component={Card}
      xs={12}
      sm={6}
      md={4}
      sx={{
        height: "240px",
        margin: 1,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "scale3d(1.03, 1.03, 1)", zIndex: 1, cursor: "pointer" },
      }}
      onClick={handleSubmit}
    >
      <section id={props.title}></section>
      <CardMedia sx={{ display: "flex", mt: "5px", height: "30%" }}>
        <img
          src={`${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/Tool/${props.image_id}`}
          alt="green iguana"
          style={{
              width: "25%",
              margin: "auto",
          }}
        />
      </CardMedia>
      <CardContent sx={{ height: "70%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {props.title}
        </Typography>
        <Typography variant="h6">
          {props.description.length < 100 ? props.description : props.description.slice(0, 100) + findEarliestWord(props.description.slice(100)) + "..."}
        </Typography>
      </CardContent>
      <ConfirmDialog
            open={infoOpen}
            onClose={handleClose}
            link={props.article_link}
        >
            <Box>
              <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                {props.title}
              </Typography>
              <Typography variant="body1">
                {props.description}
              </Typography>
              {props.newsletter_category.map((category, i) => {
                return (
                  <Button key={i} style={{ backgroundColor: "grey", color: "white", padding: 1, paddingLeft: 6, paddingRight: 6, marginTop: 5, marginRight: 10, marginLeft: 0 }}>
                    {category}
                  </Button>
                )
              })}
            </Box>
        </ConfirmDialog>  
    </Grid>
  );
};