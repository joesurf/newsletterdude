"use client";

import Marquee from "react-fast-marquee";
import ArticleCard from "../../../UI/ArticleCard/ArticleCard";

import { Link } from "@mui/material";

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


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


export default function ArticleMarquee() {

  const articleInfo = [

    // Milestone 1
    { id: '1', type: 'roadmap', position: { x: 100, y: 250 }, data: { id: 'Step 1', icon: <PsychologyIcon />, description: "Define your goals", article_link: "https://blog.newsletterdude.com/define-your-goals/" } },
    { id: '2', type: 'roadmap', position: { x: 350, y: 100 }, data: { id: 'Step 2', icon: <PsychologyIcon />, description: "Find your expertise", article_link: "https://blog.newsletterdude.com/find-your-expertise/" } },
    { id: '4', type: 'roadmap', position: { x: 350, y: 250 }, data: { id: 'Step 4', icon: <PsychologyIcon />, description: "Determine your content", article_link: "https://blog.newsletterdude.com/craft-your-content-strategy-for-building-a-newsletter/" } },
    { id: '3', type: 'roadmap', position: { x: 350, y: 400 }, data: { id: 'Step 3', icon: <PeopleIcon />, description: "Identify your audience", article_link: "https://blog.newsletterdude.com/identify-your-audience/" } },
    { id: '5', type: 'roadmap', position: { x: 600, y: 100 }, data: { id: 'Step 5', icon: <BuildIcon />, description: "Understand the tech", article_link: "https://blog.newsletterdude.com/the-tech-stack-of-a-newsletter/" } },
    { id: '6', type: 'roadmap', position: { x: 600, y: 250 }, data: { id: 'Step 6', icon: <SportsScoreIcon />, description: "Draw the user journey", milestone: '1', article_link: "https://blog.newsletterdude.com/draw-the-user-journey/" } },

    // Milestone 2
    { id: '7', type: 'roadmap', position: { x: 850, y: 400 }, data: { id: 'Step 7', icon: <FunctionsIcon />, description: "Calculate market size", article_link: "https://blog.newsletterdude.com/market-size-understanding-the-potential-of-your-newsletter-business/" } },
    { id: '8', type: 'roadmap', position: { x: 850, y: 250 }, data: { id: 'Step 8', icon: <PeopleIcon />, description: "Conduct idea validation", article_link: "https://blog.newsletterdude.com/idea-validation-for-building-your-newsletter/" } },
    { id: '9', type: 'roadmap', position: { x: 850, y: 100 }, data: { id: 'Step 9', icon: <BuildIcon />, description: "Select your tools" } },
    { id: '10', type: 'roadmap', position: { x: 1100, y: 250 }, data: { id: 'Step 10', icon: <CreateIcon />, description: "Create first content", article_link: "https://blog.newsletterdude.com/your-first-content/" } },
    { id: '11', type: 'roadmap', position: { x: 1100, y: 100 }, data: { id: 'Step 11', icon: <BuildIcon />, description: "Build email automation", article_link: "https://blog.newsletterdude.com/setting-up-your-email-sequence-for-building-a-newsletter/" } },
    { id: '12', type: 'roadmap', position: { x: 1350, y: 250 }, data: { id: 'Step 12', icon: <SportsScoreIcon />, description: "The MVP Launch", milestone: '2', article_link: "https://blog.newsletterdude.com/the-mvp-minimum-viable-product-launch/" } },

    // Milestone 3
    { id: '13', type: 'roadmap', position: { x: 1600, y: 175 }, data: { id: 'Step 13', icon: <ChatBubbleIcon />, description: "Collect feedback", article_link: "https://blog.newsletterdude.com/get-feedback-from-potential-customers/" } },
    { id: '14', type: 'roadmap', position: { x: 1600, y: 325 }, data: { id: 'Step 14', icon: <ChatBubbleIcon />, description: "Gather testimonials", article_link: "https://blog.newsletterdude.com/get-testimonials-from-your-fans/" } },
    { id: '15', type: 'roadmap', position: { x: 1850, y: 250 }, data: { id: 'Step 15', icon: <AttachMoneyIcon />, description: "Pricing your newsletter", article_link: "https://blog.newsletterdude.com/pricing-your-newsletter/" } },
    { id: '16', type: 'roadmap', position: { x: 2100, y: 175 }, data: { id: 'Step 16', icon: <ShareIcon />, description: "Distribution channels", article_link: "https://blog.newsletterdude.com/distribution-channels/" } },
    { id: '17', type: 'roadmap', position: { x: 2100, y: 325 }, data: { id: 'Step 17', icon: <ShareIcon />, description: "Marketing channels", article_link: "https://blog.newsletterdude.com/marketing-your-newsletter-tips-for-building-an-engaged-audience/" } },
    { id: '18', type: 'roadmap', position: { x: 2350, y: 250 }, data: { id: 'Step 18', icon: <SportsScoreIcon />, description: "Getting first sale", milestone: '3', article_link: "https://blog.newsletterdude.com/making-your-first-sale/" } },

    // Repeat
    { id: '19', type: 'roadmap', position: { x: 1850, y: 100 }, data: { id: 'Optimisation', icon: <RepeatIcon />, description: "Improve and repeat", repeat: true } },
    { id: '20', type: 'roadmap', position: { x: 1850, y: 400 }, data: { id: 'Optimisation', icon: <RepeatIcon />, description: "Improve and repeat", repeat: true } },

    // Milestone 4
    { id: 'm4', type: 'roadmap', position: { x: 1075, y: 600 }, data: { id: 'Milestone 4', icon: <SportsScoreIcon />, description: "One to Hundred", milestone: '4' } },

    // Optimise content
    { id: '21', type: 'roadmap', position: { x: 650, y: 700 }, data: { id: 'Step 21', icon: <CreateIcon />, description: "Optimise your content", repeat: true } },
    { id: '22', type: 'roadmap', position: { x: 400, y: 850 }, data: { id: 'Step 22', icon: <CreateIcon />, description: "Text-related optimisation" } },
    { id: '23', type: 'roadmap', position: { x: 650, y: 850 }, data: { id: 'Step 23', icon: <CreateIcon />, description: "Non-text optimisation" } },
    { id: '24', type: 'roadmap', position: { x: 400, y: 1000 }, data: { id: 'Step 24', icon: <CreateIcon />, description: "Apply storytelling tactics" } },
    { id: '25', type: 'roadmap', position: { x: 400, y: 1150 }, data: { id: 'Step 25', icon: <CreateIcon />, description: "Concise editorial style" } },
    { id: '26', type: 'roadmap', position: { x: 400, y: 1300 }, data: { id: 'Step 26', icon: <CreateIcon />, description: "Attention grabbing hooks" } },
    { id: '27', type: 'roadmap', position: { x: 400, y: 1450 }, data: { id: 'Step 27', icon: <CreateIcon />, description: "Optimise preview text" } },
    { id: '28', type: 'roadmap', position: { x: 650, y: 1000 }, data: { id: 'Step 28', icon: <CreateIcon />, description: "Maximise visuals" } },
    { id: '29', type: 'roadmap', position: { x: 650, y: 1150 }, data: { id: 'Step 29', icon: <CreateIcon />, description: "Use interactive elements" } },
    { id: '30', type: 'roadmap', position: { x: 900, y: 850 }, data: { id: 'Step 30', icon: <CreateIcon />, description: "Content type ideas" } },
    { id: '31', type: 'roadmap', position: { x: 900, y: 1000 }, data: { id: 'Step 31', icon: <CreateIcon />, description: "Guest writers / experts" } },
    { id: '32', type: 'roadmap', position: { x: 900, y: 1150 }, data: { id: 'Step 32', icon: <CreateIcon />, description: "User generated content" } },
    { id: '33', type: 'roadmap', position: { x: 900, y: 1300 }, data: { id: 'Step 33', icon: <CreateIcon />, description: "Show case studies" } },

    // Analytics
    { id: '34', type: 'roadmap', position: { x: 1500, y: 700 }, data: { id: 'Step 34', icon: <EqualizerIcon />, description: "Setup analytics", repeat: true } },
    { id: '35', type: 'roadmap', position: { x: 1250, y: 850 }, data: { id: 'Step 35', icon: <EqualizerIcon />, description: "Web analytics" } },
    { id: '36', type: 'roadmap', position: { x: 1500, y: 850 }, data: { id: 'Step 36', icon: <EqualizerIcon />, description: "Email analytics" } },
    { id: '37', type: 'roadmap', position: { x: 1750, y: 850 }, data: { id: 'Step 37', icon: <EqualizerIcon />, description: "A/B testing" } },
];

  return (
    <div style={{ "position":"relative" }}>
      {["left", "right", "left"].map((direction, i) => {
        return (
          <Marquee key={i} direction={direction} sx={{"marginBottom":"0.1rem"}}>
            {shuffle(articleInfo).map((article, index) => {
              return (
                <div style={{"gridColumn":"span 9 / span 9","@media (minWidth: 1024px)":{"gridColumn":"span 3 / span 3"}}} key={index}>
                  <Link href={article.data.article_link} sx={{ textDecoration: "none" }}>
                    <ArticleCard title={article.data.description} icon={article.data.icon} />
                  </Link>
                </div>
              );
            })}
          </Marquee>
        )
      })}
    </div>
  );
}
