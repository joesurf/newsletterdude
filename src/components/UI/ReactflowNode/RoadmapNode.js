// import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { Box, Button, Link, Typography } from '@mui/material';

export function RoadmapNode({ data }) {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  return (
    <Box sx={{ width: 200, border: "1.5px solid" }}>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} id="left" />
      <Box sx={{ padding: 1 }}>
        {data.icon}
        <Typography variant="body2" sx={{ color: "grey" }}>{data.title}</Typography>
        <Link href={data.article_link} underline="none">
          <Typography variant="body1" sx={{ color: "black" }}>{data.description}</Typography>
        </Link>
        <Button sx={{ backgroundColor: "#e0e0e0", color: "black", padding: 0, fontSize: 10 }}>Content {'>'} Scheduling</Button>
      </Box>
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="source" position={Position.Right} id="right" />
    </Box>
  );
}