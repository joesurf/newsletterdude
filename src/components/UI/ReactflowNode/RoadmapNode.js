// import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { Box, Button, Link, Typography } from '@mui/material';
import './RoadmapNode.css'

export function RoadmapNode({ data }) {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  return (
    <Box sx={{ width: 200, border: data.milestone ? "1.5px solid red" : (data.repeat ? "1.5px solid blue" : "1.5px solid") }}>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="target" position={Position.Left} id="left" />
      <Handle type="target" position={Position.Bottom} id="bottom" />
      <Handle type="target" position={Position.Right} id="right" />
      <Box sx={{ padding: 1 }}>
        {data.icon}
        <Typography variant="body2" sx={{ color: "grey" }}>{data.id}</Typography>
        <Link href={data.article_link} underline="none">
          <Typography variant="body1" sx={{ color: "black" }}>{data.description}</Typography>
        </Link>
        <Button sx={{ backgroundColor: "#e0e0e0", color: "black", padding: 0, fontSize: 10 }}>Content {'>'} Scheduling</Button>
      </Box>
      <Handle type="source" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="source" position={Position.Right} id="right" />
    </Box>
  );
}