import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

import { RoadmapNode } from '../ReactflowNode/RoadmapNode';
import { TimelineNode } from '../ReactflowNode/TimelineNode';


export default function Flowchart({ initialNodes, initialEdges }) {
  const [chartWidth, setChartWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setChartWidth(window.innerWidth)
    } 

    window.addEventListener('resize', handleResize)
  }, [])

    const nodeTypes = useMemo(() => ({ 
        roadmap: RoadmapNode, 
        timeline: TimelineNode 
    }), [])


    // eslint-disable-next-line
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
      // eslint-disable-next-line
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
      
  // eslint-disable-next-line
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ width: { xs: chartWidth * 0.9, sm: chartWidth * 0.8 }, maxWidth: "1300px", height: 500, margin: 'auto' }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        panOnScroll={false}
        zoomOnScroll={false}
        selectionOnDrag
      >
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}