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
        .typeString('Tools')
        .pauseFor(1000)
        .deleteChars(5)
        .typeString('Frameworks')
        .pauseFor(1000)
        .deleteChars(10)
        .typeString('Models')
        .pauseFor(1000)
        .deleteChars(6)
        .typeString('Books')
        .pauseFor(1000)
        .deleteChars(5)
        .typeString('Quotes')
        .pauseFor(1000)
        .start()
    }
    runTypewriter()
  }, [])

  return (
    <div>
        <h2>
          <span style={{ color: "grey" }}>Explore: </span>
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