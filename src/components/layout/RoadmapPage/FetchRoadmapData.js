import { supabase } from '../../../api';

import { MarkerType } from 'reactflow';

import BuildIcon from '@mui/icons-material/Build';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import PeopleIcon from '@mui/icons-material/People';
import FunctionsIcon from '@mui/icons-material/Functions';
import CreateIcon from '@mui/icons-material/Create';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import RepeatIcon from '@mui/icons-material/Repeat';
import EqualizerIcon from '@mui/icons-material/Equalizer';


const ROADMAP_CATEGORIES = {
    "Self-Management": "Self-Management",
    "Market Research": "Market Research",
    "Proj Management": "Proj Management",
    "User Experience": "User Experience", // Link to marketing funnel?
    "Market Fit": "Market Fit",
    "Content Strategy": "Content Strategy",
    "Audience Intel": "Audience Intel",
    "Sales": "Sales",
    "Distribution": "Distribution",
    "Marketing": "Marketing",
    "Optimization": "Optimization",
}


export const initialNodes = [
    // Arrow Timeline
    { id: 'a1', type: 'timeline', position: { x: 100, y: 30 }, data: { title: "Milestone 1", columns: 3 } },
    { id: 'a2', type: 'timeline', position: { x: 850, y: 30 }, data: { title: "Milestone 2", columns: 3 } },
    { id: 'a3', type: 'timeline', position: { x: 1600, y: 30 }, data: { title: "Milestone 3", columns: 4 } },

    // Milestone 1
    { id: '1', type: 'roadmap', position: { x: 100, y: 250 }, data: { 
        id: 'Step 1', 
        icon: <PsychologyIcon />, 
        description: "Define your goals", 
        article_link: "https://blog.newsletterdude.com/define-your-goals/",
        category: ROADMAP_CATEGORIES["Self-Management"],
        tools: ["notion"],
        framework: ["What is the current pricing and your goal?", "What are your expertise and passion, or something you are good at?", "What is the end goal, how much time do you have and is the commitment?"],
        newsletters: ["The Hustle", "MorningBrew", "StarterStory", "Making Sense Of Cents"]
    }},
    { id: '2', type: 'roadmap', position: { x: 350, y: 100 }, data: { 
        id: 'Step 2', 
        icon: <PsychologyIcon />, 
        description: "Find your expertise", 
        article_link: "https://blog.newsletterdude.com/find-your-expertise/",
        category: ROADMAP_CATEGORIES["Self-Management"],
        tools: ["notion"],
        framework: ["What Are People Willing to Pay For?", "How to Determine Your Expertise", "What Are You Interested In?"],
        newsletters: [],
    }},
    { id: '4', type: 'roadmap', position: { x: 350, y: 250 }, data: { 
        id: 'Step 4', 
        icon: <PsychologyIcon />, 
        description: "Determine your content", 
        article_link: "https://blog.newsletterdude.com/craft-your-content-strategy-for-building-a-newsletter/",
        category: ROADMAP_CATEGORIES["Market Research"],
        tools: [],
        framework: ["Define Your Audience", "Launch Your Strongest Content", "Reference from Similar Newsletters"],
        newsletters: [],
    }},
    { id: '3', type: 'roadmap', position: { x: 350, y: 400 }, data: { 
        id: 'Step 3', 
        icon: <PeopleIcon />, 
        description: "Identify your audience", 
        article_link: "https://blog.newsletterdude.com/identify-your-audience/",
        category: ROADMAP_CATEGORIES["Market Research"],
        tools: [],
        framework: ["Who exactly is your audience?", "What are their needs and pain points?", "Where can you find them?"],
        newsletters: [],
    }},
    { id: '5', type: 'roadmap', position: { x: 600, y: 100 }, data: { 
        id: 'Step 5', 
        icon: <BuildIcon />, 
        description: "Understand the tech", 
        article_link: "https://blog.newsletterdude.com/the-tech-stack-of-a-newsletter/",
        category: ROADMAP_CATEGORIES["Proj Management"],
        tools: [],
        framework: ["Understand the basic technology behind all newsletters", "Understand the advanced technology that some newsletters have", "Understand your own technology needs"],
        newsletters: [],
    }},
    { id: '6', type: 'roadmap', position: { x: 600, y: 250 }, data: { 
        id: 'Step 6', 
        icon: <SportsScoreIcon />, 
        description: "Draw the user journey", 
        milestone: '1', 
        article_link: "https://blog.newsletterdude.com/draw-the-user-journey/",
        category: ROADMAP_CATEGORIES["User Experience"],
        tools: ["figma"],
        framework: ["What are the exact things a user will see upon landing on your website?", "What are the users' call to action? What do you want them to do?", "What do you want users to feel, while they are using your website, and after they have left?"],
        newsletters: [],
    }},

    // Milestone 2
    { id: '7', type: 'roadmap', position: { x: 850, y: 400 }, data: { 
        id: 'Step 7', 
        icon: <FunctionsIcon />, 
        description: "Calculate market size", 
        article_link: "https://blog.newsletterdude.com/market-size-understanding-the-potential-of-your-newsletter-business/",
        category: ROADMAP_CATEGORIES["Market Research"],
        tools: [],
        framework: ["Determine the Total Addressable Market (TAM)", "Determine the Serviceable Addressable Market (SAM)", "Determine the Serviceable Obtainable Market (SOM)"],
        newsletters: [],
    }},
    { id: '8', type: 'roadmap', position: { x: 850, y: 250 }, data: { 
        id: 'Step 8', 
        icon: <PeopleIcon />,
        description: "Conduct idea validation", 
        article_link: "https://blog.newsletterdude.com/idea-validation-for-building-your-newsletter/",
        category: ROADMAP_CATEGORIES["Market Fit"],
        tools: [],
        framework: ["Reference: Learn from people/competitors who are already doing what you want to do", "Ask: Share your idea and any sketch with the community through various forums", "Commit: Get people to actually commit to seeing your newsletter launched"],
        newsletters: [],
    }},
    { id: '9', type: 'roadmap', position: { x: 850, y: 100 }, data: { 
        id: 'Step 9', 
        icon: <BuildIcon />, 
        description: "Select your tools",
        article_link: "https://newsletterdude.com/tools",
        category: ROADMAP_CATEGORIES["Proj Management"],
        tools: ["interact"],
        framework: [],
        newsletters: [],
    }},
    { id: '10', type: 'roadmap', position: { x: 1100, y: 250 }, data: { 
        id: 'Step 10', 
        icon: <CreateIcon />, 
        description: "Create first content", 
        article_link: "https://blog.newsletterdude.com/your-first-content/",
        category: ROADMAP_CATEGORIES["Content Strategy"],
        tools: ["ghost", "notion", "wordpress"],
        framework: ["Start with your strongest content", "Play safe by referencing the best content in similar newsletters", "Be unique by adding your own touch, whether an opinion, or a different angle"],
        newsletters: [],
    }},
    { id: '11', type: 'roadmap', position: { x: 1100, y: 100 }, data: { 
        id: 'Step 11', 
        icon: <BuildIcon />, 
        description: "Build email automation", 
        article_link: "https://blog.newsletterdude.com/setting-up-your-email-sequence-for-building-a-newsletter/",
        category: ROADMAP_CATEGORIES["User Experience"],
        tools: ["ghost", "convertkit"],
        framework: ["An Email When Users Subscribe", "Show your cards early", "Consistent Updates, Sharing, and Value Offerings", ],
        newsletters: [],
    }},
    { id: '12', type: 'roadmap', position: { x: 1350, y: 250 }, data: { 
        id: 'Step 12', 
        icon: <SportsScoreIcon />, 
        description: "The MVP Launch", 
        milestone: '2', 
        article_link: "https://blog.newsletterdude.com/the-mvp-minimum-viable-product-launch/",
        category: ROADMAP_CATEGORIES["Market Fit"],
        tools: ["producthunt", "reddit"],
        framework: ["The Only Way to Know is to Try", "Focus on Getting Feedback and Making Continuous Improvements", "What Makes People Willing to Pay for a Newsletter?"],
        newsletters: [],
    }},

    // Milestone 3
    { id: '13', type: 'roadmap', position: { x: 1600, y: 175 }, data: { 
        id: 'Step 13', 
        icon: <ChatBubbleIcon />, 
        description: "Collect feedback", 
        article_link: "https://blog.newsletterdude.com/get-feedback-from-potential-customers/",
        category: ROADMAP_CATEGORIES["Audience Intel"],
        tools: ["interact", "fathom analytics", "zoom"],
        framework: ["Listen to People’s Experiences on Using Your Product and Identify Improvements", "Ask for Suggestions on How to Add More Value, or for Addressing Any Plans You Have", "If They’re Paying, Find out Why; and If They’re Not, Find out How to Make Them Change Their Mind"],
        newsletters: [],
    }},
    { id: '14', type: 'roadmap', position: { x: 1600, y: 325 }, data: { 
        id: 'Step 14', 
        icon: <ChatBubbleIcon />, 
        description: "Gather testimonials", 
        article_link: "https://blog.newsletterdude.com/get-testimonials-from-your-fans/",
        category: ROADMAP_CATEGORIES["Audience Intel"],
        tools: ["senja", "fomo"],
        framework: ["Ask for it, otherwise you won't get it", "Grab as many opportunities as possible, especially if someone has shown a liking to your newsletter", "Speed up the process by using tools such as Senja for collecting of testimonials"],
        newsletters: [],
    }},
    { id: '15', type: 'roadmap', position: { x: 1850, y: 250 }, data: { 
        id: 'Step 15', 
        icon: <AttachMoneyIcon />, 
        description: "Pricing your newsletter", 
        article_link: "https://blog.newsletterdude.com/pricing-your-newsletter/",
        category: ROADMAP_CATEGORIES["Sales"],
        tools: [],
        framework: ["Don't undervalue yourself", "Understanding the Value of Your Content", "Effectively Communicating the Value to Potential Customers"],
        newsletters: [],
    }},
    { id: '16', type: 'roadmap', position: { x: 2100, y: 175 }, data: { 
        id: 'Step 16', 
        icon: <ShareIcon />, 
        description: "Distribution channels", 
        article_link: "https://blog.newsletterdude.com/distribution-channels/",
        category: ROADMAP_CATEGORIES["Distribution"],
        tools: [],
        framework: ["Understand the Various Distribution Channels", "Extend Your Reach by Writing on Other Platforms", "Bring Readers Back to Your Website Through a CTA or a Freebie"],
        newsletters: [],
    }},
    { id: '17', type: 'roadmap', position: { x: 2100, y: 325 }, data: { 
        id: 'Step 17', 
        icon: <ShareIcon />, 
        description: "Marketing channels", 
        article_link: "https://blog.newsletterdude.com/marketing-your-newsletter-tips-for-building-an-engaged-audience/",
        category: ROADMAP_CATEGORIES["Marketing"],
        tools: [],
        framework: ["Be on as Many Channels as Possible", "Some Channels Are Better Than Others", "Virality vs Conversations"],
        newsletters: [],
    }},
    { id: '18', type: 'roadmap', position: { x: 2350, y: 250 }, data: { 
        id: 'Step 18', 
        icon: <SportsScoreIcon />, 
        description: "Getting first sale", 
        milestone: '3', 
        article_link: "https://blog.newsletterdude.com/making-your-first-sale/",
        category: ROADMAP_CATEGORIES["Sale"],
        tools: ["convertbox"],
        framework: ["Your Number One Goal is to Get a Sale from a Stranger", "Do Not Go Further Until You’ve Made a Sale", "Once You’ve Made a Sale, It’s Time to Scale"],
        newsletters: [],
    }},

    // Repeat
    { id: '19', type: 'roadmap', position: { x: 1850, y: 100 }, data: {
        id: 'Optimisation', 
        icon: <RepeatIcon />, 
        description: "Improve and repeat", 
        category: ROADMAP_CATEGORIES["Optimization"],
        repeat: true,
        unclick: true,
        tools: [],
        framework: [],
        newsletters: [],
    }},
    { id: '20', type: 'roadmap', position: { x: 1850, y: 400 }, data: { 
        id: 'Optimisation', 
        icon: <RepeatIcon />, 
        description: "Improve and repeat", 
        category: ROADMAP_CATEGORIES["Optimization"],
        repeat: true,
        unclick: true,
        tools: [],
        framework: [],
        newsletters: [],
    }},

    // Milestone 4
    // { id: 'm4', type: 'roadmap', position: { x: 1075, y: 600 }, data: { 
    //     id: 'Milestone 4', 
    //     icon: <SportsScoreIcon />, 
    //     description: "One to Hundred",
    //     milestone: '4' 
    // }},

    // Optimise content
    // { id: '21', type: 'roadmap', position: { x: 650, y: 700 }, data: { 
    //     id: 'Step 21', 
    //     icon: <CreateIcon />, 
    //     description: "Optimise your content", 
    //     repeat: true 
    // }},
    // { id: '22', type: 'roadmap', position: { x: 400, y: 850 }, data: { 
    //     id: 'Step 22', 
    //     icon: <CreateIcon />, 
    //     description: "Text-related optimisation" 
    // }},
    // { id: '23', type: 'roadmap', position: { x: 650, y: 850 }, data: { 
    //     id: 'Step 23', 
    //     icon: <CreateIcon />, 
    //     description: "Non-text optimisation" 
    // }},
    // { id: '24', type: 'roadmap', position: { x: 400, y: 1000 }, data: { 
    //     id: 'Step 24', 
    //     icon: <CreateIcon />, 
    //     description: "Apply storytelling tactics" 
    // }},
    // { id: '25', type: 'roadmap', position: { x: 400, y: 1150 }, data: { 
    //     id: 'Step 25', 
    //     icon: <CreateIcon />, 
    //     description: "Concise editorial style" 
    // }},
    // { id: '26', type: 'roadmap', position: { x: 400, y: 1300 }, data: { 
    //     id: 'Step 26', 
    //     icon: <CreateIcon />, 
    //     description: "Attention grabbing hooks" 
    // }},
    // { id: '27', type: 'roadmap', position: { x: 400, y: 1450 }, data: { 
    //     id: 'Step 27', 
    //     icon: <CreateIcon />, 
    //     description: "Optimise preview text" 
    // }},
    // { id: '28', type: 'roadmap', position: { x: 650, y: 1000 }, data: { 
    //     id: 'Step 28', 
    //     icon: <CreateIcon />, 
    //     description: "Maximise visuals" 
    // }},
    // { id: '29', type: 'roadmap', position: { x: 650, y: 1150 }, data: { 
    //     id: 'Step 29', 
    //     icon: <CreateIcon />, 
    //     description: "Use interactive elements" 
    // }},
    // { id: '30', type: 'roadmap', position: { x: 900, y: 850 }, data: { 
    //     id: 'Step 30', 
    //     icon: <CreateIcon />, 
    //     description: "Content type ideas" 
    // }},
    // { id: '31', type: 'roadmap', position: { x: 900, y: 1000 }, data: { 
    //     id: 'Step 31', 
    //     icon: <CreateIcon />, 
    //     description: "Guest writers / experts" 
    // }},
    // { id: '32', type: 'roadmap', position: { x: 900, y: 1150 }, data: { 
    //     id: 'Step 32', 
    //     icon: <CreateIcon />, 
    //     description: "User generated content" 
    // }},
    // { id: '33', type: 'roadmap', position: { x: 900, y: 1300 }, data: { 
    //     id: 'Step 33', 
    //     icon: <CreateIcon />, 
    //     description: "Show case studies" 
    // }},

    // // Analytics
    // { id: '34', type: 'roadmap', position: { x: 1500, y: 700 }, data: { 
    //     id: 'Step 34', 
    //     icon: <EqualizerIcon />, 
    //     description: "Setup analytics", 
    //     repeat: true 
    // }},
    // { id: '35', type: 'roadmap', position: { x: 1250, y: 850 }, data: { 
    //     id: 'Step 35', 
    //     icon: <EqualizerIcon />, 
    //     description: "Web analytics" 
    // }},
    // { id: '36', type: 'roadmap', position: { x: 1500, y: 850 }, data: { 
    //     id: 'Step 36', 
    //     icon: <EqualizerIcon />, 
    //     description: "Email analytics" 
    // }},
    // { id: '37', type: 'roadmap', position: { x: 1750, y: 850 }, data: { 
    //     id: 'Step 37', 
    //     icon: <EqualizerIcon />, 
    //     description: "A/B testing" 
    // }},
];

export const initialEdges = [
    // Milestone 1
    { id: 'e1-2', source: '1', target: '2', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e1-3', source: '1', target: '3', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e1-4', source: '1', target: '4', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e2-4', source: '2', target: '4', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e3-4', source: '3', target: '4', sourceHandle: 'top', targetHandle: 'bottom', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e3-6', source: '3', target: '6', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e4-6', source: '4', target: '6', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e5-6', source: '5', target: '6', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    
    // Milestone 2
    { id: 'e6-8', source: '6', target: '8', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e7-8', source: '7', target: '8', sourceHandle: 'top', targetHandle: 'bottom', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e5-9', source: '5', target: '9', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e8-10', source: '8', target: '10', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e9-11', source: '9', target: '11', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },      
    { id: 'e10-12', source: '10', target: '12', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e11-12', source: '11', target: '12', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },

    // Milestone 3
    { id: 'e12-13', source: '12', target: '13', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e12-14', source: '12', target: '14', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e13-15', source: '13', target: '15', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e14-15', source: '14', target: '15', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e15-16', source: '15', target: '16', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e15-17', source: '15', target: '17', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e16-18', source: '16', target: '18', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e17-18', source: '17', target: '18', sourceHandle: 'right', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },

    // Repeat
    { id: 'e12-20', source: '12', target: '20', sourceHandle: 'bottom', targetHandle: 'left', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e20-18', source: '20', target: '18', sourceHandle: 'right', targetHandle: 'bottom', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e18-19', source: '18', target: '19', sourceHandle: 'top', targetHandle: 'right', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e19-12', source: '19', target: '12', sourceHandle: 'left', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },

    // One to Hundred
    { id: 'em4-21', source: 'm4', target: '21', sourceHandle: 'left', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'em4-34', source: 'm4', target: '34', sourceHandle: 'right', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },

    // Optimise content
    { id: 'e21-22', source: '21', target: '22', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e21-23', source: '21', target: '23', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e22-24', source: '22', target: '24', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e24-25', source: '24', target: '25', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e25-26', source: '25', target: '26', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e26-27', source: '26', target: '27', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e23-28', source: '23', target: '28', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e28-29', source: '28', target: '29', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e21-30', source: '21', target: '30', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e30-31', source: '30', target: '31', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e31-32', source: '31', target: '32', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e32-33', source: '32', target: '33', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },

    // Analytics
    { id: 'e34-35', source: '34', target: '35', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e34-36', source: '34', target: '36', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    { id: 'e34-37', source: '34', target: '37', sourceHandle: 'bottom', targetHandle: 'top', markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
  ];








// Attempt to get data from supabase

const TEXT2ICON = {
    "BuildIcon": <BuildIcon />,
    "PsychologyIcon": <PsychologyIcon />,
    "AttachMoneyIcon": <AttachMoneyIcon />,
    "SportsScoreIcon": <SportsScoreIcon />,
    "PeopleIcon": <PeopleIcon />,
    "FunctionsIcon": <FunctionsIcon />,
    "CreateIcon": <CreateIcon />,
    "ChatBubbleIcon": <ChatBubbleIcon />,
    "ShareIcon": <ShareIcon />,
    "RepeatIcon": <RepeatIcon />,
    "EqualizerIcon": <EqualizerIcon />,
}

const convertSupabaseDataToNodeData = (data) => {
    for (var i = 0; i <  data.length; i++) {
        let nodeInfo = {}
        nodeInfo["id"] = data[i].id
        nodeInfo["type"] = data[i].type
        nodeInfo["position"] = data[i].position
        
        if (data[i].id.startsWith('a')) {
            nodeInfo["data"] = {
                data: data[i].data
            }
        } else {
            nodeInfo["data"] = {
                id: data[i].data_id,
                icon: TEXT2ICON[data[i].data_icon],
                description: data[i].data_description,
                article_link: data[i].data_article_link,
                framework: data[i].data_framework,
                tools: data[i].data_tools,
                milestone: data[i].data_milestone
            }
        }        
        data[i] = nodeInfo
    }
    return data
}


export const fetchroadmapdata = async ()=>{
    try {
        let { data, error, status } = await supabase
            .from("RoadmapNode")
            .select(`*`)
  
        if (error && status !== 406) {
            throw error;
        }
  
        if (data) {
            return convertSupabaseDataToNodeData(data);
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        // console.log(user);
    }
  };
