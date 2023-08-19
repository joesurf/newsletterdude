import React from 'react'
import { Divider } from '@mui/material'

function MapHeader() {
    return (
        <div>
            <h2 style={{ marginBottom: "5px" }}><span style={{ color: "grey" }}>Newsletter:</span> Roadmap</h2>
            <Divider />
            <p>
                A step-by-step roadmap to building your own newsletter, with 
                a comprehensive guide for each step in the form of an article. Click 
                and move around each step if you would like to try something else!
            </p>  
        </div>
    )
}

export default MapHeader