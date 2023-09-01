import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import './RoadmapNode.css'
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

import { tokens } from '../../../theme';
import ImageGrid from '../ImageGrid/ImageGrid';

import {
  useSearchParams,
} from 'react-router-dom';


export function RoadmapNode({ data }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  // const [newsletter, setNewsletter] = React.useState('');
  const [infoOpen, setInfoOpen] = useState(false);

  const handleSubmit = (event) => {
      event.preventDefault();

      if (!infoOpen) setInfoOpen(true)
  }

  const handleClose = () => {
    setInfoOpen(false);
  }  

  // const handleChange = (event) => {
  //   setNewsletter(event.target.value);
  //   setInfoOpen(false)
  //   window.scroll({
  //     top: 900,
  //     behavior: "smooth"
  //   })
  //   setSearchParams({ newsletter: event.target.value.toLowerCase() })
  // };

  return (
    <Box onClick={handleSubmit} sx={{ 
      width: 200, 
      border: data.milestone ? "1.5px solid red" : (data.repeat ? "1.5px solid blue" : "1.5px solid"),
      "&:hover": { transform: "scale3d(1.03, 1.03, 1)", zIndex: 1, cursor: "pointer" },
      pointerEvents: data.unclick ? "none" : ""
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
        }}>Newsletter {'>'} {data.category}</Button>
      </Box>
      <ConfirmDialog
            open={infoOpen}
            onClose={handleClose}
            link={data.article_link}
      >
        <Box>
          <Typography variant="h2" sx={{ fontWeight: "bold" }} className="gradient__word">
            {data.description}
          </Typography>
          <Typography variant="h6">
            <i>{data.id}</i>
          </Typography>
          <Typography variant="h5" fontWeight="bold" mt="10px">
            Framework
          </Typography>
          {data.framework ? 
            <ol style={{ marginLeft: "15px" }}>
              {data.framework.map((item, i) => {
                return <li key={i} style={{ fontFamily: ["serif"] }}>
                  <Typography variant="h6">
                    {item}
                  </Typography>
                  </li>    
              })}
            </ol>
            : <Typography variant="h6"><i>Writing in progress...</i></Typography>
          }

          <Typography variant="h5" mt="15px" fontWeight="bold">
            Tools
          </Typography>
          <Grid container sx={{ mt: "5px", textAlign: "center" }}>
            {data.tools.length > 0 ? data.tools.map((tool, i) => {
              return (
                <Box key={i} mx="-5px" width="50px" onClick={() => {window.open(`https://newsletterdude.com/tools?tool=${tool}`)}}
                  sx={{
                    "&:hover": { cursor: "pointer" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                    <ImageGrid src={`${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/Tool/${tool}_logo.png`} alt="logo" maxWidth="25px" />
                </Box>)
              })
            : <Typography variant="h6"><i>None</i></Typography>}
          </Grid>

          {/* <Typography variant="h5" mt="15px" fontWeight="bold">
            Newsletters
          </Typography>
          <Box display="flex" alignItems="end">
            <FormControl variant="standard" sx={{ minWidth: 200 }}>
              <InputLabel id="demo-simple-select-standard-label" sx={{ fontSize: "12px" }}>Choose a newsletter</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={newsletter}
                onChange={handleChange}
                label="Newsletter"
              >
                {data.newsletters.map((newsletter, i) => {
                  return (
                    <MenuItem key={i} value={newsletter}>
                      <Typography variant="h6">
                        {newsletter}
                      </Typography>
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Box> */}

        </Box>
      </ConfirmDialog>
      <Handle type="source" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="source" position={Position.Right} id="right" />
    </Box>
  );
}