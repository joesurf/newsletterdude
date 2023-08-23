import React from 'react'
import Flowchart from '../../UI/Flowchart/Flowchart'

import { MarkerType } from 'reactflow';

import BuildIcon from '@mui/icons-material/Build';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PsychologyIcon from '@mui/icons-material/Psychology';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


function RoadmapFlowchart() {
    // TODO: Options to change layout from table to flow chart + include advance steps

    const initialNodes = [
        // Arrow Timeline
        { id: '1000', type: 'timeline', position: { x: 100, y: 30 }, data: { title: "Milestone 1", columns: 3 } },
        { id: '1001', type: 'timeline', position: { x: 850, y: 30 }, data: { title: "Milestone 2", columns: 3 } },
        { id: '1002', type: 'timeline', position: { x: 1600, y: 30 }, data: { title: "Milestone 3", columns: 4 } },


        { id: '1', type: 'roadmap', position: { x: 100, y: 250 }, data: { id: 'Step 1', icon: <PsychologyIcon />, description: "Define your goals" } },
        { id: '2', type: 'roadmap', position: { x: 350, y: 100 }, data: { id: 'Step 2', icon: <BuildIcon />, description: "Find your expertise" } },
        { id: '4', type: 'roadmap', position: { x: 350, y: 250 }, data: { id: 'Step 4', icon: <PsychologyIcon />, description: "Determine your content" } },
        { id: '3', type: 'roadmap', position: { x: 350, y: 400 }, data: { id: 'Step 3', icon: <AcUnitIcon />, description: "Identify your audience" } },
        { id: '5', type: 'roadmap', position: { x: 600, y: 100 }, data: { id: 'Step 5', icon: <AcUnitIcon />, description: "Understand the tech" } },
        { id: '6', type: 'roadmap', position: { x: 600, y: 250 }, data: { id: 'Step 6', icon: <AcUnitIcon />, description: "Draw the user journey", milestone: '1' } },

        { id: '7', type: 'roadmap', position: { x: 850, y: 400 }, data: { id: 'Step 7', icon: <AcUnitIcon />, description: "Calculate market size" } },
        { id: '8', type: 'roadmap', position: { x: 850, y: 250 }, data: { id: 'Step 8', icon: <AcUnitIcon />, description: "Conduct idea validation" } },
        { id: '9', type: 'roadmap', position: { x: 850, y: 100 }, data: { id: 'Step 9', icon: <AcUnitIcon />, description: "Select your tools" } },
        { id: '10', type: 'roadmap', position: { x: 1100, y: 250 }, data: { id: 'Step 10', icon: <AcUnitIcon />, description: "Create first content" } },
        { id: '11', type: 'roadmap', position: { x: 1100, y: 100 }, data: { id: 'Step 11', icon: <AcUnitIcon />, description: "Build email automation" } },
        { id: '12', type: 'roadmap', position: { x: 1350, y: 250 }, data: { id: 'Step 12', icon: <AcUnitIcon />, description: "The MVP Launch", milestone: '2' } },

        { id: '13', type: 'roadmap', position: { x: 1600, y: 175 }, data: { id: 'Step 13', icon: <AcUnitIcon />, description: "Collect feedback" } },
        { id: '14', type: 'roadmap', position: { x: 1600, y: 325 }, data: { id: 'Step 14', icon: <AcUnitIcon />, description: "Gather testimonials" } },
        { id: '15', type: 'roadmap', position: { x: 1850, y: 250 }, data: { id: 'Step 15', icon: <AcUnitIcon />, description: "Pricing your newsletter" } },
        { id: '16', type: 'roadmap', position: { x: 2100, y: 175 }, data: { id: 'Step 16', icon: <AcUnitIcon />, description: "Distribution channels" } },
        { id: '17', type: 'roadmap', position: { x: 2100, y: 325 }, data: { id: 'Step 17', icon: <AcUnitIcon />, description: "Marketing channels" } },
        { id: '18', type: 'roadmap', position: { x: 2350, y: 250 }, data: { id: 'Step 18', icon: <AcUnitIcon />, description: "Getting first sale", milestone: '3' } },

        { id: '19', type: 'roadmap', position: { x: 1850, y: 100 }, data: { id: 'Optimisation', icon: <AcUnitIcon />, description: "Improve and repeat", repeat: true } },
        { id: '20', type: 'roadmap', position: { x: 1850, y: 400 }, data: { id: 'Optimisation', icon: <AcUnitIcon />, description: "Improve and repeat", repeat: true } },

        { id: '21', type: 'roadmap', position: { x: 600, y: 600 }, data: { id: 'Step 21', icon: <AcUnitIcon />, description: "Optimise your content", repeat: true } },
        { id: '22', type: 'roadmap', position: { x: 450, y: 750 }, data: { id: 'Step 22', icon: <AcUnitIcon />, description: "Text-related optimisation" } },
        { id: '23', type: 'roadmap', position: { x: 750, y: 750 }, data: { id: 'Step 23', icon: <AcUnitIcon />, description: "Non-text optimisation" } },
        { id: '24', type: 'roadmap', position: { x: 450, y: 900 }, data: { id: 'Step 24', icon: <AcUnitIcon />, description: "Apply storytelling tactics" } },
        { id: '25', type: 'roadmap', position: { x: 450, y: 1050 }, data: { id: 'Step 25', icon: <AcUnitIcon />, description: "Concise editorial style" } },
        { id: '26', type: 'roadmap', position: { x: 450, y: 1200 }, data: { id: 'Step 26', icon: <AcUnitIcon />, description: "Attention grabbing hooks" } },
        { id: '27', type: 'roadmap', position: { x: 450, y: 1350 }, data: { id: 'Step 27', icon: <AcUnitIcon />, description: "Optimise preview text" } },
        { id: '28', type: 'roadmap', position: { x: 750, y: 900 }, data: { id: 'Step 28', icon: <AcUnitIcon />, description: "Maximise visuals" } },
        { id: '29', type: 'roadmap', position: { x: 750, y: 1050 }, data: { id: 'Step 29', icon: <AcUnitIcon />, description: "Use interactive elements" } },

    ];
    
    const initialEdges = [
        { id: 'e1-2', source: '1', target: '2', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e1-3', source: '1', target: '3', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e1-4', source: '1', target: '4', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e2-4', source: '2', target: '4', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e3-4', source: '3', target: '4', sourceHandle: 'top', targetHandle: 'bottom', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e3-6', source: '3', target: '6', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e4-6', source: '4', target: '6', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e5-6', source: '5', target: '6', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e6-8', source: '6', target: '8', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e7-8', source: '7', target: '8', sourceHandle: 'top', targetHandle: 'bottom', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e5-9', source: '5', target: '9', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e8-10', source: '8', target: '10', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e9-11', source: '9', target: '11', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },      
        { id: 'e10-12', source: '10', target: '12', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e11-12', source: '11', target: '12', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },


        { id: 'e12-13', source: '12', target: '13', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e12-14', source: '12', target: '14', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e13-15', source: '13', target: '15', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e14-15', source: '14', target: '15', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e15-16', source: '15', target: '16', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e15-17', source: '15', target: '17', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e16-18', source: '16', target: '18', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e17-18', source: '17', target: '18', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },

        
        { id: 'e12-20', source: '12', target: '20', sourceHandle: 'bottom', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e20-18', source: '20', target: '18', sourceHandle: 'right', targetHandle: 'bottom', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e18-19', source: '18', target: '19', sourceHandle: 'top', targetHandle: 'right', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e19-12', source: '19', target: '12', sourceHandle: 'left', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },

        { id: 'e21-22', source: '21', target: '22', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e21-23', source: '21', target: '23', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e22-24', source: '22', target: '24', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e24-25', source: '24', target: '25', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e25-26', source: '25', target: '26', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e26-27', source: '26', target: '27', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e23-28', source: '23', target: '28', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
        { id: 'e28-29', source: '28', target: '29', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },

      ];

  return (
    <Flowchart initialNodes={initialNodes} initialEdges={initialEdges} />
  )
}

export default RoadmapFlowchart