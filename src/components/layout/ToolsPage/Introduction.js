import React, { useEffect } from 'react'
import { Divider, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect/dist/core';
import './Introduction.css'


function Introduction() {

  useEffect(() =>{
    const runTypewriter = () => {
      var intro__type = document.getElementById('intro__type');

      var typewriter = new Typewriter(intro__type, {
        cursor: "",
        loop: true    
      });
      
      typewriter
        .typeString('Email Platform')
        .pauseFor(1000)
        .deleteChars(14)
        .typeString('Team Management')
        .pauseFor(1000)
        .deleteChars(15)
        .typeString('Marketing')
        .pauseFor(1000)
        .deleteChars(9)
        .typeString('Sales')
        .pauseFor(1000)
        .deleteChars(5)
        .typeString('Automation')
        .pauseFor(1000)
        .start()
    }
    runTypewriter()
  }, [])

  return (
    <div>
        <Typography variant="h1" fontWeight="bold">
          <span style={{ color: "grey" }}>Explore: </span>
          <span id="intro__type" className="gradient__word"></span>
        </Typography>
        <Divider />
        <Typography variant="h4" marginTop="10px" marginBottom="10px">
          Tools accelerate our life and allow us to save time and focus on the 
          things that really matter. Find the software you need, based on your business 
          purpose.
        </Typography>
        
    </div>
  )
}

export default Introduction