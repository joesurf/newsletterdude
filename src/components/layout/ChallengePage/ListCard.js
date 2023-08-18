import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import "./ListCard.css";
import ConfirmDialog from "../../UI/ConfirmDialog/ConfirmDialog";
import MyResponsiveLine from '../../UI/NivoLineChart/NivoLineChart';


function ListCard(props) {
    const [infoOpen, setInfoOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
  
        if (!infoOpen) setInfoOpen(true)
    }
  
    const handleClose = () => {
      setInfoOpen(false);
    }  

  return (
    <Box 
        id="main_section"
        onClick={handleSubmit}
        sx={{ 
            width: "100%", 
            height: "50px", 
            display: "flex", 
            flexDirection: "row", 
            marginBottom: "100px",
            "&:hover": { transform: "scale3d(1.03, 1.03, 1)", zIndex: 1, cursor: "pointer" },
        }}
    >
        <Box id="left_section" sx={{ width: "20%" }}>
            <img src={`${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/Challenge/${props.image}`} alt="avatar" 
                style={{ width: "80%" }}
            />
        </Box>
        <Box id="right_section" sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
            <Typography variant="h6" sx={{ color: props.current ? "red" : "" }}><b>{props.title}</b></Typography>
            <Typography variant="body2">{props.author}</Typography>
            <Typography variant="caption"><i>Recommendation: {props.recommendation}</i></Typography>
            <div>
                <Typography variant="body2">
                    <b>Achievement:</b>
                </Typography>
                <Typography variant="body2">
                    {props.description}
                </Typography>
            </div>
        </Box>
        <ConfirmDialog
            open={infoOpen}
            onClose={handleClose}
        >
            <Box>
              <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                {props.title}
              </Typography>
              <Typography variant="body1">
                {props.description}
              </Typography>
              {props.category.map((tag) => {
                return (
                  <Button style={{ backgroundColor: "grey", color: "white", padding: 1, paddingLeft: 6, paddingRight: 6, marginTop: 5, marginRight: 10, marginLeft: 0 }}
                    key={props.category.findIndex((item) => tag === item)}
                  >
                    {tag}
                  </Button>
                )
              })}
              {props.graphdata.length !== 0 ?
                <Box sx={{ height: "300px" }}>
                  {props.graphdata.map((data, i) => {
                    return (
                      <Box key={i} sx={{ height: "300px" }}>
                        <MyResponsiveLine data={data} />
                        <Typography variant="body2">
                          {data["notes"]}
                        </Typography>
                      </Box>
                    )
                  })}
                </Box>
                : <></>}
            </Box>
        </ConfirmDialog> 
    </Box>
  )
}

export default ListCard