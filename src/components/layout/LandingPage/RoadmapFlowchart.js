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
        { id: '1', type: 'roadmap', position: { x: 100, y: 250 }, data: { icon: <PsychologyIcon />, title: "Step 1", description: "Define your goals", article_link: "https://blog.newsletterdude.com/define-your-goals/" } },
        { id: '2a', type: 'roadmap', position: { x: 350, y: 175 }, data: { icon: <BuildIcon />, title: "Step 2a", description: "Identify your audience" } },
        { id: '2b', type: 'roadmap', position: { x: 350, y: 325 }, data: { icon: <PsychologyIcon />, title: "Step 2b", description: "Draw the user journey", article_link: "https://blog.newsletterdude.com/define-your-goals/" } },
        { id: '3', type: 'roadmap', position: { x: 600, y: 250 }, data: { icon: <AcUnitIcon />, title: "Step 3", description: "Find your expertise" } },
        { id: '4', type: 'roadmap', position: { x: 850, y: 175 }, data: { icon: <AcUnitIcon />, title: "Step 4", description: "Idea validation" } },
        { id: '5', type: 'roadmap', position: { x: 1100, y: 175 }, data: { icon: <AcUnitIcon />, title: "Step 5", description: "Market size" } },
        { id: '6', type: 'roadmap', position: { x: 975, y: 325 }, data: { icon: <AttachMoneyIcon />, title: "Step 6", description: "Pricing your newsletter" } },

        // Setup
        // { id: '3', type: 'roadmap', position: { x: 350, y: 100 }, data: { icon: <BuildIcon />, title: "Technology", description: "Choosing your tools" } },
        // { id: '4', type: 'roadmap', position: { x: 350, y: 250 }, data: { icon: <AttachMoneyIcon />, title: "Monetisation", description: "Pricing your newsletter" } },
    ];
    
    const initialEdges = [
        { id: 'e1-2a', source: '1', target: '2a', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e1-2b', source: '1', target: '2b', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e2a-3', source: '2a', target: '3', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e2b-3', source: '2b', target: '3', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e3-4', source: '3', target: '4', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e4-5', source: '4', target: '5', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },

        { id: 'e4-6', source: '4', target: '6', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e5-6', source: '5', target: '6', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },

      ];

  return (
    <Flowchart initialNodes={initialNodes} initialEdges={initialEdges} />
  )
}

export default RoadmapFlowchart