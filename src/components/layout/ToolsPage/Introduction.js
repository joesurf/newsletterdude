import React, { useEffect } from 'react'
import { Divider } from '@mui/material'
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
        <h2>
          <span style={{ color: "grey" }}>Explore Tools: </span>
          <span id="intro__type"></span>
        </h2>
        <Divider />
        <p>
          Tools accelerate our life and allow us to save time and focus on the 
          things that really matter.
        </p>
        
    </div>
  )
}

export default Introduction