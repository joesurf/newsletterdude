import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { Box, Button, Typography, useTheme } from '@mui/material';
import './RoadmapNode.css'
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

import { tokens } from '../../../theme';



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

  const openLink = () => {
    if (data.article_link) window.open(data.article_link, "_blank", "noreferrer")
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
      >
        <Box>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {data.description}
          </Typography>
          <Typography variant="h6">
            {data.id}
          </Typography>
          <Typography variant="h5">
            {data.framework ? data.framework : "Framework"}
          </Typography>          
          <Typography onClick={openLink} variant="h6" sx={{ 
            textDecoration: "underline",
            "&:hover": { cursor: "pointer" }
          }}>
            {data.article_link ? "Learn more" : "Writing in progress..."}
          </Typography>
          <Typography variant="body2">
            Relevant tools: Can add affiliates here
          </Typography>
        </Box>
      </ConfirmDialog>
      <Handle type="source" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="source" position={Position.Right} id="right" />
    </Box>
  );
}