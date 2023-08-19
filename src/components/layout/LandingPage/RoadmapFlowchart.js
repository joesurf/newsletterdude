import React from 'react'
import Flowchart from '../../UI/Flowchart/Flowchart'

import { MarkerType } from 'reactflow';

import BuildIcon from '@mui/icons-material/Build';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


function RoadmapFlowchart() {
    // TODO: Options to change layout from table to flow chart + include advance steps

    const initialNodes = [
        // Arrow Timeline
        { id: '1000', type: 'timeline', position: { x: 100, y: 30 }, data: { title: "Define" } },
        { id: '1001', type: 'timeline', position: { x: 350, y: 30 }, data: { title: "Setup" } },
        { id: '1002', type: 'timeline', position: { x: 600, y: 30 }, data: { title: "Plan" } },
        { id: '1003', type: 'timeline', position: { x: 850, y: 30 }, data: { title: "Create" } },

        // Fit
        { id: '1', type: 'roadmap', position: { x: 100, y: 100 }, data: { icon: <PsychologyIcon />, title: "Step 1", description: "Define your goals", article_link: "https://www.newsletterdude.com/define-your-goals/" } },
        { id: '2', type: 'roadmap', position: { x: 100, y: 250 }, data: { icon: <AcUnitIcon />, title: "Step 2", description: "Choosing your niche" } },

        // Setup
        { id: '3', type: 'roadmap', position: { x: 350, y: 100 }, data: { icon: <BuildIcon />, title: "Technology", description: "Choosing your tools" } },
        { id: '4', type: 'roadmap', position: { x: 350, y: 250 }, data: { icon: <AttachMoneyIcon />, title: "Monetisation", description: "Pricing your newsletter" } },
    ];
    
    const initialEdges = [
        { id: 'e1-2', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e2-3', source: '2', target: '3', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e3-4', source: '3', target: '4', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    ];

  return (
    <Flowchart initialNodes={initialNodes} initialEdges={initialEdges} />
  )
}

export default RoadmapFlowchart