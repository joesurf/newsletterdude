import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VideocamIcon from '@mui/icons-material/Videocam';
import StoreIcon from '@mui/icons-material/Store';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import BookIcon from '@mui/icons-material/Book';

import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/material';


const TIMELINE_DATA = [
  {
    "date": "Before ",
    "title": "Just a student, a gamer, and a reader",
    "initial": "I was a rather good student, who had little social life and spend most of the time gaming or reading self-help books. I play some judo as well.",
    "outcome": "All this reading made me realise that I want to take the unconventional path - whether it is the right move or not, I'm not sure. But I have been influenced.",
    "icon": <BookIcon />
  },
  {
    "date": "April 2020",
    "title": "Investment",
    "initial": "I started my investment journey, with the goal of becoming a fund manager. I studied through books, applying what I've learnt by investing my own money and eventually got into NUS Investment Society.",
    "outcome": "I wanted to get rich, but investing takes way too long. I'll be old before there's money to spend and live. I decided to take the entrepreneurship route.",
    "icon": <AccountBalanceIcon />
  },
  {
    "date": "December 2021",
    "title": "YouTube Creator",
    "initial": "I saw someone succeed in making $10k on YouTube within 6 months. I thought I could do the same.",
    "outcome": "I completely failed on YouTube. I was super distracted, and I hated video editing. I kept procrastinating and my publishing schedule was terrible.",
    "icon": <YouTubeIcon />
  },
  {
    "date": "May 2022",
    "title": "The 100 Club - Mastermind Community",
    "initial": "I started a private founder community with a really capable and driven friend. We kept a tight schedule and constantly co-work to ensure everything went well.",
    "outcome": "The community was successful, with high feedback ratings and a positive cash flow. We got our first payment after 6 months, and went into BAU.",
    "icon": <PeopleIcon />
  },
  {
    "date": "May 2023",
    "title": "Mr Equation",
    "initial": "I started a newsletter blog with a focus on building timeless articles that provide guides on the eternal pillars, like wealth, health, and relationships.",
    "outcome": "I was very focused and wrote multiple articles daily. But I realised that it was more a passion than a business. There's no clear audience, and no monetisation strategy.",
    "icon": <ArticleIcon />
  },
  {
    "date": "June 2023",
    "title": "Big Data Stories",
    "initial": "I know content creation was the way for me. I couldn't do a business that has greater risk. Since I was not a fit for long-form content creation, I focused on shorts and published on multiple platforms.",
    "outcome": "There was some traction at the start. But again, I realised it was more a passion. The monetisation strategy was difficult to execute. I did this simultaneously with MrEquation, and made the same mistake. ",
    "icon": <VideocamIcon />
  },
  {
    "date": "July 2023",
    "title": "Notion Dude",
    "initial": "It's the start of something exciting. I gained some business sense from the previous experiences. And I finally applied what I was learning. A niche digital product store selling Notion templates, built from my passion of books, with a clear monetisation and market fit strategy.",
    "outcome": "The community was successful, with high feedback ratings and a positive cash flow. We got our first payment after 6 months, and went into BAU. ",
    "icon": <StoreIcon />
  },
  {
    "date": "August 2023",
    "title": "Joesurf",
    "initial": "I realised the importance of a personal brand. And I'm going on a sprint. The goal is 100k followers in 3 months. I want every business to be built about a core brand.",
    "outcome": "To be continued...",
    "icon": <SettingsAccessibilityIcon />
  }
]


export default function CustomizedTimeline() {
  const [checked, setChecked] = React.useState(true);
  const [list, setList] = React.useState([])

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setList(list.toReversed())
  };

  React.useEffect(() => {
    setList(TIMELINE_DATA);
  }, [])

  return (
    <Box>
      <Typography variant="h5" sx={{ width: "100%", margin: "auto", textAlign: "left", marginBottom: "12px", fontWeight: "bold" }}>
          AND{" "}
        <span style={{ color: "grey" }}> 
            MY{" "}
        </span>
        <span className="curve__underline">
            TIMELINE
        </span> 
      </Typography>
      <FormGroup>
        <FormControlLabel 
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />      
          } 
          label={checked ? <i>forward</i> : <i>backward</i>} 
        />
      </FormGroup>

    <Timeline position="alternate">
      {list.map((item, _) => {
        return (
          <TimelineItem key={_}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {item["date"]}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                {item["icon"]}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {item["title"]}
              </Typography>
              <Typography variant="body2">
                {item["initial"]}
              </Typography>
              <Typography variant="body2">
                {item["outcome"]}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
    </Box>
  );
}