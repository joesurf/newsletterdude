import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import './RoadmapNode.css'
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

import { tokens } from '../../../theme';

import { HashLink } from 'react-router-hash-link';
import ImageGrid from '../ImageGrid/ImageGrid';


export function RoadmapNode({ data }) {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  const theme = useTheme();
  // eslint-disable-next-line
  const colors = tokens(theme.palette.mode);

  const [infoOpen, setInfoOpen] = useState(false);

  const handleSubmit = (event) => {
      event.preventDefault();

      if (!infoOpen) setInfoOpen(true)
  }

  const handleClose = () => {
    setInfoOpen(false);
  }  

  return (
    <Box onClick={handleSubmit} sx={{ 
      width: 200, 
      border: data.milestone ? "1.5px solid red" : (data.repeat ? "1.5px solid blue" : "1.5px solid"),
      "&:hover": { transform: "scale3d(1.03, 1.03, 1)", zIndex: 1, cursor: "pointer" }
    }}>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="target" position={Position.Left} id="left" />
      <Handle type="target" position={Position.Bottom} id="bottom" />
      <Handle type="target" position={Position.Right} id="right" />
      <Box sx={{ padding: 1 }}>
        {data.icon}
        <Typography variant="h6" sx={{ color: "grey" }}>{data.id}</Typography>
        <Typography variant="h5" sx={{ color: colors.grey[100] }}>{data.description}</Typography>
        <Button sx={{ 
          backgroundColor: colors.grey[400], color: colors.grey[900], padding: 0, paddingLeft: 1, paddingRight: 1, fontSize: 9,
          "&:hover": { backgroundColor: colors.grey[400] }
        }}>Newsletter {'>'} Learn</Button>
      </Box>
      <ConfirmDialog
            open={infoOpen}
            onClose={handleClose}
            link={data.article_link}
      >
        <Box>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {data.description}
          </Typography>
          <Typography variant="h6">
            <i>{data.id}</i>
          </Typography>
          <Typography variant="h5" fontWeight="bold" mt="10px">
            Framework
          </Typography>
          <ol style={{ marginLeft: "15px" }}>
            {["What is the current pricing and your goal?", "What are your expertise and passion, or something you are good at?", "What is the end goal, how much time do you have and is the commitment?"]
            .map((item, i) => {
              return <li key={i}>
                <Typography variant="h6">
                  {item}
                </Typography>
                </li>
            })}
          </ol>
          <Typography variant="h5" mt="10px" fontWeight="bold">
            Relevant tools
          </Typography>
            <Grid container sx={{ mt: "5px", textAlign: "center" }}>
              {["ghost", "notion"].map((tool, i) => {
                return (<Box key={i} mx="5px">
                  <HashLink to={`http://localhost:3000/tools?tool=${tool}`}
                  >
                    <ImageGrid src={`${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/Tool/${tool}_logo.png`} alt="logo" maxWidth="30px" />
                  </HashLink>
                </Box>)
              })}
            </Grid>
        </Box>
      </ConfirmDialog>
      <Handle type="source" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="source" position={Position.Right} id="right" />
    </Box>
  );
}